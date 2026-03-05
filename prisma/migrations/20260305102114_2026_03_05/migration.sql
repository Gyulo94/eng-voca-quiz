/*
  Warnings:

  - Added the required column `level` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Level" AS ENUM ('LOW', 'NORMAL', 'HIGH');

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "level" "Level" NOT NULL;
