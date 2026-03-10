"use server";

import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { saveAvatarFile } from "@/lib/upload";

export type UpdateAvatarResult =
  | { success: true }
  | { success: false; error: string };

export async function updateProfileAvatar(
  formData: FormData
): Promise<UpdateAvatarResult> {
  const user = await getCurrentUser();
  if (!user) {
    return { success: false, error: "You must be logged in." };
  }

  const avatar = formData.get("avatar");
  if (!(avatar instanceof File) || avatar.size === 0) {
    return { success: false, error: "Please select an image." };
  }

  try {
    const avatarUrl = await saveAvatarFile(avatar);
    await prisma.teamMember.update({
      where: { id: user.id },
      data: { avatarUrl },
    });
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to update photo.",
    };
  }
}

export type UpdateProfileInfoResult =
  | { success: true }
  | { success: false; error: string };

export async function updateProfileInfo(
  displayName: string | null,
  position: string | null
): Promise<UpdateProfileInfoResult> {
  const user = await getCurrentUser();
  if (!user) {
    return { success: false, error: "You must be logged in." };
  }

  const displayNameTrimmed = displayName?.trim() ?? "";
  const positionTrimmed = position?.trim() ?? "";

  try {
    await prisma.teamMember.update({
      where: { id: user.id },
      data: {
        displayName: displayNameTrimmed || null,
        position: positionTrimmed || null,
      },
    });
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to update profile.",
    };
  }
}
