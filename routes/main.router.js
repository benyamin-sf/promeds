import { Router } from 'express';

import controller from '../controllers/main.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';
import upload from '../middlewares/multer.middleware.js';

const router = Router();

router
  .get('/logout', validate(VO.AUTHENTICATE), controller.logoutUser)
  .get('/logged-user', validate(VO.AUTHENTICATE), controller.getLoggedUser)
  .get(
    '/staff-timeline',
    validate(VO.AUTHENTICATE),
    controller.getStaffTimeline
  )
  .get(
    '/get-daily-specialties',
    validate(VO.AUTHENTICATE),
    controller.getDailySpecialties
  )
  .post('/get-staff-id', controller.getByPersonnelId)
  .put(
    '/update-self',
    upload.single('avatar'),
    validate(VO.AUTHENTICATE),
    controller.updateSelf
  )
  .get(
    '/app-stats',
    validate(VO.AUTHENTICATE, VO.AUTHORIZE),
    controller.getAppStats
  );

export default router;
