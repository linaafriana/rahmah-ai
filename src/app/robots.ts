import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakinah.example.com";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sign-in", "/onboarding", "/kembali"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
