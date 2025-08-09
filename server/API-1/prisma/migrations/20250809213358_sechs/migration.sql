/*
  Warnings:

  - The `status` column on the `Task` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Task" DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "public"."Values";
