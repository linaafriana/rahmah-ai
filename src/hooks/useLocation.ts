"use client";

import { useEffect, useState } from "react";

export type Coords = {
  latitude: number;
  longitude: number;
};

export type LocationStatus =
  | "idle"
  | "requesting"
  | "granted"
  | "denied"
  | "unsupported"
  | "error";

const LOCAL_KEY = "sakinah:coords";

function readCached(): Coords | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(LOCAL_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Coords;
  } catch {
    return null;
  }
}

function writeCached(c: Coords) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(c));
  }
}

function clearCached() {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(LOCAL_KEY);
  }
}

export function useLocation() {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [status, setStatus] = useState<LocationStatus>("idle");

  useEffect(() => {
    const cached = readCached();
    if (cached) {
      setCoords(cached);
      setStatus("granted");
    }
  }, []);

  function request() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unsupported");
      return;
    }
    setStatus("requesting");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const c: Coords = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        };
        setCoords(c);
        writeCached(c);
        setStatus("granted");
      },
      (err) => {
        console.warn("geolocation failed", err);
        setStatus(err.code === err.PERMISSION_DENIED ? "denied" : "error");
      },
      { enableHighAccuracy: false, timeout: 10_000, maximumAge: 60 * 60 * 1000 },
    );
  }

  function reset() {
    clearCached();
    setCoords(null);
    setStatus("idle");
  }

  return { coords, status, request, reset };
}
