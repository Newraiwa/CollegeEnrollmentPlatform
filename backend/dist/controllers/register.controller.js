"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCourse = void 0;
const mysql_1 = require("../config/mysql");
const registerCourse = async (req, res) => {
    const { studentId, courseId } = req.body;
    try {
        await mysql_1.mysqlPool.query("INSERT INTO registrations (student_id, course_id) VALUES (?, ?)", [studentId, courseId]);
        res.json({ message: "Course registered successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};
exports.registerCourse = registerCourse;
