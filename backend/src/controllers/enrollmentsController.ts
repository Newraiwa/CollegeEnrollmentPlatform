import { Request, Response } from 'express';
import * as service from '../services/enrollmentsService';

export async function createEnrollment(req: Request, res: Response) {
  try {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) return res.status(400).json({ error: 'userId and courseId required' });
    const r = await service.enrollUser(Number(userId), Number(courseId));
    res.status(201).json(r);
  } catch (err: any) {
    res.status(500).json({ error: err?.message || err });
  }
}

export async function listByUser(req: Request, res: Response) {
  const userId = Number(req.params.userId);
  const rows = await service.listEnrollmentsByUser(userId);
  res.json(rows);
}
