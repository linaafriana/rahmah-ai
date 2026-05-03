// Haid (menstruation) mode — strictly local, never sent to server.
//
// When active, the home swaps the prayer-tracker card for a gentle
// reminder card that:
//   - Reassures: tidak ada kewajiban sholat, tidak perlu qadha sholat.
//   - Suggests amalan yang TETAP boleh: dzikir, doa, sholawat, belajar.
//   - Links ke /belajar/hukum-darah-wanita untuk panduan lengkap dgn dalil.
//
// The user toggles it from /pengaturan or directly via the "Selesai"
// button on the card itself. State is a single boolean — we don't track
// dates by default to keep the experience non-medical and respectful.

const KEY = "sakinah:haidActive";

export const HAID_EVENT = "sakinah:haid-changed";

export function isHaidActive(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(KEY) === "1";
}

export function setHaidActive(active: boolean): void {
  if (typeof window === "undefined") return;
  if (active) {
    window.localStorage.setItem(KEY, "1");
  } else {
    window.localStorage.removeItem(KEY);
  }
  window.dispatchEvent(new Event(HAID_EVENT));
}
