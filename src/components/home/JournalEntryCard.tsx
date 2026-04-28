"use client";

import Link from "next/link";
import { NotebookPen } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { id as t } from "@/lib/i18n/id";

export function JournalEntryCard() {
  return (
    <Card tone="cream" className="border border-ink/5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-secondary text-ink">
          <NotebookPen size={18} />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-bold text-ink">
            {t.home.journalEntry.title}
          </h3>
          <p className="mt-1 text-xs text-ink-soft">
            {t.home.journalEntry.subtitle}
          </p>
        </div>
      </div>
      <Link href="/journal" className="mt-4 block">
        <Button variant="soft" fullWidth>
          {t.home.journalEntry.cta}
        </Button>
      </Link>
    </Card>
  );
}
