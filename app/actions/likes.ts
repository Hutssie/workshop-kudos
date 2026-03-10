"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";

export type ToggleKudosLikeResult =
  | { success: true; liked: boolean }
  | { success: false; error: string };

export async function toggleKudosLike(kudosId: string): Promise<ToggleKudosLikeResult> {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { success: false, error: "You must be logged in to like kudos." };
  }

  if (!kudosId || typeof kudosId !== "string" || !kudosId.trim()) {
    return { success: false, error: "Invalid kudos." };
  }

  try {
    const existing = await prisma.kudosLike.findUnique({
      where: {
        kudosId_teamMemberId: {
          kudosId: kudosId.trim(),
          teamMemberId: currentUser.id,
        },
      },
    });

    if (existing) {
      await prisma.kudosLike.delete({
        where: { id: existing.id },
      });
      revalidatePath("/feed");
      return { success: true, liked: false };
    }

    await prisma.kudosLike.create({
      data: {
        kudosId: kudosId.trim(),
        teamMemberId: currentUser.id,
      },
    });
    revalidatePath("/feed");
    return { success: true, liked: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
