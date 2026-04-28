"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { buildAudioUrl } from "@/lib/cloudinary";
import type { LearnItem } from "@/types";

export function HijaiyahLetter({ item }: { item: LearnItem }) {
  const audioUrl = buildAudioUrl(item.audioPublicId);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState<string | null>(null);

  function tap() {
    if (!audioUrl) {
      setHint("Audio segera tersedia 🤍");
      setTimeout(() => setHint(null), 1500);
      return;
    }
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  }

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      onClick={tap}
      className="block text-left"
      aria-label={`${item.title} — ${audioUrl ? "putar suara" : "audio belum tersedia"}`}
    >
      <Card tone="white" padded={false} className="px-3 py-3">
        <div className="relative">
          <span className="absolute right-0 top-0 text-ink-muted">
            {audioUrl ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </span>
          <p
            className="text-center font-arabic text-3xl text-ink"
            dir="rtl"
          >
            {item.arabic}
          </p>
          <p className="mt-1 text-center text-xs font-semibold text-ink">
            {item.title}
          </p>
          <p className="mt-1 text-center text-[10px] leading-snug text-ink-soft">
            {item.body}
          </p>
          {hint && (
            <p className="mt-1 text-center text-[10px] text-ink-muted">
              {hint}
            </p>
          )}
        </div>
      </Card>
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          preload="none"
          onEnded={() => setPlaying(false)}
          className="hidden"
        />
      )}
    </motion.button>
  );
}
