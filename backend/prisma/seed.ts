import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const pw = await bcrypt.hash('password123', 10);

  await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      passwordHash: pw,
      fullName: 'Alice Student',
      role: 'STUDENT'
    }
  });

  await prisma.course.upsert({
    where: { code: 'MATH101' },
    update: {},
    create: { code: 'MATH101', title: 'Calculus I', credits: 3, description: 'Intro calculus' }
  });

  await prisma.course.upsert({
    where: { code: 'ENG101' },
    update: {},
    create: { code: 'ENG101', title: 'English I', credits: 2, description: 'Basic English' }
  });

  console.log('Seed completed');
}

main()
  .catch(e => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
