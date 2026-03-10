import { getLeaderboard } from "@/lib/leaderboard";
import { LeaderboardList } from "@/components/leaderboard/LeaderboardList";
import { LeaderboardTopThree } from "@/components/leaderboard/LeaderboardTopThree";

export default async function LeaderboardPage() {
  const entries = await getLeaderboard();
  const hasAnyKudos = entries.some((e) => e.points > 0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:pt-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#212631] mb-2">
          Leaderboard
        </h1>
        <p className="text-[#66686c]">
          Top contributors making a difference on the team
        </p>
      </div>

      {!hasAnyKudos ? (
        <div
          className="mt-8 rounded-lg border border-[#d8d9db] bg-white p-8 text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-[#3d4657]">No kudos yet.</p>
          <p className="mt-1 text-sm text-[#8a8c91]">
            Give someone recognition to see them here.
          </p>
        </div>
      ) : (
        <div className="mt-6">
          <LeaderboardTopThree entries={entries.slice(0, 3)} />
          <LeaderboardList entries={entries} />
        </div>
      )}
    </div>
  );
}
