import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

/**
 * Saves an uploaded avatar file to disk (local dev).
 * Returns the public URL path to serve the image (e.g. /uploads/avatars/xyz.jpg).
 * For production (e.g. Vercel), replace with Vercel Blob or S3 and return the blob URL.
 */
export async function saveAvatarFile(file: File): Promise<string> {
  const type = file.type;
  if (!ALLOWED_TYPES.includes(type)) {
    throw new Error("Invalid file type. Use JPEG, PNG, or WebP.");
  }
  if (file.size > MAX_SIZE_BYTES) {
    throw new Error("Image must be 2MB or smaller.");
  }

  const ext = EXT_BY_MIME[type] ?? ".jpg";
  const filename = `${randomUUID()}${ext}`;

  // public/uploads/avatars is served at /uploads/avatars
  const uploadDir = path.join(process.cwd(), "public", "uploads", "avatars");
  await mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(uploadDir, filename);
  await writeFile(filePath, buffer);

  return `/uploads/avatars/${filename}`;
}
