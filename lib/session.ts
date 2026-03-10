import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";
import { prisma } from "@/lib/prisma";
import type { TeamMember } from "@prisma/client";

const SESSION_COOKIE = "kudos_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("SESSION_SECRET must be set and at least 32 characters");
  }
  return secret;
}

function sign(payload: string): string {
  return createHmac("sha256", getSecret()).update(payload).digest("base64url");
}

function getSessionCookie(): Promise<string | undefined> {
  return cookies().then((c) => c.get(SESSION_COOKIE)?.value);
}

export interface SessionData {
  teamMemberId: string;
}

export async function getSession(): Promise<SessionData | null> {
  const raw = await getSessionCookie();
  if (!raw) return null;

  const [payloadB64, sigB64] = raw.split(".");
  if (!payloadB64 || !sigB64) return null;

  try {
    const payload = Buffer.from(payloadB64, "base64url").toString("utf8");
    const expectedSig = sign(payloadB64);
    const sigBuffer = Buffer.from(sigB64, "utf8");
    const expectedBuffer = Buffer.from(expectedSig, "utf8");
    if (sigBuffer.length !== expectedBuffer.length || !timingSafeEqual(sigBuffer, expectedBuffer)) {
      return null;
    }
    const data = JSON.parse(payload) as SessionData;
    if (typeof data.teamMemberId !== "string") return null;
    return data;
  } catch {
    return null;
  }
}

export async function setSession(teamMemberId: string): Promise<void> {
  const payload = JSON.stringify({ teamMemberId } satisfies SessionData);
  const payloadB64 = Buffer.from(payload, "utf8").toString("base64url");
  const sig = sign(payloadB64);
  const value = `${payloadB64}.${sig}`;

  const store = await cookies();
  store.set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_MAX_AGE,
    path: "/",
  });
}

export async function clearSession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function getCurrentUser(): Promise<TeamMember | null> {
  const session = await getSession();
  if (!session) return null;
  const user = await prisma.teamMember.findUnique({
    where: { id: session.teamMemberId },
  });
  return user;
}
