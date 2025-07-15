import { StatusCodes } from 'http-status-codes';

const globalErrorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(err?.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).send({
    status: err?.isExternal ? 'error' : 'failed',
    message: err?.isExternal
      ? err.message
      : 'از طرف ما مشکلی پیش آمده و مهندسین ما در حال برطرف کردن آن هستند. از صبر و تحمل شما سپاس گزاریم...',
  });
};

export default globalErrorHandler;
