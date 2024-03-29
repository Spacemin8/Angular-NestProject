/*
  Warnings:

  - You are about to drop the column `fizz` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `Products` table. All the data in the column will be lost.
  - Made the column `description` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Products_title_key";

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "fizz",
DROP COLUMN "user",
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
