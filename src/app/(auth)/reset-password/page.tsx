"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { useAuth } from "@/providers/AuthProvider";
import { authErrorMessage } from "@/lib/auth-errors";
import { id as t } from "@/lib/i18n/id";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { user, loading, resetPassword, configured } = useAuth();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user) router.replace("/home");
  }, [loading, user, router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (err) {
      console.error(err);
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="relative mx-auto flex min-h-dvh max-w-md flex-col justify-center overflow-hidden px-6 py-10">
      <Blob
        color="#FADADD"
        size={260}
        className="absolute -right-16 -top-10 opacity-70"
      />
      <Blob
        color="#A8D8D0"
        size={220}
        className="absolute -left-10 bottom-10 opacity-60"
        delay={0.8}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <Link
          href="/sign-in"
          className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
        >
          <ArrowLeft size={16} />
          {t.signIn.resetBackToSignIn}
        </Link>

        <h1 className="mb-2 text-3xl font-bold text-ink">
          {t.signIn.resetTitle}
        </h1>
        <p className="mb-6 text-sm text-ink-soft">
          {t.signIn.resetSubtitle}
        </p>

        {!configured ? (
          <Card tone="white">
            <p className="text-sm leading-relaxed text-ink">
              Reset kata sandi tidak tersedia di mode demo — belum ada akun
              nyata yang tersimpan. Hubungkan Firebase di{" "}
              <code className="rounded bg-background px-1 text-[11px]">.env.local</code>{" "}
              untuk mengaktifkan fitur ini.
            </p>
            <Link
              href="/sign-in"
              className="mt-4 inline-flex w-full items-center justify-center rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft"
            >
              {t.signIn.resetBackToSignIn}
            </Link>
          </Card>
        ) : sent ? (
          <Card tone="primary" className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.4, times: [0, 0.6, 1] }}
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary"
            >
              <Check size={24} strokeWidth={3} />
            </motion.div>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              {t.signIn.resetSent}
            </p>
            <Link
              href="/sign-in"
              className="mt-4 inline-flex w-full items-center justify-center rounded-pill bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft"
            >
              {t.signIn.resetBackToSignIn}
            </Link>
          </Card>
        ) : (
          <Card tone="white">
            <form className="space-y-4" onSubmit={submit}>
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-ink-soft">
                  {t.signIn.resetEmailLabel}
                </span>
                <div className="relative">
                  <Mail
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                  />
                  <input
                    type="email"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="kamu@email.com"
                    className="w-full rounded-card border border-ink/10 bg-background py-3 pl-10 pr-4 text-sm text-ink outline-none focus:border-primary"
                  />
                </div>
              </label>

              {error && <p className="text-xs text-rose-500">{error}</p>}

              <Button type="submit" fullWidth size="lg" disabled={busy}>
                {t.signIn.resetSubmit}
              </Button>
            </form>
          </Card>
        )}
      </motion.div>
    </main>
  );
}
