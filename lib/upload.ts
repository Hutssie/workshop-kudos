import { put } from "@vercel/blob";
import { randomUUID } from "crypto";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

/**
 * Uploads an avatar to Vercel Blob (works locally and on Vercel).
 * Returns the public URL to use in <img src={url} />.
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
  const filename = `avatars/${randomUUID()}${ext}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { url } = await put(filename, buffer, {
    access: "public",
    contentType: type,
  });

  return url;
}
