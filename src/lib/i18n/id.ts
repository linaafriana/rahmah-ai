export const id = {
  appName: "Sakinah Companion",

  onboarding: {
    title: "Mulai perjalananmu kembali kepada Allah 🌱",
    subtitle: "Langkah kecil, setiap hari",
    cta: "Mulai Perjalanan",
  },

  signIn: {
    title: "Selamat datang kembali 🌷",
    subtitle: "Masuk untuk melanjutkan perjalananmu",
    emailLabel: "Email",
    passwordLabel: "Kata sandi",
    submit: "Masuk",
    google: "Lanjutkan dengan Google",
    noAccount: "Belum punya akun?",
    signUp: "Daftar di sini",
    errorInvalid: "Email atau kata sandi belum sesuai",
  },

  nav: {
    home: "Beranda",
    belajar: "Belajar",
    quran: "Quran",
    dzikir: "Dzikir",
    hati: "Hati",
    journal: "Jurnal",
    more: "Lainnya",
  },

  hati: {
    title: "Hati",
    subtitle: "Ruang lembut untuk dirimu",
  },

  quickActions: {
    title: "Aksi cepat",
    sholawat: "Sholawat",
    taubat: "Taubat",
    doa: "Doa",
    jadwal: "Jadwal",
  },

  niat: {
    titleSet: "Niatkan satu hal kecil untuk besok",
    titleToday: "Niatmu hari ini",
    subtitle:
      "Allah membalas niat — bahkan jika belum sempat dilakukan. Pilih satu, sederhana saja.",
    placeholder: "Tulis niatmu sendiri…",
    save: "Simpan niat",
    edit: "Ganti",
    presets: [
      "Sholat subuh tepat waktu",
      "Baca 5 ayat Al-Qur'an",
      "Dzikir pagi setelah subuh",
      "Sholawat 33x setelah maghrib",
      "Istighfar 100x sebelum tidur",
      "Sedekah seberapa pun",
      "Telepon orang tua",
      "Senyum tiga kali pada keluarga",
    ],
  },

  habit: {
    title: "Kebiasaan minggu ini",
    subtitle: "Tidak ada streak yang putus — yang ada hanya usaha",
    today: "Hari ini",
    summary: (touched: number) =>
      `Kamu menyentuh kebiasaan ini di ${touched} hari minggu ini 🌱`,
    addCustom: "Tambah kebiasaan",
    presets: [
      "Sholat subuh tepat waktu",
      "Dzikir pagi-petang",
      "Baca Qur'an minimal 1 ayat",
      "Sholawat",
      "Istighfar 100x",
    ],
  },

  microHabits: {
    title: "Amal kecil hari ini",
    subtitle: "Pilih yang paling mudah. Yang penting bergerak.",
    done: "Sudah",
    pool: [
      { emoji: "😊", text: "Senyum pada 3 orang hari ini" },
      { emoji: "🤲", text: "Istighfar 10x sekarang" },
      { emoji: "🌷", text: "Sholawat singkat 10x" },
      { emoji: "📖", text: "Baca 1 ayat Al-Qur'an" },
      { emoji: "💧", text: "Wudhu untuk satu sholat berikutnya" },
      { emoji: "📞", text: "Hubungi orang tua, walau singkat" },
      { emoji: "🪙", text: "Sedekah berapa pun, walau receh" },
      { emoji: "🤍", text: "Doakan saudaramu yang sedang sakit" },
      { emoji: "🚪", text: "Ucap salam saat masuk rumah hari ini" },
      { emoji: "🌅", text: "Berhenti sebentar, syukuri pagi ini" },
      { emoji: "📿", text: "Subhanallah · Alhamdulillah · Allahu Akbar 33x" },
      { emoji: "💌", text: "Maafkan satu orang dalam hatimu" },
    ],
  },

  kembali: {
    title: "Selamat datang kembali 🤍",
    subtitle:
      "Tidak ada yang menghitung mundur. Allah selalu menunggu hamba-Nya kembali.",
    bannerHome: "Sudah agak lama — mari mulai lagi pelan-pelan",
    bannerCta: "Mulai dari sini",
    step1Title: "1. Istighfar dulu",
    step1Body:
      "Tidak perlu daftar dosa. Cukup ketuk dan biarkan hatimu mengakui.",
    step2Title: "2. Niatkan satu hal kecil",
    step2Body:
      "Apa pun. Sholat 1 waktu. Baca 1 ayat. Dzikir 10 kali. Pelan saja.",
    step3Title: "3. Mulai sekarang, bukan nanti",
    step3Body:
      "Setan menyukai 'nanti'. Allah mencintai yang bergerak walau kecil.",
    finishTitle: "Sudah dimulai — itu yang terpenting 🌱",
    finishBody:
      "Kamu tidak perlu kembali ke titik awal. Mulai dari sini, dengan apa yang ada.",
  },

  sholawat: {
    title: "Sholawat untuk Nabi ﷺ",
    subtitle:
      "Allah membalas setiap sholawatmu dengan sepuluh kali rahmat",
    pickerLabel: "Pilih sholawat",
    learnMore: "Pelajari lebih dalam",
    short: {
      label: "Sholawat singkat",
      arabic: "ٱللَّٰهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ",
      transliteration: "Allāhumma ṣalli wa sallim 'alā nabiyyinā Muḥammad",
    },
    ibrahimiyah: {
      label: "Sholawat Ibrahimiyah",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ",
      transliteration:
        "Allāhumma ṣalli 'alā Muḥammad wa 'alā āli Muḥammad, kamā ṣallaita 'alā Ibrāhīm wa 'alā āli Ibrāhīm",
    },
    munjiyat: {
      label: "Sholawat Munjiyat",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ ٱلْأَهْوَالِ وَٱلْآفَاتِ",
      transliteration:
        "Allāhumma ṣalli 'alā sayyidinā Muḥammadin ṣalātan tunjīnā bihā min jamī'il-ahwāli wal-āfāt",
    },
  },

  home: {
    greeting: (name: string) => `Assalamu'alaikum, ${name} 🌷`,
    timeOfDay: {
      morning: "Selamat pagi",
      midday: "Selamat siang",
      afternoon: "Selamat sore",
      evening: "Selamat malam",
    },
    intentionPrompt: "Apa niatmu hari ini?",
    progressLabel: "Kamu lebih baik dari kemarin 🌱",
    prayerTitle: "Sholat hari ini",
    dzikirCta: "Mulai Dzikir ✨",
    reflection: {
      header: "Allah sedang mengingatkanmu hari ini…",
      cta: "Renungkan sejenak",
    },
    quranContinue: {
      title: "Lanjutkan membaca",
      cta: "Lanjutkan",
    },
    journalEntry: {
      title: "Tuliskan isi hatimu hari ini",
      subtitle: "Tidak ada yang salah dengan perasaanmu",
      cta: "Tulis di Jurnal",
    },
  },

  journal: {
    title: "Jurnal",
    prompt: "Apa niatmu untuk hari ini?",
    moodPickerTitle: "Bagaimana hatimu hari ini?",
    moodTitle: "Suasana hati minggu ini",
    placeholder: "Tuliskan apa pun yang ada di hatimu…",
    save: "Simpan",
    saved: "Tersimpan",
    saving: "Menyimpan…",
  },

  moods: {
    joyful: "Bahagia",
    calm: "Tenang",
    sad: "Sedih",
    tearful: "Hampa",
    angry: "Kesal",
    tired: "Lelah",
    loved: "Bersyukur",
  },

  dzikir: {
    title: "Dzikir",
    subtitle: "Pilih waktu untuk berdzikir",
    tabs: {
      morning: "Pagi",
      evening: "Petang",
      afterPrayer: "Setelah Sholat",
    },
    counterLabel: "Tap untuk menghitung",
    resetConfirm: "Reset hitungan?",
    reset: "Reset",
    cancel: "Batal",
  },

  quran: {
    title: "Quran",
    continueTitle: "Lanjutkan membaca",
    beginnerTitle: "Belajar dasar",
    audioTitle: "Audio murottal",
    hijaiyah: "Belajar Hijaiyah",
    hijaiyahDesc: "Kenali huruf demi huruf",
    tajwid: "Belajar Tajwid",
    tajwidDesc: "Pelajari cara membaca yang benar",
  },

  taubat: {
    title: "Allah selalu siap menerimamu 🤍",
    subtitle: "Tidak ada dosa yang terlalu besar untuk diampuni",
    cta: "Mulai Istighfar",
    phrase: "Astaghfirullāhal-'azhīm",
    meaning: "Aku memohon ampun kepada Allah Yang Maha Agung",
    exit: "Selesai",
  },

  belajar: {
    title: "Belajar",
    subtitle: "Pelan-pelan, satu langkah dulu",
    categories: {
      all: "Semua",
      dasar: "Dasar",
      aqidah: "Aqidah",
      tahsin: "Tahsin",
      fiqih: "Fiqih",
      akhlak: "Akhlak",
      doa: "Doa",
      sirah: "Sirah",
      hadits: "Hadits",
    },
    levels: {
      pemula: "Pemula",
      menengah: "Menengah",
      lanjutan: "Lanjutan",
    },
    levelHints: {
      pemula: "Mulai dari sini",
      menengah: "Lanjutkan setelah pemula",
      lanjutan: "Untuk pendalaman",
    },
    nextTopic: "Lanjutkan ke",
    finishedCategory: "Sudah selesai kategori ini 🌱",
  },

  doaToday: {
    title: "Doa untukmu hari ini",
    cta: "Lihat semua doa",
  },

  butuhkan: {
    title: "Bantuan untuk hatimu",
    subtitle: "Ceritakan apa yang sedang kamu rasakan",
    homePrompt: "Apa yang sedang kamu rasakan?",
    homeCta: "Lihat semua",
    seeAll: "Lihat semua kondisi",
    groupHati: "Saat hatimu...",
    groupHidup: "Saat hidupmu...",
    recommendedTitle: "Topik yang mungkin membantu",
    doaTitle: "Doa untuk kondisi ini",
    ayahTitle: "Ayah untuk direnungkan",
    moodPickerLink: "Lihat topik untuk perasaan ini →",
  },

  parenting: {
    title: "Parenting",
    subtitle: "Tumbuh bersama, dalam kasih Allah",
    cards: {
      doa: {
        title: "Ajarkan Doa",
        desc: "Doa-doa harian sederhana untuk si kecil",
      },
      sholat: {
        title: "Ajarkan Sholat",
        desc: "Langkah lembut mengenalkan sholat",
      },
      habits: {
        title: "Bangun Kebiasaan Baik",
        desc: "Rutinitas kecil yang penuh berkah",
      },
    },
  },

  prayers: {
    fajr: "Subuh",
    dhuhr: "Dzuhur",
    asr: "Ashar",
    maghrib: "Maghrib",
    isha: "Isya",
  },

  tones: {
    hope: "harapan",
    patience: "sabar",
    trust: "tawakkal",
    gratitude: "syukur",
    love: "cinta",
  },

  common: {
    continue: "Lanjutkan",
    back: "Kembali",
    close: "Tutup",
  },
} as const;

export type Copy = typeof id;
