/*
  Warnings:

  - You are about to drop the column `published` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "published",
ADD COLUMN     "isEdit" BOOLEAN NOT NULL DEFAULT false;
