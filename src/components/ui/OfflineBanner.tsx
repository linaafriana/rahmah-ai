"use client";

import { useEffect, useState } from "react";
import { WifiOff } from "lucide-react";

export function OfflineBanner() {
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    function refresh() {
      setOffline(!navigator.onLine);
    }
    refresh();
    window.addEventListener("online", refresh);
    window.addEventListener("offline", refresh);
    return () => {
      window.removeEventListener("online", refresh);
      window.removeEventListener("offline", refresh);
    };
  }, []);

  if (!offline) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-3">
      <div
        role="status"
        className="flex w-full max-w-md items-center gap-2 rounded-pill bg-ink px-4 py-2 text-xs font-semibold text-white shadow-soft-lg"
      >
        <WifiOff size={14} />
        Kamu sedang offline. Data tersimpan lokal akan tetap bisa dibuka.
      </div>
    </div>
  );
}
