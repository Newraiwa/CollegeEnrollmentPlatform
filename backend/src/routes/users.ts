import { Router } from 'express';
import * as ctrl from '../controllers/usersController';

const router = Router();

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const user = await (await import('../services/usersService')).getUserSafeById(id);
  if (!user) return res.status(404).json({ error: 'not found' });
  res.json(user);
});

export default router;
