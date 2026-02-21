import { Router } from 'express';
import * as ctrl from '../controllers/coursesController';

const router = Router();

router.get('/', ctrl.listCourses);
router.get('/:id', ctrl.getCourse);

export default router;
