"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera } from "lucide-react";
import { updateProfileAvatar } from "@/app/actions/profile";

interface ProfileHeaderProps {
  displayName: string;
  roleLabel: string;
  avatarUrl: string | null;
}

export function ProfileHeader({
  displayName,
  roleLabel,
  avatarUrl,
}: ProfileHeaderProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setIsUploading(true);
    const formData = new FormData();
    formData.set("avatar", file);
    const result = await updateProfileAvatar(formData);
    setIsUploading(false);
    e.target.value = "";
    if (result.success) {
      router.refresh();
    } else {
      setError(result.error);
    }
  }

  return (
    <div className="flex items-start gap-4 mb-6">
      <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="sr-only"
          aria-label="Upload new profile picture"
          onChange={handleFileChange}
          disabled={isUploading}
        />
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="relative group shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2 disabled:opacity-70"
          aria-label="Change profile picture"
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt=""
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5b6880] text-2xl font-medium text-white">
              {initials}
            </span>
          )}
          <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
            {isUploading ? (
              <span className="text-white text-sm font-medium">Uploading…</span>
            ) : (
              <Camera className="w-8 h-8 text-white" aria-hidden />
            )}
          </span>
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#212631] mb-1">
            {displayName}
          </h1>
          <p className="text-[#66686c]">{roleLabel}</p>
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
    </div>
  );
}
