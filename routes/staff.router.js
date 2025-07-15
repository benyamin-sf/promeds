import { Router } from 'express';

import controller from '../controllers/staff.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';

const router = Router();

router
  .route('/')
  .post(validate(VO.AUTHORIZE, VO.STAFF_REGISTER), controller.createStaff)
  .get(validate(VO.AUTHORIZE), controller.getStaff);

router
  .route('/:id')
  .get(validate(VO.AUTHORIZE, VO.ID), controller.getStaffMember)
  .put(validate(VO.ID, VO.STAFF_REGISTER), controller.updateStaff)
  .delete(validate(VO.AUTHORIZE, VO.ID), controller.deleteStaff);

export default router;
