import { Router } from 'express';

import userController from '../controllers/userAuth.controller.js';
import staffController from '../controllers/staffAuth.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';

const router = Router();

router
  .post('/login', validate(VO.USER_LOGIN), userController.loginUser)
  .post('/register', validate(VO.USER_REGISTER), userController.registerUser)
  .post('/staff/login', validate(VO.STAFF_LOGIN), staffController.login);

export default router;
