import { StatusCodes } from 'http-status-codes';

import { createJWT } from '../utils/JWT.js';

const login = async (req, res) => {
  const { user } = req.body;

  const token = createJWT({ id: user.id, role: user.role });

  const cookieExpiryInMS = 1 * 24 * 60 * 60 * 1000;

  res.cookie('jwt', token, {
    httpOnly: true,
    expires: new Date(Date.now() + cookieExpiryInMS),
    secure: process.env.NODE_ENV === 'development' ? false : true,
  });

  res.status(StatusCodes.OK).send({
    status: 'success',
    message: `همکار گرامی، به پنل کاربری خودتان خوش آمدید!`,
  });
};

export default { login };
