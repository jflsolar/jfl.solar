import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line  no-unused-vars, no-var
  var cachedPrisma: PrismaClient | undefined;
}

// let prisma: PrismaClient;
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }
//   prisma = global.cachedPrisma;
// }

const prisma = global.cachedPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.cachedPrisma = prisma;

export const db = prisma;
