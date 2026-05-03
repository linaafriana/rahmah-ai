import type { Mood } from "@/types";

export type SituationGroup = "hati" | "hidup";

export interface Situation {
  id: string;
  group: SituationGroup;
  label: string;
  short: string;
  emoji: string;
  intro: string;
  recommendedSlugs: string[];
  doa: {
    arabic: string;
    transliteration: string;
    meaning: string;
    /** Citation hadits untuk verifikasi (e.g. "HR. Bukhari no. 6306"). */
    source?: string;
  };
  ayah: {
    surahName: string;
    surahNumber: number;
    ayahNumber: number;
    arabic: string;
    translation: string;
  };
  closing: string;
}

export const situations: Situation[] = [
  {
    id: "jatuh-dosa",
    group: "hati",
    label: "Aku jatuh ke dosa yang sama",
    short: "Jatuh lagi",
    emoji: "🕳️",
    intro:
      "Tidak apa-apa. Setiap manusia salah, dan yang terbaik di antara mereka adalah yang sering kembali. Bukan kau gagal — setan ingin kau berhenti mencoba. Hari ini, bangun lagi.",
    recommendedSlugs: [
      "tobat-nasuha",
      "bahaya-menunda",
      "menghidupkan-hati",
      "penyakit-hati",
    ],
    doa: {
      arabic:
        "ٱللَّٰهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا ٱسْتَطَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَٱغْفِرْ لِي",
      transliteration:
        "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā 'abduk, wa anā 'alā 'ahdika wa wa'dika mastaṭa't, abū'u laka bini'matika 'alayya, wa abū'u bidhanbī faghfir lī",
      meaning:
        "Sayyidul Istighfar — pemuka istighfar. Siapa membacanya dengan yakin di pagi hari, lalu wafat siang itu, masuk surga.",
      source: "HR. Al-Bukhari no. 6306",
    },
    ayah: {
      surahName: "Az-Zumar",
      surahNumber: 39,
      ayahNumber: 53,
      arabic:
        "قُلْ يَا عِبَادِيَ ٱلَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ ٱللَّٰهِ، إِنَّ ٱللَّٰهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا",
      translation:
        "Katakanlah, 'Wahai hamba-hamba-Ku yang melampaui batas terhadap diri sendiri, jangan berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni semua dosa.'",
    },
    closing: "Mulai dari satu langkah kecil sekarang — wudhu, lalu sholat 2 rakaat. Tidak harus sempurna.",
  },
  {
    id: "ibadah-hambar",
    group: "hati",
    label: "Ibadahku terasa hambar",
    short: "Hambar",
    emoji: "🍂",
    intro:
      "Ini disebut 'futur' — penurunan semangat ibadah yang wajar. Yang penting bukan terasa atau tidak, tapi tetap melakukannya. Rasa akan kembali. Sementara itu, tetap bergerak.",
    recommendedSlugs: [
      "menghidupkan-hati",
      "khusyu-sholat",
      "niat-ikhlas",
      "tazkiyatun-nafs",
    ],
    doa: {
      arabic:
        "يَا مُقَلِّبَ ٱلْقُلُوبِ، ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ",
      transliteration: "Yā muqallibal-qulūb, tsabbit qalbī 'alā dīnik",
      meaning:
        "Wahai yang membolak-balikkan hati, teguhkan hatiku dalam agama-Mu. Doa Nabi ﷺ saat hatinya goyah — kita lebih perlu lagi.",
      source: "HR. At-Tirmidzi no. 3522, Ahmad 6/302, sahih",
    },
    ayah: {
      surahName: "Ar-Ra'd",
      surahNumber: 13,
      ayahNumber: 28,
      arabic:
        "أَلَا بِذِكْرِ ٱللَّٰهِ تَطْمَئِنُّ ٱلْقُلُوبُ",
      translation:
        "Ingatlah, hanya dengan mengingat Allah, hati menjadi tenang.",
    },
    closing: "Coba detoks dari medsos satu hari. Lalu baca Qur'an 5 menit. Lalu sholat dengan suara pelan.",
  },
  {
    id: "kembali-pada-allah",
    group: "hati",
    label: "Aku ingin kembali pada Allah",
    short: "Kembali",
    emoji: "🌱",
    intro:
      "Selamat datang. Allah lebih senang dengan tobat hamba-Nya, daripada seseorang yang menemukan untanya yang hilang di gurun. Tidak ada terlambat — selama nyawa masih ada, pintu tetap terbuka.",
    recommendedSlugs: [
      "pengantar-islam",
      "tobat-nasuha",
      "rukun-iman",
      "doa-harian",
      "sunnah-harian",
    ],
    doa: {
      arabic:
        "رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ ٱلْخَاسِرِينَ",
      transliteration:
        "Rabbanā ẓalamnā anfusanā, wa in lam taghfir lanā wa tarḥamnā lanakūnanna minal-khāsirīn",
      meaning:
        "Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni dan tidak menyayangi kami, sungguh kami akan termasuk yang merugi. (Doa Adam ﷺ saat tobat)",
      source: "QS. Al-A'raf: 23",
    },
    ayah: {
      surahName: "At-Tahrim",
      surahNumber: 66,
      ayahNumber: 8,
      arabic:
        "يَا أَيُّهَا ٱلَّذِينَ آمَنُوا تُوبُوا إِلَى ٱللَّٰهِ تَوْبَةً نَصُوحًا",
      translation:
        "Wahai orang-orang yang beriman, bertobatlah kepada Allah dengan tobat yang murni.",
    },
    closing: "Ucapkan dua kalimat syahadat lagi sebagai pengingat. Lalu mulai dari satu sholat tepat waktu.",
  },
  {
    id: "ingin-cinta",
    group: "hati",
    label: "Aku ingin lebih cinta pada Allah",
    short: "Mencintai",
    emoji: "💗",
    intro:
      "Cinta tumbuh dari mengenal. Semakin kau kenal Allah — sifat-Nya, kasih-Nya, cara-Nya menyayangi makhluk — semakin sulit untuk tidak mencintai-Nya.",
    recommendedSlugs: [
      "asmaul-husna",
      "sholawat",
      "sirah-nabawiyah",
      "kisah-sahabat",
      "tauhid-tiga-jenis",
    ],
    doa: {
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَحُبَّ كُلِّ عَمَلٍ يُقَرِّبُ إِلَىٰ حُبِّكَ",
      transliteration:
        "Allāhumma innī as'aluka ḥubbaka, wa ḥubba man yuḥibbuka, wa ḥubba kulli 'amalin yuqarribu ilā ḥubbik",
      meaning:
        "Ya Allah, aku memohon cinta-Mu, cinta orang yang mencintai-Mu, dan cinta setiap amal yang mendekatkan kepada cinta-Mu.",
      source: "HR. At-Tirmidzi no. 3235, Ahmad 5/243, sahih",
    },
    ayah: {
      surahName: "Ali Imran",
      surahNumber: 3,
      ayahNumber: 31,
      arabic:
        "قُلْ إِنْ كُنْتُمْ تُحِبُّونَ ٱللَّٰهَ فَٱتَّبِعُونِي يُحْبِبْكُمُ ٱللَّٰهُ",
      translation:
        "Katakanlah: 'Jika kalian mencintai Allah, ikutilah aku, niscaya Allah mencintai kalian.'",
    },
    closing: "Pilih satu sunnah Nabi ﷺ untuk diamalkan minggu ini. Cinta dimulai dari mengikuti.",
  },
  {
    id: "cemas",
    group: "hati",
    label: "Aku cemas / takut",
    short: "Cemas",
    emoji: "😰",
    intro:
      "Cemas adalah manusiawi. Tapi cemas yang berkepanjangan berarti kau lupa siapa yang mengatur urusanmu. Kembalikan kepada-Nya — Dia yang Maha Cukup.",
    recommendedSlugs: [
      "doa-pilihan",
      "asmaul-husna",
      "dzikir-pagi-petang",
      "rukun-iman",
    ],
    doa: {
      arabic:
        "حَسْبِيَ ٱللَّٰهُ لَا إِلَٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
      transliteration:
        "Ḥasbiyallāhu lā ilāha illā huwa, 'alaihi tawakkaltu, wa huwa rabbul-'arsyil-'aẓīm",
      meaning:
        "Cukuplah Allah bagiku, tiada Tuhan selain Dia. Hanya kepada-Nya aku bertawakkal — Dia Tuhan Arsy yang agung. Dibaca 7x — Allah cukupkan urusan dunia & akhirat.",
      source: "HR. Abu Dawud no. 5081 (status diperselisihkan: hasan menurut sebagian)",
    },
    ayah: {
      surahName: "At-Talaq",
      surahNumber: 65,
      ayahNumber: 3,
      arabic:
        "وَمَنْ يَتَوَكَّلْ عَلَى ٱللَّٰهِ فَهُوَ حَسْبُهُۥ",
      translation:
        "Barangsiapa bertawakkal kepada Allah, niscaya Allah akan mencukupkan keperluannya.",
    },
    closing: "Tarik napas dalam tiga kali. Ucapkan 'lā ḥaula wa lā quwwata illā billāh' tiga kali. Lalu lakukan satu hal kecil.",
  },
  {
    id: "sedih",
    group: "hati",
    label: "Aku sedih / berduka",
    short: "Sedih",
    emoji: "😢",
    intro:
      "Tangisan boleh. Hati patah boleh. Bahkan Nabi ﷺ menangis. Yang tidak boleh adalah meragukan kasih Allah. Dia melihat air matamu. Dia mendengar diam-mu.",
    recommendedSlugs: [
      "doa-pilihan",
      "menghidupkan-hati",
      "sholawat",
      "hari-akhir",
    ],
    doa: {
      arabic:
        "ٱللَّٰهُمَّ إِنِّي عَبْدُكَ ٱبْنُ عَبْدِكَ ٱبْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، أَسْأَلُكَ بِكُلِّ ٱسْمٍ هُوَ لَكَ … أَنْ تَجْعَلَ ٱلْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجِلَاءَ حُزْنِي، وَذَهَابَ هَمِّي",
      transliteration:
        "Allāhumma innī 'abduk… an taj'alal-Qur'āna rabī'a qalbī wa nūra ṣadrī wa jilā'a ḥuznī wa dzahāba hammī",
      meaning:
        "Doa nabawi panjang yang Rasulullah ﷺ janjikan: 'Tidak ada yang membacanya, kecuali Allah hilangkan kesedihannya dan ganti dengan kegembiraan.'",
      source: "HR. Ahmad 1/391, dishahihkan Al-Albani dalam Silsilah Sahihah no. 199",
    },
    ayah: {
      surahName: "Asy-Syarh",
      surahNumber: 94,
      ayahNumber: 5,
      arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا · إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
      translation:
        "Maka sungguh, bersama kesulitan ada kemudahan. Sungguh, bersama kesulitan ada kemudahan. (Diulang dua kali — tegas.)",
    },
    closing: "Tidak apa-apa hari ini. Wudhu, lalu rebah dengan sholawat di lisan. Allah dekat.",
  },
  {
    id: "marah",
    group: "hati",
    label: "Aku marah / kesal",
    short: "Marah",
    emoji: "😡",
    intro:
      "Marah adalah api dari setan. Rasulullah ﷺ pernah ditanya nasihat — beliau menjawab tiga kali: 'Jangan marah.' Jangan diturut, lawan dengan jeda.",
    recommendedSlugs: [
      "penyakit-hati",
      "akhlak-harian",
      "doa-pilihan",
      "tazkiyatun-nafs",
    ],
    doa: {
      arabic: "أَعُوذُ بِٱللَّٰهِ مِنَ ٱلشَّيْطَانِ ٱلرَّجِيمِ",
      transliteration: "A'ūdzu billāhi minasy-syaiṭānir-rajīm",
      meaning:
        "Aku berlindung kepada Allah dari setan yang terkutuk. Diajarkan Nabi ﷺ — saat marah, ucap ini, lalu wudhu, lalu pindah posisi (berdiri ke duduk ke berbaring).",
      source: "HR. Al-Bukhari no. 3282, Muslim no. 2610 (saat marah). Wudhu saat marah: HR. Abu Dawud no. 4784, hasan",
    },
    ayah: {
      surahName: "Ali Imran",
      surahNumber: 3,
      ayahNumber: 134,
      arabic:
        "وَٱلْكَاظِمِينَ ٱلْغَيْظَ وَٱلْعَافِينَ عَنِ ٱلنَّاسِ، وَٱللَّٰهُ يُحِبُّ ٱلْمُحْسِنِينَ",
      translation:
        "(Orang yang) menahan amarah dan memaafkan manusia. Allah mencintai orang yang berbuat kebaikan.",
    },
    closing: "Diam dulu. Wudhu. Tidur sebentar jika perlu. Bicara lagi setelah hati sudah tenang.",
  },
  {
    id: "iri",
    group: "hati",
    label: "Aku iri / tidak puas",
    short: "Iri",
    emoji: "😤",
    intro:
      "Iri (hasad) memakan kebaikan seperti api memakan kayu bakar. Solusinya bukan menutup mata — tapi mendoakan kebaikan untuk yang kau iri-i. Hati yang ridha pada qadar adalah hati yang luas.",
    recommendedSlugs: [
      "penyakit-hati",
      "asmaul-husna",
      "muamalah",
      "sifat-allah",
    ],
    doa: {
      arabic:
        "ٱللَّٰهُمَّ ٱكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
      transliteration:
        "Allāhummakfinī biḥalālika 'an ḥarāmika, wa aghninī bifaḍlika 'amman siwāk",
      meaning:
        "Ya Allah, cukupkan aku dengan yang halal dari yang haram, kayakanlah aku dengan karunia-Mu hingga tidak butuh kepada selain-Mu.",
      source: "HR. At-Tirmidzi no. 3563, Ahmad 1/153, hasan",
    },
    ayah: {
      surahName: "An-Nisa'",
      surahNumber: 4,
      ayahNumber: 32,
      arabic:
        "وَلَا تَتَمَنَّوْا مَا فَضَّلَ ٱللَّٰهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ",
      translation:
        "Janganlah kalian iri terhadap apa yang Allah lebihkan dari sebagian kalian atas sebagian yang lain.",
    },
    closing: "Saat iri muncul, ucapkan 'māsyā'allāh tabārakallāh' untuk yang kau iri-i. Doa baik untuknya, doa baik untukmu.",
  },
  // Hidup
  {
    id: "bingung-memilih",
    group: "hidup",
    label: "Aku bingung memilih jalan",
    short: "Bingung",
    emoji: "🤔",
    intro:
      "Saat berdiri di persimpangan, jangan andalkan akal saja. Ada doa istikharah yang Rasulullah ﷺ ajarkan untuk segala urusan, dari yang besar hingga yang kecil.",
    recommendedSlugs: [
      "sholat-sunnah",
      "doa-pilihan",
      "tauhid-tiga-jenis",
      "asmaul-husna",
    ],
    doa: {
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ ٱلْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ ٱلْغُيُوبِ",
      transliteration:
        "Allāhumma innī astakhīruka bi'ilmika, wa astaqdiruka biqudratika…",
      meaning:
        "Doa istikharah — diucapkan setelah sholat istikharah 2 rakaat. Lanjutkan dengan menyebut hal yang dipilih dalam hati.",
      source: "HR. Al-Bukhari no. 1162",
    },
    ayah: {
      surahName: "Al-Baqarah",
      surahNumber: 2,
      ayahNumber: 216,
      arabic:
        "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ، وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ، وَٱللَّٰهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ",
      translation:
        "Boleh jadi kau membenci sesuatu padahal ia baik bagimu, dan boleh jadi kau menyukai sesuatu padahal ia buruk bagimu. Allah mengetahui, sedang kau tidak mengetahui.",
    },
    closing: "Sholat istikharah 2 rakaat, lalu doa, lalu lakukan yang kau yakini terbaik. Pasrahkan hasilnya.",
  },
  {
    id: "sakit",
    group: "hidup",
    label: "Aku sedang sakit",
    short: "Sakit",
    emoji: "🤒",
    intro:
      "Sakit adalah penghapus dosa, jika disikapi dengan sabar. Rasulullah ﷺ: 'Tidak ada yang menimpa Muslim — kelelahan, sakit, bahkan duri yang menusuk — kecuali Allah hapuskan dosanya karenanya.'",
    recommendedSlugs: [
      "doa-pilihan",
      "tayammum",
      "sholat-fardhu",
      "hari-akhir",
    ],
    doa: {
      arabic:
        "أَذْهِبِ ٱلْبَأْسَ رَبَّ ٱلنَّاسِ، ٱشْفِ أَنْتَ ٱلشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
      transliteration:
        "Adzhibil-ba'sa rabban-nāsi, isyfi anta-syāfī, lā syifā'a illā syifā'uk, syifā'an lā yughādiru saqamā",
      meaning:
        "Hilangkan penyakit ini, wahai Rabb manusia. Sembuhkanlah, Engkau Yang Maha Menyembuhkan. Tidak ada kesembuhan kecuali kesembuhan dari-Mu — kesembuhan yang tidak meninggalkan penyakit.",
      source: "HR. Al-Bukhari no. 5743, Muslim no. 2191",
    },
    ayah: {
      surahName: "Asy-Syu'ara",
      surahNumber: 26,
      ayahNumber: 80,
      arabic: "وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ",
      translation:
        "Dan apabila aku sakit, Dialah yang menyembuhkan aku. (Doa Nabi Ibrahim ﷺ)",
    },
    closing: "Tetap sholat sebisamu — duduk, berbaring, atau dengan isyarat. Allah tidak menuntut yang tidak mampu.",
  },
  {
    id: "kehilangan",
    group: "hidup",
    label: "Aku kehilangan orang dicinta",
    short: "Kehilangan",
    emoji: "🤍",
    intro:
      "Innā lillāhi wa innā ilaihi rāji'ūn — kita milik Allah, dan kepada-Nya kita kembali. Yang kau cintai tidak hilang — ia hanya pulang lebih dulu. Doakan dia, agar perjalanan keduanya tetap bertemu di akhirat.",
    recommendedSlugs: [
      "sholat-jenazah",
      "hari-akhir",
      "doa-harian",
      "menghidupkan-hati",
    ],
    doa: {
      arabic:
        "إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، ٱللَّٰهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا",
      transliteration:
        "Innā lillāhi wa innā ilaihi rāji'ūn. Allāhumma ajurnī fī muṣībatī wa akhlif lī khairan minhā",
      meaning:
        "Sesungguhnya kami milik Allah, dan kepada-Nya kami kembali. Ya Allah, berilah aku pahala dalam musibahku, dan gantilah dengan yang lebih baik.",
      source: "QS. Al-Baqarah: 156; lanjutan doa: HR. Muslim no. 918",
    },
    ayah: {
      surahName: "Al-Baqarah",
      surahNumber: 2,
      ayahNumber: 156,
      arabic:
        "ٱلَّذِينَ إِذَا أَصَابَتْهُمْ مُصِيبَةٌ قَالُوا إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ",
      translation:
        "(Yaitu) orang-orang yang apabila ditimpa musibah, mereka berkata: 'Sesungguhnya kami milik Allah, dan kepada-Nya kami kembali.'",
    },
    closing: "Doakan setiap hari. Sedekah atas namanya. Pertemuan yang tertunda akan lebih indah.",
  },
  {
    id: "rezeki-halal",
    group: "hidup",
    label: "Aku mencari rezeki halal",
    short: "Rezeki",
    emoji: "🌾",
    intro:
      "Rezeki halal adalah pembuka doa, sumber barakah, dan pondasi keluarga shalih. Tidak harus banyak — yang penting bersih dan dengan jalan yang Allah ridhai.",
    recommendedSlugs: [
      "muamalah",
      "zakat",
      "asmaul-husna",
      "akhlak-harian",
    ],
    doa: {
      arabic:
        "ٱللَّٰهُمَّ ٱكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
      transliteration:
        "Allāhummakfinī biḥalālika 'an ḥarāmika, wa aghninī bifaḍlika 'amman siwāk",
      meaning:
        "Ya Allah, cukupkan aku dengan yang halal dari yang haram, kayakanlah aku dengan karunia-Mu hingga tidak butuh kepada selain-Mu.",
      source: "HR. At-Tirmidzi no. 3563, Ahmad 1/153, hasan",
    },
    ayah: {
      surahName: "At-Talaq",
      surahNumber: 65,
      ayahNumber: 2,
      arabic:
        "وَمَنْ يَتَّقِ ٱللَّٰهَ يَجْعَلْ لَهُ مَخْرَجًا، وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
      translation:
        "Barangsiapa bertakwa kepada Allah, niscaya Dia akan membukakan jalan keluar baginya, dan memberinya rezeki dari arah yang tidak disangka-sangka.",
    },
    closing: "Pertama: pastikan ibadah wajibmu utuh. Kedua: ikhtiar dengan jalan halal. Ketiga: tawakkal sepenuhnya.",
  },
];

export function findSituation(id: string): Situation | undefined {
  return situations.find((s) => s.id === id);
}

// Map journal moods to recommended situations
export const moodToSituation: Record<Mood, string | undefined> = {
  joyful: "ingin-cinta",
  calm: "ingin-cinta",
  loved: "ingin-cinta",
  sad: "sedih",
  tearful: "sedih",
  angry: "marah",
  tired: "ibadah-hambar",
};

export const featuredSituationIds: string[] = [
  "jatuh-dosa",
  "ibadah-hambar",
  "kembali-pada-allah",
  "ingin-cinta",
  "cemas",
  "bingung-memilih",
];
