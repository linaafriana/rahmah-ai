// Daily rotation of Asmaul Husna — 30 names with brief reflection.
// Picks deterministically by day of year so the same name appears for everyone on the same day.

export type AsmaulHusnaName = {
  arabic: string;
  transliteration: string;
  meaning: string; // Indonesian
  reflection: string; // 1–2 sentences how to relate to this name
};

export const asmaulHusnaRotation: AsmaulHusnaName[] = [
  {
    arabic: "ٱلرَّحْمَٰنُ",
    transliteration: "Ar-Raḥmān",
    meaning: "Maha Pengasih",
    reflection:
      "Kasih sayang-Nya untuk semua makhluk, beriman atau tidak. Bahkan di saat berdosa, kau dipangku oleh kasih-Nya.",
  },
  {
    arabic: "ٱلرَّحِيمُ",
    transliteration: "Ar-Raḥīm",
    meaning: "Maha Penyayang",
    reflection:
      "Sayang khusus untuk orang beriman, terutama di akhirat. Setiap doamu dicatat dengan kasih.",
  },
  {
    arabic: "ٱلْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "Maha Raja",
    reflection:
      "Penguasa atas semua kerajaan. Saat manusia menakutkanmu, ingatlah — Dia di atas mereka.",
  },
  {
    arabic: "ٱلْقُدُّوسُ",
    transliteration: "Al-Quddūs",
    meaning: "Maha Suci",
    reflection:
      "Suci dari segala kekurangan. Sucikan hatimu untuk-Nya — itulah yang dilihat-Nya.",
  },
  {
    arabic: "ٱلسَّلَامُ",
    transliteration: "As-Salām",
    meaning: "Sumber Keselamatan",
    reflection:
      "Hatimu gelisah? Sebut nama-Nya. Damai dari-Nya tidak bisa diberikan oleh apa pun di dunia.",
  },
  {
    arabic: "ٱلْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meaning: "Pemberi Keamanan",
    reflection:
      "Yang menanamkan rasa aman di hati hamba-Nya. Saat takut, ucapkan: Yā Mu'min, amankan hatiku.",
  },
  {
    arabic: "ٱلْمُهَيْمِنُ",
    transliteration: "Al-Muhaimin",
    meaning: "Maha Memelihara",
    reflection:
      "Mengawasi dan melindungi seluruh ciptaan. Tidak ada satu detik pun kau lepas dari pengawasan-Nya yang penuh kasih.",
  },
  {
    arabic: "ٱلْعَزِيزُ",
    transliteration: "Al-'Azīz",
    meaning: "Maha Perkasa",
    reflection:
      "Tidak terkalahkan. Saat kau merasa lemah, sandarkan kekuatanmu pada-Nya — itulah kekuatan sejati.",
  },
  {
    arabic: "ٱلْجَبَّارُ",
    transliteration: "Al-Jabbār",
    meaning: "Maha Memperbaiki",
    reflection:
      "Yang memperbaiki yang patah, menyembuhkan yang luka, membenarkan yang salah. Datanglah pada-Nya dengan kerusakanmu.",
  },
  {
    arabic: "ٱلْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meaning: "Maha Memiliki Kebesaran",
    reflection:
      "Kebesaran milik-Nya. Maka tunduklah hanya pada-Nya — dan kepala kita akan terangkat di hadapan selain-Nya.",
  },
  {
    arabic: "ٱلْخَالِقُ",
    transliteration: "Al-Khāliq",
    meaning: "Maha Pencipta",
    reflection:
      "Yang menciptakan tanpa contoh sebelumnya. Engkau, dengan segala detail tubuhmu, adalah karya-Nya.",
  },
  {
    arabic: "ٱلْغَفَّارُ",
    transliteration: "Al-Ghaffār",
    meaning: "Maha Pengampun (berulang-ulang)",
    reflection:
      "Mengampuni berulang-ulang, walau hamba kembali pada dosa yang sama. Tidak ada batas pada ampunan-Nya.",
  },
  {
    arabic: "ٱلْوَهَّابُ",
    transliteration: "Al-Wahhāb",
    meaning: "Maha Pemberi",
    reflection:
      "Memberi tanpa diminta, tanpa balasan. Lihat sekitarmu — udara, air, mata yang melihat — semua adalah pemberian-Nya.",
  },
  {
    arabic: "ٱلرَّزَّاقُ",
    transliteration: "Ar-Razzāq",
    meaning: "Maha Pemberi Rezeki",
    reflection:
      "Yang menjamin rezeki seluruh makhluk. Tidak ada burung yang lapar — Dia memberi makan tanpa kau lihat.",
  },
  {
    arabic: "ٱلْفَتَّاحُ",
    transliteration: "Al-Fattāḥ",
    meaning: "Maha Pembuka",
    reflection:
      "Yang membuka pintu hati, rezeki, dan jalan keluar. Saat semua tertutup, sebut: Yā Fattāḥ, bukakan untukku.",
  },
  {
    arabic: "ٱلْعَلِيمُ",
    transliteration: "Al-'Alīm",
    meaning: "Maha Mengetahui",
    reflection:
      "Mengetahui yang tampak dan yang tersembunyi. Hatimu yang paling rahasia pun dilihat-Nya.",
  },
  {
    arabic: "ٱلْحَكِيمُ",
    transliteration: "Al-Ḥakīm",
    meaning: "Maha Bijaksana",
    reflection:
      "Setiap takdir-Nya pasti hikmah, walau tidak kau pahami. Tunduk dulu — paham menyusul.",
  },
  {
    arabic: "ٱلْوَدُودُ",
    transliteration: "Al-Wadūd",
    meaning: "Maha Mencintai",
    reflection:
      "Mencintai hamba-Nya tanpa syarat. Bahkan saat kau lupa pada-Nya, Dia tidak lupa padamu.",
  },
  {
    arabic: "ٱلْمُجِيبُ",
    transliteration: "Al-Mujīb",
    meaning: "Maha Mengabulkan",
    reflection:
      "Mengabulkan doa dengan caranya sendiri. Tidak ada doa yang sia-sia — bentuk pengabulan saja yang berbeda.",
  },
  {
    arabic: "ٱلْكَبِيرُ",
    transliteration: "Al-Kabīr",
    meaning: "Maha Besar",
    reflection:
      "Besar dengan kebesaran sejati. Saat masalahmu terasa raksasa, ingat — Dia lebih besar.",
  },
  {
    arabic: "ٱلْحَفِيظُ",
    transliteration: "Al-Ḥafīẓ",
    meaning: "Maha Menjaga",
    reflection:
      "Menjaga setiap napasmu, amalmu, dan rahasiamu. Tidak ada yang luput dari catatan-Nya.",
  },
  {
    arabic: "ٱلْمُجِيبُ",
    transliteration: "Al-Mujīb",
    meaning: "Maha Menjawab",
    reflection:
      "Menjawab panggilan setiap hamba. Saat doa terasa lama, percayalah — Dia sedang menyiapkan yang terbaik.",
  },
  {
    arabic: "ٱلْوَكِيلُ",
    transliteration: "Al-Wakīl",
    meaning: "Sebaik-baik Penolong",
    reflection:
      "Tempat tawakkal yang sempurna. Setelah ikhtiar, lepaskan urusanmu pada-Nya.",
  },
  {
    arabic: "ٱلْقَوِيُّ",
    transliteration: "Al-Qawiyy",
    meaning: "Maha Kuat",
    reflection:
      "Tidak ada yang lebih kuat dari-Nya. Saat lemah, sandarkan pada kekuatan-Nya.",
  },
  {
    arabic: "ٱلْوَلِيُّ",
    transliteration: "Al-Waliyy",
    meaning: "Maha Pelindung",
    reflection:
      "Pelindung yang dekat. Lebih dekat dari urat lehermu, lebih lembut dari ibu pada anaknya.",
  },
  {
    arabic: "ٱلْمُحْيِي",
    transliteration: "Al-Muḥyī",
    meaning: "Maha Menghidupkan",
    reflection:
      "Menghidupkan yang mati — termasuk hati yang membatu. Mintalah pada-Nya untuk menghidupkan rasa beragamamu.",
  },
  {
    arabic: "ٱلْمُمِيتُ",
    transliteration: "Al-Mumīt",
    meaning: "Maha Mematikan",
    reflection:
      "Yang mematikan sesuai waktu yang ditetapkan. Mengingat-Nya adalah mengingat ajalmu — pemutus segala kelalaian.",
  },
  {
    arabic: "ٱلْحَيُّ",
    transliteration: "Al-Ḥayy",
    meaning: "Maha Hidup",
    reflection:
      "Hidup tanpa awal dan tanpa akhir. Sebut nama-Nya saat hatimu terasa mati — Dia akan menghidupkannya.",
  },
  {
    arabic: "ٱلْقَيُّومُ",
    transliteration: "Al-Qayyūm",
    meaning: "Maha Berdiri Sendiri",
    reflection:
      "Mengurus seluruh ciptaan tanpa lelah. Tidak tidur, tidak istirahat. Datanglah pada-Nya kapan saja, Dia siap.",
  },
  {
    arabic: "ٱللَّطِيفُ",
    transliteration: "Al-Laṭīf",
    meaning: "Maha Lembut",
    reflection:
      "Mengetahui hal terkecil dan menolong dengan cara yang halus. Sering bantuan datang dari arah yang tak disangka — itu adalah-Nya.",
  },
];

export function asmaulHusnaOfDay(d = new Date()): AsmaulHusnaName {
  const dayIndex = Math.floor(
    (d.getTime() - new Date(d.getFullYear(), 0, 0).getTime()) / 86_400_000,
  );
  return asmaulHusnaRotation[dayIndex % asmaulHusnaRotation.length];
}
