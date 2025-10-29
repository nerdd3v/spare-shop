/*
  Warnings:

  - A unique constraint covering the columns `[ownerId]` on the table `Organisation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organisationId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organisation" ADD COLUMN     "address" TEXT,
ADD COLUMN     "location" TEXT;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "organisationId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_ownerId_key" ON "Organisation"("ownerId");

-- CreateIndex
CREATE INDEX "User_username_password_idx" ON "User"("username", "password");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
