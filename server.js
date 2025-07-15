import 'express-async-errors';
import 'dotenv/config';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { v2 as cloudinary } from 'cloudinary';

// Routers
import mainRouter from './routes/main.router.js';
import authRouter from './routes/auth.router.js';
import logsRouter from './routes/logs.router.js';
import usersRouter from './routes/user.router.js';
import staffRouter from './routes/staff.router.js';
import specialtyRouter from './routes/specialty.router.js';
import appointmentsRouter from './routes/appointments.router.js';
// Middlewares
import globalErrorHandler from './middlewares/globalEH.middleware.js';
import globalNotFoundHandler from './middlewares/globalNF.middleware.js';
import {
  validate,
  validationOptions as VO,
} from './middlewares/validation.middleware.js';

const app = express();
const PORT = process.env?.PORT || 5100;
const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app
  .use(express.static(resolve(__dirname, './client', 'dist')))
  .use(express.json())
  .use(cookieParser())
  .use(helmet())
  .use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
      message: {
        status: 'error',
        message: 'Request rate-limit exceeded, retry in 15 minutes!',
      },
    })
  );

app
  .use('/api/v1', mainRouter)
  .use('/api/v1/auth', authRouter)
  .use('/api/v1/logs', validate(VO.AUTHENTICATE), logsRouter)
  .use('/api/v1/users', validate(VO.AUTHENTICATE, VO.LIMIT_STAFF), usersRouter)
  .use('/api/v1/staff', validate(VO.AUTHENTICATE, VO.LIMIT_USERS), staffRouter)
  .use('/api/v1/appointments', validate(VO.AUTHENTICATE), appointmentsRouter)
  .use(
    '/api/v1/specs',
    validate(VO.AUTHENTICATE, VO.AUTHORIZE),
    specialtyRouter
  );

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './client', 'dist', 'index.html'));
});

app.use('*', globalNotFoundHandler).use(globalErrorHandler);

app.listen(PORT, 'localhost', async () => {
  console.log(`:: Server running on port ${PORT}... 🚀`);
});
