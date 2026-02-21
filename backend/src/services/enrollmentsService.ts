import prisma from '../prismaClient';

export async function enrollUser(userId: number, courseId: number) {
  return prisma.enrollment.create({
    data: { userId, courseId, status: 'COMPLETED', creditsEarned: undefined }
  });
}

export async function listEnrollmentsByUser(userId: number) {
  return prisma.enrollment.findMany({
    where: { userId, isDeleted: false },
    include: { course: true }
  });
}
