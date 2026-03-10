import { Award, TrendingUp } from "lucide-react";
import type { LeaderboardEntry } from "@/lib/leaderboard";

interface LeaderboardListProps {
  entries: LeaderboardEntry[];
}

function getMedalColor(index: number): string {
  switch (index) {
    case 0:
      return "bg-gradient-to-br from-[#5dd135] to-[#357d1c]";
    case 1:
      return "bg-gradient-to-br from-[#b2abe9] to-[#6955cd]";
    case 2:
      return "bg-gradient-to-br from-[#aec1bf] to-[#697573]";
    default:
      return "bg-[#d8d9db]";
  }
}

function Avatar({ entry }: { entry: LeaderboardEntry }) {
  const displayName = entry.displayName ?? entry.name;
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (entry.avatarUrl) {
    return (
      <img
        src={entry.avatarUrl}
        alt=""
        className="h-12 w-12 shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#5b6880] text-sm font-medium text-white"
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function LeaderboardList({ entries }: LeaderboardListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-[#d8d9db] overflow-hidden">
      <div className="bg-[#5b6880] px-6 py-4">
        <h2 className="text-white font-semibold text-lg">Full Rankings</h2>
      </div>
      <ul
        className="divide-y divide-[#d8d9db]"
        aria-label="Leaderboard by points (received and given kudos)"
      >
        {entries.map((entry, index) => {
          const rank = index + 1;
          const displayName = entry.displayName ?? entry.name;
          const roleLabel = entry.position ?? "Team Member";
          const isTopThree = index < 3;
          return (
            <li key={entry.id}>
              <article
                className="flex items-center gap-4 p-4 hover:bg-[#f5f6f8] transition-colors"
                aria-label={`${displayName}, ${entry.kudosReceived} received, ${entry.kudosGiven} given, ${entry.points} points`}
              >
                {/* Rank */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 ${getMedalColor(index)} ${isTopThree ? "text-white" : "text-[#212631]"}`}
                  aria-hidden="true"
                >
                  {rank}
                </div>

                {/* Avatar */}
                <Avatar entry={entry} />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#212631]">{displayName}</p>
                  <p className="text-sm text-[#66686c]">{roleLabel}</p>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-sm shrink-0">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#357d1c] mb-1">
                      <Award className="w-4 h-4 shrink-0" aria-hidden />
                      <span className="font-semibold">{entry.kudosReceived}</span>
                    </div>
                    <p className="text-xs text-[#8a8c91]">Received</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-[#5b6880] mb-1">
                      <TrendingUp className="w-4 h-4 shrink-0" aria-hidden />
                      <span className="font-semibold">{entry.kudosGiven}</span>
                    </div>
                    <p className="text-xs text-[#8a8c91]">Given</p>
                  </div>
                </div>

                {/* Score */}
                <div className="text-right shrink-0">
                  <p className="text-2xl font-bold text-[#212631]">{entry.points}</p>
                  <p className="text-xs text-[#8a8c91]">points</p>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
