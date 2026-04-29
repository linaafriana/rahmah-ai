"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Share, X } from "lucide-react";
import { Card } from "@/components/ui/Card";

const DISMISS_KEY = "sakinah:installDismissed";
const VISITS_KEY = "sakinah:installVisits";
const VISITS_BEFORE_IOS_HINT = 3;

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(display-mode: standalone)").matches) return true;
  // @ts-expect-error iOS Safari standalone flag
  return Boolean(window.navigator.standalone);
}

export function InstallPrompt() {
  const [event, setEvent] = useState<BIPEvent | null>(null);
  const [showAndroid, setShowAndroid] = useState(false);
  const [showIos, setShowIos] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY) === "1") return;
    if (isStandalone()) return;

    if (isIOS()) {
      // Defer iOS hint until 3rd visit — avoid blasting first-time visitors
      const visits =
        Number(window.localStorage.getItem(VISITS_KEY) ?? "0") || 0;
      window.localStorage.setItem(VISITS_KEY, String(visits + 1));
      if (visits + 1 >= VISITS_BEFORE_IOS_HINT) setShowIos(true);
      return;
    }

    const onBIP = (e: Event) => {
      e.preventDefault();
      setEvent(e as BIPEvent);
      setShowAndroid(true);
    };
    window.addEventListener("beforeinstallprompt", onBIP);
    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  function dismiss() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "1");
    }
    setShowAndroid(false);
    setShowIos(false);
  }

  async function install() {
    if (!event) return;
    void event.prompt();
    const choice = await event.userChoice;
    if (choice.outcome === "accepted" || choice.outcome === "dismissed") {
      dismiss();
    }
    setEvent(null);
  }

  return (
    <AnimatePresence>
      {showAndroid && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <Card tone="primary" className="overflow-hidden">
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-ink-muted hover:text-ink"
              aria-label="Tutup"
            >
              <X size={12} />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-primary">
                <Download size={20} />
              </div>
              <div className="flex-1 pr-6">
                <p className="text-sm font-bold text-ink">
                  Pasang Rahmah di layarmu
                </p>
                <p className="mt-0.5 text-[11px] text-ink-soft">
                  Akses lebih cepat, tanpa membuka browser
                </p>
              </div>
              <button
                type="button"
                onClick={install}
                className="rounded-pill bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-soft"
              >
                Pasang
              </button>
            </div>
          </Card>
        </motion.div>
      )}

      {showIos && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          <Card tone="primary" className="overflow-hidden">
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/60 text-ink-muted hover:text-ink"
              aria-label="Tutup"
            >
              <X size={12} />
            </button>
            <div className="flex items-start gap-3 pr-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-white text-primary">
                <Share size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-ink">
                  Pasang Rahmah di layar utama
                </p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-ink-soft">
                  Tap ikon Bagikan di Safari → pilih{" "}
                  <span className="font-semibold text-ink">
                    Tambahkan ke Layar Utama
                  </span>
                  .
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
