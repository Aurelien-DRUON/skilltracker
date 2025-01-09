"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function usePostUser({ name, email, password }) {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
      skills: [],
    },
  });
  return user;
}

export async function useGetAllUsers() {
  const user = await prisma.user.findMany();
  return user;
}

export async function useGetUserByLogin({ email, password }) {
  const user = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });
  return user;
}
