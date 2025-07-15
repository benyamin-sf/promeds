import { Router } from 'express';

import controller from '../controllers/logs.controller.js';
import {
  validate,
  validationOptions as VO,
} from '../middlewares/validation.middleware.js';

const router = Router();

router
  .get('/logged-user', controller.getSelfLogs)
  .get('/logged-user-unread', controller.getSelfUnreadLogsCount);

router
  .route('/:id')
  .get(validate(VO.ID), controller.getLog)
  .patch(validate(VO.ID), controller.updateLog)
  .delete(validate(VO.ID), controller.deleteLog);

export default router;
