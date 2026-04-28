"use client";

import { motion } from "framer-motion";
import { MoodTracker } from "@/components/journal/MoodTracker";
import { JournalEditor } from "@/components/journal/JournalEditor";
import { JournalSkeleton } from "@/components/journal/JournalSkeleton";
import { GratitudePromptCard } from "@/components/journal/GratitudePromptCard";
import { useAuth } from "@/providers/AuthProvider";
import { id as t } from "@/lib/i18n/id";

export default function JournalPage() {
  const { loading } = useAuth();
  if (loading) return <JournalSkeleton />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-5"
    >
      <header>
        <h1 className="text-3xl font-bold text-ink">{t.journal.title}</h1>
        <p className="mt-1 text-sm text-ink-soft">{t.journal.prompt}</p>
      </header>
      <GratitudePromptCard />
      <MoodTracker />
      <JournalEditor />
    </motion.div>
  );
}
