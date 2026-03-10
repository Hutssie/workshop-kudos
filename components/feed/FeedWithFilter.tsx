"use client";

import { useState } from "react";
import { Filter } from "lucide-react";
import { KudosCard } from "@/components/kudos/KudosCard";
import type { FeedKudosItem } from "@/lib/feed";
import type { TeamMember } from "@prisma/client";
import { CATEGORY_OPTIONS, CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/categories";
import type { KudosCategory } from "@prisma/client";

interface FeedWithFilterProps {
  kudos: FeedKudosItem[];
  currentUser: TeamMember | null;
}

export function FeedWithFilter({ kudos, currentUser }: FeedWithFilterProps) {
  const [selectedFilter, setSelectedFilter] = useState<KudosCategory | "all">("all");

  const filteredKudos =
    selectedFilter === "all"
      ? kudos
      : kudos.filter((k) => k.category === selectedFilter);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#212631] mb-2">
          Team Kudos Feed
        </h1>
        <p className="text-[#66686c]">
          See all the amazing recognition happening on your team
        </p>
      </div>

      <div className="mb-6 bg-white rounded-lg p-4 shadow-sm border border-[#d8d9db]">
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-[#66686c]" />
          <span className="font-medium text-[#3d4657]">Filter by category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === "all"
                ? "bg-[#5b6880] text-white"
                : "bg-[#d8d9db] text-[#66686c] hover:bg-[#b0b2b6]"
            }`}
          >
            All
          </button>
          {CATEGORY_OPTIONS.map((categoryId) => (
            <button
              key={categoryId}
              type="button"
              onClick={() => setSelectedFilter(categoryId)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === categoryId
                  ? "text-white"
                  : "bg-[#d8d9db] text-[#66686c] hover:bg-[#b0b2b6]"
              }`}
              style={{
                backgroundColor:
                  selectedFilter === categoryId
                    ? CATEGORY_COLORS[categoryId]
                    : undefined,
              }}
            >
              {CATEGORY_LABELS[categoryId]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredKudos.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center shadow-sm border border-[#d8d9db]">
            <p className="text-[#8a8c91]">No kudos found for this category</p>
          </div>
        ) : (
          <ul className="space-y-4" aria-label="Kudos feed">
            {filteredKudos.map((item) => (
              <li key={item.id}>
                <KudosCard kudos={item} currentUser={currentUser} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
