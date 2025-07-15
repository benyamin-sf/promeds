import { StatusCodes } from 'http-status-codes';

import { PrismaClient } from '../generated/prisma/client.js';
import { createJWT } from '../utils/JWT.js';

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  const numberOfUsers = await prisma.user.count();

  await prisma.user.create({
    include: { messages: true },
    data: {
      ...req.body,
      password: req.password,
      role: numberOfUsers > 0 ? 'user' : 'admin',
      avatarUrl: null,
      avatarPublicId: null,
      messages: {
        create: [
          {
            title: 'به وب اپلیکیشن پرومدز خوش آمدید 🚀',
            message: `${req.body.name} عزیز، خیلی خوشحالیم که شما را در جمع کاربران پرومدز می‌بینیم. اینجا همه چیز برای سلامتی و راحتی شما طراحی شده است! از نوبت‌دهی آنلاین گرفته تا مشاوره با بهترین پزشکان، پیگیری نسخه‌های الکترونیکی و حتی یادآوری ویزیت‌ها—همه در یک پلتفرم ساده و کاربردی گردآوری شده‌اند. تیم پرومدز همواره تلاش می‌کند تا با ارائه خدمات سریع، دقیق و به‌روز، تجربه‌ای بینظیر از مراقبت‌های درمانی را برای شما رقم بزند. هر زمان که نیاز به راهنمایی داشتید، پشتیبان‌های ما آماده پاسخگویی هستند. -ادمین پرومدز`,
          },
        ],
      },
    },
  });

  res
    .status(201)
    .send({ status: 'success', message: 'User created successfully!' });
};

const loginUser = async (req, res) => {
  const { user } = req.body;

  const token = createJWT({ id: user.id, role: user.role });

  const expiryInDays = parseInt(process.env.JWT_EXPIRES_IN);
  const cookieExpiryInMS = expiryInDays * 24 * 60 * 60 * 1000;

  res.cookie('jwt', token, {
    httpOnly: true,
    expires: new Date(Date.now() + cookieExpiryInMS),
    secure: process.env.NODE_ENV === 'development' ? false : true,
  });

  res.status(StatusCodes.OK).send({
    status: 'success',
    message: `${
      user.name.endsWith('ا') ? `${user.name}ی` : user.name
    } عزیز، خوش آمدید 🤗`,
  });
};

export default { loginUser, registerUser };
