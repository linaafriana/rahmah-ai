"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LeafShape } from "@/components/illustrations/LeafShape";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const onboarded =
      typeof window !== "undefined" &&
      window.localStorage.getItem("sakinah:onboarded") === "true";
    router.replace(onboarded ? "/home" : "/onboarding");
  }, [router]);

  // Branded loader — the "/" decision needs localStorage so it has to wait
  // for hydration before redirecting. The previous tiny "Memuat…" text in
  // an empty cream void looked like a stalled page; matching the
  // onboarding leaf+blob visual makes the wait read as "app starting".
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-background px-6">
      <div className="flex items-center justify-center">
        <LeafShape size={88} color="#5DB3A6" rotate={-12} />
        <LeafShape
          size={60}
          color="#FFD66B"
          rotate={28}
          className="-ml-4 -mt-6"
          delay={0.6}
        />
      </div>
      <p className="mt-6 text-base font-medium text-ink-soft">Memuat…</p>
    </main>
  );
}
