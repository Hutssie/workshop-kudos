"use client";

import { useState } from "react";
import { KudosCard } from "@/components/kudos/KudosCard";
import type { FeedKudosItem } from "@/lib/feed";
import type { TeamMember } from "@prisma/client";

interface ProfileKudosSectionProps {
  receivedKudos: FeedKudosItem[];
  givenKudos: FeedKudosItem[];
  currentUser?: TeamMember | null;
}

export function ProfileKudosSection({
  receivedKudos,
  givenKudos,
  currentUser,
}: ProfileKudosSectionProps) {
  const [activeTab, setActiveTab] = useState<"received" | "given">("received");
  const displayedKudos = activeTab === "received" ? receivedKudos : givenKudos;

  return (
    <>
      {/* Tabs - same as Figma */}
      <div className="bg-white rounded-lg shadow-sm border border-[#d8d9db] mb-6">
        <div className="flex border-b border-[#d8d9db]">
          <button
            type="button"
            onClick={() => setActiveTab("received")}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === "received"
                ? "text-[#5b6880] border-b-2 border-[#5b6880]"
                : "text-[#8a8c91] hover:text-[#66686c]"
            }`}
          >
            Received ({receivedKudos.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("given")}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === "given"
                ? "text-[#5b6880] border-b-2 border-[#5b6880]"
                : "text-[#8a8c91] hover:text-[#66686c]"
            }`}
          >
            Given ({givenKudos.length})
          </button>
        </div>
      </div>

      {/* Kudos List or empty state */}
      <div className="space-y-4">
        {displayedKudos.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-[#d8d9db]">
            <p className="text-[#8a8c91]">
              {activeTab === "received"
                ? "No kudos received yet"
                : "No kudos given yet"}
            </p>
          </div>
        ) : (
          displayedKudos.map((kudos) => (
            <KudosCard key={kudos.id} kudos={kudos} currentUser={currentUser} />
          ))
        )}
      </div>
    </>
  );
}
