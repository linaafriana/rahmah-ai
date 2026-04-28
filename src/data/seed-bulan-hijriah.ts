// Per-Hijri-month context: keutamaan, saran amalan, hari-hari khusus.
// Sumber: Muslim Planner 2026 + tradisi ulama untuk amalan bulan Rajab.

export type SpecialDayMarker = {
  day: number; // hari Hijriah
  name: string; // nama hari (Isra Mi'raj, Ayyamul Bidh, dll)
  amalan?: string; // amalan singkat
};

export type HijriMonthInfo = {
  number: number; // 1–12
  name: string;
  arabic: string;
  emoji: string;
  isHaram: boolean; // bulan haram (suci)
  intro: string;
  keutamaan: string[];
  saranAmalan: string[];
  specialDays: SpecialDayMarker[];
  closing?: string;
};

export const hijriMonths: HijriMonthInfo[] = [
  {
    number: 1,
    name: "Muharram",
    arabic: "مُحَرَّم",
    emoji: "🌙",
    isHaram: true,
    intro:
      "Bulan pertama tahun Hijriah dan salah satu dari empat bulan haram (suci). Rasulullah ﷺ menyebutnya Syahrullah — Bulan Allah.",
    keutamaan: [
      "Salah satu dari empat bulan haram (Al-Asyhurul Hurum) — Muharram, Rajab, Dzulqa'dah, Dzulhijjah.",
      "Disebut Syahrullah — Bulan Allah.",
      "Pahala amal sholih dilipatgandakan, ancaman atas dosa pun lebih besar.",
      "Tahun baru Hijriah — momen muhasabah dan pembaruan niat.",
    ],
    saranAmalan: [
      "Puasa Asyura (10 Muharram) — menghapus dosa setahun yang lalu.",
      "Puasa Tasu'a (9 Muharram) — dianjurkan bersamaan Asyura.",
      "Memperbanyak puasa sunnah — puasa terbaik setelah Ramadan adalah di bulan ini.",
      "Doa awal & akhir tahun Hijriah.",
      "Memperbanyak istighfar dan amal sholih.",
    ],
    specialDays: [
      { day: 1, name: "Tahun Baru Hijriah", amalan: "Doa awal tahun, muhasabah" },
      { day: 9, name: "Puasa Tasu'a", amalan: "Puasa sunnah" },
      { day: 10, name: "Puasa Asyura", amalan: "Puasa, menghapus dosa setahun lalu" },
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
    closing: "Mulai tahun ini dengan niat baru, hati bersih, dan langkah kecil yang istiqomah.",
  },
  {
    number: 2,
    name: "Safar",
    arabic: "صَفَر",
    emoji: "🍃",
    isHaram: false,
    intro:
      "Bulan yang dimuliakan karena menghapus keyakinan syirik — keyakinan jahiliah bahwa Safar membawa kesialan. Keutamaannya pada pemurnian akidah.",
    keutamaan: [
      "Pengingat bahwa tidak ada kesialan pada waktu tertentu.",
      "Setiap takdir, baik dan buruk, berasal dari Allah.",
      "Bulan untuk mempertegas tauhid dan menjauhi keyakinan khurafat.",
    ],
    saranAmalan: [
      "Memperkuat tauhid — yakin bahwa segala takdir dari Allah.",
      "Fokus pada ketaatan rutin: sholat 5 waktu, sunnah rawatib, dzikir pagi-petang.",
      "Menjauhi keyakinan khurafat dan tahayyul.",
      "Tidak ada amalan khusus yang spesifik untuk bulan ini — yang penting konsistensi.",
    ],
    specialDays: [
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
    closing: "Bulan Safar mengajarkan tauhid murni — tak ada hari yang sial, hanya iman yang terkadang lemah.",
  },
  {
    number: 3,
    name: "Rabi'ul Awwal",
    arabic: "رَبِيع الْأَوَّل",
    emoji: "🌟",
    isHaram: false,
    intro:
      "Bulan kelahiran dan wafatnya Nabi Muhammad ﷺ. Bulan untuk merenungkan sirah dan ajaran beliau dengan dalam.",
    keutamaan: [
      "Bulan kelahiran Rasulullah ﷺ (12 Rabi'ul Awwal menurut pendapat masyhur).",
      "Bulan wafatnya Rasulullah ﷺ (12 Rabi'ul Awwal pula).",
      "Momen utama untuk mengkaji sirah, akhlak, dan perjuangan beliau.",
    ],
    saranAmalan: [
      "Memperbanyak sholawat kepada Nabi Muhammad ﷺ.",
      "Mempelajari Sirah Nabawiyah — kelahiran, hijrah, akhlak.",
      "Meneladani sunnah harian beliau (siwak, makan tangan kanan, salam).",
      "Menjaga konsistensi sholat sunnah dan ibadah harian.",
    ],
    specialDays: [
      { day: 12, name: "Maulid Nabi (pendapat masyhur)", amalan: "Sholawat & kaji sirah" },
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
    closing: "Cinta sejati pada Nabi ﷺ adalah meneladani — bukan sekadar memperingati.",
  },
  {
    number: 4,
    name: "Rabi'uts Tsani",
    arabic: "رَبِيع الثَّانِي",
    emoji: "🌿",
    isHaram: false,
    intro:
      "Bulan di mana Islam mulai menyebar dan menguatkan fondasinya setelah periode awal kenabian.",
    keutamaan: [
      "Bulan penyebaran dan penguatan Islam awal.",
      "Tidak ada peristiwa khusus — fokus pada konsistensi ibadah.",
    ],
    saranAmalan: [
      "Pemantapan ibadah wajib dan sunnah rawatib.",
      "Konsistensi amal sholih kecil setiap hari.",
      "Memperdalam ilmu agama secara bertahap.",
    ],
    specialDays: [
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
    closing: "Yang Allah cintai adalah amal yang istiqomah, walau sedikit.",
  },
  {
    number: 5,
    name: "Jumadil Awwal",
    arabic: "جُمَادَى الْأُوْلَى",
    emoji: "⛰️",
    isHaram: false,
    intro:
      "Bulan yang secara historis menjadi penanda ekspedisi penting dalam sejarah Islam (misalnya Perang Mu'tah).",
    keutamaan: [
      "Bulan keteguhan iman dalam sejarah Islam.",
      "Pengingat tentang pengorbanan para sahabat.",
    ],
    saranAmalan: [
      "Menjaga sholat berjamaah dengan sempurna.",
      "Membaca Al-Qur'an dengan tadabbur (merenungi makna).",
      "Memperbanyak istighfar dan dzikir.",
    ],
    specialDays: [
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
  },
  {
    number: 6,
    name: "Jumadits Tsani",
    arabic: "جُمَادَى الْآخِرَة",
    emoji: "📿",
    isHaram: false,
    intro:
      "Bulan penting yang menyaksikan peristiwa historis seperti wafatnya Khalifah Abu Bakar Ash-Shiddiq RA.",
    keutamaan: [
      "Pengingat tentang keteguhan iman Abu Bakar RA.",
      "Bulan untuk meneladani sahabat utama.",
    ],
    saranAmalan: [
      "Memperbanyak dzikir dan sedekah secara konsisten.",
      "Refleksi keteguhan iman para sahabat.",
      "Belajar sirah Khulafaur Rasyidin.",
    ],
    specialDays: [
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
  },
  {
    number: 7,
    name: "Rajab",
    arabic: "رَجَب",
    emoji: "🌸",
    isHaram: true,
    intro:
      "Bulan haram dan disebut Syahrullah (Bulan Allah). Para ulama menyebutnya 'bulan menanam' menuju Ramadan: Rajab menanam, Sya'ban menyiram, Ramadan memanen. Pada 27 Rajab terjadi Isra' Mi'raj — pemberian perintah sholat.",
    keutamaan: [
      "Salah satu dari empat bulan haram — pahala dan dosa dilipatgandakan.",
      "Disebut Syahrullah (Bulan Allah).",
      "Dijuluki Al-Ashabb — bulan yang mengucur rahmat dan ampunan.",
      "Pada 27 Rajab terjadi Isra' Mi'raj dan turunnya perintah sholat 5 waktu.",
      "Jembatan menuju Ramadan — bulan untuk mulai persiapan spiritual.",
    ],
    saranAmalan: [
      "Memperbanyak istighfar — Rajab disebut Syahrul Istighfar. Salah satu lafaz: 'Rabbighfirlī warḥamnī watub 'alayya' (70x pagi & sore).",
      "Doa memasuki Rajab: 'Allāhumma bārik lanā fī Rajaba wa Sya'bāna wa balligh-nā Ramaḍāna.'",
      "Puasa sunnah — terutama Senin & Kamis dan Ayyamul Bidh.",
      "Menjauhi maksiat lebih ketat — dosa di bulan haram lebih besar ancamannya.",
      "Memperbanyak sholawat dan dzikir.",
      "Bersedekah harian walau kecil — pahala dilipatgandakan.",
    ],
    specialDays: [
      { day: 1, name: "Awal Rajab", amalan: "Doa 'Allahumma barik lana fi Rajab', sholat hajat" },
      { day: 13, name: "Ayyamul Bidh Rajab", amalan: "Puasa + qiyamul lail" },
      { day: 14, name: "Ayyamul Bidh Rajab", amalan: "Puasa + qiyamul lail" },
      { day: 15, name: "Ayyamul Bidh Rajab", amalan: "Puasa + qiyamul lail" },
      { day: 27, name: "Isra' Mi'raj", amalan: "Puasa, sholawat, kaji sejarah perintah sholat" },
    ],
    closing: "Rajab adalah saat menanam. Yang ditanam dengan istighfar dan sedekah hari ini, akan dipanen di Ramadan.",
  },
  {
    number: 8,
    name: "Sya'ban",
    arabic: "شَعْبَان",
    emoji: "🌱",
    isHaram: false,
    intro:
      "Bulan diangkatnya amal manusia kepada Allah. Rasulullah ﷺ paling banyak berpuasa sunnah di bulan ini (selain Ramadan). Bulan menyiram menuju Ramadan.",
    keutamaan: [
      "Bulan diangkatnya amal manusia kepada Allah.",
      "Rasulullah ﷺ paling banyak puasa sunnah di bulan ini.",
      "Pertengahan Sya'ban (Nishfu Sya'ban) — malam pengampunan.",
      "Bulan persiapan Ramadan — saat menyiram tanaman spiritual.",
    ],
    saranAmalan: [
      "Memperbanyak puasa sunnah — terutama di pertengahan bulan.",
      "Qadha puasa Ramadan tahun lalu sebelum Ramadan berikutnya.",
      "Memperbanyak Al-Qur'an, dzikir, dan doa sebagai persiapan Ramadan.",
      "Niatkan target Ramadan: tilawah, qiyamul lail, sedekah.",
    ],
    specialDays: [
      { day: 13, name: "Ayyamul Bidh Sya'ban", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh Sya'ban", amalan: "Puasa sunnah" },
      { day: 15, name: "Nishfu Sya'ban", amalan: "Puasa, doa, dzikir, persiapan Ramadan" },
    ],
    closing: "Sya'ban adalah saat menyiram. Persiapkan dirimu — Ramadan akan datang.",
  },
  {
    number: 9,
    name: "Ramadhan",
    arabic: "رَمَضَان",
    emoji: "🌙",
    isHaram: false,
    intro:
      "Sayyidus Syuhur — penghulu segala bulan. Bulan diturunkannya Al-Qur'an, dilipatgandakannya pahala, dan terdapat Lailatul Qadar (malam yang lebih baik dari 1000 bulan).",
    keutamaan: [
      "Bulan paling mulia — Sayyidus Syuhur.",
      "Bulan diturunkannya Al-Qur'an.",
      "Pintu surga dibuka, pintu neraka ditutup, syaitan dibelenggu.",
      "Lailatul Qadar — malam yang lebih baik dari 1000 bulan.",
      "Setiap amal dilipatgandakan — wajib jadi 70x lipat, sunnah jadi wajib.",
    ],
    saranAmalan: [
      "Puasa wajib — sebulan penuh dengan niat ikhlas.",
      "Tarawih & Qiyamul Lail — menghidupkan malam.",
      "I'tikaf di 10 hari terakhir — mencari Lailatul Qadar.",
      "Tadarus Al-Qur'an — minimal 1 juz per hari (target khatam).",
      "Sedekah dan zakat fitrah.",
      "Doa Lailatul Qadar: 'Allāhumma innaka 'afuwwun karīm tuḥibbul-'afwa fa'fu 'annī.'",
    ],
    specialDays: [
      { day: 1, name: "Awal Ramadan", amalan: "Niat puasa, tarawih malam pertama" },
      { day: 17, name: "Nuzulul Qur'an", amalan: "Tadarus Qur'an, refleksi turunnya wahyu" },
      { day: 21, name: "Mulai 10 hari terakhir", amalan: "I'tikaf, tahajud, doa Lailatul Qadar" },
      { day: 27, name: "Malam yang sering disebut sebagai Lailatul Qadar", amalan: "Qiyamul lail, doa lailatul qadar" },
    ],
    closing: "Ramadan adalah panen. Yang ditanam di Rajab, disiram di Sya'ban, kini berbuah. Manfaatkan setiap detik.",
  },
  {
    number: 10,
    name: "Syawwal",
    arabic: "شَوَّال",
    emoji: "🎉",
    isHaram: false,
    intro:
      "Bulan kemenangan dan Idul Fitri. Menandakan peningkatan amal setelah madrasah Ramadan — bukan kembali ke kebiasaan lama.",
    keutamaan: [
      "Bulan kemenangan setelah Ramadan.",
      "Puasa 6 hari Syawwal — pahalanya seperti puasa setahun penuh.",
      "Menandai peningkatan, bukan penurunan, ibadah pasca Ramadan.",
    ],
    saranAmalan: [
      "Sholat Idul Fitri — wajib bagi laki-laki.",
      "Puasa 6 hari Syawwal — boleh berurutan atau terpisah.",
      "Silaturahmi — saling memaafkan.",
      "Mempertahankan amalan Ramadan: tilawah, sholat sunnah, sedekah.",
    ],
    specialDays: [
      { day: 1, name: "Idul Fitri", amalan: "Sholat Id, takbir, silaturahmi" },
      { day: 2, name: "Mulai puasa 6 hari Syawwal", amalan: "Puasa sunnah" },
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
    closing: "Tanda Ramadan diterima: amal setelahnya lebih baik dari sebelumnya.",
  },
  {
    number: 11,
    name: "Dzulqa'dah",
    arabic: "ذُو الْقَعْدَة",
    emoji: "🕊️",
    isHaram: true,
    intro:
      "Salah satu dari empat bulan haram. Di masa lalu, peperangan dilarang di bulan ini untuk menghormati jamaah haji yang sedang dalam perjalanan.",
    keutamaan: [
      "Bulan haram — dosa diperberat, pahala dilipatgandakan.",
      "Bulan persiapan haji bagi yang akan berangkat.",
      "Konsistensi ibadah lebih utama daripada amalan khusus baru.",
    ],
    saranAmalan: [
      "Menjaga diri dari maksiat — larangan dosa di bulan haram lebih ditekankan.",
      "Persiapan haji bagi yang akan berangkat.",
      "Menjaga konsistensi sholat Dhuha, Tahajud, dan puasa sunnah.",
      "Memperbanyak istighfar.",
    ],
    specialDays: [
      { day: 13, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
  },
  {
    number: 12,
    name: "Dzulhijjah",
    arabic: "ذُو الْحِجَّة",
    emoji: "🕋",
    isHaram: true,
    intro:
      "Bulan haji — salah satu bulan haram. 10 hari pertamanya adalah hari-hari terbaik untuk amal sholih, melebihi jihad di jalan Allah. Terdapat Hari Arafah dan Idul Adha.",
    keutamaan: [
      "10 hari pertama Dzulhijjah — hari-hari paling utama dalam setahun.",
      "Hari Arafah (9 Dzulhijjah) — puasa hari ini menghapus dosa 2 tahun.",
      "Idul Adha (10 Dzulhijjah) — pengorbanan dan ketakwaan.",
      "Pahala amal di 10 hari ini melebihi jihad fi sabilillah.",
    ],
    saranAmalan: [
      "Puasa Arafah (9 Dzulhijjah) bagi yang tidak berhaji — menghapus dosa 2 tahun.",
      "Puasa 1–9 Dzulhijjah — sangat dianjurkan.",
      "Berkurban — kurban hewan ternak pada Idul Adha & hari Tasyriq (11–13).",
      "Memperbanyak takbir, tahmid, tahlil di 10 hari pertama.",
      "Haji bagi yang mampu — rukun Islam kelima.",
      "Sholat Idul Adha berjamaah.",
    ],
    specialDays: [
      { day: 1, name: "Awal 10 hari utama", amalan: "Mulai puasa sunnah, takbir" },
      { day: 8, name: "Hari Tarwiyah", amalan: "Puasa sunnah, hari pertama haji" },
      { day: 9, name: "Hari Arafah", amalan: "Puasa Arafah (non-haji), wukuf (haji)" },
      { day: 10, name: "Idul Adha", amalan: "Sholat Id, berkurban" },
      { day: 11, name: "Hari Tasyriq", amalan: "Berkurban, takbir" },
      { day: 12, name: "Hari Tasyriq", amalan: "Berkurban, takbir" },
      { day: 13, name: "Hari Tasyriq", amalan: "Berkurban, takbir" },
      { day: 14, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
      { day: 15, name: "Ayyamul Bidh", amalan: "Puasa sunnah" },
    ],
    closing: "10 hari Dzulhijjah hanya datang sekali setahun. Setiap detik adalah investasi besar.",
  },
];

export function getMonthInfo(monthNumber: number): HijriMonthInfo | undefined {
  return hijriMonths.find((m) => m.number === monthNumber);
}
