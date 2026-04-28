# Rahmah

A mobile-first, gentle Islamic companion web app — soft pastel UI, organic shapes, calm copy in Bahasa Indonesia. Built to feel like a safe space, not a productivity tracker.

> "Mulai perjalananmu kembali kepada Allah 🌱 — Langkah kecil, setiap hari."

## Stack

- **Next.js 14** (App Router, TypeScript, Server + Client Components)
- **Tailwind CSS** with a custom design system (soft teal · warm cream · soft yellow · blush pink)
- **Framer Motion** for soft micro-interactions (scale, ripple, ring fill, page transitions)
- **Firebase** Auth (email/password + Google) and Firestore for personal progress
- **Cloudinary** for dzikir audio (URL-only)
- **quran.com API v4** for chapters, verses, translations (id=33), and per-verse audio

The app **runs without any backend keys** — Firebase calls become no-ops, mock auth is stored in `localStorage`, Quran data falls back to a small bundled set if the public API is unreachable.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — first visit lands on `/onboarding`.

To enable the real backends:

```bash
cp .env.local.example .env.local
# fill in NEXT_PUBLIC_FIREBASE_* + NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
npm run dev
```

## Routes

| Route | What it is |
|---|---|
| `/onboarding` | Welcome screen with floating blobs and the journey CTA |
| `/sign-in` | Email/password + Google. Demo banner when Firebase isn't configured |
| `/home` | Greeting (time-aware), daily progress ring, prayer checklist, dzikir CTA + total, daily reflection, continue Quran, journal entry |
| `/journal` | Mood picker (7 emoji moods), weekly mood chart from real entries, autosaving editor |
| `/dzikir` | Pagi / Petang / Setelah Sholat tabs · ripple counter · Cloudinary audio per dzikir |
| `/quran` | Continue reading deep-link, beginner tiles, full 114-surah list with search |
| `/quran/[id]` | Verse-by-verse Arabic + Indonesian translation, per-verse audio, reciter picker, deep-linkable pagination |
| `/taubat` | Full-screen calm mode with floating blobs and istighfar counter (no bottom nav) |
| `/parenting` | Doa, sholat, kebiasaan baik card list |
| `/parenting/[slug]` | Lesson with intro, numbered steps, optional Arabic doa, "tandai jika sudah" tracker |
| `/more` | Hub for Taubat + Parenting + sign out |

## Folder map

```
src/
├── app/
│   ├── (auth)/{onboarding,sign-in}/    # signed-out routes
│   ├── (app)/                          # bottom-nav layout, route-guarded
│   │   ├── home/journal/dzikir/quran/parenting/more
│   │   ├── quran/[id]                  # surah detail (server component, ISR-cached)
│   │   └── parenting/[slug]            # lesson (SSG'd from seed)
│   ├── taubat/                         # outside (app) — no bottom nav
│   ├── layout.tsx                      # fonts, AuthProvider
│   └── page.tsx                        # decides /onboarding vs /home
├── components/
│   ├── ui/                             # Button, Card, Checkbox, ProgressRing, Tabs, BottomNav, Skeleton
│   ├── illustrations/                  # Blob, LeafShape (animated SVG)
│   ├── home/                           # 8 dashboard cards + HomeSkeleton
│   ├── journal/                        # MoodPicker, MoodTracker, JournalEditor, JournalSkeleton
│   ├── dzikir/                         # DzikirCard, DzikirCounter
│   ├── quran/                          # SurahList, ContinueReadingCard, VerseAudioButton, ReciterPicker, PositionTracker
│   └── parenting/                      # ParentingCard, StepCheck
├── lib/
│   ├── firebase/{client,firestore}.ts  # graceful no-op when env missing
│   ├── cloudinary.ts                   # buildAudioUrl(publicId)
│   ├── quran.ts                        # chapters, verses, audios, reciter list
│   ├── i18n/id.ts                      # all Bahasa copy, single source
│   └── motion.ts                       # Framer presets
├── data/                               # seed-dzikir, seed-reflections, seed-parenting
├── providers/AuthProvider.tsx          # email/Google + mock fallback
└── types/index.ts
docs/firestore-schema.md                # collections, fields, starter security rules
```

## Design tokens (`tailwind.config.ts`)

```
colors:    primary #5DB3A6  background #FFF6F0  accent #FFD66B
           secondary #FADADD  ink #333333
radii:     card 20px · card-lg 28px · pill 9999px
shadow:    soft 0 4px 20px rgba(51,51,51,0.06)
fonts:     Plus Jakarta Sans (UI) · Amiri (Arabic)
animation: float 6s · fade-up 250ms · shimmer 1.6s
```

## Firestore collections

See [`docs/firestore-schema.md`](docs/firestore-schema.md). Summary:

- `users/{uid}`
- `userProgress/{uid}/prayers/{date}` · `userProgress/{uid}/meta/quranPosition`
- `journals/{uid}/entries/{date}` (mood + text)
- `dzikirLogs/{uid}/daily/{date}` (per-category counts via Firestore `increment`)
- `reflections/{date}` (currently client-seeded, promotable to server-driven)
- `lessons/{slug}` (future)

## Cloudinary audio

`buildAudioUrl(publicId, "mp3")` returns `https://res.cloudinary.com/{cloud}/video/upload/{publicId}.mp3`. Set `audioPublicId` on each entry in [`data/seed-dzikir.ts`](src/data/seed-dzikir.ts) to enable playback.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build (statically prerenders most routes) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint with the Next config |

## Product principles (do not violate)

- **No harsh reminders.** No streak guilt, no red badges, no "you missed yesterday."
- **Soft, warm copy.** Companion-tone, not coach-tone.
- **Spacious layout.** Cards breathe; primary actions are large and obvious.
- **Animations are gentle.** Spring damping high, durations short, motion subtle.
- **Arabic stays Arabic.** Phrases like Assalamu'alaikum, Dzikir, Taubat, Istighfar are kept as-is.

## Out of scope (today)

- Push notifications (FCM) — `users/{uid}.fcmToken` slot is reserved
- Hijaiyah / Tajwid lesson content — placeholder tiles only
- PWA / offline mode
- Sticky cross-route audio mini-player
