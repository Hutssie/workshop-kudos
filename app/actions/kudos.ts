"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { CATEGORY_OPTIONS } from "@/lib/categories";
import type { KudosCategory } from "@prisma/client";

const MAX_MESSAGE_LENGTH = 500;

const VALID_CATEGORIES = new Set<string>(CATEGORY_OPTIONS);

export type SubmitKudosResult =
  | { success: true }
  | { success: false; error?: string; fieldErrors?: Record<string, string> };

export async function submitKudos(formData: FormData): Promise<SubmitKudosResult> {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { success: false, error: "You must be logged in to give kudos." };
  }

  const recipientId = formData.get("recipientId");
  const category = formData.get("category");
  const message = formData.get("message");

  const fieldErrors: Record<string, string> = {};

  if (!recipientId || typeof recipientId !== "string" || !recipientId.trim()) {
    fieldErrors.recipientId = "Select a team member to recognize.";
  }

  if (!category || typeof category !== "string" || !VALID_CATEGORIES.has(category)) {
    fieldErrors.category = "Select a category.";
  }

  if (!message || typeof message !== "string") {
    fieldErrors.message = "Enter a message.";
  } else if (message.trim().length === 0) {
    fieldErrors.message = "Message is required.";
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    fieldErrors.message = `Message must be at most ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  const recipient = await prisma.teamMember.findUnique({
    where: { id: (recipientId as string).trim() },
  });
  if (!recipient) {
    fieldErrors.recipientId = "Selected team member not found.";
    return { success: false, fieldErrors };
  }

  if (recipient.id === currentUser.id) {
    fieldErrors.recipientId = "You can't give kudos to yourself.";
    return { success: false, fieldErrors };
  }

  try {
    await prisma.kudos.create({
      data: {
        giverId: currentUser.id,
        recipientId: recipient.id,
        category: category as KudosCategory,
        message: (message as string).trim(),
      },
    });
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

export type UpdateKudosMessageResult =
  | { success: true }
  | { success: false; error?: string; fieldErrors?: Record<string, string> };

export async function updateKudosMessage(
  kudosId: string,
  formData: FormData
): Promise<UpdateKudosMessageResult> {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { success: false, error: "You must be logged in to edit kudos." };
  }

  if (!kudosId || typeof kudosId !== "string" || !kudosId.trim()) {
    return { success: false, error: "Invalid kudos." };
  }

  const message = formData.get("message");
  const fieldErrors: Record<string, string> = {};

  if (!message || typeof message !== "string") {
    fieldErrors.message = "Enter a message.";
  } else if (message.trim().length === 0) {
    fieldErrors.message = "Message is required.";
  } else if (message.length > MAX_MESSAGE_LENGTH) {
    fieldErrors.message = `Message must be at most ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors };
  }

  try {
    const kudos = await prisma.kudos.findUnique({
      where: { id: kudosId.trim() },
    });
    if (!kudos) {
      return { success: false, error: "Kudos not found." };
    }
    if (kudos.giverId !== currentUser.id) {
      return { success: false, error: "You can only edit kudos you gave." };
    }

    await prisma.kudos.update({
      where: { id: kudos.id },
      data: { message: (message as string).trim() },
    });
    revalidatePath("/feed");
    return { success: true };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
