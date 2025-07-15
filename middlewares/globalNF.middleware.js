import { StatusCodes } from 'http-status-codes';

const globalNotFoundHandler = (_, res) => {
  res.status(StatusCodes.NOT_FOUND).send({
    status: 'error',
    message: 'صفحه یا منبعی که به دنبال آن هستید پیدا نشد 🫤',
  });
};

export default globalNotFoundHandler;
