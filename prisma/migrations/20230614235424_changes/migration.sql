/*
  Warnings:

  - You are about to drop the column `reqid` on the `Requirements` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Requirements_reqid_key";

-- AlterTable
ALTER TABLE "Requirements" DROP COLUMN "reqid";
