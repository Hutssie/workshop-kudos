"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { TopNav } from "@/components/nav/TopNav";
import { BottomNav } from "@/components/nav/BottomNav";
import { GiveKudosDialog } from "@/components/kudos/GiveKudosDialog";
import type { TeamMember } from "@prisma/client";

interface ClientAppShellProps {
  currentUser: { id: string; name: string; displayName: string | null; avatarUrl: string | null } | null;
  teamMembers: { id: string; name: string; displayName: string | null; position: string | null }[];
  children: React.ReactNode;
}

export function ClientAppShell({
  currentUser,
  teamMembers,
  children,
}: ClientAppShellProps) {
  const [isGiveKudosOpen, setIsGiveKudosOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isPublicPage = pathname === "/" || pathname === "/login" || pathname === "/signup";

  useEffect(() => {
    if (searchParams.get("giveKudos") === "1") {
      setIsGiveKudosOpen(true);
      router.replace("/feed", { scroll: false });
    }
  }, [searchParams, router]);

  if (isPublicPage) {
    return <>{children}</>;
  }

  return (
    <>
      <TopNav
        currentUser={currentUser}
        teamMembers={teamMembers}
        onGiveKudos={() => setIsGiveKudosOpen(true)}
      />
      <main className="min-h-screen bg-[#f5f6f8] flex-1 pb-20 sm:pb-8 sm:pt-[73px]">
        {children}
      </main>
      <BottomNav currentUser={currentUser} onGiveKudos={() => setIsGiveKudosOpen(true)} />
      <GiveKudosDialog
        isOpen={isGiveKudosOpen}
        onClose={() => setIsGiveKudosOpen(false)}
        teamMembers={teamMembers as TeamMember[]}
        currentUserId={currentUser?.id ?? null}
      />
    </>
  );
}
