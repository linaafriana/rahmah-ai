"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SmartGuideCard } from "@/components/ui/SmartGuideCard";
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

  const emptyPrompt =
    mood === "sad" || mood === "tearful" || mood === "tired"
      ? "Hari ini terasa berat karena..."
      : mood === "angry"
        ? "Yang membuatku perlu jeda adalah..."
        : mood === "joyful" || mood === "loved"
          ? "Hal yang ingin kusyukuri hari ini adalah..."
          : "Hari ini aku ingin jujur tentang...";

  const lowerText = text.toLowerCase();
  const insight =
    text.trim().length < 24
      ? null
      : lowerText.includes("sedih") ||
          lowerText.includes("berat") ||
          lowerText.includes("hampa")
        ? {
            title: "Rahmah sarankan langkah yang lembut",
            body: "Tulisanmu terasa berat. Kamu bisa mulai dari doa sesuai kondisi hati, lalu ambil satu niat kecil untuk besok.",
            href: "/butuhkan",
            actionLabel: "Cari doa",
          }
        : lowerText.includes("marah") ||
            lowerText.includes("kesal") ||
            lowerText.includes("sabar")
          ? {
              title: "Arahkan rasa ini jadi latihan sabar",
              body: "Tidak perlu langsung selesai. Ambil jeda, tulis niat kecil, lalu pelajari satu topik tentang akhlak atau sabar.",
              href: "/belajar/akhlak-harian",
              actionLabel: "Buka akhlak",
            }
          : lowerText.includes("syukur") ||
              lowerText.includes("alhamdulillah") ||
              mood === "loved"
            ? {
                title: "Simpan rasa syukur ini sebagai bekal",
                body: "Kamu bisa menutup jurnal dengan satu niat sederhana agar rasa syukur berubah jadi tindakan besok.",
                href: "/muhasabah",
                actionLabel: "Niatkan besok",
              }
            : {
                title: "Ubah refleksi jadi satu langkah",
                body: "Pilih satu tindakan kecil dari tulisanmu. Rahmah akan membantumu menjaga langkahnya tetap ringan.",
                href: "/tanya",
                actionLabel: "Minta arahan",
              };

  return (
    <div className="space-y-4">
      <MoodPicker value={mood} onChange={onMoodChange} />
      <Card tone="cream" className="border border-ink/5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-bold text-ink">{t.journal.prompt}</h3>
          <span className="text-[11px] text-ink-muted" aria-live="polite">
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
        {text.trim().length === 0 && (
          <div className="mt-3 rounded-card bg-white/70 px-3 py-2">
            <p className="text-[11px] font-semibold text-ink">
              Rahmah bantu mulai:
            </p>
            <button
              type="button"
              onClick={() => onTextChange(emptyPrompt)}
              className="mt-1 text-left text-xs leading-relaxed text-primary hover:underline"
            >
              {emptyPrompt}
            </button>
          </div>
        )}
        <div className="mt-3 flex justify-end">
          <Button variant="primary" onClick={() => persist(text, mood)}>
            {t.journal.save}
          </Button>
        </div>
      </Card>
      {insight && (
        <SmartGuideCard
          eyebrow="Dari jurnalmu"
          title={insight.title}
          body={insight.body}
          href={insight.href}
          actionLabel={insight.actionLabel}
        />
      )}
      {text.trim().length >= 24 && (
        <Card tone="white" className="border border-primary/10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Langkah setelah refleksi
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">
            Rahmah bisa mengubah isi jurnal ini menjadi doa, niat kecil, atau
            pertanyaan yang lebih terarah.
          </p>
          <Link
            href="/tanya"
            className="mt-3 inline-flex min-h-10 items-center rounded-pill bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Minta arahan Rahmah
          </Link>
        </Card>
      )}
    </div>
  );
}
