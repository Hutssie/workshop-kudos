"use server";

import { redirect } from "next/navigation";
import { setSession, clearSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";

export type LoginResult =
  | { success: true }
  | { success: false; error: string };

export async function login(formData: FormData): Promise<LoginResult> {
  try {
    const emailRaw = formData.get("email");
    const password = formData.get("password");

    if (typeof emailRaw !== "string" || !emailRaw.trim()) {
      return { success: false, error: "Email is required." };
    }
    if (typeof password !== "string" || !password.trim()) {
      return { success: false, error: "Password is required." };
    }

    const email = emailRaw.trim().toLowerCase();

    const member = await prisma.teamMember.findUnique({
      where: { email },
    });
    if (!member) {
      return { success: false, error: "Invalid email or password." };
    }

    const valid = await verifyPassword(password, member.passwordHash);
    if (!valid) {
      return { success: false, error: "Invalid email or password." };
    }

    await setSession(member.id);
    return { success: true };
  } catch {
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function setCurrentUser(formData: FormData) {
  const teamMemberId = formData.get("teamMemberId");
  if (typeof teamMemberId !== "string" || !teamMemberId.trim()) {
    redirect("/?error=missing");
  }

  const member = await prisma.teamMember.findUnique({
    where: { id: teamMemberId.trim() },
  });
  if (!member) {
    redirect("/?error=invalid");
  }

  await setSession(member.id);
  redirect("/");
}

export async function clearCurrentUser() {
  await clearSession();
  redirect("/");
}
