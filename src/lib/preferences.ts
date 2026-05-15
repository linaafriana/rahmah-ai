"use client";

export const QUIET_MODE_KEY = "sakinah:quietMode";
export const QUIET_MODE_EVENT = "sakinah:quiet-mode-changed";

export function readQuietMode(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(QUIET_MODE_KEY) === "1";
}

export function writeQuietMode(enabled: boolean) {
  if (typeof window === "undefined") return;
  if (enabled) {
    window.localStorage.setItem(QUIET_MODE_KEY, "1");
  } else {
    window.localStorage.removeItem(QUIET_MODE_KEY);
  }
  window.dispatchEvent(new Event(QUIET_MODE_EVENT));
}
