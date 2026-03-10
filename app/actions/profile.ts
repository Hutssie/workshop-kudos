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

  // On Vercel/serverless we can't write to the filesystem; avatar upload is local-only for now.
  if (process.env.VERCEL) {
    return {
      success: false,
      error: "Avatar upload is not available in this environment. Use the app locally to change your photo.",
    };
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
