import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-6 text-6xl">🌿</div>
      <h1 className="text-2xl font-bold text-ink">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        Mungkin alamatnya salah, atau halaman ini belum ada. Tidak apa-apa
        — mari kembali.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-pill bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary/90"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
