import { Router } from 'express';
import * as ctrl from '../controllers/enrollmentsController';

const router = Router();

router.post('/', ctrl.createEnrollment);
router.get('/user/:userId', ctrl.listByUser);

export default router;
