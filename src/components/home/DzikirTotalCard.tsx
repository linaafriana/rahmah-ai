"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { useAuth } from "@/providers/AuthProvider";
import { loadDzikirLog } from "@/lib/firebase/firestore";

export function DzikirTotalCard() {
  const { user } = useAuth();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!user) return;
    void loadDzikirLog(user.uid).then((log) => {
      if (!log) return;
      const sum =
        (log.morning ?? 0) +
        (log.evening ?? 0) +
        (log.afterPrayer ?? 0) +
        (log.istighfar ?? 0);
      setTotal(sum);
    });
  }, [user]);

  return (
    <Link href="/dzikir" className="block">
      <Card tone="white" className="overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-accent-tint text-ink">
            <Sparkles size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">
              Dzikir hari ini
            </p>
            <div className="mt-0.5 flex items-baseline gap-1.5">
              <motion.span
                key={total}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-ink"
              >
                {total}
              </motion.span>
              <span className="text-xs text-ink-soft">tasbih</span>
            </div>
            <p className="text-[11px] text-ink-muted">
              {total === 0
                ? "Mulai dengan satu tasbih saja 🤍"
                : "Setiap dzikir membawa ketenangan"}
            </p>
          </div>
          <ChevronRight size={18} className="text-ink-muted" />
        </div>
      </Card>
    </Link>
  );
}
