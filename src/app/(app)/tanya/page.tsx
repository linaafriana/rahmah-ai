"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { SmartGuideCard } from "@/components/ui/SmartGuideCard";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { useAuth } from "@/providers/AuthProvider";
import {
  loadTanyaHistory,
  saveTanyaHistory,
  type TanyaMessage,
} from "@/lib/firebase/firestore";

type ChatMessage = TanyaMessage;

const STARTER_PROMPTS = [
  "Apa keutamaan sholat Subuh tepat waktu?",
  "Bagaimana cara memulai dzikir pagi yang benar?",
  "Apa hukum sholat sunnah qabliyah Subuh?",
  "Doa apa yang dianjurkan saat sedih?",
];

const STORAGE_KEY = "sakinah:tanya:history";

export default function TanyaPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmClear, setConfirmClear] = useState(false);
  const [lastQuestion, setLastQuestion] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setMessages(parsed);
    } catch {}
  }, []);

  useEffect(() => {
    if (!user) return;
    let alive = true;
    void loadTanyaHistory(user.uid)
      .then((remote) => {
        if (!alive || remote.length === 0) return;
        setMessages(remote);
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
        }
      })
      .catch(() => {
        // Local history remains available if sync is unavailable.
      });
    return () => {
      alive = false;
    };
  }, [user]);

  // Persist on change
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    if (user && messages.length > 0) {
      void saveTanyaHistory(user.uid, messages).catch(() => {});
    }
  }, [messages, user]);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, loading]);

  async function send(question: string) {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMessage = { role: "user", content: trimmed };
    setLastQuestion(trimmed);
    const next = [...messages, userMsg];
    setMessages(next);
    setDraft("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/tanya", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: trimmed,
          history: messages,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Ada kesalahan saat memproses pertanyaan.");
        return;
      }
      const reply: ChatMessage = {
        role: "assistant",
        content: data.answer,
      };
      setMessages([...next, reply]);
    } catch {
      setError("Tidak bisa menghubungi server. Cek koneksi internetmu.");
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setConfirmClear(true);
  }

  return (
    <div className="space-y-4">
      <PageHeader
        backHref="/hati"
        backLabel="Hati"
        title="Tanya Rahmah"
        subtitle="Pendamping AI untuk pertanyaan agama, dengan batas aman dan rujukan yang jelas."
      />

      <SmartGuideCard
        eyebrow="Gunakan saat bingung"
        title="Tanyakan satu hal yang paling dekat dulu"
        body="Rahmah akan menjawab ringkas. Untuk perkara pribadi seperti talak, harta, atau sumpah, Rahmah akan mengarahkanmu ke ustadz/ustadzah."
      />

      <Card tone="cream" className="border border-ink/5">
        <div className="flex items-start gap-2">
          <AlertCircle size={14} className="mt-0.5 shrink-0 text-ink-muted" />
          <p className="text-[11px] leading-relaxed text-ink-soft">
            <strong>Penting:</strong> jawaban AI bisa salah atau kurang
            lengkap. Untuk masalah pribadi (talak, harta, sumpah, dll),
            tetap konsultasi ke ustadz/ustadzah langsung. Aplikasi ini bukan
            pengganti ulama yang Anda kenal.
          </p>
        </div>
      </Card>

      {messages.length === 0 ? (
        <Card tone="white">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">
            Coba mulai dari sini
          </p>
          <div className="mt-3 grid gap-2">
            {STARTER_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => send(prompt)}
                className="rounded-card bg-background px-3 py-2.5 text-left text-sm text-ink hover:bg-primary-tint/40"
              >
                {prompt}
              </button>
            ))}
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={
                m.role === "user" ? "flex justify-end" : "flex justify-start"
              }
            >
              <div
                className={
                  "max-w-[85%] rounded-card-lg px-4 py-3 text-sm leading-relaxed shadow-soft " +
                  (m.role === "user"
                    ? "bg-primary text-white"
                    : "bg-white text-ink")
                }
              >
                {m.content.split("\n").map((line, li) => (
                  <p key={li} className={li > 0 ? "mt-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-card-lg bg-white px-4 py-3 shadow-soft">
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-muted">
                  <span className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary [animation-delay:200ms]" />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary [animation-delay:400ms]" />
                  </span>
                  Mencari jawaban…
                </span>
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      )}

      {error && (
        <Card tone="cream" className="border border-rose-200">
          <p className="text-sm text-rose-500">{error}</p>
          {lastQuestion && (
            <button
              type="button"
              onClick={() => send(lastQuestion)}
              className="mt-3 rounded-pill bg-white px-4 py-2 text-xs font-semibold text-ink shadow-soft hover:text-primary"
            >
              Coba kirim lagi
            </button>
          )}
        </Card>
      )}

      {messages.length > 0 && !loading && (
        <button
          type="button"
          onClick={clearChat}
          className="text-[11px] text-ink-muted underline hover:text-ink"
        >
          Hapus riwayat percakapan
        </button>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(draft);
        }}
        className="sticky bottom-20 left-0 right-0 -mx-1 flex gap-2 rounded-pill bg-white p-2 shadow-soft-lg"
      >
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Tanyakan sesuatu…"
          maxLength={1000}
          disabled={loading}
          className="flex-1 rounded-pill bg-transparent px-3 py-1.5 text-sm text-ink outline-none placeholder:text-ink-muted disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!draft.trim() || loading}
          aria-label="Kirim"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-soft transition-opacity disabled:opacity-40"
        >
          <Send size={14} />
        </button>
      </form>
      <ConfirmDialog
        open={confirmClear}
        title="Hapus riwayat percakapan?"
        body="Percakapan di perangkat ini akan dikosongkan. Kamu tetap bisa mulai lagi dari pertanyaan baru kapan saja."
        confirmLabel="Hapus"
        destructive
        onCancel={() => setConfirmClear(false)}
        onConfirm={() => {
          setMessages([]);
          setError(null);
          setConfirmClear(false);
        }}
      />
    </div>
  );
}
