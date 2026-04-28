"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useAuth } from "@/providers/AuthProvider";
import {
  saveBookmark,
  deleteBookmark,
} from "@/lib/firebase/firestore";
import type { VerseBookmark } from "@/types";

const LOCAL_KEY = "sakinah:bookmarks";

function readLocal(): VerseBookmark[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(LOCAL_KEY);
  if (!raw) return [];
  try {
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function writeLocal(items: VerseBookmark[]) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
  }
}

type Props = Omit<VerseBookmark, "createdAt" | "id"> & {
  size?: "sm" | "md";
};

export function BookmarkButton({ size = "sm", ...meta }: Props) {
  const { user } = useAuth();
  const id = meta.verseKey;
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(readLocal().some((b) => b.id === id));
  }, [id]);

  function toggle() {
    const list = readLocal();
    const exists = list.find((b) => b.id === id);
    if (exists) {
      const next = list.filter((b) => b.id !== id);
      writeLocal(next);
      setActive(false);
      if (user) void deleteBookmark(user.uid, id);
    } else {
      const bm: VerseBookmark = {
        id,
        ...meta,
        createdAt: Date.now(),
      };
      writeLocal([bm, ...list]);
      setActive(true);
      if (user) void saveBookmark(user.uid, bm);
    }
  }

  const dim = size === "md" ? 18 : 14;

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      aria-pressed={active}
      aria-label={active ? "Hapus penanda" : "Tandai ayat ini"}
      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:text-ink"
    >
      {active ? (
        <BookmarkCheck size={dim} className="text-primary" fill="currentColor" />
      ) : (
        <Bookmark size={dim} />
      )}
    </motion.button>
  );
}
