// Special verses in the Qur'an that benefit from a contextual hint
// while reading. Currently supports:
//
//   1. Ayat sajdah — 15 verses. Sunnah to do sujud tilawah when reading.
//      Source: HR. Abu Dawud no. 1407, At-Tirmidzi no. 575
//
//   2. Doa-doa nabawi yang diabadikan di Al-Qur'an — reminder pelan +
//      cocok dijadikan doa pribadi.
//
// Each hint includes a citation so reviewer can verify.

export type VerseHintKind = "sajdah" | "doa";

export type VerseHint = {
  surah: number;
  ayah: number;
  kind: VerseHintKind;
  title: string;
  body: string;
  source: string;
};

// 15 ayat sajdah berdasarkan riwayat shahih.
// Sumber: Hadits Amr bin al-'Ash (HR. Abu Dawud no. 1401), Hadits Ibn
// Abbas (HR. Abu Dawud no. 1407), dan Hadits Uqbah bin 'Amir (HR. Abu
// Dawud no. 1402, At-Tirmidzi no. 578) tentang dua sajdah Al-Hajj.
const sajdahLocations: Array<[number, number]> = [
  [7, 206], // Al-A'raf
  [13, 15], // Ar-Ra'd
  [16, 50], // An-Nahl
  [17, 109], // Al-Isra
  [19, 58], // Maryam
  [22, 18], // Al-Hajj (sajdah 1)
  [22, 77], // Al-Hajj (sajdah 2 — diperselisihkan, Syafi'i meriwayatkannya)
  [25, 60], // Al-Furqan
  [27, 26], // An-Naml
  [32, 15], // As-Sajdah
  [38, 24], // Sad
  [41, 38], // Fussilat
  [53, 62], // An-Najm
  [84, 21], // Al-Insyiqaq
  [96, 19], // Al-'Alaq
];

const sajdahHints: VerseHint[] = sajdahLocations.map(([surah, ayah]) => ({
  surah,
  ayah,
  kind: "sajdah",
  title: "Ayat sajdah — disunnahkan sujud",
  body: "Saat membaca ayat ini, disunnahkan sujud tilawah: takbir, sujud sekali, lalu duduk dan salam (sebagian ulama: cukup sujud tanpa salam). Dalam sujud, baca: 'Sajada wajhī lilladzī khalaqahu wa shawwarahu, wa syaqqa sam'ahu wa baṣarahu biḥaulihi wa quwwatih, tabārakallāhu aḥsanul-khāliqīn'.",
  source:
    "HR. Abu Dawud no. 1414, At-Tirmidzi no. 580 (lafaz sujud); status: hasan",
}));

// Doa-doa Nabi yang diabadikan di Al-Qur'an — saat melewatinya,
// dianjurkan membacanya dengan tadabbur (perlahan + meresapi).
const doaHints: VerseHint[] = [
  {
    surah: 2,
    ayah: 201,
    kind: "doa",
    title: "Doa kebaikan dunia & akhirat",
    body: "Doa yang paling sering dibaca Rasulullah ﷺ. Hafalkan dan jadikan doa harian: 'Rabbanā ātinā fid-dunyā ḥasanah wa fil-ākhirati ḥasanah wa qinā 'adzāban-nār'.",
    source: "HR. Al-Bukhari no. 6389, Muslim no. 2690",
  },
  {
    surah: 2,
    ayah: 286,
    kind: "doa",
    title: "Doa penutup Al-Baqarah",
    body: "Dua ayat terakhir Al-Baqarah. 'Barangsiapa membacanya di malam hari, akan mencukupinya' (HR. Bukhari 5009). Penuh doa: ampunan, kasih sayang, ditolong dari kaum kafir.",
    source: "HR. Al-Bukhari no. 5009, Muslim no. 808",
  },
  {
    surah: 3,
    ayah: 8,
    kind: "doa",
    title: "Doa keteguhan hati",
    body: "'Rabbanā lā tuzigh qulūbanā ba'da idz hadaitanā…' — Ya Tuhan kami, jangan condongkan hati kami setelah Engkau beri petunjuk. Tepat dibaca saat merasa iman lemah.",
    source: "QS. Ali Imran: 8",
  },
  {
    surah: 3,
    ayah: 173,
    kind: "doa",
    title: "Doa saat menghadapi tekanan",
    body: "'Ḥasbunallāhu wa ni'mal-wakīl' — Cukuplah Allah bagi kami, dan Dia sebaik-baik pelindung. Dibaca Nabi Ibrahim ﷺ saat dilempar ke api, dan oleh Nabi ﷺ saat menghadapi musuh.",
    source: "HR. Al-Bukhari no. 4563",
  },
  {
    surah: 17,
    ayah: 24,
    kind: "doa",
    title: "Doa untuk orang tua",
    body: "'Rabbirḥamhumā kamā rabbayānī ṣaghīrā' — Ya Tuhanku, sayangilah keduanya sebagaimana mereka mengasihiku waktu kecil. Wajib dihafal.",
    source: "QS. Al-Israa': 24",
  },
  {
    surah: 20,
    ayah: 25,
    kind: "doa",
    title: "Doa Nabi Musa — dimudahkan urusan",
    body: "'Rabbisyraḥ lī ṣadrī wa yassir lī amrī…' — sangat mustajab saat hendak menghadapi sesuatu yang berat: ujian, presentasi, percakapan sulit.",
    source: "QS. Thaha: 25–28",
  },
  {
    surah: 20,
    ayah: 114,
    kind: "doa",
    title: "Doa minta tambahan ilmu",
    body: "'Rabbi zidnī 'ilmā' — Ya Rabbku, tambahkanlah ilmuku. Sangat dianjurkan sebelum membuka kitab atau hadir kelas.",
    source: "QS. Thaha: 114",
  },
  {
    surah: 25,
    ayah: 74,
    kind: "doa",
    title: "Doa keluarga sakinah",
    body: "'Rabbanā hab lanā min azwājinā wa dzurriyyātinā qurrata a'yunin waj'alnā lil-muttaqīna imāmā' — Ya Rabb, jadikan istri & keturunan kami penyejuk mata, dan jadikan kami pemimpin orang-orang bertakwa.",
    source: "QS. Al-Furqan: 74",
  },
  {
    surah: 37,
    ayah: 100,
    kind: "doa",
    title: "Doa Nabi Ibrahim — anak shalih",
    body: "'Rabbi hab lī minaṣ-ṣāliḥīn' — Ya Tuhanku, anugerahkan kepadaku keturunan yang shalih. Pendek, sering diulang oleh para orang tua.",
    source: "QS. Aṣ-Ṣāffāt: 100",
  },
  {
    surah: 66,
    ayah: 8,
    kind: "doa",
    title: "Doa tobat nasuha",
    body: "Ayat tentang tobatan nasuha — tobat yang murni. Sambil membaca, hadirkan niat: meninggalkan dosa, menyesal, bertekad tidak mengulang.",
    source: "QS. At-Tahrim: 8",
  },
];

export const verseHints: VerseHint[] = [...sajdahHints, ...doaHints];

const hintMap = new Map<string, VerseHint[]>();
for (const h of verseHints) {
  const key = `${h.surah}:${h.ayah}`;
  const arr = hintMap.get(key) ?? [];
  arr.push(h);
  hintMap.set(key, arr);
}

/** Returns hints for a verse, or empty array. Verse key format: "S:A". */
export function getHintsFor(verseKey: string): VerseHint[] {
  return hintMap.get(verseKey) ?? [];
}
