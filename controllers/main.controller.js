import { v2 as cloudinary } from 'cloudinary';
import { StatusCodes as SC } from 'http-status-codes';

import { checkPassword, simpleHash } from '../utils/password.js';
import { PrismaClient, Prisma } from '../generated/prisma/client.js';
import convertToShamsi from '../client/src/utils/convertToShamsi.js';
import { formatImage } from '../middlewares/multer.middleware.js';
import { WEEK_INDEX } from '../utils/constants.js';

const prisma = new PrismaClient();

//! HELPER FUNCTION ALERT
// gets the date and number of appointments in the specified month
const getMonthlyAppointmentsFor = async (range) => {
  const now = new Date(Date.now());
  const rangeStart = new Date(now).setMonth(now.getMonth() - range);
  const rangeEnd = new Date(now).setMonth(now.getMonth() - (range - 1));

  const rangeStartInShamsi = convertToShamsi(new Date(rangeStart), 'MMMM YYYY');
  const appointmentsNumInRange = await prisma.appointment.count({
    where: {
      reservedAt: {
        gt: new Date(rangeStart),
        lte: new Date(rangeEnd),
      },
    },
  });

  return {
    month: rangeStartInShamsi,
    count: appointmentsNumInRange,
  };
};

const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(Date.now() + 5000),
    secure: process.env.NODE_ENV === 'development' ? false : true,
  });

  res
    .status(SC.OK)
    .send({ status: 'success', message: 'Logged out successfully.' });
};

const getLoggedUser = (req, res) => {
  delete req.body.user.password;
  res.status(SC.OK).send({ status: 'success', message: req.body.user });
};

const getDailySpecialties = async (req, res) => {
  const currDayOfWeek = WEEK_INDEX[new Date().getDay() + 1];
  const specialties = await prisma.specialty.findMany({
    include: { doctors: true },
    where: {
      AND: [
        {
          doctors: {
            every: {
              workingDays: {
                contains: currDayOfWeek,
              },
            },
          },
        },
        {
          doctors: {
            some: {},
          },
        },
      ],
    },
  });

  res.status(SC.OK).send({ status: 'success', message: specialties });
};

const getByPersonnelId = async (req, res) => {
  const { personnelId } = req.body;

  const staffMember = await prisma.staff.findUnique({
    where: { personnelId },
    select: { id: true },
  });

  res.status(SC.OK).send({ status: 'success', message: staffMember });
};

const updateSelf = async (req, res) => {
  const { user } = req.body;

  const role = user.role;
  const id = user.id;
  const password = user.password;
  delete req.body.user;

  // uploading user profile image in case that there is one
  if (req.file) {
    const imgFile = formatImage(req.file);
    const response = await cloudinary.uploader.upload(imgFile);
    req.body.avatar = response.secure_url;
    req.body.avatarPublicId = response.public_id;
  }

  // removing duplicate profile images for the same user in case that he/she changed their profile image
  if (req.file && tmpUser.avatarPublicId) {
    await cloudinary.uploader.destroy(tmpUser.avatarPublicId);
  }

  // hashing new password, if no password provided or if password is the same one as before we skip
  const newPassword =
    req.body?.password && !checkPassword(req.body.password, password)
      ? await simpleHash(req.body.password)
      : Prisma.skip;

  // update statement if user is an admin or user
  if (role === 'user' || role === 'admin') {
    await prisma.user.update({
      where: { id: id },
      data: { ...req.body, password: newPassword, role: Prisma.skip },
    });
  }

  // update statement if user is a staff member
  if (role === 'staff') {
    await prisma.staff.update({
      where: { id: id },
      data: { ...req.body, password: newPassword, role: Prisma.skip },
    });
  }

  res.status(SC.OK).send({
    status: 'success',
    message: 'اطلاعات حساب کاربری شما با موفقیت بروزرسانی شد.',
  });
};

const getAppStats = async (req, res) => {
  const APPOINTMENTS_REPORT_RANGE = 6; // last 6 months
  const appointmentsReport = [];
  const patientsCount = await prisma.user.count();
  const doctorsCount = await prisma.staff.count();
  const specialtiesCount = await prisma.specialty.count();

  for (let i = 1; i <= APPOINTMENTS_REPORT_RANGE; i++) {
    const monthlyAppointments = await getMonthlyAppointmentsFor(i);
    appointmentsReport.push(monthlyAppointments);
  }

  res.status(SC.OK).send({
    status: 'success',
    message: {
      patientsCount,
      doctorsCount,
      specialtiesCount,
      appointments: appointmentsReport,
    },
  });
};

const getStaffTimeline = async (req, res) => {
  const staffObj = await prisma.staff.findMany({
    include: { specialty: { select: { title: true } } },
    orderBy: { specialty: { title: 'asc' } },
    omit: {
      password: true,
      role: true,
      createdAt: true,
      gender: true,
      personnelEmail: true,
      personnelId: true,
      phoneNumber: true,
      specialtyId: true,
      avatarUrl: true,
      avatarPublicId: true,
    },
  });

  const staffData = staffObj.map((member) => {
    const workDaysArr = member.workingDays.split(',');
    const doctorSpecialty = member.specialty.title;
    delete member.specialty;

    return {
      ...member,
      fullName: `${member.name} ${member.lastName}`,
      prefix: 'دکتر',
      workingDays: workDaysArr,
      specialty: doctorSpecialty,
    };
  });

  res.status(SC.OK).send({ status: 'success', message: staffData });
};

export default {
  logoutUser,
  updateSelf,
  getLoggedUser,
  getDailySpecialties,
  getByPersonnelId,
  getAppStats,
  getStaffTimeline,
};
