"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Volume2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { DzikirCounter } from "@/components/dzikir/DzikirCounter";
import { buildAudioUrl } from "@/lib/cloudinary";
import { useAuth } from "@/providers/AuthProvider";
import { bumpDzikirCount } from "@/lib/firebase/firestore";
import type { DzikirItem } from "@/types";

export function DzikirCard({ item }: { item: DzikirItem }) {
  const { user } = useAuth();
  const audioUrl = buildAudioUrl(item.audioPublicId);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState<string | null>(null);
  const pendingRef = useRef(0);
  const flushTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function onIncrement() {
    if (!user) return;
    pendingRef.current += 1;
    if (flushTimer.current) clearTimeout(flushTimer.current);
    flushTimer.current = setTimeout(() => {
      const delta = pendingRef.current;
      pendingRef.current = 0;
      if (delta > 0) {
        void bumpDzikirCount(user.uid, item.category, delta);
      }
    }, 800);
  }

  function toggleAudio() {
    if (!audioUrl) {
      setHint("Audio segera tersedia 🤍");
      setTimeout(() => setHint(null), 1800);
      return;
    }
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el.play();
      setPlaying(true);
    }
  }

  return (
    <Card tone="white">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p
            className="text-right font-arabic text-2xl leading-loose text-ink"
            dir="rtl"
          >
            {item.arabic}
          </p>
          <p className="mt-2 text-sm italic text-ink-soft">
            {item.transliteration}
          </p>
          <p className="mt-1 text-sm text-ink">{item.meaning}</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary"
          aria-label={playing ? "Jeda audio" : "Putar audio"}
        >
          {playing ? <Pause size={18} /> : <Volume2 size={18} />}
        </motion.button>
      </div>
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onEnded={() => setPlaying(false)}
          preload="none"
          className="hidden"
        />
      )}
      <div className="mt-5 flex justify-center">
        <DzikirCounter
          target={item.defaultCount}
          onIncrement={onIncrement}
        />
      </div>
      {hint && (
        <p className="mt-3 text-center text-xs text-ink-muted">{hint}</p>
      )}
    </Card>
  );
}
