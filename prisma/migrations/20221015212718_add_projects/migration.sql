-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToSubcontractor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToSubcontractor_AB_unique" ON "_ProjectToSubcontractor"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToSubcontractor_B_index" ON "_ProjectToSubcontractor"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToSubcontractor" ADD CONSTRAINT "_ProjectToSubcontractor_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToSubcontractor" ADD CONSTRAINT "_ProjectToSubcontractor_B_fkey" FOREIGN KEY ("B") REFERENCES "Subcontractor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
