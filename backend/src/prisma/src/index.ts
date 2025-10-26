import { PrismaClient } from "../../src/generated/prisma/client.js"

const globalForPrisma = globalThis as unknown as {prisma: PrismaClient}

//create or reuse a single instance

export const prisma = globalForPrisma.prisma || new PrismaClient()

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma