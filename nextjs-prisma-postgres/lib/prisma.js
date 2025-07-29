import { PrismaClient } from "@prisma/client";
let prisma;

//if the we're in prod
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  //if we're not in prod and a global prisma instance doesn't exist
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  } //if we're not in prod but a global prisma instance exists
  prisma = global.prisma;
}

export default prisma;
