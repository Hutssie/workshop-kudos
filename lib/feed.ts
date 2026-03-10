import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import type { Kudos, TeamMember } from "@prisma/client";

export type KudosWithRelations = Kudos & {
  giver: TeamMember;
  recipient: TeamMember;
};

export type FeedKudosItem = KudosWithRelations & {
  likesCount: number;
  commentsCount: number;
  currentUserLiked: boolean;
};

export async function getKudosFeed(
  currentUserId?: string | null
): Promise<FeedKudosItem[]> {
  const rows = await prisma.kudos.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      giver: true,
      recipient: true,
    },
  });

  const kudosIds = rows.map((r) => r.id);
  if (kudosIds.length === 0) return [];

  let allLikes: { kudosId: string; teamMemberId: string }[] = [];
  let commentCounts: { kudosId: string; count: number }[] = [];

  try {
    [allLikes, commentCounts] = await Promise.all([
      prisma.$queryRaw<{ kudosId: string; teamMemberId: string }[]>`
        SELECT "kudosId", "teamMemberId" FROM "kudos_likes"
        WHERE "kudosId" IN (${Prisma.join(kudosIds)})
      `,
      prisma.$queryRaw<{ kudosId: string; count: bigint }[]>`
        SELECT "kudosId", COUNT(*)::int as count FROM "kudos_comments"
        WHERE "kudosId" IN (${Prisma.join(kudosIds)})
        GROUP BY "kudosId"
      `,
    ]);
  } catch {
    // Tables may not exist if migration 20260310120000_add_kudos_likes_and_comments hasn't been applied
    allLikes = [];
    commentCounts = [];
  }

  const likeCountByKudos = new Map<string, number>();
  const likedByCurrentUser = new Set<string>();
  for (const like of allLikes) {
    likeCountByKudos.set(like.kudosId, (likeCountByKudos.get(like.kudosId) ?? 0) + 1);
    if (currentUserId && like.teamMemberId === currentUserId) {
      likedByCurrentUser.add(like.kudosId);
    }
  }
  const commentCountByKudos = new Map(
    commentCounts.map((c) => [c.kudosId, Number(c.count)])
  );

  return rows.map((row) => ({
    ...row,
    likesCount: likeCountByKudos.get(row.id) ?? 0,
    commentsCount: commentCountByKudos.get(row.id) ?? 0,
    currentUserLiked: likedByCurrentUser.has(row.id),
  }));
}

export async function getCommentsForKudos(kudosId: string) {
  return prisma.kudosComment.findMany({
    where: { kudosId },
    orderBy: { createdAt: "asc" },
    include: { author: true },
  });
}

export async function getTotalLikesReceived(teamMemberId: string): Promise<number> {
  return prisma.kudosLike.count({
    where: { kudos: { recipientId: teamMemberId } },
  });
}

const kudosInclude = {
  giver: true,
  recipient: true,
} as const;

export async function getKudosReceivedBy(teamMemberId: string) {
  return prisma.kudos.findMany({
    where: { recipientId: teamMemberId },
    orderBy: { createdAt: "desc" },
    include: kudosInclude,
  });
}

export async function getKudosGivenBy(teamMemberId: string) {
  return prisma.kudos.findMany({
    where: { giverId: teamMemberId },
    orderBy: { createdAt: "desc" },
    include: kudosInclude,
  });
}

/** Enrich kudos with likes count, comments count, and current user's like state for display (e.g. profile). */
export async function enrichKudosWithEngagement(
  kudosList: KudosWithRelations[],
  currentUserId?: string | null
): Promise<FeedKudosItem[]> {
  const kudosIds = kudosList.map((k) => k.id);
  if (kudosIds.length === 0) return [];

  let allLikes: { kudosId: string; teamMemberId: string }[] = [];
  let commentCounts: { kudosId: string; count: number }[] = [];

  try {
    const [likesRaw, commentsRaw] = await Promise.all([
      prisma.$queryRaw<{ kudosId: string; teamMemberId: string }[]>`
        SELECT "kudosId", "teamMemberId" FROM "kudos_likes"
        WHERE "kudosId" IN (${Prisma.join(kudosIds)})
      `,
      prisma.$queryRaw<{ kudosId: string; count: bigint }[]>`
        SELECT "kudosId", COUNT(*)::int as count FROM "kudos_comments"
        WHERE "kudosId" IN (${Prisma.join(kudosIds)})
        GROUP BY "kudosId"
      `,
    ]);
    allLikes = likesRaw;
    commentCounts = commentsRaw.map((c) => ({ kudosId: c.kudosId, count: Number(c.count) }));
  } catch {
    allLikes = [];
    commentCounts = [];
  }

  const likeCountByKudos = new Map<string, number>();
  const likedByCurrentUser = new Set<string>();
  for (const like of allLikes) {
    likeCountByKudos.set(like.kudosId, (likeCountByKudos.get(like.kudosId) ?? 0) + 1);
    if (currentUserId && like.teamMemberId === currentUserId) {
      likedByCurrentUser.add(like.kudosId);
    }
  }
  const commentCountByKudos = new Map(
    commentCounts.map((c) => [c.kudosId, c.count])
  );

  return kudosList.map((row) => ({
    ...row,
    likesCount: likeCountByKudos.get(row.id) ?? 0,
    commentsCount: commentCountByKudos.get(row.id) ?? 0,
    currentUserLiked: likedByCurrentUser.has(row.id),
  }));
}
