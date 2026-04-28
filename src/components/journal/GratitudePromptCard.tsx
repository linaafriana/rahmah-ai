"use client";

import { motion } from "framer-motion";
import { Sparkles, RefreshCw } from "lucide-react";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { gratitudePrompts, promptOfDay } from "@/data/seed-gratitude-prompts";

export function GratitudePromptCard() {
  const initial = useMemo(() => promptOfDay(), []);
  const [prompt, setPrompt] = useState(initial);

  function shuffle() {
    const others = gratitudePrompts.filter((p) => p.id !== prompt.id);
    const next = others[Math.floor(Math.random() * others.length)];
    setPrompt(next);
  }

  return (
    <Card tone="white" className="overflow-hidden">
      <div className="flex items-center gap-2">
        <Sparkles size={14} className="text-primary" />
        <h3 className="text-sm font-bold text-ink">Renungan untukmu</h3>
        <button
          type="button"
          onClick={shuffle}
          className="ml-auto inline-flex items-center gap-1 text-[11px] text-ink-muted hover:text-primary"
          aria-label="Acak prompt"
        >
          <RefreshCw size={12} />
          Acak
        </button>
      </div>
      <motion.div
        key={prompt.id}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-3 flex items-start gap-3"
      >
        <span className="text-2xl leading-none">{prompt.emoji}</span>
        <div className="flex-1">
          <p className="text-sm font-bold text-ink">{prompt.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            {prompt.body}
          </p>
        </div>
      </motion.div>
    </Card>
  );
}
