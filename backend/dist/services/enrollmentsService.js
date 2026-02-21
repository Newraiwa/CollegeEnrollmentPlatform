"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrollUser = enrollUser;
exports.listEnrollmentsByUser = listEnrollmentsByUser;
const prismaClient_1 = __importDefault(require("../prismaClient"));
async function enrollUser(userId, courseId) {
    return prismaClient_1.default.enrollment.create({
        data: { userId, courseId, status: 'COMPLETED', creditsEarned: undefined }
    });
}
async function listEnrollmentsByUser(userId) {
    return prismaClient_1.default.enrollment.findMany({
        where: { userId, isDeleted: false },
        include: { course: true }
    });
}
