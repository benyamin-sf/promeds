import { StatusCodes as SC } from 'http-status-codes';

import { PrismaClient } from '../generated/prisma/client.js';
import { BadRequestError } from '../utils/customErrors.js';
import { WEEK_INDEX } from '../utils/constants.js';
import translate from '../client/src/utils/langMapping.js';

const prisma = new PrismaClient();

const now = new Date(Date.now());
// needed for some timed based calculations
const today = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  0,
  0,
  0
);
const tomorrow = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1,
  0,
  0,
  0
);

const currWeekDay = WEEK_INDEX[now.getDay() + 1 > 6 ? 0 : now.getDay() + 1];

const createAppointment = async (req, res) => {
  const { body } = req;

  // every appointment submitted for today, that are not expired
  const todaysAppointment = await prisma.appointment.findFirst({
    include: { patient: true },
    where: {
      patient: { id: req.body.user.id },
      AND: [
        {
          date: {
            gte: today,
            lte: tomorrow,
          },
          expired: false,
        },
      ],
    },
  });

  if (todaysAppointment) {
    const { reservedAt, time } = todaysAppointment;
    const reservedTime = `${reservedAt.getHours()}:${reservedAt.getMinutes()}`;
    throw new BadRequestError(
      `شما امروز در ساعت ${reservedTime} برای ساعت ${time} وقت مراجعه رزرو نموده اید و تا فردا صبح نمیتوانید نوبت جدیدی بگیرید.`
    );
  }

  const [appointmentHour, appointmentMinutes] = body.time?.split(':');

  // creating a new Date object for request time and date
  const requestedDate = new Date(Date.now());
  requestedDate.setHours(appointmentHour);
  requestedDate.setMinutes(appointmentMinutes);

  const isReservedBeforeNow = requestedDate < now;

  if (isReservedBeforeNow) {
    throw new BadRequestError('ثبت نوبت برای ساعت درخواست شده ممکن نیست.');
  }

  const doctor = await prisma.staff.findUnique({
    omit: { password: true },
    where: {
      id: body.doctor,
      workingDays: { contains: currWeekDay },
    },
  });

  if (!doctor) {
    throw new BadRequestError(
      'پزشک یا متخصص مورد نظر شما امروز در مرکز حضور ندارند. برای اطلاع از جدول حضور کادر درمان امروز به پنل کاربری خودتان مراجعه بفرمایید.'
    );
  }

  const [doctorStarting, doctorEnding] = doctor.workingHours?.split('-');
  const [startingHour, startingMinute] = doctorStarting?.split(':');
  const [endingHour, endingMinute] = doctorEnding?.split(':');

  const isReservedBeforeDoctorStart =
    parseInt(startingHour) > parseInt(appointmentHour) ||
    (parseInt(startingHour) === parseInt(appointmentHour) &&
      parseInt(startingMinute) > parseInt(appointmentMinutes));
  if (isReservedBeforeDoctorStart) {
    throw new BadRequestError(
      `شما ساعت رزرو خودتان را قبل از زمان حضور پزشک مورد نظرتان (${doctorStarting}) تنظیم کرده اید. برای جلوگیری از اتلاف وقتتان، لطفا زمان دیگری را انتخاب فرمایید.`
    );
  }

  const isReservedAfterDoctorStart =
    parseInt(endingHour) < parseInt(appointmentHour) ||
    (parseInt(endingHour) === parseInt(appointmentHour) &&
      parseInt(endingMinute) < parseInt(appointmentMinutes));
  if (isReservedAfterDoctorStart) {
    throw new BadRequestError(
      `شما ساعت رزرو خودتان را بعد از زمان حضور پزشک مورد نظرتان (${doctorEnding}) تنظیم کرده اید. لطفا زمان دیگری را انتخاب فرمایید.`
    );
  }

  const appointedDoctor = await prisma.staff.findUnique({
    include: { specialty: true },
    where: { id: body.doctor },
  });

  const newAppointment = await prisma.appointment.create({
    include: { patient: true, reason: true, doctor: true },
    data: {
      time: body.time,
      date: body.date,
      patient: {
        connect: {
          id: body.user.id,
        },
      },
      reason: {
        connect: {
          title: appointedDoctor.specialty.title,
        },
      },
      doctor: {
        connect: {
          id: appointedDoctor.id,
        },
      },
    },
  });

  await prisma.staffLog.create({
    include: { sender: true, owner: true },
    data: {
      title: `نوبت ویزیت به درخواست ${body.user.name} ${body.user.lastName}`,
      message: `نوبت ویزیت پزشکی به درخواست ${
        body.user.gender === 'man' ? 'آقای' : 'خانم'
      } ${body.user.name} ${body.user.lastName} برای ساعت ${
        body.time
      } به ثبت رسیده است. لطفا در حدود همان زمان برای ویزیت و معاینه بیمارتان در مرکز تشریف داشته باشید. روز خوب و خوشی را برایتان آرزومند هستیم. - ادمین پرومدز`,
      isRead: false,
      sender: {
        connect: {
          id: 'cmcymsnrp0000kgxf0db0c9ev',
        },
      },
      owner: {
        connect: {
          id: doctor.id,
        },
      },
    },
  });

  await prisma.userLog.create({
    include: { owner: true },
    data: {
      title: `نوبت ویزیت پزشکیت رو فراموش نکنی`,
      message: `شما درخواست نوبت ملاقات با دکتر ${doctor.name} ${
        doctor.lastName
      } رو برای امروز ${translate(
        currWeekDay
      )} در ساعت ${now.getHours()}:${now.getMinutes()} داشتید. فقط خواستیم بهت یادآوری کنیم که یه وقت فراموش نکنی و قرار معاینه ت رو از دست ندی. حتما حتما سعی داشته باش که نیم ساعت یا حداقل یک ربع قبل از زمانی که انتخاب کردی توی مرکز حاضر باشی و در ضمن یادت نره که مدارک شناسایی معتبر مثل کارت ملی رو هم همراه خودت داشته باشی. باز هم خوشحالیم از اینکه به پرومدز اعتماد کردی، امیدوار هستیم که هرچه زودتر بهتر بشی و بهترین ها رو واست آرزو میکنیم... -ادمین پرومدز`,
      isRead: false,
      owner: {
        connect: {
          id: body.user.id,
        },
      },
    },
  });

  res.status(SC.CREATED).send({
    status: 'success',
    message: `نوبت ویزیت شما برای ساعت ${newAppointment.time} ثبت شد.`,
  });
};

const getAppointments = async (req, res) => {
  const specialties = await prisma.appointment.findMany({
    omit: { reasonId: true, doctorId: true, patientId: true },
    include: {
      patient: {
        select: {
          id: true,
          name: true,
          lastName: true,
          email: true,
          phoneNumber: true,
        },
      },
      doctor: {
        select: {
          id: true,
          name: true,
          lastName: true,
          personnelId: true,
        },
      },
      reason: {
        select: {
          id: true,
          title: true,
          avgVisitTime: true,
        },
      },
    },
  });

  res.status(SC.OK).send({ status: 'success', message: specialties });
};

const getAppointment = async (req, res) => {
  res.status(SC.OK).send({ status: 'success', message: req.body?.resource });
};

const updateAppointment = async (req, res) => {
  await prisma.appointment.update({
    where: { id: req.params.id },
    data: { expired: true },
  });

  res.status(SC.OK).send({
    status: 'success',
    message: 'Appointment was updated successfully!',
  });
};

const deleteAppointment = async (req, res) => {
  await prisma.appointment.delete({
    where: { id: req.params?.id },
  });

  res.sendStatus(SC.NO_CONTENT);
};

const getUserAppointments = async (req, res) => {
  const { user } = req.body;
  let userAppointments = [];
  let appointmentsCount = 0;

  const currentPage = Math.abs(parseInt(req?.query?.page)) || 1;
  const itemsPerPage = 10;

  let sharedWhereClause =
    user.role === 'staff' ? { doctorId: user.id } : { patientId: user.id };

  if (req?.query?.search && req.query.search.length > 2) {
    const sharedSearchQuery = {
      lastName: { contains: req.query.search },
    };

    sharedWhereClause =
      user.role === 'staff'
        ? {
            ...sharedWhereClause,
            patient: sharedSearchQuery,
          }
        : {
            ...sharedWhereClause,
            doctor: sharedSearchQuery,
          };
  }

  if (req?.query?.field && req.query.field !== 'all') {
    sharedWhereClause = {
      ...sharedWhereClause,
      reason: {
        title: req.query.field,
      },
    };
  }

  if (req?.query?.gender && req.query.gender !== 'all') {
    sharedWhereClause = {
      ...sharedWhereClause,
      doctor: {
        gender: req.query.gender,
      },
    };
  }

  if (req?.query?.expired && req.query.expired !== 'all') {
    const isExpired = req.query.expired === 'expired';
    sharedWhereClause = {
      ...sharedWhereClause,
      expired: isExpired,
    };
  }

  let orderByObj = {};
  if (req?.query?.sortBy && req.query.sortBy !== 'none') {
    if (req.query.sortBy === 'oldest') {
      orderByObj = { date: 'desc' };
    }
    if (req.query.sortBy === 'latest') {
      orderByObj = { date: 'asc' };
    }
    if (req.query.sortBy === 'a-z') {
      orderByObj = { doctor: { lastName: 'desc' } };
    }
    if (req.query.sortBy === 'z-a') {
      orderByObj = { doctor: { lastName: 'asc' } };
    }
  }

  [userAppointments, appointmentsCount] = await prisma.$transaction([
    prisma.appointment.findMany({
      orderBy: orderByObj,
      include: { patient: true, reason: true, doctor: true },
      where: sharedWhereClause,
      take: itemsPerPage,
      skip: (currentPage - 1) * itemsPerPage,
    }),
    prisma.appointment.count({
      where: sharedWhereClause,
    }),
  ]);

  res.status(SC.OK).send({
    status: 'success',
    message: {
      appointments: userAppointments,
      count: appointmentsCount,
      numberOfPages: Math.ceil(appointmentsCount / itemsPerPage) || 1,
      currentPage,
    },
  });
};

const getTodaysAppointments = async (req, res) => {
  const todaysAppointment = await prisma.appointment.findMany({
    where: {
      AND: [
        {
          date: {
            gte: today,
            lte: tomorrow,
          },
          expired: false,
        },
      ],
    },
  });

  res
    .status(SC.OK)
    .send({ status: 'success', message: todaysAppointment || [] });
};

export default {
  createAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  deleteAppointment,
  getUserAppointments,
  getTodaysAppointments,
};
