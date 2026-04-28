"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

export function VerseAudioButton({ url }: { url: string | undefined }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onEnd = () => setPlaying(false);
    el.addEventListener("ended", onEnd);
    return () => el.removeEventListener("ended", onEnd);
  }, []);

  if (!url) return null;

  function toggle() {
    const el = ref.current;
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
    <>
      <motion.button
        type="button"
        whileTap={{ scale: 0.92 }}
        onClick={toggle}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-tint text-primary"
        aria-label={playing ? "Jeda" : "Putar"}
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </motion.button>
      <audio ref={ref} src={url} preload="none" className="hidden" />
    </>
  );
}
