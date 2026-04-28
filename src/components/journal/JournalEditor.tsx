"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MoodPicker } from "@/components/journal/MoodPicker";
import { useAuth } from "@/providers/AuthProvider";
import {
  loadJournal,
  saveJournal,
  todayKey,
} from "@/lib/firebase/firestore";
import { id as t } from "@/lib/i18n/id";
import type { Mood } from "@/types";

type Status = "idle" | "saving" | "saved";

const localKey = (date: string) => `sakinah:journal:${date}`;

export function JournalEditor() {
  const { user } = useAuth();
  const [text, setText] = useState("");
  const [mood, setMood] = useState<Mood | undefined>(undefined);
  const [status, setStatus] = useState<Status>("idle");
  const debounce = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const date = todayKey();
    if (typeof window !== "undefined") {
      const local = window.localStorage.getItem(localKey(date));
      if (local) {
        try {
          const parsed = JSON.parse(local);
          if (typeof parsed === "string") {
            setText(parsed);
          } else {
            if (parsed.text) setText(parsed.text);
            if (parsed.mood) setMood(parsed.mood as Mood);
          }
        } catch {
          setText(local);
        }
      }
    }
    if (user) {
      void loadJournal(user.uid, date).then((entry) => {
        if (!entry) return;
        if (entry.text) setText(entry.text);
        if (entry.mood) setMood(entry.mood);
      });
    }
  }, [user]);

  function persist(nextText: string, nextMood: Mood | undefined) {
    const date = todayKey();
    const payload = { text: nextText, mood: nextMood };
    if (typeof window !== "undefined") {
      window.localStorage.setItem(localKey(date), JSON.stringify(payload));
    }
    if (user) {
      void saveJournal(user.uid, {
        date,
        text: nextText,
        mood: nextMood,
        updatedAt: Date.now(),
      });
    }
    setStatus("saved");
  }

  function schedule(nextText: string, nextMood: Mood | undefined) {
    setStatus("saving");
    if (debounce.current) clearTimeout(debounce.current);
    debounce.current = setTimeout(() => persist(nextText, nextMood), 600);
  }

  function onTextChange(value: string) {
    setText(value);
    schedule(value, mood);
  }

  function onMoodChange(next: Mood) {
    setMood(next);
    schedule(text, next);
  }

  return (
    <div className="space-y-4">
      <MoodPicker value={mood} onChange={onMoodChange} />
      <Card tone="cream" className="border border-ink/5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold text-ink">{t.journal.prompt}</h3>
          <span className="text-[11px] text-ink-muted">
            {status === "saving"
              ? t.journal.saving
              : status === "saved"
                ? t.journal.saved
                : ""}
          </span>
        </div>
        <textarea
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          placeholder={t.journal.placeholder}
          rows={8}
          className="w-full resize-none rounded-card bg-white px-4 py-3 text-sm leading-relaxed text-ink outline-none placeholder:text-ink-muted focus:ring-2 focus:ring-primary/40"
        />
        <div className="mt-3 flex justify-end">
          <Button variant="primary" onClick={() => persist(text, mood)}>
            {t.journal.save}
          </Button>
        </div>
      </Card>
    </div>
  );
}
