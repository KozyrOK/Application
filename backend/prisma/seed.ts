import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {

  const password = await bcrypt.hash('password123', 10);

  await prisma.user.createMany({
    data: [
      {
        email: 'user1@test.com',
        password,
        name: 'User One',
      },
      {
        email: 'user2@test.com',
        password,
        name: 'User Two',
      },
    ],
  });

}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());