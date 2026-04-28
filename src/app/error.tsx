"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error("App error boundary:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-6 text-6xl">🤲</div>
      <h1 className="text-2xl font-bold text-ink">Ada yang tidak beres</h1>
      <p className="mt-2 text-sm text-ink-soft">
        Innā lillāhi wa innā ilaihi rāji&rsquo;ūn. Coba lagi sebentar — jika
        masih terjadi, kami sudah mencatatnya.
      </p>
      {error.digest && (
        <p className="mt-2 text-[11px] text-ink-muted">
          Kode: {error.digest}
        </p>
      )}
      <div className="mt-8 flex gap-2">
        <button
          type="button"
          onClick={reset}
          className="rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90"
        >
          Coba lagi
        </button>
        <Link
          href="/home"
          className="rounded-pill bg-white px-5 py-3 text-sm font-semibold text-ink shadow-soft hover:text-primary"
        >
          Beranda
        </Link>
      </div>
    </main>
  );
}
