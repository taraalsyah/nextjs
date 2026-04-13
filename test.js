import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  const data = await prisma.post.findMany();
  console.log(data);
  console.log('YES=',process.env.DATABASE_URL);

}

test();