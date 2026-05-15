"use client";

import { useEffect, useRef } from "react";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  body: string;
  confirmLabel: string;
  cancelLabel?: string;
  destructive?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  open,
  title,
  body,
  confirmLabel,
  cancelLabel = "Batal",
  destructive,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    cancelRef.current?.focus();
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/30 px-4 pb-4 pt-12 backdrop-blur-sm sm:items-center"
    >
      <div className="w-full max-w-sm rounded-card-lg bg-white p-5 shadow-soft-lg">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-accent-tint text-ink">
            <AlertCircle size={18} />
          </div>
          <div className="min-w-0 flex-1">
            <h2 id="confirm-title" className="text-base font-bold text-ink">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{body}</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <Button
            ref={cancelRef}
            type="button"
            variant="soft"
            onClick={onCancel}
            fullWidth
          >
            {cancelLabel}
          </Button>
          <button
            type="button"
            onClick={onConfirm}
            className={
              "inline-flex h-11 items-center justify-center rounded-pill px-5 text-sm font-semibold shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
              (destructive
                ? "bg-rose-500 text-white hover:bg-rose-600"
                : "bg-primary text-white hover:bg-primary/90")
            }
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
