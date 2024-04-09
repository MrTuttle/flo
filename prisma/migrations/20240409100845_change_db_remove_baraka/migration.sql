/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Menu` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_assignedToMenuId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_assignedToRoomId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_assignedToRoomId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_assignedToUserRoomId_fkey";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "Menu";

-- DropTable
DROP TABLE "Reservation";

-- DropTable
DROP TABLE "Room";

-- DropTable
DROP TABLE "UserRoom";

-- DropEnum
DROP TYPE "Status";
