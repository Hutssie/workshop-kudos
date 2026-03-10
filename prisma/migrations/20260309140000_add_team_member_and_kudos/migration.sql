-- CreateEnum
CREATE TYPE "KudosCategory" AS ENUM ('TeamPlayer', 'GreatWork', 'Helpful', 'Innovation', 'Leadership', 'PositiveAttitude');

-- CreateTable
CREATE TABLE "team_members" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT,

    CONSTRAINT "team_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kudos" (
    "id" TEXT NOT NULL,
    "giverId" TEXT NOT NULL,
    "recipientId" TEXT NOT NULL,
    "category" "KudosCategory" NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kudos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "kudos_recipientId_idx" ON "kudos"("recipientId");

-- AddForeignKey
ALTER TABLE "kudos" ADD CONSTRAINT "kudos_giverId_fkey" FOREIGN KEY ("giverId") REFERENCES "team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kudos" ADD CONSTRAINT "kudos_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
