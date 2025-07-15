import { Router } from 'express';

import controller from '../controllers/user.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';

const router = Router();

router
  .route('/')
  .post(validate(VO.AUTHORIZE), controller.createUser)
  .get(validate(VO.AUTHORIZE), controller.getUsers);

router
  .route('/:id')
  .get(validate(VO.AUTHORIZE, VO.ID), controller.getUser)
  .patch(validate(VO.AUTHORIZE, VO.ID), controller.updateUser)
  .delete(validate(VO.AUTHORIZE, VO.ID), controller.deleteUser);

export default router;
