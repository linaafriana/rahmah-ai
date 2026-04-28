import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Amiri } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/providers/AuthProvider";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://rahmah.example.com";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rahmah",
    template: "%s · Rahmah",
  },
  description:
    "Teman lembut untuk perjalanan kembali kepada Allah — sholat, dzikir, Quran, dan ilmu agama dalam satu tempat yang tenang.",
  applicationName: "Rahmah",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rahmah",
  },
  icons: {
    icon: "/icons/icon.svg",
    apple: "/icons/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Rahmah",
    title: "Rahmah",
    description:
      "Teman lembut untuk perjalanan kembali kepada Allah — sholat, dzikir, Quran, dan ilmu agama.",
  },
  twitter: {
    card: "summary",
    title: "Rahmah",
    description: "Teman lembut untuk perjalanan kembali kepada Allah",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF6F0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${jakarta.variable} ${amiri.variable} font-sans bg-background text-ink antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
