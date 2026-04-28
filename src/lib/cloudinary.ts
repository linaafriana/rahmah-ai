const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const isCloudinaryConfigured = Boolean(cloud);

export function buildAudioUrl(
  publicId: string | undefined,
  format: "mp3" | "m4a" | "ogg" = "mp3",
): string | null {
  if (!cloud || !publicId) return null;
  return `https://res.cloudinary.com/${cloud}/video/upload/${publicId}.${format}`;
}
