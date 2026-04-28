"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Mic } from "lucide-react";
import { RECITERS, DEFAULT_RECITER_ID } from "@/lib/quran";

export function ReciterPicker() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = Number(params.get("reciter")) || DEFAULT_RECITER_ID;

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = new URLSearchParams(params.toString());
    next.set("reciter", e.target.value);
    router.replace(`${pathname}?${next.toString()}`, { scroll: false });
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-pill bg-white px-3 py-1.5 text-xs text-ink shadow-soft">
      <Mic size={14} className="text-ink-muted" />
      <span className="text-ink-muted">Qari</span>
      <select
        value={current}
        onChange={onChange}
        className="appearance-none bg-transparent pr-1 text-xs font-semibold text-ink outline-none"
      >
        {RECITERS.map((r) => (
          <option key={r.id} value={r.id}>
            {r.name}
          </option>
        ))}
      </select>
    </label>
  );
}
