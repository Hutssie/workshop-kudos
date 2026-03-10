-- AlterTable: add missing columns to team_members (schema had them, first migration didn't)
ALTER TABLE "team_members"
  ADD COLUMN IF NOT EXISTS "email" TEXT,
  ADD COLUMN IF NOT EXISTS "position" TEXT,
  ADD COLUMN IF NOT EXISTS "passwordHash" TEXT,
  ADD COLUMN IF NOT EXISTS "avatarUrl" TEXT;

-- Backfill existing rows with unique placeholder so we can set NOT NULL
UPDATE "team_members"
SET "email" = 'legacy-' || "id" || '@example.com', "passwordHash" = ''
WHERE "email" IS NULL OR "passwordHash" IS NULL;

ALTER TABLE "team_members" ALTER COLUMN "email" SET NOT NULL;
ALTER TABLE "team_members" ALTER COLUMN "passwordHash" SET NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS "team_members_email_key" ON "team_members"("email");
