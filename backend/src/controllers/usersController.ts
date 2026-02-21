import { Request, Response } from 'express';
import * as service from '../services/usersService';
import { registerSchema, loginSchema } from '../utils/validation';
import { comparePassword, signToken } from '../utils/auth';

export async function register(req: Request, res: Response) {
  try {
    const parsed = registerSchema.parse(req.body);
    const existing = await service.findUserByEmail(parsed.email);
    if (existing) return res.status(409).json({ error: 'Email already used' });

    const user = await service.createUser(parsed);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err?.message || err });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const parsed = loginSchema.parse(req.body);
    const user = await service.findUserByEmail(parsed.email);
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const ok = await comparePassword(parsed.password, (user as any).passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });

    const token = signToken({ userId: user.id, email: user.email, role: user.role });
    const safe = await service.getUserSafeById(user.id);
    res.json({ token, user: safe });
  } catch (err: any) {
    res.status(400).json({ error: err?.message || err });
  }
}
