import { Request, Response } from "express";
import { mysqlPool } from "../config/mysql";

export const registerCourse = async (req: Request, res: Response) => {
  const { studentId, courseId } = req.body;

  try {
    await mysqlPool.query(
      "INSERT INTO registrations (student_id, course_id) VALUES (?, ?)",
      [studentId, courseId]
    );

    res.json({ message: "Course registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};
