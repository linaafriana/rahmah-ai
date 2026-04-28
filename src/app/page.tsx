"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const onboarded =
      typeof window !== "undefined" &&
      window.localStorage.getItem("sakinah:onboarded") === "true";
    router.replace(onboarded ? "/home" : "/onboarding");
  }, [router]);

  return (
    <div className="flex min-h-dvh items-center justify-center text-ink-soft">
      <span className="text-sm">Memuat…</span>
    </div>
  );
}
