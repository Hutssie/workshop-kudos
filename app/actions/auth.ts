"use server";

import { setSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";
import { saveAvatarFile } from "@/lib/upload";

export type SignupResult =
  | { success: true }
  | { success: false; error?: string; fieldErrors?: Record<string, string> };

const MIN_PASSWORD_LENGTH = 6;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signup(formData: FormData): Promise<SignupResult> {
  const fieldErrors: Record<string, string> = {};

  try {
    const emailRaw = formData.get("email");
    const fullName = formData.get("fullName");
    const position = formData.get("position");
    const password = formData.get("password");
    const avatar = formData.get("avatar");

    if (typeof emailRaw !== "string" || !emailRaw.trim()) {
      fieldErrors.email = "Email is required.";
    } else {
      const email = emailRaw.trim().toLowerCase();
      if (!EMAIL_REGEX.test(email)) {
        fieldErrors.email = "Enter a valid email address.";
      } else {
        const existing = await prisma.teamMember.findUnique({
          where: { email },
        });
        if (existing) {
          fieldErrors.email = "Email already in use.";
        }
      }
    }

    if (typeof fullName !== "string" || !fullName.trim()) {
      fieldErrors.fullName = "Full name is required.";
    }

    if (typeof password !== "string" || !password.trim()) {
      fieldErrors.password = "Password is required.";
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      fieldErrors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
    }

    if (Object.keys(fieldErrors).length > 0) {
      return { success: false, fieldErrors };
    }

    const email = (emailRaw as string).trim().toLowerCase();
    const name = (fullName as string).trim();
    const positionValue =
      typeof position === "string" && position.trim()
        ? position.trim()
        : null;
    const passwordHash = await hashPassword(password as string);

    let avatarUrl: string | null = null;
    if (avatar instanceof File && avatar.size > 0) {
      try {
        avatarUrl = await saveAvatarFile(avatar);
      } catch (err) {
        return {
          success: false,
          fieldErrors: {
            avatar:
              err instanceof Error ? err.message : "Failed to save image.",
          },
        };
      }
    }

    const member = await prisma.teamMember.create({
      data: {
        email,
        name,
        displayName: name,
        position: positionValue,
        passwordHash,
        avatarUrl,
      },
    });
    await setSession(member.id);
    return { success: true };
  } catch (err) {
    const isPrismaError = err && typeof err === "object" && "code" in err;
    if (isPrismaError && (err as { code: string }).code === "P2002") {
      return {
        success: false,
        fieldErrors: { email: "Email already in use." },
      };
    }
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
