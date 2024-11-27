"use server";

import { PrismaClient } from "@prisma/client";

export async function usePostUser({ name, email, password }) {
  console.log(name, email, password);
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return user;
}

export async function useGetAllUsers() {
  const prisma = new PrismaClient();
  const user = await prisma.user.findMany();
  return user;
}

export async function useGetUser({ email, password }) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });
  return user;
}
