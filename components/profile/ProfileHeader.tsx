"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Pencil, Check, X } from "lucide-react";
import { updateProfileAvatar, updateProfileInfo } from "@/app/actions/profile";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(displayName);
  const [editPosition, setEditPosition] = useState(roleLabel);
  const [isSaving, setIsSaving] = useState(false);

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

  function startEditing() {
    setEditName(displayName);
    setEditPosition(roleLabel);
    setError(null);
    setIsEditing(true);
  }

  function cancelEditing() {
    setEditName(displayName);
    setEditPosition(roleLabel);
    setError(null);
    setIsEditing(false);
  }

  async function saveEditing() {
    setError(null);
    setIsSaving(true);
    const result = await updateProfileInfo(
      editName.trim() || null,
      editPosition.trim() || null
    );
    setIsSaving(false);
    if (result.success) {
      setIsEditing(false);
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
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-[#d8d9db] px-3 py-2 text-lg font-bold text-[#212631] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:border-transparent"
                autoFocus
                disabled={isSaving}
              />
              <input
                type="text"
                value={editPosition}
                onChange={(e) => setEditPosition(e.target.value)}
                placeholder="Position / role"
                className="w-full rounded-lg border border-[#d8d9db] px-3 py-2 text-[#66686c] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:border-transparent"
                disabled={isSaving}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={saveEditing}
                  disabled={isSaving || !editName.trim()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#5b6880] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#4a5768] disabled:opacity-50 disabled:pointer-events-none"
                >
                  <Check className="w-4 h-4" />
                  {isSaving ? "Saving…" : "Save"}
                </button>
                <button
                  type="button"
                  onClick={cancelEditing}
                  disabled={isSaving}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#d8d9db] px-3 py-1.5 text-sm font-medium text-[#212631] hover:bg-[#f5f6f8] disabled:opacity-50 disabled:pointer-events-none"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold text-[#212631]">
                  {displayName}
                </h1>
                <button
                  type="button"
                  onClick={startEditing}
                  className="rounded p-1 text-[#5b6880] hover:bg-[#e8eaed] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-1"
                  aria-label="Edit name and position"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[#66686c]">{roleLabel}</p>
            </>
          )}
          {error && (
            <p className="mt-2 text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>
    </div>
  );
}
