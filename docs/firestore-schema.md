# Firestore schema

All client-facing collections used by Sakinah Companion. Keys with `{uid}` are scoped to the signed-in user's UID.

## Collections

### `users/{uid}`
User profile written once on first sign-in.
```
{
  name: string
  email: string | null
  createdAt: Timestamp
  locale: 'id'
}
```

### `userProgress/{uid}/prayers/{YYYY-MM-DD}`
Daily prayer checklist state.
```
{
  fajr: boolean
  dhuhr: boolean
  asr: boolean
  maghrib: boolean
  isha: boolean
  updatedAt: Timestamp
}
```

### `userProgress/{uid}/meta/quranPosition`
Last Quran reading position.
```
{
  surahNumber: number
  surahName: string
  ayahNumber: number
  totalAyahs: number
  updatedAt: Timestamp
}
```

### `journals/{uid}/entries/{YYYY-MM-DD}`
One entry per day.
```
{
  date: 'YYYY-MM-DD'
  mood?: 'joyful' | 'calm' | 'sad' | 'tearful' | 'angry' | 'tired' | 'loved'
  text: string
  updatedAt: Timestamp
}
```

### `dzikirLogs/{uid}/daily/{YYYY-MM-DD}`
Aggregated counts per category for the day.
```
{
  morning?: number
  evening?: number
  afterPrayer?: number
  istighfar?: number
  updatedAt: Timestamp
}
```

### `reflections/{YYYY-MM-DD}` (server-managed, optional)
The shared daily ayah of reflection. Currently sourced client-side from `data/seed-reflections.ts` via `reflectionForToday`. Promote to Firestore when an editorial flow is needed.
```
{
  surahName: string
  surahNumber: number
  ayahNumber: number
  arabic: string
  translation: string
  tone: 'hope' | 'patience' | 'trust' | 'gratitude' | 'love'
}
```

### `lessons/{slug}` (future)
Hijaiyah/Tajwid/Parenting lesson content. Currently seeded client-side from `data/seed-parenting.ts`.
```
{
  type: 'hijaiyah' | 'tajwid' | 'parenting'
  title: string
  body: string
  audioPublicId?: string
}
```

## Suggested security rules (starter)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    function signedIn() { return request.auth != null; }
    function isOwner(uid) { return signedIn() && request.auth.uid == uid; }

    match /users/{uid} {
      allow read, write: if isOwner(uid);
    }
    match /userProgress/{uid}/{document=**} {
      allow read, write: if isOwner(uid);
    }
    match /journals/{uid}/{document=**} {
      allow read, write: if isOwner(uid);
    }
    match /dzikirLogs/{uid}/{document=**} {
      allow read, write: if isOwner(uid);
    }
    match /reflections/{date} {
      allow read: if true;
      allow write: if false; // editorial only
    }
    match /lessons/{slug} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```
