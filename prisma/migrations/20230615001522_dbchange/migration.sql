/*
  Warnings:

  - You are about to drop the column `jobreqid` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `jobroleid` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the `Requirements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jobreqid_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_jobroleid_fkey";

-- DropIndex
DROP INDEX "Job_jobreqid_key";

-- DropIndex
DROP INDEX "Job_jobroleid_key";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "jobreqid",
DROP COLUMN "jobroleid",
ADD COLUMN     "requirements" JSONB,
ADD COLUMN     "role" JSONB;

-- DropTable
DROP TABLE "Requirements";

-- DropTable
DROP TABLE "Role";
