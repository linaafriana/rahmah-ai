"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BottomNav } from "@/components/ui/BottomNav";
import { OfflineBanner } from "@/components/ui/OfflineBanner";
import { useAuth } from "@/providers/AuthProvider";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/sign-in");
    }
  }, [loading, user, router]);

  if (loading) {
    return (
      <div className="flex min-h-dvh items-center justify-center text-ink-soft">
        <span className="text-sm">Memuat…</span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="relative min-h-dvh bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary focus:shadow-soft-lg"
      >
        Lewati ke konten utama
      </a>
      <OfflineBanner />
      <main id="main-content" className="mx-auto max-w-md px-5 pb-28 pt-6">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
