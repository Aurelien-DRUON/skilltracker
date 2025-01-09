"use server";

import { PrismaClient } from "@prisma/client";

export async function useGetUserById({ id }) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(id, 10),
    },
  });
  return user;
}

export async function useGetObjectivesByUserId({ id }) {
  const prisma = new PrismaClient();
  const objectives = await prisma.objective.findMany({
    where: {
      userId: parseInt(id, 10),
    },
  });
  return objectives;
}

export async function usePostObjective({ userId, title, timeGoal }) {
  const prisma = new PrismaClient();
  const objective = await prisma.objective.create({
    data: {
      userId: parseInt(userId, 10),
      title,
      timeGoal,
    },
  });
  return objective;
}

// export async function useGetAllObjectives() {
//   const prisma = new PrismaClient();
//   const objectives = await prisma.objective.findMany();
//   return objectives;
// }
