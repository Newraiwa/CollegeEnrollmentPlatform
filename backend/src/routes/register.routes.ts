import { Router } from "express";
import { registerCourse } from "../controllers/register.controller";

export const registerRouter = Router();

registerRouter.post("/", registerCourse);
