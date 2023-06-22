/*
  Warnings:

  - You are about to drop the column `roleId` on the `Role` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[jobreqid]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[jobroleid]` on the table `Job` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Requirements" DROP CONSTRAINT "Requirements_reqid_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_roleId_fkey";

-- DropIndex
DROP INDEX "Role_roleId_key";

-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "jobreqid" TEXT,
ADD COLUMN     "jobroleid" TEXT;

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "roleId";

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobreqid_key" ON "Job"("jobreqid");

-- CreateIndex
CREATE UNIQUE INDEX "Job_jobroleid_key" ON "Job"("jobroleid");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobreqid_fkey" FOREIGN KEY ("jobreqid") REFERENCES "Requirements"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_jobroleid_fkey" FOREIGN KEY ("jobroleid") REFERENCES "Role"("id") ON DELETE SET NULL ON UPDATE CASCADE;
