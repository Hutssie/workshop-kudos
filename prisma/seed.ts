import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

const DEV_PASSWORD = "password123";

async function main() {
  const team = [
    { email: "alex@example.com", name: "Alex", displayName: "Alex", position: "Developer" },
    { email: "sam@example.com", name: "Sam", displayName: "Sam", position: "Designer" },
    { email: "jordan@example.com", name: "Jordan", displayName: "Jordan", position: "Manager" },
    { email: "casey@example.com", name: "Casey", displayName: "Casey", position: "Engineer" },
    { email: "riley@example.com", name: "Riley", displayName: "Riley", position: "Researcher" },
  ];

  const existing = await prisma.teamMember.count();
  if (existing === 0) {
    const passwordHash = await bcrypt.hash(DEV_PASSWORD, 10);
    await prisma.teamMember.createMany({
      data: team.map((m) => ({
        ...m,
        passwordHash,
      })),
    });
    console.log("Seeded", team.length, "team members. Dev password:", DEV_PASSWORD);
  } else {
    console.log("Team members already exist, skipping seed.");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
