# Deployment Guide

End-to-end checklist for shipping Rahmah to production. Estimated time: **30–45 minutes** for a fresh setup.

## Stack overview

| Tool | Purpose | Tier |
|---|---|---|
| **Vercel** | Hosting + serverless + analytics | Free tier OK |
| **Firebase Auth** | Email/password + Google sign-in | Free tier OK |
| **Firestore** | User progress, journal, prayers, dzikir, bookmarks | Free tier OK |
| **Cloudinary** *(optional)* | Audio for hijaiyah & dzikir | Free tier OK |
| **quran.com API** | Surah text, translation, recitation audio | Public, no key |
| **Aladhan API** | Prayer times, qibla, Hijri date conversion | Public, no key |

---

## 1. Prerequisites

```bash
# Required
node --version    # ≥ 18.17 (LTS recommended)
npm --version

# Recommended
git --version
```

Install Vercel & Firebase CLIs (used once for setup, optional after):

```bash
npm i -g vercel firebase-tools
```

---

## 2. Firebase setup

### 2.1 Create the project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) → **Add project**
2. Name it (e.g. `sakinah-companion`)
3. Disable Google Analytics for the project (we use Vercel Analytics instead)
4. Wait for provisioning

### 2.2 Enable Firestore

1. Build → **Firestore Database** → **Create database**
2. Mode: **Production** (we'll deploy our own rules)
3. Location: pick the region closest to your users (e.g. `asia-southeast2` for Indonesia)

### 2.3 Enable Authentication

1. Build → **Authentication** → **Get started**
2. Sign-in method:
   - **Email/Password** → Enable
   - **Google** → Enable, set project support email, save
3. Settings → **Authorized domains** → add your future Vercel domain (e.g. `sakinah.vercel.app`) and any custom domain. `localhost` is allowed by default.

### 2.4 Register the web app

1. Project settings (gear icon) → **General** → **Your apps** → click web `</>`
2. Nickname: `web`. Skip Firebase Hosting setup (we use Vercel).
3. Copy the **firebaseConfig** snippet — you'll paste these 6 values into Vercel env vars later.

### 2.5 Deploy Firestore rules + indexes

From the project root:

```bash
firebase login
firebase use --add        # pick the project you created
# update .firebaserc with the projectId, or pass --project on each command

firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes
```

> Files used: [`firestore.rules`](firestore.rules) · [`firestore.indexes.json`](firestore.indexes.json) · [`firebase.json`](firebase.json) · [`.firebaserc`](.firebaserc)

The rules ensure each user can only read/write their own data. Editorial collections (`reflections`, `lessons`) are public read-only.

---

## 3. Cloudinary setup (optional, for audio)

1. Sign up at [cloudinary.com](https://cloudinary.com) (free tier = 25 GB storage, 25 GB bandwidth/mo)
2. Dashboard → copy **Cloud name**
3. Upload audio files via Cloudinary Console:
   - **Hijaiyah letters**: 28 files in folder `hijaiyah/` named `alif`, `ba`, `ta`, …, `ya`, plus `ha-besar` (ح) and `ha-kecil` (ه). See seed in [`src/data/seed-belajar-tahsin.ts`](src/data/seed-belajar-tahsin.ts) for exact `audioPublicId`s.
   - **Dzikir** (optional): match `audioPublicId` in [`src/data/seed-dzikir.ts`](src/data/seed-dzikir.ts).

The app degrades gracefully when Cloudinary isn't configured — audio buttons show a soft "Audio segera tersedia" hint.

---

## 4. Vercel deployment

### 4.1 Push to Git

```bash
git init
git add -A
git commit -m "Initial deployment"
git remote add origin <your-github-repo>
git push -u origin main
```

### 4.2 Import to Vercel

1. [vercel.com](https://vercel.com) → **Add New** → **Project** → import the GitHub repo
2. Framework: **Next.js** (auto-detected)
3. Root directory: `./`
4. Build settings: leave defaults (`vercel.json` already pins them)
5. **Don't deploy yet** — add env vars first

### 4.3 Configure environment variables

In Vercel → Project → Settings → **Environment Variables**, add these for **Production, Preview, and Development**:

| Variable | Source | Required |
|---|---|---|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase config | ✅ |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase config | ✅ |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase config | ✅ |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase config | ✅ |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase config | ✅ |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase config | ✅ |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary dashboard | optional |
| `NEXT_PUBLIC_QURAN_API_BASE` | `https://api.quran.com/api/v4` | optional, has default |
| `NEXT_PUBLIC_SITE_URL` | e.g. `https://sakinah.vercel.app` | optional, used for SEO/sitemap |

> **All values are public**. The Firebase web config is intentionally exposed to the browser — security comes from Firestore Rules + Auth, not from hiding API keys.

### 4.4 Deploy

Push to `main` (or click **Deploy** in Vercel). The app will:
- Auto-build with `next build`
- Statically prerender ~110 routes
- Serve from Vercel's edge in `sin1` (Singapore — change `regions` in [`vercel.json`](vercel.json) if needed)

### 4.5 Post-deploy: add the domain to Firebase

After Vercel gives you a domain (e.g. `sakinah-companion.vercel.app`):

1. Firebase Console → **Authentication** → **Settings** → **Authorized domains**
2. Add the Vercel domain + any custom domain
3. Save. Without this, Google sign-in will fail in production.

### 4.6 Custom domain (optional)

1. Vercel → Project → Settings → **Domains** → add your domain (e.g. `sakinah.com`)
2. Configure DNS records as Vercel instructs
3. Update `NEXT_PUBLIC_SITE_URL` in Vercel env vars
4. Add the custom domain to Firebase Authentication authorized domains

---

## 5. Vercel Analytics

Already wired via [`@vercel/analytics`](https://vercel.com/docs/analytics) and [`@vercel/speed-insights`](https://vercel.com/docs/speed-insights) in [`src/app/layout.tsx`](src/app/layout.tsx).

To activate:
1. Vercel → Project → **Analytics** → Enable
2. **Speed Insights** → Enable

Free tier: 2,500 events/month. Privacy-friendly (no cookies, no PII).

---

## 6. Optional: Push notifications (FCM)

Not yet wired. To add:

1. Firebase Console → **Project settings** → **Cloud Messaging** → enable Web Push
2. Generate a VAPID key pair, add to env vars
3. Add a service worker (`public/firebase-messaging-sw.js`)
4. Wire `getToken()` from `firebase/messaging` after permission grant

This is a separate phase. PWA install is already supported (no notifications yet).

---

## 7. Post-deployment checklist

- [ ] Visit production URL → onboarding flow works
- [ ] Sign up with email + sign in with Google → both succeed
- [ ] Check Firestore Console → user document created
- [ ] Mark a prayer → appears in `userProgress/{uid}/prayers/{date}`
- [ ] Tap dzikir counter → `dzikirLogs/{uid}/daily/{date}` increments
- [ ] Bookmark a verse → `bookmarks/{uid}/verses/{verse_key}` exists
- [ ] Open `/jadwal` → grant location → prayer times load
- [ ] Open `/quran/1` → Al-Fatihah verses load with translation
- [ ] Open in mobile → install prompt appears (Android) / "Add to Home Screen" (iOS)
- [ ] Vercel Analytics → events show up after a few minutes

## 8. Troubleshooting

| Problem | Fix |
|---|---|
| Google sign-in popup closes immediately | Add Vercel domain to Firebase **Authorized domains** |
| "Missing or insufficient permissions" Firestore error | Re-deploy [`firestore.rules`](firestore.rules) — `firebase deploy --only firestore:rules` |
| Audio buttons silently do nothing | Set `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` and ensure files match `audioPublicId` |
| Sign-in works but `useAuth().user` stays null | Check that all 6 `NEXT_PUBLIC_FIREBASE_*` env vars are set on the right Vercel environment (Production vs Preview) |
| Prayer times fail to load | Check browser geolocation permission; check Aladhan API status |
| Build fails with "Module not found" | `rm -rf .next node_modules && npm install && npm run build` locally first |
| Hijri date is wrong | Aladhan API has a small variance vs local algorithm. Cached daily — clear `localStorage` to refresh |

## 9. Local development with production data

To work locally against your real Firebase project:

```bash
cp .env.local.example .env.local
# Fill in the same values you put in Vercel
npm run dev
```

The auth state will sync with production. Use a separate Firebase project for staging if you want to avoid touching real user data.

## 10. Maintenance

- **Firestore rules updates**: edit [`firestore.rules`](firestore.rules) → `firebase deploy --only firestore:rules`
- **Indexes**: edit [`firestore.indexes.json`](firestore.indexes.json) → `firebase deploy --only firestore:indexes`
- **Vercel env vars** can be updated without redeploying — but the change takes effect on the next deploy
- **Belajar / butuhkan / hijri month content**: edit `src/data/seed-*.ts` files → push to Git → Vercel auto-deploys

That's it. The app is designed to run at near-zero cost on free tiers — and stay fast even at scale because almost everything is statically prerendered.
