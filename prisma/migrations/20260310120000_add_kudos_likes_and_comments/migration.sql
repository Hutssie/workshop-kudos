-- CreateTable
CREATE TABLE "kudos_likes" (
    "id" TEXT NOT NULL,
    "kudosId" TEXT NOT NULL,
    "teamMemberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kudos_likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kudos_comments" (
    "id" TEXT NOT NULL,
    "kudosId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kudos_comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "kudos_likes_kudosId_teamMemberId_key" ON "kudos_likes"("kudosId", "teamMemberId");

-- AddForeignKey
ALTER TABLE "kudos_likes" ADD CONSTRAINT "kudos_likes_kudosId_fkey" FOREIGN KEY ("kudosId") REFERENCES "kudos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kudos_likes" ADD CONSTRAINT "kudos_likes_teamMemberId_fkey" FOREIGN KEY ("teamMemberId") REFERENCES "team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kudos_comments" ADD CONSTRAINT "kudos_comments_kudosId_fkey" FOREIGN KEY ("kudosId") REFERENCES "kudos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "kudos_comments" ADD CONSTRAINT "kudos_comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "team_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
