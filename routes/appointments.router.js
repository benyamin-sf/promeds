import { Router } from 'express';

import controller from '../controllers/appointments.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';

const router = Router();

router
  .route('/')
  .post(validate(VO.APPOINTMENT), controller.createAppointment)
  .get(validate(VO.AUTHORIZE), controller.getAppointments);

router
  .get('/logged-user', controller.getUserAppointments)
  .get('/today-appointments', controller.getTodaysAppointments);

router
  .route('/:id')
  .get(validate(VO.ID), controller.getAppointment)
  .patch(validate(VO.ID), controller.updateAppointment)
  .delete(validate(VO.AUTHORIZE, VO.ID), controller.deleteAppointment);

export default router;
