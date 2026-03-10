"use client";

import { Home, Trophy, Plus, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { clearCurrentUser } from "@/app/actions/session";

interface TopNavProps {
  currentUser: { id: string; name: string; displayName: string | null; avatarUrl: string | null } | null;
  teamMembers: { id: string; name: string; displayName: string | null; position: string | null }[];
  onGiveKudos: () => void;
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5b6880] text-sm font-medium text-white"
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function TopNav({
  currentUser,
  teamMembers,
  onGiveKudos,
}: TopNavProps) {
  const pathname = usePathname();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) =>
    pathname === path || (path !== "/feed" && pathname.startsWith(path));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    if (showUserMenu) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showUserMenu]);

  return (
    <nav
      className="hidden sm:flex fixed top-0 left-0 right-0 bg-white border-b border-[#d8d9db] z-40"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2 rounded-lg"
            >
              <div className="w-10 h-10 bg-[#5b6880] rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-[#212631]">Kudos</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/feed"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/feed")
                  ? "text-[#5b6880] bg-[#d4d9e4]"
                  : "text-[#66686c] hover:text-[#5b6880] hover:bg-[#d8d9db]"
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium">Feed</span>
            </Link>

            <Link
              href="/leaderboard"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive("/leaderboard")
                  ? "text-[#5b6880] bg-[#d4d9e4]"
                  : "text-[#66686c] hover:text-[#5b6880] hover:bg-[#d8d9db]"
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span className="font-medium">Leaderboard</span>
            </Link>

            {currentUser && (
              <button
                type="button"
                onClick={onGiveKudos}
                className="flex items-center gap-2 px-6 py-2 bg-[#357d1c] text-white rounded-lg hover:bg-[#49a628] transition-colors ml-2 font-medium focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2"
              >
                <Plus className="w-5 h-5" />
                Give Kudos
              </button>
            )}

            {currentUser ? (
              <div className="relative ml-2" ref={menuRef}>
                <button
                  type="button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  aria-expanded={showUserMenu}
                  aria-haspopup="true"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2 ${
                    pathname === "/profile" || showUserMenu
                      ? "bg-[#d4d9e4]"
                      : "hover:bg-[#d8d9db]"
                  }`}
                >
                  {currentUser.avatarUrl ? (
                    <img
                      src={currentUser.avatarUrl}
                      alt=""
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ) : (
                    <AvatarPlaceholder
                      name={currentUser.displayName ?? currentUser.name}
                    />
                  )}
                  <span className="font-medium text-[#212631]">
                    {currentUser.displayName ?? currentUser.name}
                  </span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-[#d8d9db] overflow-hidden">
                    <Link
                      href="/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#f5f6f8] transition-colors"
                    >
                      <User className="w-5 h-5 text-[#66686c]" />
                      <span className="text-[#212631]">My Profile</span>
                    </Link>
                    <form action={clearCurrentUser} className="block">
                      <button
                        type="submit"
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f5f6f8] transition-colors border-t border-[#d8d9db] text-left"
                      >
                        <LogOut className="w-5 h-5 text-[#66686c]" />
                        <span className="text-[#212631]">Log Out</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 px-6 py-2 bg-[#5b6880] text-white rounded-lg hover:bg-[#3d4657] transition-colors font-medium ml-2 focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
