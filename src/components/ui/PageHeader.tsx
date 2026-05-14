"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import clsx from "clsx";

type PageHeaderProps = {
  backHref?: string;
  backLabel?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
};

export function PageHeader({
  backHref,
  backLabel = "Kembali",
  title,
  subtitle,
  action,
  className,
}: PageHeaderProps) {
  return (
    <header className={clsx("space-y-3", className)}>
      {(backHref || action) && (
        <div className="flex items-center justify-between gap-3">
          {backHref ? (
            <Link
              href={backHref}
              className="inline-flex min-h-10 items-center gap-1.5 rounded-pill px-1 text-sm font-medium text-ink-soft hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <ArrowLeft size={16} />
              {backLabel}
            </Link>
          ) : (
            <span />
          )}
          {action}
        </div>
      )}
      <div>
        <h1 className="text-3xl font-bold leading-tight text-ink">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink-soft">{subtitle}</p>}
      </div>
    </header>
  );
}
