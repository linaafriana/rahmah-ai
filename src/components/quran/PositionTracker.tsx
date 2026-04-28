"use client";

import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { saveQuranPosition } from "@/lib/firebase/firestore";
import type { QuranPosition } from "@/types";

const LOCAL_KEY = "sakinah:quranPosition";

export function PositionTracker({ position }: { position: QuranPosition }) {
  const { user } = useAuth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCAL_KEY, JSON.stringify(position));
    }
    if (user) {
      void saveQuranPosition(user.uid, position);
    }
  }, [user, position]);

  return null;
}
