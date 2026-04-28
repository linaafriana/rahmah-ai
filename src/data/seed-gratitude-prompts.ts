// Gratitude / muhasabah journal prompts.
// Sumber inspirasi: Muslim Weekly Gratitude Journal 2026.
// Dipilih untuk membantu refleksi harian — bukan ujian, tapi cermin.

export type GratitudePrompt = {
  id: string;
  category: "syukur" | "tawakkal" | "muhasabah" | "rezeki" | "hati" | "sosial" | "waktu";
  emoji: string;
  title: string;
  body: string;
};

export const gratitudePrompts: GratitudePrompt[] = [
  // Syukur
  {
    id: "first-breath",
    category: "syukur",
    emoji: "🌅",
    title: "Napas pertama",
    body: "Alhamdulillah, Allah masih mengizinkanku bangun. Apa satu kebaikan yang ingin kupersembahkan untuk-Nya hari ini?",
  },
  {
    id: "nikmat-jasmani",
    category: "syukur",
    emoji: "🫀",
    title: "Nikmat jasmani",
    body: "Anggota tubuh mana yang berfungsi sempurna hari ini tanpa aku minta? Tuliskan satu yang sering kau lupakan.",
  },
  {
    id: "tiga-nikmat",
    category: "syukur",
    emoji: "🌷",
    title: "Tiga nikmat sederhana",
    body: "Sebutkan tiga hal kecil hari ini yang kau syukuri. Bukan yang besar — yang sering luput.",
  },
  {
    id: "nikmat-luput",
    category: "syukur",
    emoji: "💫",
    title: "Nikmat yang luput",
    body: "Apa nikmat 'kecil' yang sering aku lupakan hari ini? Air? Mata yang melihat ini? Udara yang kau hirup?",
  },
  {
    id: "penciptaan-terbaik",
    category: "syukur",
    emoji: "✨",
    title: "Penciptaan terbaik",
    body: "Mengingat QS. At-Tin: bagian fisik atau bakat apa dari diriku yang harus aku syukuri hari ini karena Allah menciptakannya dengan sempurna?",
  },

  // Tawakkal
  {
    id: "tawakkal",
    category: "tawakkal",
    emoji: "🤲",
    title: "Penyerahan diri (tawakkal)",
    body: "Urusan apa yang paling mencemaskanku hari ini, dan bagaimana aku bisa menyerahkannya ('titip') kepada Allah setelah aku berusaha?",
  },
  {
    id: "menyerahkan-beban",
    category: "tawakkal",
    emoji: "🍃",
    title: "Menyerahkan beban",
    body: "Hal apa yang berada di luar kendaliku hari ini? Kuserahkan hasil akhirnya pada Allah — Dia sebaik-baik pengatur skenario.",
  },
  {
    id: "ketidakberdayaan",
    category: "tawakkal",
    emoji: "🌧️",
    title: "Pengakuan ketidakberdayaan",
    body: "Di titik mana aku merasa benar-benar tidak sanggup berjuang sendirian hari ini? Aku akui kelemahan ini di hadapan-Mu, ya Allah. Lā ḥaula wa lā quwwata illā billāh.",
  },
  {
    id: "jalur-langit",
    category: "tawakkal",
    emoji: "☁️",
    title: "Jalur langit",
    body: "Kejutan atau pertolongan tak terduga apa yang Allah kirimkan hari ini?",
  },

  // Muhasabah
  {
    id: "istighfar-malam",
    category: "muhasabah",
    emoji: "🌙",
    title: "Istighfar malam",
    body: "Khilaf apa yang aku lakukan hari ini — dan aku bersyukur Allah masih menutup aibku?",
  },
  {
    id: "pemberian-maaf",
    category: "muhasabah",
    emoji: "💌",
    title: "Pemberian maaf",
    body: "Siapa yang membuatku kesal hari ini? Bisakah aku memaafkannya sekarang agar aku tidur tanpa beban dendam?",
  },
  {
    id: "menahan-diri",
    category: "muhasabah",
    emoji: "🛡️",
    title: "Menahan diri",
    body: "Godaan apa yang berhasil aku kalahkan hari ini? Scroll sosmed berjam-jam? Ghibah? Menunda sholat?",
  },
  {
    id: "evaluasi-qurani",
    category: "muhasabah",
    emoji: "📖",
    title: "Evaluasi Qurani",
    body: "Ayat mana yang aku praktikkan hari ini? Mengamalkan ayat tentang bicara santun? Ayat tentang tidak boros?",
  },
  {
    id: "jejak-kebaikan",
    category: "muhasabah",
    emoji: "🌱",
    title: "Jejak kebaikan",
    body: "Jika aku wafat malam ini, amal apa dari hari ini yang paling aku harap diterima Allah?",
  },
  {
    id: "muhasabah-cleaning",
    category: "muhasabah",
    emoji: "🪞",
    title: "Muhasabah hati",
    body: "Aku memaafkan…  Aku minta ampun atas…  Aku berserah diri untuk…",
  },

  // Rezeki
  {
    id: "rezeki-mindset",
    category: "rezeki",
    emoji: "🌾",
    title: "Mindset rezeki",
    body: "Bukan hanya uang. Rezeki apa yang aku harapkan hari ini? Kesehatan? Kemudahan urusan? Hati yang lapang?",
  },
  {
    id: "rezeki-non-materi",
    category: "rezeki",
    emoji: "💎",
    title: "Rezeki non-materi",
    body: "Selain isi dompet, kekayaan apa yang aku miliki hari ini? Ketenangan? Anak yang sehat? Atap di atas kepala?",
  },
  {
    id: "keajaiban-sedekah",
    category: "rezeki",
    emoji: "🪙",
    title: "Keajaiban sedekah",
    body: "Apa hal kecil yang bisa aku berikan pada orang lain hari ini? Senyum? Tenaga? Telinga untuk mendengar?",
  },
  {
    id: "abundance",
    category: "rezeki",
    emoji: "🌟",
    title: "Cukup hari ini",
    body: "Di saat aku merasa kurang, bukti apa yang menunjukkan bahwa Allah sebenarnya sudah mencukupkan aku hari ini?",
  },

  // Hati
  {
    id: "validasi-perasaan",
    category: "hati",
    emoji: "💭",
    title: "Validasi perasaan",
    body: "Apa rasa yang paling dominan di hatiku hari ini? Marah? Kecewa? Lelah? Takut? Allah tahu — dan itu tidak apa-apa.",
  },
  {
    id: "silver-lining",
    category: "hati",
    emoji: "🌤️",
    title: "Hikmah dari yang berat",
    body: "Di balik kejadian tidak enak hari ini, pelajaran apa yang Allah ingin aku mengerti?",
  },
  {
    id: "janji-kemudahan",
    category: "hati",
    emoji: "🌈",
    title: "Janji kemudahan",
    body: "Mengingat 'inna ma'al-'usri yusrā' — kemudahan kecil apa yang menyertai kesulitan besarku hari ini?",
  },
  {
    id: "rencana-allah",
    category: "hati",
    emoji: "🌌",
    title: "Allah Penulis Skenario Terbaik",
    body: "Hal indah apa yang mungkin sedang Allah persiapkan di balik ketidakjelasan ini? Mari berimajinasi tentang kebaikan-Nya.",
  },
  {
    id: "jalur-hidup",
    category: "hati",
    emoji: "🛤️",
    title: "Jalur hidupku",
    body: "Apa satu hal yang orang lain miliki tapi belum Allah berikan padaku — dan aku percaya itu adalah perlindungan agar aku tidak sombong/lalai?",
  },

  // Sosial
  {
    id: "perantara-kebaikan",
    category: "sosial",
    emoji: "🤝",
    title: "Perantara kebaikan",
    body: "Siapa orang yang Allah gerakkan hatinya untuk membantuku hari ini?",
  },
  {
    id: "menjaga-lisan",
    category: "sosial",
    emoji: "🤐",
    title: "Menjaga lisan",
    body: "Apakah hari ini aku berhasil menahan diri dari ghibah atau komentar julid?",
  },
  {
    id: "sedekah-non-materi",
    category: "sosial",
    emoji: "🤍",
    title: "Sedekah non-materi",
    body: "Senyum, tenaga, ilmu, atau telinga (mendengar) — siapa yang aku bantu hari ini?",
  },

  // Waktu
  {
    id: "barakah-audit",
    category: "waktu",
    emoji: "⏳",
    title: "Audit keberkahan waktu",
    body: "Walau hari ini sibuk sekali, apa satu hal penting yang selesai aku kerjakan dengan baik? Aku bersyukur Allah memberkahi waktuku.",
  },
  {
    id: "intentional-pause",
    category: "waktu",
    emoji: "⏸️",
    title: "Jeda yang disengaja",
    body: "Apakah hari ini aku sholat terburu-buru, atau aku berhasil memberi jeda tenang untuk thuma'ninah?",
  },
  {
    id: "accepting-limits",
    category: "waktu",
    emoji: "🌅",
    title: "Menerima batas",
    body: "Aku hanyalah manusia, bukan robot. Jika ada to-do list yang tidak selesai hari ini, apakah aku bisa ikhlas menerimanya dan berkata 'Besok adalah hari baru'?",
  },
  {
    id: "quality-presence",
    category: "waktu",
    emoji: "💫",
    title: "Hadir 100%",
    body: "Daripada menyesali waktu yang sempit, apakah aku bersyukur bahwa di waktu yang sempit itu aku hadir 100% untuk anak/pasangan/ibadah?",
  },
];

export function promptOfDay(date = new Date()): GratitudePrompt {
  const dayIndex = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86_400_000,
  );
  return gratitudePrompts[dayIndex % gratitudePrompts.length];
}
