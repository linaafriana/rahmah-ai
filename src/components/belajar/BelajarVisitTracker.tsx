"use client";

import { useEffect } from "react";

const STORAGE_KEY = "sakinah:belajarRecent";
const MAX_ITEMS = 5;

export type VisitedTopic = {
  slug: string;
  title: string;
  emoji: string;
  category: string;
  visitedAt: number;
};

export function recordVisit(topic: Omit<VisitedTopic, "visitedAt">) {
  if (typeof window === "undefined") return;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  let list: VisitedTopic[] = [];
  if (raw) {
    try {
      list = JSON.parse(raw);
    } catch {}
  }
  // Remove existing entry with same slug (move to top)
  list = list.filter((t) => t.slug !== topic.slug);
  list.unshift({ ...topic, visitedAt: Date.now() });
  list = list.slice(0, MAX_ITEMS);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

export function readVisits(): VisitedTopic[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as VisitedTopic[];
  } catch {
    return [];
  }
}

export function BelajarVisitTracker(props: {
  slug: string;
  title: string;
  emoji: string;
  category: string;
}) {
  useEffect(() => {
    recordVisit(props);
  }, [props]);
  return null;
}
