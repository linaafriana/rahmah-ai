"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import { Card } from "@/components/ui/Card";

const DISMISS_KEY = "sakinah:installDismissed";

type BIPEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallPrompt() {
  const [event, setEvent] = useState<BIPEvent | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY) === "1") return;
    // Already installed (running in standalone)
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error iOS Safari
      window.navigator.standalone
    ) {
      return;
    }

    const onBIP = (e: Event) => {
      e.preventDefault();
      setEvent(e as BIPEvent);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onBIP);
    return () => window.removeEventListener("beforeinstallprompt", onBIP);
  }, []);

  function dismiss() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DISMISS_KEY, "1");
    }
    setShow(false);
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
      {show && (
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
    </AnimatePresence>
  );
}
