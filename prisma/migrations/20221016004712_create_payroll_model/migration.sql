-- CreateEnum
CREATE TYPE "PayrollStatus" AS ENUM ('CREATED', 'COMPLIANCE_UPLOADED', 'SWORN_STATEMENT_UPLOADED', 'DOCUMENT_SIGNED', 'PAYMENT_SENT', 'LIEN_WAIVER_SIGNED', 'COMPLETE');

-- CreateTable
CREATE TABLE "Payroll" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "PayrollStatus" NOT NULL DEFAULT 'CREATED',
    "drawId" TEXT NOT NULL,
    "subcontractorId" TEXT NOT NULL,

    CONSTRAINT "Payroll_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payroll" ADD CONSTRAINT "Payroll_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "Draw"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payroll" ADD CONSTRAINT "Payroll_subcontractorId_fkey" FOREIGN KEY ("subcontractorId") REFERENCES "Subcontractor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
