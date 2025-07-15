import { StatusCodes as SC } from 'http-status-codes';
import { PrismaClient } from '../generated/prisma/client.js';

import { getVisitTime } from '../utils/constants.js';
import { UnauthorizedError } from '../utils/customErrors.js';
import { checkPassword, simpleHash } from '../utils/password.js';

const prisma = new PrismaClient();

const createStaff = async (req, res) => {
  const { body } = req;

  const senderId = body.user.id;
  const specialtyTitle = body.specialty;

  delete body.specialty;
  delete body.user;

  await prisma.staff.create({
    include: {
      specialty: true,
      messages: true,
    },
    data: {
      ...body,
      password: req.password,
      workingDays: body.workingDays.join(','),
      specialty: {
        connectOrCreate: {
          where: { title: specialtyTitle },
          create: {
            title: specialtyTitle,
            avgVisitTime: getVisitTime(specialtyTitle),
          },
        },
      },
      messages: {
        create: [
          {
            title: 'به خانواده بزرگ پرومدز خوش آمدید',
            message:
              'سلام همکار گرامی! ورود شما را به موسسه خدمات درمانی و پزشکی پرومدز به عنوان دوست و همکار خود ارج می نهیم و آرزوی موفقیت و رشد برای شما و تمامی همکاران عزیزمان در خانواده بزرگ پرمدز را دارا هستیم. بودن و کار کردن و ارائه خدمت به بیماران در کنار شما عزیزان افتخار ماست. به امید فردایی هایی بهتر... -ادمین پرومدز',
            sender: {
              connect: { id: senderId },
            },
          },
          {
            title: 'یک نکته!',
            message:
              'هر زمانی که یکی از کاربران ما در سامانه، در همان روز (روزهایی که شما اعلام حضور در مؤسسه کرده اید.) نوبت برای ویزیت شدن توسط شما را رزرو و تأیید کند، یک پیام برای شما ارسال میکنیم تا از زمان نوبت ملاقات و نام بیمارتان مطلع شوید. -ادمین پرومدز',
            sender: {
              connect: { id: senderId },
            },
          },
        ],
      },
    },
  });

  await res
    .status(SC.CREATED)
    .send({ status: 'success', message: 'حساب کاربری جدید ایجاد شد.' });
};

const getStaff = async (req, res) => {
  let staff = [];
  let staffCount = 0;
  let menCount = 0;
  let womenCount = 0;

  const currentPage = Math.abs(parseInt(req?.query?.page)) || 1;
  const itemsPerPage = 10;

  [staff, staffCount, menCount, womenCount] = await prisma.$transaction([
    prisma.staff.findMany({
      orderBy: { lastName: 'desc' },
      omit: { password: true },
      take: itemsPerPage,
      skip: (currentPage - 1) * itemsPerPage,
    }),
    prisma.staff.count(),
    prisma.staff.count({ where: { gender: 'man' } }),
    prisma.staff.count({ where: { gender: 'woman' } }),
  ]);

  res.status(SC.OK).send({
    status: 'success',
    message: {
      staff,
      count: staffCount,
      numberOfPages: Math.ceil(staffCount / itemsPerPage) || 1,
      currentPage,
      menCount,
      womenCount,
    },
  });
};

const getStaffMember = async (req, res) => {
  delete req.body.resource.password;
  res.status(SC.OK).send({ status: 'success', message: req.body.resource });
};

const updateStaff = async (req, res) => {
  const { params, body } = req;

  if (body?.user?.id !== params.id && body.user.role !== 'admin') {
    throw new UnauthorizedError(
      "You do not have the permission to modify other personnel's resources."
    );
  }

  const specialtyTitle = body.specialty;
  const newPassword =
    body?.password && !checkPassword(body.password, body.user.password)
      ? await simpleHash(body.password)
      : body.user.password;

  delete body.specialty;
  delete body.resource;
  delete body.user;

  const newReqBody = {
    ...body,
    workingDays: body.workingDays.join(','),
    password: newPassword,
    role: 'staff',
    specialty: {
      connectOrCreate: {
        where: { title: specialtyTitle },
        create: {
          title: specialtyTitle,
          avgVisitTime: getVisitTime(specialtyTitle),
        },
      },
    },
  };

  await prisma.staff.update({
    where: { id: params.id },
    include: { specialty: true },
    data: newReqBody,
  });

  res.status(SC.OK).send({
    status: 'success',
    message: 'Staff member info was successfully updated!',
  });
};

const deleteStaff = async (req, res) => {
  await prisma.staff.delete({ where: { id: req.params.id } });
  res.sendStatus(SC.NO_CONTENT);
};

export default {
  createStaff,
  getStaff,
  getStaffMember,
  updateStaff,
  deleteStaff,
};
