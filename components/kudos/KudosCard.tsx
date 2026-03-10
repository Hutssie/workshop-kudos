"use client";

import { useState, useTransition } from "react";
import type { TeamMember } from "@prisma/client";
import { Heart, MessageCircle } from "lucide-react";
import { CategoryBadge } from "@/components/kudos/CategoryBadge";
import type { FeedKudosItem, KudosWithRelations } from "@/lib/feed";
import { toggleKudosLike } from "@/app/actions/likes";
import {
  getKudosComments,
  submitKudosComment,
  type SerializedComment,
} from "@/app/actions/comments";

type KudosCardKudos = FeedKudosItem | KudosWithRelations;

interface KudosCardProps {
  kudos: KudosCardKudos;
  currentUser?: TeamMember | null;
}

function formatRelativeTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffSec < 60) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHour < 24) return `${diffHour}h ago`;
  if (diffDay < 7) return `${diffDay}d ago`;
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(d);
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5b6880] text-sm font-medium text-white"
      aria-hidden
    >
      {initials}
    </span>
  );
}

function isFeedItem(k: KudosCardKudos): k is FeedKudosItem {
  return "likesCount" in k && typeof (k as FeedKudosItem).likesCount === "number";
}

export function KudosCard({ kudos, currentUser }: KudosCardProps) {
  const likesCount = isFeedItem(kudos) ? kudos.likesCount : 0;
  const commentsCount = isFeedItem(kudos) ? kudos.commentsCount : 0;
  const [currentUserLiked, setCurrentUserLiked] = useState(
    isFeedItem(kudos) ? kudos.currentUserLiked : false
  );
  const [optimisticLikesCount, setOptimisticLikesCount] = useState(likesCount);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [comments, setComments] = useState<SerializedComment[] | null>(null);
  const [commentBody, setCommentBody] = useState("");
  const [isPendingLike, startLikeTransition] = useTransition();
  const [isPendingComment, startCommentTransition] = useTransition();

  const giverName = kudos.giver.displayName ?? kudos.giver.name;
  const recipientName = kudos.recipient.displayName ?? kudos.recipient.name;
  const canEngage = !!currentUser;

  const handleLikeClick = () => {
    if (!canEngage || isPendingLike) return;
    startLikeTransition(async () => {
      setCurrentUserLiked((prev) => !prev);
      setOptimisticLikesCount((prev) => (currentUserLiked ? prev - 1 : prev + 1));
      const result = await toggleKudosLike(kudos.id);
      if (!result.success) {
        setCurrentUserLiked((prev) => !prev);
        setOptimisticLikesCount((prev) => (currentUserLiked ? prev + 1 : prev - 1));
      }
    });
  };

  const handleCommentClick = () => {
    setCommentsOpen((prev) => !prev);
    if (!commentsOpen && comments === null) {
      getKudosComments(kudos.id).then(setComments);
    }
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canEngage || !commentBody.trim() || isPendingComment) return;
    const body = commentBody;
    setCommentBody("");
    startCommentTransition(async () => {
      const result = await submitKudosComment(kudos.id, body);
      if (result.success && result.comment) {
        setComments((prev) => (prev ? [...prev, result.comment!] : [result.comment!]));
      }
    });
  };

  return (
    <article
      className="bg-white rounded-lg p-4 shadow-sm border border-[#d8d9db] hover:shadow-md transition-shadow"
      aria-label={`Kudos from ${giverName} to ${recipientName}`}
    >
      <div className="flex items-start gap-3 mb-3">
        {kudos.giver.avatarUrl ? (
          <img
            src={kudos.giver.avatarUrl}
            alt=""
            className="h-10 w-10 rounded-full object-cover shrink-0"
          />
        ) : (
          <AvatarPlaceholder name={giverName} />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-[#212631]">{giverName}</span>
            <span className="text-[#8a8c91] text-sm" aria-hidden>
              →
            </span>
            <span className="font-semibold text-[#212631]">{recipientName}</span>
          </div>
          <p className="text-sm text-[#66686c]">
            {formatRelativeTime(kudos.createdAt)}
          </p>
        </div>
      </div>

      <div className="mb-3">
        <CategoryBadge category={kudos.category} className="inline-block" />
      </div>

      <p className="text-[#3d4657] mb-4 leading-relaxed">{kudos.message}</p>

      <div className="flex items-center gap-4 text-[#8a8c91]">
        <button
          type="button"
          onClick={handleLikeClick}
          disabled={!canEngage || isPendingLike}
          className={`flex items-center gap-1.5 transition-colors ${
            canEngage ? "hover:text-[#357d1c]" : "cursor-default opacity-70"
          } ${currentUserLiked ? "text-[#357d1c]" : ""}`}
          aria-pressed={currentUserLiked}
        >
          <Heart
            className={`w-4 h-4 ${currentUserLiked ? "fill-current" : ""}`}
          />
          <span className="text-sm">{optimisticLikesCount}</span>
        </button>
        <button
          type="button"
          onClick={handleCommentClick}
          className="flex items-center gap-1.5 hover:text-[#5b6880] transition-colors"
          aria-expanded={commentsOpen}
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">
            Comment{commentsCount > 0 ? ` (${commentsCount})` : ""}
          </span>
        </button>
      </div>

      {commentsOpen && (
        <div className="mt-4 pt-4 border-t border-[#d8d9db]">
          <div className="space-y-3 mb-4">
            {comments === null ? (
              <p className="text-sm text-[#8a8c91]">Loading comments…</p>
            ) : comments.length === 0 ? (
              <p className="text-sm text-[#8a8c91]">No comments yet.</p>
            ) : (
              comments.map((c) => (
                <div
                  key={c.id}
                  className="flex gap-2 text-sm"
                >
                  {c.author.avatarUrl ? (
                    <img
                      src={c.author.avatarUrl}
                      alt=""
                      className="h-8 w-8 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <AvatarPlaceholder
                      name={c.author.displayName ?? c.author.name}
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-[#212631]">
                      {c.author.displayName ?? c.author.name}
                    </span>{" "}
                    <span className="text-[#66686c]">
                      {formatRelativeTime(c.createdAt)}
                    </span>
                    <p className="text-[#3d4657] mt-0.5">{c.body}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          {canEngage && (
            <form onSubmit={handleSubmitComment} className="flex gap-2">
              <textarea
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                placeholder="Write a comment…"
                rows={2}
                maxLength={500}
                className="flex-1 rounded border border-[#d8d9db] px-3 py-2 text-sm text-[#212631] placeholder:text-[#8a8c91] focus:outline-none focus:ring-2 focus:ring-[#5b6880]"
                disabled={isPendingComment}
              />
              <button
                type="submit"
                disabled={!commentBody.trim() || isPendingComment}
                className="shrink-0 px-4 py-2 rounded bg-[#5b6880] text-white text-sm font-medium hover:bg-[#4a5769] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPendingComment ? "Posting…" : "Post"}
              </button>
            </form>
          )}
        </div>
      )}
    </article>
  );
}
