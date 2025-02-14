/*
  Warnings:

  - You are about to drop the column `skillId` on the `Objective` table. All the data in the column will be lost.
  - You are about to drop the column `objectiveId` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `title` to the `Objective` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Objective` table without a default value. This is not possible if the table is not empty.
  - Made the column `timeGoal` on table `Objective` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `Skill` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Objective" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "timeGoal" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Objective_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Objective" ("createdAt", "id", "timeGoal", "updatedAt") SELECT "createdAt", "id", "timeGoal", "updatedAt" FROM "Objective";
DROP TABLE "Objective";
ALTER TABLE "new_Objective" RENAME TO "Objective";
CREATE TABLE "new_Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "progression" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Skill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("createdAt", "id", "name", "progression", "updatedAt", "userId") SELECT "createdAt", "id", "name", "progression", "updatedAt", "userId" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
