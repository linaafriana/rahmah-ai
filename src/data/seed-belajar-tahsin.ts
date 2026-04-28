import type { LearnTopic } from "@/types";

const hijaiyah: LearnTopic = {
  id: "hijaiyah",
  slug: "hijaiyah",
  category: "tahsin",
  level: "pemula",
  title: "Belajar Hijaiyah",
  description: "Kenali 28 huruf, satu per satu",
  emoji: "🔤",
  intro:
    "Hijaiyah adalah pintu pertama untuk membaca Al-Qur'an. Tidak perlu buru-buru — kenali bentuk dan bunyinya dengan tenang. Ulangi setiap huruf 3 kali sambil tersenyum.",
  items: [
    { title: "Alif", arabic: "ا", transliteration: "a", audioPublicId: "hijaiyah/alif", body: "Bunyi 'a' lembut, seperti membuka mulut perlahan." },
    { title: "Ba", arabic: "ب", transliteration: "b", audioPublicId: "hijaiyah/ba", body: "Bibir bertemu lalu terbuka. Seperti 'ba' dalam bahasa kita." },
    { title: "Ta", arabic: "ت", transliteration: "t", audioPublicId: "hijaiyah/ta", body: "Lidah menyentuh gigi atas. Bunyinya 'ta'." },
    { title: "Tsa", arabic: "ث", transliteration: "ts", audioPublicId: "hijaiyah/tsa", body: "Lidah keluar sedikit di antara gigi. Bunyinya 'tsa' (mirip 'th' bahasa Inggris)." },
    { title: "Jim", arabic: "ج", transliteration: "j", audioPublicId: "hijaiyah/jim", body: "Bunyi 'ja' yang jernih dari pangkal lidah." },
    { title: "Ha", arabic: "ح", transliteration: "ḥ", audioPublicId: "hijaiyah/ha-besar", body: "Bunyi 'ha' dalam, dari tengah tenggorokan. Bukan 'ha' biasa." },
    { title: "Kho", arabic: "خ", transliteration: "kh", audioPublicId: "hijaiyah/kho", body: "Seperti berdehem halus. Bunyinya 'kho'." },
    { title: "Dal", arabic: "د", transliteration: "d", audioPublicId: "hijaiyah/dal", body: "Lidah menyentuh gigi atas. Bunyinya 'da'." },
    { title: "Dzal", arabic: "ذ", transliteration: "dz", audioPublicId: "hijaiyah/dzal", body: "Lidah keluar sedikit. Bunyinya 'dza' (mirip 'th' lembut)." },
    { title: "Ra", arabic: "ر", transliteration: "r", audioPublicId: "hijaiyah/ra", body: "Bunyi 'ra' tegas, lidah bergetar di langit-langit." },
    { title: "Zai", arabic: "ز", transliteration: "z", audioPublicId: "hijaiyah/zai", body: "Bunyi 'za' seperti dengungan halus." },
    { title: "Sin", arabic: "س", transliteration: "s", audioPublicId: "hijaiyah/sin", body: "Bunyi 'sa' tipis, seperti angin keluar lewat gigi." },
    { title: "Syin", arabic: "ش", transliteration: "sy", audioPublicId: "hijaiyah/syin", body: "Bunyi 'sya' lembut, lidah lebih lebar." },
    { title: "Shod", arabic: "ص", transliteration: "ṣ", audioPublicId: "hijaiyah/shod", body: "Bunyi 'sho' yang tebal — lidah agak diangkat." },
    { title: "Dhod", arabic: "ض", transliteration: "ḍ", audioPublicId: "hijaiyah/dhod", body: "Bunyi 'dho' tebal, dari sisi lidah ke gigi geraham atas." },
    { title: "Tho", arabic: "ط", transliteration: "ṭ", audioPublicId: "hijaiyah/tho", body: "Bunyi 'tho' tebal, seperti 'ta' tapi lebih berat." },
    { title: "Zho", arabic: "ظ", transliteration: "ẓ", audioPublicId: "hijaiyah/zho", body: "Bunyi 'zho' tebal, lidah keluar sedikit dengan tegas." },
    { title: "'Ain", arabic: "ع", transliteration: "'a", audioPublicId: "hijaiyah/ain", body: "Bunyi dari tengah tenggorokan, seperti 'a' yang dalam." },
    { title: "Ghain", arabic: "غ", transliteration: "gh", audioPublicId: "hijaiyah/ghain", body: "Bunyi 'ghain' seperti berkumur halus dari pangkal lidah." },
    { title: "Fa", arabic: "ف", transliteration: "f", audioPublicId: "hijaiyah/fa", body: "Gigi atas menyentuh bibir bawah. Bunyinya 'fa'." },
    { title: "Qaf", arabic: "ق", transliteration: "q", audioPublicId: "hijaiyah/qaf", body: "Bunyi 'qa' tebal dari pangkal lidah, jauh di belakang." },
    { title: "Kaf", arabic: "ك", transliteration: "k", audioPublicId: "hijaiyah/kaf", body: "Bunyi 'ka' jelas, lebih ke depan dari qaf." },
    { title: "Lam", arabic: "ل", transliteration: "l", audioPublicId: "hijaiyah/lam", body: "Lidah menyentuh langit-langit. Bunyinya 'la'." },
    { title: "Mim", arabic: "م", transliteration: "m", audioPublicId: "hijaiyah/mim", body: "Bibir tertutup, ada dengung kecil. Bunyinya 'ma'." },
    { title: "Nun", arabic: "ن", transliteration: "n", audioPublicId: "hijaiyah/nun", body: "Lidah menyentuh langit-langit dengan dengung. Bunyinya 'na'." },
    { title: "Wau", arabic: "و", transliteration: "w", audioPublicId: "hijaiyah/wau", body: "Bibir membulat. Bunyinya 'wa' atau 'u' panjang." },
    { title: "Ha", arabic: "ه", transliteration: "h", audioPublicId: "hijaiyah/ha-kecil", body: "Bunyi 'ha' ringan dari ujung tenggorokan." },
    { title: "Ya", arabic: "ي", transliteration: "y", audioPublicId: "hijaiyah/ya", body: "Bunyi 'ya' atau 'i' panjang. Lidah agak terangkat ke atas." },
  ],
  closing:
    "Bagus sekali — sudah sampai ya. Coba lagi besok dengan suara pelan, biarkan lidahmu terbiasa.",
};

const tajwidDasar: LearnTopic = {
  id: "tajwid",
  slug: "tajwid",
  category: "tahsin",
  level: "pemula",
  title: "Tajwid Dasar",
  description: "Hukum yang paling sering muncul",
  emoji: "📖",
  intro:
    "Tajwid bukan untuk membuatmu takut salah, tapi untuk menghormati setiap huruf yang Allah turunkan. Mulai dari yang paling sering muncul.",
  items: [
    {
      title: "Mad Thabi'i",
      arabic: "بَا · بِي · بُو",
      body: "Panjang dasar 2 harakat. Terjadi saat huruf berharakat fathah bertemu alif, kasrah bertemu ya sukun, atau dhammah bertemu wau sukun.",
    },
    {
      title: "Ghunnah",
      arabic: "نّ · مّ",
      body: "Dengung 2 harakat pada nun atau mim bertasydid. Suara keluar dari hidung dengan lembut.",
    },
    {
      title: "Idzhar Halqi",
      arabic: "نْ + ء ه ع ح غ خ",
      body: "Nun mati atau tanwin bertemu salah satu enam huruf halqi → dibaca jelas, tanpa dengung. Contoh: مِنْ هَادٍ.",
    },
    {
      title: "Idgham Bighunnah",
      arabic: "نْ + ي ن م و",
      body: "Nun mati atau tanwin bertemu ي ن م و → dilebur ke huruf berikutnya dengan dengung 2 harakat. Contoh: مَنْ يَقُولُ.",
    },
    {
      title: "Idgham Bilaghunnah",
      arabic: "نْ + ل ر",
      body: "Nun mati atau tanwin bertemu ل atau ر → dilebur tanpa dengung. Contoh: مِنْ رَبِّهِمْ.",
    },
    {
      title: "Iqlab",
      arabic: "نْ + ب",
      body: "Nun mati atau tanwin bertemu ب → diganti menjadi mim dengan dengung samar. Contoh: مِنْۢ بَعْدِ.",
    },
    {
      title: "Ikhfa Haqiqi",
      arabic: "نْ + 15 huruf",
      body: "Nun mati atau tanwin bertemu salah satu 15 huruf selain di atas → dibaca samar dengan dengung 2 harakat.",
    },
    {
      title: "Qalqalah",
      arabic: "ق ط ب ج د",
      body: "Lima huruf qolqolah saat sukun atau di akhir kata → terdengar memantul ringan, tanpa menambah harakat baru.",
    },
  ],
  closing: "Cukup pelajari satu hukum per hari. Pelan tapi pasti.",
};

const makharij: LearnTopic = {
  id: "makharij",
  slug: "makharij",
  category: "tahsin",
  level: "pemula",
  title: "Makharijul Huruf",
  description: "Lima tempat keluarnya huruf",
  emoji: "👄",
  intro:
    "Sebelum tajwid, kenali dulu dari mana setiap huruf keluar. Ini fondasi pelafalan yang benar — dan kunci agar bacaanmu jelas.",
  items: [
    {
      title: "1. Al-Jauf — Rongga Mulut",
      body: "Tempat keluar huruf mad: ا و ي. Suara mengalir lepas tanpa hambatan saat memanjangkan huruf.",
    },
    {
      title: "2. Al-Halq — Tenggorokan",
      arabic: "ء ه · ع ح · غ خ",
      body: "Tiga bagian: tenggorokan bawah (ء ه), tengah (ع ح), atas (غ خ). Semakin atas, semakin ringan.",
    },
    {
      title: "3. Al-Lisan — Lidah",
      body: "18 huruf keluar dari lidah: dari pangkal (ق ك), tengah (ج ش ي), tepi (ض ل ن ر), hingga ujung lidah ke gigi (ت ث د ذ ز س ص ض ط ظ).",
    },
    {
      title: "4. Asy-Syafatain — Dua Bibir",
      arabic: "ف · ب م و",
      body: "Empat huruf: ف dari bibir bawah ke gigi atas; ب م و dari kedua bibir.",
    },
    {
      title: "5. Al-Khaisyum — Rongga Hidung",
      arabic: "نّ · مّ · ngunna",
      body: "Tempat keluarnya dengung (ghunnah). Aktif saat membaca nun & mim bertasydid, idgham bighunnah, ikhfa, dan iqlab.",
    },
    {
      title: "Cara berlatih",
      body: "Letakkan tangan di depan mulut atau dekat tenggorokan. Rasakan dari mana udara dan getaran berasal saat membaca tiap huruf perlahan.",
    },
  ],
  closing: "Banyak salah pelafalan terjadi karena salah makhraj, bukan karena tidak hafal. Latih satu kelompok per minggu.",
};

const hukumNunMati: LearnTopic = {
  id: "hukum-nun-mati",
  slug: "hukum-nun-mati",
  category: "tahsin",
  level: "menengah",
  title: "Hukum Nun Mati & Tanwin",
  description: "Empat hukum lengkap dengan contohnya",
  emoji: "ن",
  intro:
    "Nun mati (نْ) dan tanwin (ـً ـٍ ـٌ) memiliki empat perilaku tergantung huruf yang mengikutinya. Pelajari satu per satu, dengan contohnya.",
  items: [
    {
      title: "1. Idzhar (Jelas)",
      arabic: "نْ + ء ه ع ح غ خ",
      body: "6 huruf halqi → dibaca jelas tanpa dengung. Contoh: مَنْ آمَنَ, يَنْهَوْنَ, أَنْعَمْتَ.",
    },
    {
      title: "2. Idgham Bighunnah (Lebur Berdengung)",
      arabic: "نْ + ي ن م و",
      body: "Empat huruf yamuna (يَنْمُو) → nun dilebur ke huruf setelahnya dengan dengung 2 harakat. Contoh: مَنْ يَعْمَلْ → مَيَّعْمَلْ.",
      transliteration: "Catatan: tidak berlaku jika dalam satu kata (contoh: دُنْيَا dibaca idzhar mutlak).",
    },
    {
      title: "3. Idgham Bilaghunnah (Lebur Tanpa Dengung)",
      arabic: "نْ + ل ر",
      body: "Dua huruf ل ر → nun dilebur sempurna tanpa dengung. Contoh: مِنْ رَبِّهِمْ → مِرَّبِّهِمْ.",
    },
    {
      title: "4. Iqlab (Mengganti)",
      arabic: "نْ + ب",
      body: "Nun mati / tanwin bertemu ب → ganti menjadi mim dengan dengung samar 2 harakat. Tanda: nun kecil di atas. Contoh: أَنْۢبِئْهُمْ.",
    },
    {
      title: "5. Ikhfa Haqiqi (Samar)",
      arabic: "نْ + 15 huruf",
      body: "Sisa 15 huruf: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك → dibaca samar (antara idzhar dan idgham) dengan dengung 2 harakat.",
    },
    {
      title: "Tingkat ketebalan ikhfa",
      body: "Saat bertemu huruf tebal (ص ض ط ظ ق) → dengung agak tebal. Saat bertemu huruf tipis (ت ث د ذ س ش ز ف ك) → dengung tipis. Saat bertemu ج → di antaranya.",
    },
  ],
  closing: "Hafalkan kelompok hurufnya dulu, contohnya menyusul. Mushaf Madinah sudah memberi tanda — perhatikan.",
};

const hukumMimMati: LearnTopic = {
  id: "hukum-mim-mati",
  slug: "hukum-mim-mati",
  category: "tahsin",
  level: "menengah",
  title: "Hukum Mim Mati",
  description: "Tiga hukum mim sukun",
  emoji: "م",
  intro:
    "Mim mati (مْ) memiliki tiga hukum berdasarkan huruf yang mengikutinya. Lebih sederhana dari nun mati — hanya tiga.",
  items: [
    {
      title: "1. Ikhfa Syafawi (Samar Bibir)",
      arabic: "مْ + ب",
      body: "Mim mati bertemu ب → dibaca samar di bibir dengan dengung 2 harakat. Contoh: تَرْمِيهِمْ بِحِجَارَةٍ.",
    },
    {
      title: "2. Idgham Mitslain (Lebur Sejenis)",
      arabic: "مْ + م",
      body: "Mim mati bertemu mim → dilebur menjadi mim bertasydid dengan dengung. Contoh: لَهُمْ مَا يَشَاءُونَ → لَهُمَّا.",
    },
    {
      title: "3. Idzhar Syafawi (Jelas Bibir)",
      arabic: "مْ + 26 huruf",
      body: "Mim mati bertemu huruf selain ب dan م → dibaca jelas tanpa dengung. Contoh: لَكُمْ دِينُكُمْ.",
    },
    {
      title: "Catatan penting",
      body: "Idzhar syafawi paling sering 'tidak sengaja didengungkan' oleh pemula. Latih dengan jelas — bibir terbuka penuh setelah mim, terutama saat bertemu huruf ف dan و.",
    },
  ],
  closing: "Tiga aturan saja. Setelah hafal, perhatikan bibirmu saat membaca surah pendek.",
};

const hukumMad: LearnTopic = {
  id: "hukum-mad",
  slug: "hukum-mad",
  category: "tahsin",
  level: "menengah",
  title: "Hukum Mad",
  description: "Aturan memanjangkan bacaan",
  emoji: "〰️",
  intro:
    "Mad artinya memanjangkan. Ada mad asli (thabi'i) yang dasar, dan mad far'i (cabang) yang panjangnya bervariasi 2–6 harakat.",
  items: [
    {
      title: "Mad Thabi'i (Asli)",
      arabic: "بَا · بِي · بُو",
      body: "Panjang 2 harakat. Fathah + alif, kasrah + ya sukun, dhammah + wau sukun. Pondasi semua mad.",
    },
    {
      title: "Mad Wajib Muttashil",
      arabic: "Mad + ء dalam satu kata",
      body: "Panjang 4–5 harakat (wajib). Contoh: جَاءَ, السَّمَاءِ. Disebut 'wajib' karena ulama sepakat memanjangkan.",
    },
    {
      title: "Mad Jaiz Munfashil",
      arabic: "Mad + ء di kata berikutnya",
      body: "Panjang 2, 4, atau 5 harakat (boleh pilih). Contoh: بِمَا أُنْزِلَ. Disebut 'jaiz' karena ada keluwesan.",
    },
    {
      title: "Mad 'Aridh Lis-Sukun",
      arabic: "Mad + huruf akhir saat waqaf",
      body: "Saat berhenti di akhir ayat. Panjang 2, 4, atau 6 harakat. Contoh: نَسْتَعِينُ saat waqaf.",
    },
    {
      title: "Mad Lazim Mutsaqqal Kilmi",
      arabic: "Mad + tasydid dalam satu kata",
      body: "Panjang 6 harakat (wajib). Contoh: الضَّالِّينَ, الصَّاخَّةُ.",
    },
    {
      title: "Mad Lazim Harfi Mukhaffaf",
      arabic: "Huruf hijaiyah pembuka surah",
      body: "Pada huruf-huruf pembuka surah seperti الم, الر. Mim, lam, kaf, dst → 6 harakat. Sedangkan ha, ya, tha, ra → 2 harakat.",
    },
    {
      title: "Mad Layyin",
      arabic: "Fathah + ي/و sukun",
      body: "Saat ya atau wau sukun didahului fathah, dan diwaqaf. Panjang 2, 4, atau 6 harakat. Contoh: خَوْفٍ, الْبَيْتِ saat berhenti.",
    },
    {
      title: "Mad Badal",
      arabic: "Hamzah + mad",
      body: "Hamzah diikuti huruf mad. Panjang 2 harakat. Contoh: آمَنُوا (asalnya أَأْمَنُوا), إِيمَانًا.",
    },
  ],
  closing: "Hitung harakat dalam hati: 1-2 untuk biasa, 1-2-3-4(-5) untuk panjang menengah, 1-2-3-4-5-6 untuk lazim.",
};

const hukumRa: LearnTopic = {
  id: "hukum-ra",
  slug: "hukum-ra",
  category: "tahsin",
  level: "lanjutan",
  title: "Hukum Ra",
  description: "Ra tafkhim, tarqiq, dan jawaz",
  emoji: "ر",
  intro:
    "Huruf ر (ra) bisa dibaca tebal (tafkhim) atau tipis (tarqiq) tergantung harakatnya dan harakat sebelumnya. Beberapa kasus, boleh dua-duanya.",
  items: [
    {
      title: "Tafkhim (Tebal) — Kapan?",
      body: "Ra dibaca tebal jika: (1) berharakat fathah/dhammah, (2) sukun didahului fathah/dhammah, (3) sukun didahului kasrah 'aridhah (sementara), (4) sukun didahului hamzah washal.",
    },
    {
      title: "Contoh Tafkhim",
      arabic: "رَبِّ · رُسُلٌ · مَرْيَمَ · ٱرْكَبْ",
      body: "Lidah agak terangkat ke langit-langit, suaranya berat dan penuh.",
    },
    {
      title: "Tarqiq (Tipis) — Kapan?",
      body: "Ra dibaca tipis jika: (1) berharakat kasrah, (2) sukun didahului kasrah ashliyyah (asli) dan tidak diikuti huruf isti'la, (3) sukun didahului ya sukun.",
    },
    {
      title: "Contoh Tarqiq",
      arabic: "رِجَالٌ · مِرْيَةٍ · خَيْرٌ",
      body: "Lidah lebih ke depan, suaranya ringan dan halus.",
    },
    {
      title: "Jawazul Wajhain (Boleh Keduanya)",
      arabic: "فِرْقٍ · مِصْرَ · الْقِطْرِ",
      body: "Pada beberapa kata khusus, boleh dibaca tafkhim atau tarqiq. Mushaf biasanya memberi tanda atau catatan.",
    },
    {
      title: "Huruf Isti'la",
      body: "Tujuh huruf yang membuat ra menjadi tafkhim saat berdekatan: خ ص ض غ ط ق ظ. Hafalkan: خُصَّ ضَغْطٍ قِظْ.",
    },
  ],
  closing: "Aturan ra terasa rumit di awal. Setelah sering baca, telinga akan terbiasa membedakan tebal & tipis.",
};

const lamJalalah: LearnTopic = {
  id: "lam-jalalah",
  slug: "lam-jalalah",
  category: "tahsin",
  level: "lanjutan",
  title: "Lam Jalalah",
  description: "Lam pada kata Allāh",
  emoji: "ﷲ",
  intro:
    "Huruf lam pada kata 'Allāh' (اللّٰه) memiliki dua pelafalan tergantung harakat sebelumnya — tebal atau tipis.",
  items: [
    {
      title: "Tafkhim (Tebal)",
      arabic: "قَالَ ٱللَّهُ · هُوَ ٱللَّهُ",
      body: "Jika sebelumnya fathah atau dhammah → lam dibaca tebal. Suara terasa penuh dan agung.",
    },
    {
      title: "Tarqiq (Tipis)",
      arabic: "بِسْمِ ٱللَّهِ · ٱلْحَمْدُ لِلَّهِ",
      body: "Jika sebelumnya kasrah → lam dibaca tipis. Suara terasa lembut dan halus.",
    },
    {
      title: "Awal kalam",
      body: "Jika kata Allah berada di awal bacaan → tafkhim (default). Karena kata sebelumnya tidak ada untuk merujuk.",
    },
    {
      title: "Latihan singkat",
      arabic: "ٱللَّهُ · بِٱللَّهِ · لِلَّهِ · يَا ٱللَّهُ",
      body: "Coba bedakan tebal–tipis pada empat kata di samping. Rasakan posisi lidah berbeda.",
    },
  ],
  closing: "Pelafalan yang tepat pada nama Allah adalah bentuk pengagungan kecil yang sering luput diperhatikan.",
};

const tandaWaqaf: LearnTopic = {
  id: "tanda-waqaf",
  slug: "tanda-waqaf",
  category: "tahsin",
  level: "lanjutan",
  title: "Tanda Waqaf",
  description: "Kapan berhenti, kapan terus",
  emoji: "⏸️",
  intro:
    "Waqaf adalah berhenti sejenak. Ibtida adalah memulai. Tanda-tanda di mushaf membimbingmu memahami makna ayat — tidak sekadar berhenti karena kehabisan napas.",
  items: [
    {
      title: "م — Waqaf Lazim (Wajib Berhenti)",
      body: "Berhenti di sini wajib. Jika diteruskan, makna bisa berubah. Disebut juga 'waqaf mim'.",
    },
    {
      title: "ط — Waqaf Mutlaq (Lebih Baik Berhenti)",
      body: "Berhenti lebih utama, tapi tidak wajib. Sering pada akhir cerita atau pesan.",
    },
    {
      title: "ج — Waqaf Jaiz (Boleh Pilih)",
      body: "Sama bagusnya antara berhenti atau lanjut. Pilih sesuai napas dan rasa makna.",
    },
    {
      title: "قلى — Lebih Baik Berhenti",
      body: "Berhenti di sini lebih dianjurkan, tapi boleh dilanjutkan.",
    },
    {
      title: "صلى — Lebih Baik Lanjut",
      body: "Lanjut lebih dianjurkan, tapi boleh berhenti jika perlu.",
    },
    {
      title: "لا — Larangan Berhenti",
      body: "Jangan berhenti di sini. Jika terpaksa karena napas, ulang dari kata sebelumnya.",
    },
    {
      title: "ۛ ۛ — Mu'anaqah",
      body: "Tanda titik tiga. Jika berhenti di salah satu, tidak boleh berhenti di yang lain. Pilih satu saja.",
    },
    {
      title: "Akhir ayat (lingkaran kecil)",
      body: "Setiap akhir ayat boleh berhenti. Bahkan disunnahkan, karena memberi waktu meresapi.",
    },
    {
      title: "Adab waqaf",
      body: "Saat waqaf di huruf berharakat → matikan harakatnya (sukun). Saat waqaf di tanwin → ganti menjadi alif. Saat waqaf di ta marbuthah → baca ha sukun.",
    },
  ],
  closing: "Waqaf yang baik = makna yang utuh. Jika ragu, ikuti tanda di mushafmu.",
};

const ulumulQuran: LearnTopic = {
  id: "ulumul-quran",
  slug: "ulumul-quran",
  category: "tahsin",
  level: "menengah",
  title: "Ulumul Qur'an Dasar",
  description: "Cara memahami Al-Qur'an lebih dalam",
  emoji: "📚",
  intro:
    "Ulumul Qur'an adalah ilmu seputar Al-Qur'an — bagaimana ia diturunkan, dikumpulkan, ditafsirkan. Bekal agar kau tidak salah paham saat membaca.",
  items: [
    {
      title: "Pengertian Al-Qur'an",
      body: "Firman Allah yang diturunkan kepada Nabi Muhammad ﷺ melalui malaikat Jibril, dalam bahasa Arab, mutawatir (diriwayatkan banyak orang), membacanya bernilai ibadah, dimulai dari Al-Fatihah dan diakhiri An-Nas.",
    },
    {
      title: "Cara Wahyu Turun",
      body: "Tidak sekaligus, tapi bertahap selama 23 tahun. Kadang sebagai jawaban atas pertanyaan, kadang teguran, kadang berita kaum dahulu. Allah tahu kapan tepatnya manusia siap menerima.",
    },
    {
      title: "Makkiyah vs Madaniyah",
      body: "Surah Makkiyah (turun di Makkah, sebelum hijrah): pendek-pendek, tentang aqidah, kisah para nabi, ancaman & kabar gembira. Madaniyah (setelah hijrah): panjang, tentang hukum, sosial, peperangan.",
    },
    {
      title: "Asbabun Nuzul",
      body: "Sebab turunnya ayat. Ada ayat yang turun karena pertanyaan sahabat, ada karena peristiwa tertentu. Mengetahuinya membantu memahami makna yang tepat.",
    },
    {
      title: "Pengumpulan Al-Qur'an",
      body: "Di zaman Nabi: dihafal & ditulis di pelepah, kulit, batu. Era Abu Bakar: dikumpulkan jadi satu mushaf setelah banyak penghafal syahid. Era Utsman: distandardisasi → mushaf Utsmani yang tersebar hingga kini.",
    },
    {
      title: "Pembagian Al-Qur'an",
      body: "30 juz, 114 surah, 6.236 ayat. Pembagian juz adalah konvensi untuk mempermudah hafalan dan baca harian — tidak terkait dengan makna.",
    },
    {
      title: "Tujuh Huruf (Sab'atu Aḥruf)",
      body: "Al-Qur'an diturunkan dalam 7 bentuk bacaan untuk memudahkan suku-suku Arab. Sebagiannya hilang di era Utsman saat distandardisasi. Yang tersisa adalah Qira'at — versi bacaan resmi.",
    },
    {
      title: "Qira'at Mutawatirah",
      body: "Tujuh qiraat (kemudian sepuluh) yang sampai melalui jalur sangat banyak perawi. Qira'at 'Ashim riwayat Hafs adalah yang paling tersebar di Indonesia. Yang lain juga sah — bukan perbedaan tapi kekayaan.",
    },
    {
      title: "Tafsir vs Terjemah",
      body: "Terjemah: makna ayat secara harfiah. Tafsir: penjelasan mendalam — konteks, sejarah, makna kata, hikmah. Membaca terjemah saja bisa salah paham — selalu dengan tafsir untuk ayat yang rumit.",
    },
    {
      title: "Tafsir Tersohor",
      body: "Tafsir Ibnu Katsir, Tafsir Jalalain, Tafsir as-Sa'di, Tafsir al-Qurthubi, Tafsir Ath-Thabari. Yang berbahasa Indonesia: Tafsir al-Mishbah (Quraish Shihab), Tafsir Jalalain terjemahan, Tafsir Ibnu Katsir terjemahan.",
    },
    {
      title: "Adab Membaca Al-Qur'an",
      body: "Suci dari hadats, menghadap kiblat, ta'awwudz dulu, baca dengan tartil (tidak buru-buru), tadabbur (renungi makna), tidak berbicara di tengah-tengah, ditutup dengan 'shadaqallāhul-'aẓīm.'",
    },
    {
      title: "I'jaz Al-Qur'an",
      body: "Mukjizat Al-Qur'an: bahasanya yang tak tertandingi, kabar gaib yang terbukti, fakta ilmiah yang diakui sains modern, hukum yang relevan sepanjang zaman, perlindungan dari perubahan.",
    },
  ],
  closing: "Bacalah Qur'an dengan ilmu — agar setiap ayat membuka, bukan menutup. Mulai dari satu surah, satu tafsir.",
};

const adabAlQuran: LearnTopic = {
  id: "adab-al-quran",
  slug: "adab-al-quran",
  category: "tahsin",
  level: "pemula",
  title: "Adab pada Al-Qur'an",
  description: "Memuliakan kalamullah",
  emoji: "📖",
  intro:
    "Al-Qur'an adalah firman Allah yang turun ke bumi. Cara kita memperlakukannya mencerminkan cara kita memandang pengirimnya. Adab yang baik membuka pintu pemahaman; adab yang buruk menutupinya.",
  items: [
    {
      title: "Suci sebelum menyentuh",
      body: "Mayoritas ulama: harus berwudhu sebelum menyentuh mushaf. Dasarnya: 'Tidak menyentuhnya kecuali yang disucikan.' (Al-Waqi'ah: 79). Membaca dari hafalan boleh tanpa wudhu, tapi lebih utama dengan wudhu.",
    },
    {
      title: "Niat yang baik",
      body: "Sebelum membuka mushaf, tanyakan: 'Untuk apa aku membaca?' Untuk dapat petunjuk, untuk dekat dengan Allah, untuk dapat ketenangan. Bukan untuk dipuji, bukan untuk membantah orang.",
    },
    {
      title: "Ta'awwudz dulu",
      arabic: "أَعُوذُ بِٱللَّٰهِ مِنَ ٱلشَّيْطَانِ ٱلرَّجِيمِ",
      transliteration: "A'ūdzu billāhi minasy-syaiṭānir-rajīm",
      body: "Aku berlindung kepada Allah dari setan yang terkutuk. Wajib sebelum membaca Qur'an — agar bacaan tidak diganggu setan.",
    },
    {
      title: "Basmalah di awal surah",
      arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
      body: "Setiap awal surah, baca basmalah (kecuali surat At-Taubah). Tutup ta'awwudz dulu, baru basmalah, baru ayat.",
    },
    {
      title: "Membaca dengan tartil — perlahan",
      body: "Allah perintahkan: 'Bacalah Al-Qur'an dengan tartil.' (Al-Muzzammil: 4). Tartil = perlahan, jelas, dengan tajwid yang benar. Lebih baik 1 ayat dengan tartil daripada 1 juz tergesa-gesa.",
    },
    {
      title: "Tadabbur — meresapi makna",
      body: "Bacalah dengan hati hadir. Kalau perlu, baca terjemah dulu. Saat ayat menyentuh — berhenti, renungkan. Ulama klasik bisa berhenti pada satu ayat semalaman karena dalamnya makna.",
    },
    {
      title: "Saat ayat tentang surga",
      body: "Berdoa: 'Allāhumma innī as'alukal-jannah' — Ya Allah, aku memohon surga. Saat ayat tentang neraka: 'Allāhumma najjinī minan-nār' — Ya Allah, selamatkan aku dari neraka. Sunnah Rasulullah ﷺ.",
    },
    {
      title: "Saat ayat sajdah",
      body: "Ada 14 ayat sajdah dalam Al-Qur'an. Saat membacanya (atau mendengarnya), dianjurkan sujud sekali — sujud tilawah. Tidak wajib, tapi keutamaan besar.",
    },
    {
      title: "Tutup dengan istighfar",
      arabic: "صَدَقَ ٱللَّٰهُ ٱلْعَظِيمُ",
      transliteration: "Shadaqallāhul-'aẓīm",
      body: "Maha Benar Allah Yang Maha Agung. Atau cukup tutup dengan istighfar — sebagai tanda kerendahan diri di hadapan firman-Nya.",
    },
    {
      title: "Letakkan mushaf di tempat tinggi",
      body: "Tidak meletakkan di lantai, tidak menumpuknya dengan barang lain. Letakkan di rak, di atas meja bersih, atau lemari khusus. Bentuk pengagungan.",
    },
    {
      title: "Saat membaca via aplikasi",
      body: "Sama hormatnya dengan mushaf fisik — meskipun berupa pixel. Jangan baca sambil rebahan dalam keadaan tidak hormat. Jangan tinggalkan layar Qur'an saat ke kamar kecil.",
    },
    {
      title: "Hak Qur'an atas kita",
      body: "Imam an-Nawawi: 1) Membenarkan setiap berita di dalamnya. 2) Mentaati setiap perintah. 3) Menjauhi setiap larangan. 4) Membacanya dengan tartil. 5) Mengamalkannya. 6) Mengajarkannya. Membaca tanpa mengamalkan = ikatan kosong.",
    },
    {
      title: "Konsistensi > intensitas",
      body: "Lebih baik 1 ayat setiap hari daripada 1 juz seminggu sekali. 'Amal yang paling Allah cintai adalah yang konsisten, walau sedikit.' (HR. Bukhari).",
    },
  ],
  closing: "Al-Qur'an menyapa siapa yang menyapanya. Datangi dengan hormat — ia akan membukakan dirinya untukmu.",
};

export const tahsinTopics: LearnTopic[] = [
  hijaiyah,
  adabAlQuran,
  makharij,
  tajwidDasar,
  hukumNunMati,
  hukumMimMati,
  hukumMad,
  ulumulQuran,
  hukumRa,
  lamJalalah,
  tandaWaqaf,
];
