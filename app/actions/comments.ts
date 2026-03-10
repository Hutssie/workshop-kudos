"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { getCommentsForKudos } from "@/lib/feed";

const MAX_COMMENT_LENGTH = 500;

export type SubmitKudosCommentResult =
  | { success: true; comment: SerializedComment }
  | { success: false; error: string };

export type SerializedComment = {
  id: string;
  kudosId: string;
  authorId: string;
  body: string;
  createdAt: string;
  editedAt: string | null;
  author: {
    id: string;
    name: string;
    displayName: string | null;
    avatarUrl: string | null;
  };
};

export async function submitKudosComment(
  kudosId: string,
  body: string
): Promise<SubmitKudosCommentResult> {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { success: false, error: "You must be logged in to comment." };
  }

  if (!kudosId || typeof kudosId !== "string" || !kudosId.trim()) {
    return { success: false, error: "Invalid kudos." };
  }

  const trimmedBody = typeof body === "string" ? body.trim() : "";
  if (trimmedBody.length === 0) {
    return { success: false, error: "Comment cannot be empty." };
  }
  if (trimmedBody.length > MAX_COMMENT_LENGTH) {
    return {
      success: false,
      error: `Comment must be at most ${MAX_COMMENT_LENGTH} characters.`,
    };
  }

  try {
    const kudos = await prisma.kudos.findUnique({
      where: { id: kudosId.trim() },
    });
    if (!kudos) {
      return { success: false, error: "Kudos not found." };
    }

    const comment = await prisma.kudosComment.create({
      data: {
        kudosId: kudos.id,
        authorId: currentUser.id,
        body: trimmedBody,
      },
      include: { author: true },
    });

    revalidatePath("/feed");
    return {
      success: true,
      comment: {
        id: comment.id,
        kudosId: comment.kudosId,
        authorId: comment.authorId,
        body: comment.body,
        createdAt: comment.createdAt.toISOString(),
        editedAt: null,
        author: {
          id: comment.author.id,
          name: comment.author.name,
          displayName: comment.author.displayName,
          avatarUrl: comment.author.avatarUrl,
        },
      },
    };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function getKudosComments(kudosId: string): Promise<SerializedComment[]> {
  const comments = await getCommentsForKudos(kudosId);
  return comments.map((c) => ({
    id: c.id,
    kudosId: c.kudosId,
    authorId: c.authorId,
    body: c.body,
    createdAt: c.createdAt.toISOString(),
    editedAt: c.editedAt?.toISOString() ?? null,
    author: {
      id: c.author.id,
      name: c.author.name,
      displayName: c.author.displayName,
      avatarUrl: c.author.avatarUrl,
    },
  }));
}

export type UpdateKudosCommentResult =
  | { success: true; comment: SerializedComment }
  | { success: false; error: string };

export async function updateKudosComment(
  commentId: string,
  body: string
): Promise<UpdateKudosCommentResult> {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return { success: false, error: "You must be logged in to edit a comment." };
  }

  if (!commentId || typeof commentId !== "string" || !commentId.trim()) {
    return { success: false, error: "Invalid comment." };
  }

  const trimmedBody = typeof body === "string" ? body.trim() : "";
  if (trimmedBody.length === 0) {
    return { success: false, error: "Comment cannot be empty." };
  }
  if (trimmedBody.length > MAX_COMMENT_LENGTH) {
    return {
      success: false,
      error: `Comment must be at most ${MAX_COMMENT_LENGTH} characters.`,
    };
  }

  try {
    const comment = await prisma.kudosComment.findUnique({
      where: { id: commentId.trim() },
      include: { author: true },
    });
    if (!comment) {
      return { success: false, error: "Comment not found." };
    }
    if (comment.authorId !== currentUser.id) {
      return { success: false, error: "You can only edit your own comments." };
    }

    const updated = await prisma.kudosComment.update({
      where: { id: comment.id },
      data: { body: trimmedBody, editedAt: new Date() },
      include: { author: true },
    });

    revalidatePath("/feed");
    return {
      success: true,
      comment: {
        id: updated.id,
        kudosId: updated.kudosId,
        authorId: updated.authorId,
        body: updated.body,
        createdAt: updated.createdAt.toISOString(),
        editedAt: updated.editedAt?.toISOString() ?? null,
        author: {
          id: updated.author.id,
          name: updated.author.name,
          displayName: updated.author.displayName,
          avatarUrl: updated.author.avatarUrl,
        },
      },
    };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
