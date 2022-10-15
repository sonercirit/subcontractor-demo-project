import { PrismaClient } from '@prisma/client';

// init main DB client
const prisma = new PrismaClient();

export default prisma;
