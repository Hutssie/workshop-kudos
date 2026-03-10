"use client";

import { Home, Trophy, User, Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BottomNavProps {
  currentUser: { id: string; name: string; displayName: string | null; avatarUrl: string | null } | null;
  onGiveKudos: () => void;
}

export function BottomNav({ currentUser, onGiveKudos }: BottomNavProps) {
  const pathname = usePathname();
  const isActive = (path: string) =>
    pathname === path || (path !== "/feed" && pathname.startsWith(path));

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#d8d9db] sm:hidden z-40"
    >
      <div className="flex items-center justify-around px-2 py-2">
        <Link
          href="/feed"
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            isActive("/feed")
              ? "text-[#5b6880] bg-[#d4d9e4]"
              : "text-[#8a8c91] hover:text-[#5b6880]"
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Feed</span>
        </Link>

        <Link
          href="/leaderboard"
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            isActive("/leaderboard")
              ? "text-[#5b6880] bg-[#d4d9e4]"
              : "text-[#8a8c91] hover:text-[#5b6880]"
          }`}
        >
          <Trophy className="w-6 h-6" />
          <span className="text-xs font-medium">Top</span>
        </Link>

        {currentUser ? (
          <>
            <button
              type="button"
              onClick={onGiveKudos}
              className="flex flex-col items-center gap-1 px-6 py-2 bg-[#357d1c] text-white rounded-lg hover:bg-[#49a628] transition-colors -mt-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2"
            >
              <Plus className="w-6 h-6" />
              <span className="text-xs font-medium">Give</span>
            </button>

            <Link
              href="/profile"
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive("/profile")
                  ? "text-[#5b6880] bg-[#d4d9e4]"
                  : "text-[#8a8c91] hover:text-[#5b6880]"
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">Profile</span>
            </Link>
          </>
        ) : (
          <Link
            href="/login"
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
              isActive("/login") || isActive("/signup")
                ? "text-[#5b6880] bg-[#d4d9e4]"
                : "text-[#8a8c91] hover:text-[#5b6880]"
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Log In</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
