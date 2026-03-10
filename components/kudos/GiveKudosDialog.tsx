"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { GiveKudosForm } from "./GiveKudosForm";
import type { TeamMember } from "@prisma/client";

interface GiveKudosDialogProps {
  isOpen: boolean;
  onClose: () => void;
  teamMembers: TeamMember[];
  /** Current user's team member id – passed to form to exclude from recipient list */
  currentUserId?: string | null;
}

export function GiveKudosDialog({
  isOpen,
  onClose,
  teamMembers,
  currentUserId,
}: GiveKudosDialogProps) {
  const router = useRouter();

  if (!isOpen) return null;

  function handleSuccess() {
    onClose();
    router.refresh();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative bg-white w-full sm:max-w-lg sm:rounded-lg rounded-t-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="give-kudos-title"
      >
        <div className="sticky top-0 bg-white border-b border-[#d8d9db] px-6 py-4 flex items-center justify-between z-10">
          <h2
            id="give-kudos-title"
            className="text-xl font-semibold text-[#212631]"
          >
            Give Kudos
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 hover:bg-[#d8d9db] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <GiveKudosForm
            teamMembers={teamMembers}
            currentUserId={currentUserId}
            noCard
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
}
