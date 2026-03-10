import { prisma } from "@/lib/prisma";

export const POINTS_PER_KUDOS_RECEIVED = 5;
export const POINTS_PER_KUDOS_GIVEN = 2;

export type LeaderboardEntry = {
  id: string;
  name: string;
  displayName: string | null;
  position: string | null;
  avatarUrl: string | null;
  kudosReceived: number;
  kudosGiven: number;
  points: number;
};

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const members = await prisma.teamMember.findMany({
    include: {
      _count: {
        select: { kudosReceived: true, kudosGiven: true },
      },
    },
  });

  const entries: LeaderboardEntry[] = members.map((m) => {
    const kudosReceived = m._count.kudosReceived;
    const kudosGiven = m._count.kudosGiven;
    const points =
      kudosReceived * POINTS_PER_KUDOS_RECEIVED +
      kudosGiven * POINTS_PER_KUDOS_GIVEN;
    return {
      id: m.id,
      name: m.name,
      displayName: m.displayName,
      position: m.position,
      avatarUrl: m.avatarUrl,
      kudosReceived,
      kudosGiven,
      points,
    };
  });

  entries.sort(
    (a, b) => b.points - a.points || b.kudosReceived - a.kudosReceived
  );
  return entries;
}
