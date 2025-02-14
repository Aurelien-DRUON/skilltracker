"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function useGetUserById({ id }) {
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(id, 10),
    },
  });
  return user;
}

export async function useGetObjectivesByUserId({ userId }) {
  const objectives = await prisma.objective.findMany({
    where: {
      userId,
    },
  });
  return objectives;
}

export async function usePostObjective({ userId, title, timeGoal }) {
  const objective = await prisma.objective.create({
    data: {
      userId,
      title,
      timeGoal,
    },
  });
  return objective;
}

export async function useDeleteObjective({ id }) {
  const objective = await prisma.objective.findUnique({
    where: {
      id,
    },
  });

  if (!objective) {
    return;
  }

  await prisma.objective.delete({
    where: {
      id,
    },
  });
}

export async function useGetUserSkillsById({ userId }) {
  const skills = await prisma.skill.findMany({
    where: {
      userId,
    },
  });
  return skills;
}

export async function usePostSkill({ userId, name, progression }) {
  const skill = await prisma.skill.create({
    data: {
      userId,
      name,
      progression,
    },
  });
  return skill;
}

export async function useUpdateSkill({ id, progression }) {
  const skill = await prisma.skill.findUnique({
    where: {
      id,
    },
  });

  if (!skill) {
    return;
  }

  await prisma.skill.update({
    where: {
      id,
    },
    data: {
      progression,
    },
  });
}

export async function useDeleteSkill({ id }) {
  const skill = await prisma.skill.findUnique({
    where: {
      id,
    },
  });

  if (!skill) {
    return;
  }

  await prisma.skill.delete({
    where: {
      id,
    },
  });
}
