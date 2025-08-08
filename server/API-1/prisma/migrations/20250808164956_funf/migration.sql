/*
  Warnings:

  - Added the required column `status` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Values" AS ENUM ('DONE', 'PENDING');

-- AlterTable
ALTER TABLE "public"."Task" ADD COLUMN     "status" "public"."Values" NOT NULL;
