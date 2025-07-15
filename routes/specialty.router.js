import { Router } from 'express';

import controller from '../controllers/specialty.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';

const router = Router();

router
  .route('/')
  .post(validate(VO.SPECIALTY), controller.createSpecialty)
  .get(controller.getSpecialties);

router
  .route('/:id')
  .get(validate(VO.ID), controller.getSpecialty)
  .put(validate(VO.ID, VO.SPECIALTY), controller.updateSpecialty)
  .delete(validate(VO.ID), controller.deleteSpecialty);

export default router;
