"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  direction: number; // degrees clockwise from North
};

export function QiblaCompass({ direction }: Props) {
  const [heading, setHeading] = useState<number | null>(null);
  const [permission, setPermission] = useState<"idle" | "granted" | "denied" | "unsupported">("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("DeviceOrientationEvent" in window)) {
      setPermission("unsupported");
      return;
    }
    function onOrientation(e: DeviceOrientationEvent) {
      // Some browsers expose webkitCompassHeading; standard is alpha.
      const ext = e as DeviceOrientationEvent & {
        webkitCompassHeading?: number;
      };
      if (typeof ext.webkitCompassHeading === "number") {
        setHeading(ext.webkitCompassHeading);
      } else if (typeof e.alpha === "number") {
        setHeading(360 - e.alpha);
      }
    }
    window.addEventListener("deviceorientation", onOrientation);
    setPermission("granted");
    return () =>
      window.removeEventListener("deviceorientation", onOrientation);
  }, []);

  const arrowAngle = heading !== null ? direction - heading : direction;
  const aligned = heading !== null && Math.abs(arrowAngle) < 5;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-44 w-44 rounded-full bg-primary-tint">
        <div className="absolute inset-3 rounded-full bg-white shadow-soft" />
        {/* North marker */}
        <div className="absolute left-1/2 top-3 -translate-x-1/2 text-[10px] font-bold text-ink-soft">
          U
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-ink-muted">
          S
        </div>
        <motion.div
          animate={{ rotate: arrowAngle }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl">🕋</span>
            <div className="mt-1 h-16 w-1 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
      <p className="text-center text-xs text-ink-soft">
        {permission === "granted" && heading !== null
          ? aligned
            ? "Kamu menghadap kiblat 🤍"
            : `Putar tubuhmu ${Math.round(arrowAngle)}° untuk menghadap kiblat`
          : `Arah kiblat: ${Math.round(direction)}° dari Utara`}
      </p>
      {permission === "unsupported" && (
        <p className="text-center text-[11px] text-ink-muted">
          Perangkat tidak mendukung kompas digital. Gunakan kompas manual sebagai
          panduan.
        </p>
      )}
    </div>
  );
}
