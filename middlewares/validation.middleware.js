import { PrismaClient } from '../generated/prisma/client.js';
import { body, param, cookie, validationResult } from 'express-validator';

import {
  NotFoundError,
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from '../utils/customErrors.js';
import { verifyJWT } from '../utils/JWT.js';
import { hashPassword, checkPassword } from '../utils/password.js';
import { GENDER, SPECIALTIES } from '../utils/constants.js';

const prisma = new PrismaClient();

class RequestValidator {
  static validationOptions = {
    ID: 'ID',
    USER_LOGIN: 'USER_LOGIN',
    USER_REGISTER: 'USER_REGISTER',
    STAFF_LOGIN: 'STAFF_LOGIN',
    STAFF_REGISTER: 'STAFF_REGISTER',
    AUTHENTICATE: 'AUTHENTICATE',
    LIMIT_STAFF: 'LIMIT_STAFF',
    LIMIT_USERS: 'LIMIT_USERS',
    AUTHORIZE: 'AUTHORIZE',
    SPECIALTY: 'SPECIALTY',
    APPOINTMENT: 'APPOINTMENT',
  };

  validateRequest(options) {
    const validations = options.map((option) => {
      return this.#getValidationInstances(option);
    });

    return [
      ...validations,
      (req, res, next) => {
        const errorsArray = validationResult(req).array();
        const errorMsgs = errorsArray.map((err) => err.msg);
        const errorLocations = errorsArray.map((err) => err.location);
        const errorPaths = errorsArray.map((err) => err.path);

        if (!validationResult(req).isEmpty()) {
          const errorMsg = errorMsgs.join(', ').concat('.');

          if (errorLocations.includes('cookies')) {
            throw new UnauthenticatedError(
              'شما اجازه دسترسی به این مسیرها را ندارید، لطفا ابتدا وارد حساب کاربری خودتان بشوید.'
            );
          }

          if (errorPaths.includes('user')) {
            const firstErr = errorsArray.at(0);
            throw new UnauthorizedError(firstErr.msg);
          }

          if (errorMsg.includes('هیچ چیزی در سیستم')) {
            const firstErr = errorsArray.at(0);
            if (firstErr.path === 'id') throw new NotFoundError(firstErr.msg);
          }

          throw new BadRequestError(errorMsg);
        }

        next();
      },
    ];
  }

  #getValidationInstances(option) {
    const {
      ID,
      USER_LOGIN,
      STAFF_LOGIN,
      USER_REGISTER,
      STAFF_REGISTER,
      AUTHENTICATE,
      LIMIT_STAFF,
      LIMIT_USERS,
      AUTHORIZE,
      SPECIALTY,
      APPOINTMENT,
    } = RequestValidator.validationOptions;

    switch (option) {
      case AUTHENTICATE: {
        return [
          cookie('jwt')
            .notEmpty()
            .withMessage(
              'لطفا ابتدا وارد حساب کاربری خودتان شوید و مجددا تلاش فرمایید.'
            )
            .custom(async (jwt, { req }) => {
              const data = verifyJWT(jwt);

              let user = null;
              const selectObj = {
                where: { id: data?.id },
              };

              if (data?.role === 'staff') {
                user = await prisma.staff.findUnique(selectObj);
              } else if (data?.role === 'user' || data?.role === 'admin') {
                user = await prisma.user.findUnique(selectObj);
              }

              if (!user) {
                throw new UnauthenticatedError(
                  'لطفا ابتدا وارد حساب کاربری خودتان شوید و مجددا تلاش فرمایید.'
                );
              }

              req.body.user = user;
              return true;
            }),
        ];
      }

      case AUTHORIZE: {
        return [
          body('user').custom((user) => {
            if (user.role !== 'admin') {
              throw new UnauthorizedError(
                'فقط مدیران سایت اجازه دسترسی به این قسمت را دارند'
              );
            }

            return true;
          }),
        ];
      }

      case LIMIT_USERS: {
        return [
          body('user').custom((user) => {
            if (user.role !== 'admin' && user.role !== 'staff') {
              throw new UnauthorizedError(
                'فقط مدیران سایت و کادر درمان پرومدز اجازه دسترسی به این مسیر را دارند.'
              );
            }

            return true;
          }),
        ];
      }

      case LIMIT_STAFF: {
        return [
          body('user').custom((user) => {
            if (user.role !== 'admin' && user.role !== 'user') {
              throw new UnauthorizedError(
                'فقط مدیران سایت و کاربران عادی اجازه دسترسی به این مسیر را دارند.'
              );
            }

            return true;
          }),
        ];
      }

      case ID: {
        return [
          param('id')
            .isString()
            .withMessage(
              'هیچ شماره شناسایی پیدا نشده و یا شماره شناسایی ارسالی معتبر نمیباشد'
            )
            .custom(async (id, { req }) => {
              let requestedValue = null;
              const resource = req.baseUrl.split('/').at(-1);

              if (resource === 'staff') {
                requestedValue = await prisma.staff.findUnique({
                  where: { id },
                  omit: { password: true },
                });
              } else if (resource === 'users') {
                requestedValue = await prisma.user.findUnique({
                  where: { id },
                  omit: { password: true },
                });
              } else if (resource === 'specs') {
                requestedValue = await prisma.specialty.findUnique({
                  include: {
                    doctors: {
                      select: {
                        id: true,
                        name: true,
                        lastName: true,
                        personnelId: true,
                      },
                    },
                  },
                  where: { id },
                });
              } else if (resource === 'appointments') {
                requestedValue = await prisma.appointment.findUnique({
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
                  where: { id },
                });
              } else if (resource === 'logs') {
                if (req.body.user.role === 'staff') {
                  requestedValue = await prisma.staffLog.findUnique({
                    where: { id },
                  });
                } else {
                  requestedValue = await prisma.userLog.findUnique({
                    where: { id },
                  });
                }
              }

              if (!requestedValue) {
                throw new BadRequestError(
                  `هیچ چیزی در سیستم با شماره شناسایی '${id} پیدا نشد'`
                );
              }

              req.body.resource = requestedValue;
              return true;
            }),
        ];
      }

      case USER_LOGIN: {
        return [
          body('email')
            .trim()
            .notEmpty()
            .withMessage('آدرس ایمیل لازم است و نمیتواند خالی باشد')
            .isEmail()
            .withMessage('شکل یا فرمت ایمیل وارد شده صحیح نمیباشد'),
          body('password')
            .trim()
            .notEmpty()
            .withMessage('لطفا رمز عبور را وارد نمایید')
            .custom(async (password, { req }) => {
              const user = await prisma.user.findUnique({
                where: {
                  email: req?.body?.email,
                },
              });

              const isMatched = await checkPassword(
                password,
                user?.password || ''
              );

              if (!user || !isMatched) {
                throw new UnauthenticatedError('اطلاعات وارد شده صحیح نمیباشد');
              }

              req.body.user = user;
            }),
        ];
      }

      case USER_REGISTER: {
        return [
          body('name')
            .trim()
            .notEmpty()
            .withMessage('نام لازم است و نمیتواند خالی باشد')
            .isLength({ min: 3, max: 50 })
            .withMessage('نام بایستی بیشتر از ۳ حرف و کمتر از ۵۰ حرف باشد'),
          body('lastName')
            .trim()
            .notEmpty()
            .withMessage('نام خانوادگی لازم است و نمیتواند خالی باشد')
            .isLength({ min: 3, max: 50 })
            .withMessage(
              'نام خانوادگی بایستی بیشتر از ۳ حرف و کمتر از ۵۰ حرف باشد'
            ),
          body('email')
            .trim()
            .notEmpty()
            .withMessage('آدرس ایمیل لازم است و نمیتواند خالی باشد')
            .isEmail()
            .withMessage("Provided 'Email address' is not valid")
            .custom(async (email, { req }) => {
              const user = await prisma.user.findFirst({
                where: { email },
              });
              if (user && req.method === 'POST') {
                throw new BadRequestError(
                  'ایمیل وارد شده قبلا در سیستم ثبت شده و وجود دارد'
                );
              }
              return true;
            }),
          body('password')
            .trim()
            .notEmpty()
            .withMessage('رمز عبور لازم است و نمیتواند خالی باشد')
            .isLength({ min: 8 })
            .withMessage('تعداد حروف رمز عبور بایستی بیشتر از ۸ حرف باشد')
            .isStrongPassword()
            .withMessage(
              'رمز عبور انتخاب شده ضعیف است. رمز عبور مناسب بایستی دارای حداقل ۸ حرف انگلیسی (حروف کوچک و بزرگ) و دارای نمادها (?!@#) باشد'
            )
            .custom(hashPassword),
          body('gender')
            .trim()
            .notEmpty()
            .withMessage('انتخاب جنسیت کاربر لازم است و نمیتواند خالی باشد')
            .isIn(Object.values(GENDER))
            .withMessage(
              `جنسیت تنها باید یکی از گزینه های ${Object.values(GENDER).join(
                ', '
              )} باشد`
            ),
          body('location')
            .trim()
            .notEmpty()
            .withMessage('شهر محل سکونت لازم است و نمیتواند خالی باشد'),
          body('phoneNumber')
            .trim()
            .isMobilePhone('fa-IR')
            .withMessage(
              'شماره همراه بایستی یک شماره سیم کارت از اپراتورهای داخل کشور باشد'
            ),
        ];
      }

      case STAFF_LOGIN: {
        return [
          body('personnelEmail')
            .trim()
            .notEmpty()
            .withMessage('ایمیل پرسنلی ضروری است و نمیتواند خالی باشد')
            .isEmail()
            .withMessage('ایمیل پرسنلی وارد شده صحیح نمیباشد'),
          body('personnelId')
            .trim()
            .notEmpty()
            .withMessage('شماره پرسنلی نمیتواند خالی باشد')
            .isLength({ min: 6 })
            .matches(/PM[0-9]+/)
            .bail({ level: 'request' })
            .withMessage('فرم یا تعداد شماره های کد پرسنلی اشتباه است'),
          body('password')
            .trim()
            .notEmpty()
            .withMessage("'رمز عبور' نمیتواند خالی باشد")
            .custom(async (password, { req }) => {
              const user = await prisma.staff.findUnique({
                where: {
                  personnelEmail: req?.body?.personnelEmail,
                  AND: {
                    personnelId: req?.body?.personnelId,
                  },
                },
              });

              const isMatched = await checkPassword(
                password,
                user?.password || ''
              );

              if (!user || !isMatched) {
                throw new UnauthenticatedError('اطلاعات وارد شده صحیح نمیباشد');
              }

              req.body.user = user;
              return true;
            }),
        ];
      }

      case STAFF_REGISTER: {
        return [
          body('name')
            .trim()
            .notEmpty()
            .withMessage("'نام لازم است و نمیتواند خالی باشد")
            .isLength({ min: 3, max: 50 })
            .withMessage('نام بایستی بیشتر از ۳ حرف و کمتر از ۵۰ حرف باشد.'),
          body('lastName')
            .trim()
            .notEmpty()
            .withMessage("'نام خانوادگی لازم است و نمیتواند خالی باشد")
            .isLength({ min: 3, max: 50 })
            .withMessage(
              'نام خانوادگی بایستی بیشتر از ۳ حرف و کمتر از ۵۰ حرف باشد.'
            ),
          body('personnelId')
            .trim()
            .notEmpty()
            .withMessage('شماره پرسنلی لازم است و نمیتواند خالی باشد')
            .isLength({ min: 6 })
            .matches(/PM[0-9]+/)
            .bail()
            .withMessage(
              'شکل و فرمت شماره پرسنلی صحیح نیست، لطفا مجددا آن را بررسی کنید'
            ),
          body('personnelEmail')
            .trim()
            .notEmpty()
            .withMessage("'آدرس ایمیل پرسنلی لازم است و نمیتواند خالی باشد")
            .isEmail()
            .withMessage(
              'شکل و فرمت آدرس ایمیل پرسنلی صحیح نیست، لطفا مجددا آن را بررسی کنید'
            )
            .custom(async (email, { req }) => {
              const user = await prisma.staff.findUnique({
                where: { personnelEmail: email },
              });
              if (user && req.method === 'POST') {
                throw new BadRequestError(
                  'ایمیل وارد شده قبلا در سیستم ثبت شده و وجود دارد'
                );
              }
              return true;
            }),
          body('password')
            .trim()
            .notEmpty()
            .withMessage('رمز عبور لازم است و نمیتواند خالی باشد')
            .isLength({ min: 8, max: 50 })
            .withMessage("'تعداد حروف رمز عبور بایستی بیشتر از ۸ حرف باشد")
            .isStrongPassword()
            .withMessage(
              'رمز عبور انتخاب شده ضعیف است. رمز عبور مناسب بایستی دارای حداقل ۸ حرف انگلیسی (حروف کوچک و بزرگ) و دارای نمادها (?!@#) باشد'
            )
            .custom(hashPassword),
          body('gender')
            .trim()
            .isIn(Object.values(GENDER))
            .withMessage(
              `جنسیت تنها باید یکی از گزینه های ${Object.values(GENDER).join(
                ', '
              )} باشد`
            ),
          body('phoneNumber')
            .trim()
            .isMobilePhone('fa-IR')
            .withMessage(
              'شماره همراه بایستی یک شماره سیم کارت از اپراتورهای داخل کشور باشد'
            ),
          body('workingHours')
            .trim()
            .notEmpty()
            .withMessage(
              'لطفا ساعات کاری نیروی جدید را در قالب [hh:mm-hh:mm] تعیین بفرمایید.'
            )
            // .matches(/[0-9]*[0-9]:[0-9]*[0-9]-[0-9]*[0-9]:[0-9]*[0-9]/)
            .matches(
              /^(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9])-(([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9])$/
            )
            .withMessage(
              'شکل و فرمت ساعات کاری وارد شده صحیح نیست و باید به صورت [hh:mm-hh:mm] باشد. دقت کنید که اعداد ساعات و دقیقه ها حتما انگلیسی باشد'
            ),
          body('workingDays')
            .exists()
            .notEmpty()
            .withMessage(
              'روز های کاری نیروی جدید در هفته بایستی در قالب [sunday,monday,wednesday] باشد'
            ),
          body('specialty')
            .trim()
            .notEmpty()
            .isString()
            .withMessage('تخصص نیروی جدید کادر درمان را وارد کنید')
            .isIn(Object.values(SPECIALTIES))
            .withMessage(
              `تخصص نیرو ها نتها میتواند یکی از موارد ثبت شده در سامانه شامل: ${Object.values(
                SPECIALTIES
              ).join(',')} باشد`
            ),
        ];
      }

      case SPECIALTY: {
        return [
          body('title')
            .trim()
            .notEmpty()
            .withMessage('تخصص پزشکی جدید نمیتواند بدون عنوان مناسب باشد')
            .isIn(Object.values(SPECIALTIES))
            .withMessage(
              `تخصص پزشک تنها میتواند یکی از موارد ثبت شده در سامانه شامل: ${Object.values(
                SPECIALTIES
              ).join(', ')} باشد.`
            ),
          body('avgVisitTime')
            .exists()
            .trim()
            .isInt({ allow_leading_zeroes: false, max: 60 })
            .withMessage(
              'میانگین زمان ویزیت توسط پزشک دارای این تخصص بایستی یک عدد باشد (دقیقه) و حداکثر آن ۶۰ دقیقه میباشد.'
            ),
        ];
      }

      case APPOINTMENT: {
        return [
          body('doctor')
            .exists()
            .notEmpty()
            .withMessage(
              'شماره شناسایی پزشک معالج برای ثبت درخواست وقت معاینه ضروری است'
            ),
          body('date').default(new Date()),
          body('time')
            .exists()
            .notEmpty()
            .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
            .withMessage(
              'مدت زمان نوبت معاینه بایستی در قالب [hh:mm]-[hh:mm] باشد'
            ),
        ];
      }
    }
  }
}

export const validationOptions = RequestValidator.validationOptions;

export const validate = (...options) => {
  const validator = new RequestValidator();
  return validator.validateRequest(options);
};
