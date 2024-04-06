-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OCCUPIED', 'VACANT', 'IN_PROGRESS');

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRoom" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),

    CONSTRAINT "UserRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "id" SERIAL NOT NULL,
    "checkIn" DATE NOT NULL,
    "checkOut" DATE NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'VACANT',
    "assignedToRoomId" INTEGER NOT NULL,
    "assignedToUserRoomId" INTEGER NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "publicId" VARCHAR(255) NOT NULL,
    "alt" VARCHAR(255) NOT NULL,
    "cover" BOOLEAN NOT NULL DEFAULT false,
    "assignedToRoomId" INTEGER NOT NULL,
    "assignedToMenuId" INTEGER,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRoom_email_key" ON "UserRoom"("email");

-- CreateIndex
CREATE INDEX "UserRoom_id_idx" ON "UserRoom"("id");

-- CreateIndex
CREATE INDEX "Reservation_assignedToUserRoomId_idx" ON "Reservation"("assignedToUserRoomId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_assignedToRoomId_assignedToUserRoomId_key" ON "Reservation"("assignedToRoomId", "assignedToUserRoomId");

-- CreateIndex
CREATE INDEX "Image_assignedToRoomId_idx" ON "Image"("assignedToRoomId");

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_assignedToRoomId_fkey" FOREIGN KEY ("assignedToRoomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_assignedToUserRoomId_fkey" FOREIGN KEY ("assignedToUserRoomId") REFERENCES "UserRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_assignedToRoomId_fkey" FOREIGN KEY ("assignedToRoomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_assignedToMenuId_fkey" FOREIGN KEY ("assignedToMenuId") REFERENCES "Menu"("id") ON DELETE SET NULL ON UPDATE CASCADE;
