"use server";

import { PrismaClient } from "@prisma/client";

export default async function usePostUser({ name, email, password }) {
  console.log(name, email, password);
  const prisma = new PrismaClient();
  const skills = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return skills;
}
