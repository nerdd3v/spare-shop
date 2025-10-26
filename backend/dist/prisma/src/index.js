import { PrismaClient } from "../../src/generated/prisma/client.js";
const globalForPrisma = globalThis;
//create or reuse a single instance
export const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production')
    globalForPrisma.prisma = prisma;
//# sourceMappingURL=index.js.map