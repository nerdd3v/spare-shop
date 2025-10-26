-- CreateEnum
CREATE TYPE "BillType" AS ENUM ('Sale', 'Purchase');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('Cash', 'UPI', 'Card');

-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('Debit', 'Credit');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "imgUrl" TEXT,
    "type" TEXT,
    "costPrice" INTEGER NOT NULL,
    "sellPrice" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillDetails" (
    "id" TEXT NOT NULL,
    "paymentType" "PaymentType" NOT NULL,
    "type" "BillType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organisationId" TEXT NOT NULL,
    "totalAmount" INTEGER NOT NULL,
    "supplierId" TEXT,
    "customerId" TEXT,

    CONSTRAINT "BillDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardDetail" (
    "id" TEXT NOT NULL,
    "accountNumber" BIGINT NOT NULL,
    "accountHolder" TEXT NOT NULL,
    "cardType" "CardType" NOT NULL,
    "bank" TEXT NOT NULL,
    "billId" TEXT NOT NULL,

    CONSTRAINT "CardDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UPIdetail" (
    "id" TEXT NOT NULL,
    "upiId" TEXT NOT NULL,
    "application" TEXT NOT NULL,
    "billId" TEXT NOT NULL,

    CONSTRAINT "UPIdetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "billId" TEXT NOT NULL,

    CONSTRAINT "BillItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,
    "email" TEXT,
    "address" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,
    "email" TEXT,
    "address" TEXT,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paymentStatus" (
    "id" TEXT NOT NULL,

    CONSTRAINT "paymentStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_id_key" ON "Organisation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_name_key" ON "Organisation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BillDetails_id_key" ON "BillDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CardDetail_id_key" ON "CardDetail"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CardDetail_billId_key" ON "CardDetail"("billId");

-- CreateIndex
CREATE UNIQUE INDEX "UPIdetail_id_key" ON "UPIdetail"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UPIdetail_billId_key" ON "UPIdetail"("billId");

-- CreateIndex
CREATE UNIQUE INDEX "BillItem_id_key" ON "BillItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_id_key" ON "Customer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_id_key" ON "Supplier"("id");

-- CreateIndex
CREATE UNIQUE INDEX "paymentStatus_id_key" ON "paymentStatus"("id");

-- AddForeignKey
ALTER TABLE "Organisation" ADD CONSTRAINT "Organisation_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillDetails" ADD CONSTRAINT "BillDetails_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillDetails" ADD CONSTRAINT "BillDetails_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillDetails" ADD CONSTRAINT "BillDetails_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardDetail" ADD CONSTRAINT "CardDetail_billId_fkey" FOREIGN KEY ("billId") REFERENCES "BillDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UPIdetail" ADD CONSTRAINT "UPIdetail_billId_fkey" FOREIGN KEY ("billId") REFERENCES "BillDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillItem" ADD CONSTRAINT "BillItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillItem" ADD CONSTRAINT "BillItem_billId_fkey" FOREIGN KEY ("billId") REFERENCES "BillDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
