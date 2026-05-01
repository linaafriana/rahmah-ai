"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Blob } from "@/components/illustrations/Blob";
import { useAuth } from "@/providers/AuthProvider";
import { authErrorMessage } from "@/lib/auth-errors";
import { id as t } from "@/lib/i18n/id";

// Inline 4-color Google glyph. Using an SVG (not lucide) so the brand
// colors render — Google's sign-in branding guidelines require the
// multi-color "G" mark, not a monochrome stand-in.
function GoogleLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className="shrink-0"
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function SignInPage() {
  const router = useRouter();
  const { user, loading, signIn, signUp, signInWithGoogle, configured } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  useEffect(() => {
    if (!loading && user) router.replace("/home");
  }, [loading, user, router]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      router.push("/home");
    } catch (err) {
      console.error(err);
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function continueWithGoogle() {
    setError(null);
    setBusy(true);
    try {
      await signInWithGoogle();
      router.push("/home");
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
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="mb-2 text-3xl font-bold text-ink">
          {mode === "signup" ? t.signIn.titleSignUp : t.signIn.title}
        </h1>
        <p className="mb-2 text-ink-soft">
          {mode === "signup" ? t.signIn.subtitleSignUp : t.signIn.subtitle}
        </p>
        {!configured && (
          <p className="mb-4 rounded-card bg-accent-tint px-3 py-2 text-xs text-ink-soft">
            Mode demo: kunci Firebase belum dikonfigurasi. Login akan disimpan
            sementara di perangkatmu.
          </p>
        )}

        <Card tone="white" className="space-y-4">
          <form className="space-y-4" onSubmit={submit}>
            <Field
              label={t.signIn.emailLabel}
              type="email"
              icon="mail"
              value={email}
              onChange={setEmail}
              required
            />
            <Field
              label={t.signIn.passwordLabel}
              type="password"
              icon="lock"
              value={password}
              onChange={setPassword}
              required
            />
            {error && (
              <p className="text-xs text-rose-500">{error}</p>
            )}
            <Button type="submit" fullWidth size="lg" disabled={busy}>
              {busy ? (
                <Loader2 size={18} className="animate-spin" />
              ) : mode === "signup" ? (
                t.signIn.signUp
              ) : (
                t.signIn.submit
              )}
            </Button>
            {mode === "signin" && (
              <div className="text-center">
                <Link
                  href="/reset-password"
                  className="text-xs font-medium text-ink-soft hover:text-primary"
                >
                  {t.signIn.forgotPassword}
                </Link>
              </div>
            )}
          </form>

          <div className="flex items-center gap-3 py-1 text-xs text-ink-muted">
            <span className="h-px flex-1 bg-ink/10" />
            atau
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          <Button
            variant="soft"
            size="lg"
            fullWidth
            onClick={continueWithGoogle}
            disabled={busy}
          >
            <GoogleLogo size={18} />
            {t.signIn.google}
          </Button>
        </Card>

        <p className="mt-6 text-center text-sm text-ink-soft">
          {mode === "signin" ? t.signIn.noAccount : "Sudah punya akun?"}{" "}
          <button
            type="button"
            onClick={() => setMode((m) => (m === "signin" ? "signup" : "signin"))}
            className="font-semibold text-primary hover:underline"
          >
            {mode === "signin" ? t.signIn.signUp : "Masuk"}
          </button>
        </p>
      </motion.div>
    </main>
  );
}

function Field({
  label,
  type,
  icon,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  icon?: "mail" | "lock";
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  const Icon = icon === "mail" ? Mail : icon === "lock" ? Lock : null;
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-ink-soft">
        {label}
      </span>
      <div className="relative">
        {Icon && (
          <Icon
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
          />
        )}
        <input
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-card border border-ink/10 bg-background py-3 pr-4 text-sm text-ink outline-none transition-colors focus:border-primary ${
            Icon ? "pl-10" : "pl-4"
          }`}
        />
      </div>
    </label>
  );
}
