import { Trophy } from "lucide-react";
import type { LeaderboardEntry } from "@/lib/leaderboard";

interface LeaderboardTopThreeProps {
  entries: LeaderboardEntry[];
}

function Avatar({
  entry,
  className,
}: {
  entry: LeaderboardEntry;
  className: string;
}) {
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
        className={`rounded-full object-cover ${className}`}
      />
    );
  }
  return (
    <span
      className={`flex items-center justify-center rounded-full bg-[#5b6880] text-lg font-medium text-white ${className}`}
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function LeaderboardTopThree({ entries }: LeaderboardTopThreeProps) {
  const [first, second, third] = entries.slice(0, 3);
  const hasPoints = entries.some((e) => e.points > 0);
  if (entries.length === 0 || !hasPoints) return null;

  // Layout: left = 2nd, center = 1st, right = 3rd
  const slots: (LeaderboardEntry | null)[] = [second, first, third];

  return (
    <div
      className="mb-6 flex items-end justify-center gap-2 sm:gap-4"
      aria-label="Top 3 contributors"
    >
      {/* 2nd Place */}
      {slots[0] && (
        <div className="flex flex-1 max-w-[140px] flex-col items-center">
          <div className="relative mb-3">
            <Avatar
              entry={slots[0]}
              className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#b2abe9]"
            />
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#b2abe9] to-[#6955cd] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              aria-hidden
            >
              2
            </div>
          </div>
          <p className="font-semibold text-[#212631] text-center text-sm mb-1 line-clamp-1">
            {slots[0].displayName ?? slots[0].name}
          </p>
          <div className="bg-gradient-to-br from-[#b2abe9] to-[#6955cd] rounded-lg p-3 sm:p-4 w-full h-20 sm:h-24 flex items-center justify-center">
            <p className="text-white font-bold text-lg sm:text-xl">
              {slots[0].points}
            </p>
          </div>
        </div>
      )}

      {/* 1st Place */}
      {slots[1] && (
        <div className="flex flex-1 max-w-[140px] flex-col items-center">
          <div className="relative mb-3">
            <Avatar
              entry={slots[1]}
              className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-[#5dd135]"
            />
            <div
              className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#77fd4b] to-[#357d1c] rounded-full flex items-center justify-center shadow-lg"
              aria-hidden
            >
              <Trophy className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="font-semibold text-[#212631] text-center text-sm mb-1 line-clamp-1">
            {slots[1].displayName ?? slots[1].name}
          </p>
          <div className="bg-gradient-to-br from-[#5dd135] to-[#357d1c] rounded-lg p-3 sm:p-4 w-full h-28 sm:h-32 flex items-center justify-center">
            <p className="text-white font-bold text-xl sm:text-2xl">
              {slots[1].points}
            </p>
          </div>
        </div>
      )}

      {/* 3rd Place */}
      {slots[2] && (
        <div className="flex flex-1 max-w-[140px] flex-col items-center">
          <div className="relative mb-3">
            <Avatar
              entry={slots[2]}
              className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#aec1bf]"
            />
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#aec1bf] to-[#697573] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              aria-hidden
            >
              3
            </div>
          </div>
          <p className="font-semibold text-[#212631] text-center text-sm mb-1 line-clamp-1">
            {slots[2].displayName ?? slots[2].name}
          </p>
          <div className="bg-gradient-to-br from-[#aec1bf] to-[#697573] rounded-lg p-3 sm:p-4 w-full h-16 sm:h-20 flex items-center justify-center">
            <p className="text-white font-bold text-lg sm:text-xl">
              {slots[2].points}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
