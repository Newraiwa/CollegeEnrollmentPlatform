import { Request, Response } from 'express';
import * as service from '../services/coursesService';

export async function listCourses(req: Request, res: Response) {
  const courses = await service.listCourses();
  res.json(courses);
}

export async function getCourse(req: Request, res: Response) {
  const id = Number(req.params.id);
  const course = await service.getCourseById(id);
  if (!course) return res.status(404).json({ error: 'not found' });
  res.json(course);
}
