import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-tint text-2xl font-bold text-primary">
        404
      </div>
      <h1 className="text-2xl font-bold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-sm text-ink-soft">
        Mungkin alamatnya salah, atau halaman ini belum tersedia. Tidak
        apa-apa, mari kembali ke tempat yang aman.
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
