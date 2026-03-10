import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getCurrentUser } from "@/lib/session";
import { getTeamMembers } from "@/lib/team";
import { ClientAppShell } from "@/components/layout/ClientAppShell";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kudos",
  description: "Give and see team recognition",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  const teamMembers = await getTeamMembers();

  const currentUserSerialized = currentUser
    ? {
        id: currentUser.id,
        name: currentUser.name,
        displayName: currentUser.displayName,
        avatarUrl: currentUser.avatarUrl,
      }
    : null;
  const teamMembersSerialized = teamMembers.map((m) => ({
    id: m.id,
    name: m.name,
    displayName: m.displayName,
    position: m.position,
  }));

  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-[#f5f6f8] text-[#212631]`}
      >
        <Suspense fallback={<div className="min-h-screen bg-[#f5f6f8]" />}>
          <ClientAppShell
            currentUser={currentUserSerialized}
            teamMembers={teamMembersSerialized}
          >
            {children}
          </ClientAppShell>
        </Suspense>
      </body>
    </html>
  );
}
