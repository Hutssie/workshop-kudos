"use client";

import { useState, useEffect, useRef } from "react";
import type { TeamMember } from "@prisma/client";
import type { KudosCategory } from "@prisma/client";
import { CATEGORY_OPTIONS, CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/categories";
import { submitKudos } from "@/app/actions/kudos";

const MAX_MESSAGE_LENGTH = 500;

interface GiveKudosFormProps {
  teamMembers: TeamMember[];
  /** Current user's team member id – excluded from recipient list so you can't give kudos to yourself */
  currentUserId?: string | null;
  /** When true, form is rendered without outer card (e.g. inside dialog) */
  noCard?: boolean;
  /** Called when kudos is submitted successfully (e.g. close dialog and refresh) */
  onSuccess?: () => void;
}

export function GiveKudosForm({ teamMembers, currentUserId, noCard, onSuccess }: GiveKudosFormProps) {
  const [recipientId, setRecipientId] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [category, setCategory] = useState<KudosCategory | "">("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectedUserObj = recipientId
    ? teamMembers.find((m) => m.id === recipientId) ?? null
    : null;
  const availableUsers = currentUserId
    ? teamMembers.filter((m) => m.id !== currentUserId)
    : teamMembers;

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isDropdownOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIsDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDropdownOpen]);

  const messageLength = message.length;
  const isOverLimit = messageLength > MAX_MESSAGE_LENGTH;
  const isValid =
    recipientId.trim() !== "" &&
    category !== "" &&
    message.trim() !== "" &&
    !isOverLimit;
  const isDisabled = !isValid || isSubmitting;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError(null);
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const result = await submitKudos(formData);
      if (!result.success) {
        if (result.fieldErrors) setFieldErrors(result.fieldErrors);
        if (result.error) setSubmitError(result.error);
      } else {
        onSuccess?.();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 ${noCard ? "" : "rounded-lg border border-[#d8d9db] bg-white p-6 shadow-sm"}`}
      noValidate
    >
      <div>
        <label htmlFor="recipientId" className="block text-sm font-medium text-[#3d4657] mb-2">
          Who are you recognizing?
        </label>
        <div
          ref={dropdownRef}
          className="relative"
          aria-describedby={fieldErrors.recipientId ? "recipientId-error" : undefined}
        >
          <input type="hidden" name="recipientId" value={recipientId} />
          {/* Dropdown Button */}
          <button
            type="button"
            id="recipientId"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`w-full px-4 py-2.5 pr-12 border-2 rounded-lg bg-white text-left font-medium focus:outline-none focus:ring-2 focus:ring-[#5b6880] hover:border-[#b0b2b6] transition-all ${
              isDropdownOpen ? "border-[#5b6880] ring-2 ring-[#5b6880]" : "border-[#d8d9db]"
            } ${selectedUserObj ? "text-[#212631]" : "text-[#8a8c91]"}`}
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
            aria-invalid={!!fieldErrors.recipientId}
          >
            {selectedUserObj
              ? `${selectedUserObj.displayName ?? selectedUserObj.name}${selectedUserObj.position ? ` - ${selectedUserObj.position}` : ""}`
              : "Select a team member"}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute z-10 w-full mt-2 bg-white border-2 border-[#d8d9db] rounded-lg shadow-lg max-h-64 overflow-y-auto"
              role="listbox"
              aria-label="Team members"
            >
              {availableUsers.map((user, index) => (
                <button
                  key={user.id}
                  type="button"
                  role="option"
                  aria-selected={recipientId === user.id}
                  onClick={() => {
                    setRecipientId(user.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-[#f5f6f7] transition-colors ${
                    index !== availableUsers.length - 1 ? "border-b border-[#e8e9eb]" : ""
                  } ${recipientId === user.id ? "bg-[#f0f7ff] text-[#5b6880] font-semibold" : "text-[#212631]"}`}
                >
                  <div className="font-medium">{user.displayName ?? user.name}</div>
                  <div className="text-sm text-[#66686c] mt-0.5">
                    {user.position ?? "Team Member"}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        {fieldErrors.recipientId && (
          <p id="recipientId-error" className="mt-1 text-sm text-red-600" role="alert">
            {fieldErrors.recipientId}
          </p>
        )}
      </div>

      <div>
        <fieldset>
          <legend className="block text-sm font-medium text-[#3d4657] mb-2">
            Category
          </legend>
          <div
            className="mt-2 grid grid-cols-2 gap-2"
            role="group"
            aria-describedby={fieldErrors.category ? "category-error" : undefined}
            aria-invalid={!!fieldErrors.category}
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <label
                key={opt}
                className={`flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-[#5b6880] focus-within:ring-offset-1 ${
                  category === opt
                    ? "border-transparent text-white"
                    : "border-[#d8d9db] text-[#3d4657] hover:border-[#b0b2b6]"
                }`}
                style={
                  category === opt
                    ? { backgroundColor: CATEGORY_COLORS[opt] }
                    : undefined
                }
              >
                <input
                  type="radio"
                  name="category"
                  value={opt}
                  checked={category === opt}
                  onChange={() => setCategory(opt)}
                  className="sr-only"
                />
                {CATEGORY_LABELS[opt]}
              </label>
            ))}
          </div>
          {fieldErrors.category && (
            <p id="category-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.category}
            </p>
          )}
        </fieldset>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#3d4657] mb-2">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={MAX_MESSAGE_LENGTH}
          rows={4}
          placeholder="Write why this person deserves recognition..."
          className="mt-1 block w-full rounded-lg border border-[#b0b2b6] px-4 py-3 text-[#212631] placeholder:text-[#8a8c91] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-opacity-50 resize-none"
          aria-describedby={
            fieldErrors.message || isOverLimit
              ? "message-error message-counter"
              : "message-counter"
          }
          aria-invalid={!!fieldErrors.message || isOverLimit}
        />
        <div className="mt-1 flex justify-end">
          <span id="message-counter" className="text-xs text-[#8a8c91] text-right" aria-live="polite">
            {messageLength}/{MAX_MESSAGE_LENGTH}
          </span>
          {fieldErrors.message && (
            <p id="message-error" className="text-sm text-red-600" role="alert">
              {fieldErrors.message}
            </p>
          )}
        </div>
        {isOverLimit && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            Message must be at most {MAX_MESSAGE_LENGTH} characters.
          </p>
        )}
      </div>

      {submitError && (
        <p className="rounded bg-red-50 p-3 text-sm text-red-700" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isDisabled}
        className="w-full rounded-lg bg-[#357d1c] py-4 font-semibold text-white hover:bg-[#49a628] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-[#b0b2b6]"
      >
        {isSubmitting ? "Sending…" : "Send Kudos"}
      </button>
    </form>
  );
}
