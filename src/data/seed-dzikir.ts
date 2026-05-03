// Dzikir pagi, petang, dan setelah sholat fardhu.
//
// Sumber rujukan utama: kitab "Hisnul Muslim min Adzkaaril Kitaab was-Sunnah"
// karya Sa'id bin 'Ali bin Wahf al-Qahthani (manhaj Ahlussunnah, hadits
// shahih). Konsisten dengan rujukan "Do'a & Wirid" (Yazid bin Abdul Qadir
// Jawas, cet. ke-34, Pustaka Imam asy-Syafi'i).
//
// Tiap item mencantumkan citation (HR. … nomor) supaya reviewer bisa
// verifikasi langsung ke kitab hadits. Jumlah default mengikuti petunjuk
// Rasulullah ﷺ apa adanya — tidak ditambah-tambahi.
//
// Catatan: bacaan Subuh = setelah sholat Subuh sampai sebelum matahari
// terbit; bacaan Petang = setelah sholat Ashar sampai Maghrib (atau
// sebelum matahari terbenam).

import type { DzikirItem } from "@/types";

export const seedDzikir: DzikirItem[] = [
  // ─── DZIKIR PAGI ──────────────────────────────────────────
  {
    id: "ayat-kursi-pagi",
    category: "morning",
    arabic:
      "ٱللَّٰهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
    transliteration:
      "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm. Lā ta'khudzuhū sinatuw wa lā nawm…",
    meaning:
      "(Bacalah Ayat Kursi penuh — QS. Al-Baqarah: 255). Allah tidak ada Tuhan selain Dia, Yang Maha Hidup, Maha Berdiri Sendiri…",
    defaultCount: 1,
    source: "HR. Al-Hakim 1/562, dishahihkan oleh Al-Albani",
    benefit:
      "Akan terus dijaga oleh Allah hingga sore (jika dibaca pagi) atau hingga pagi (jika dibaca sore).",
  },
  {
    id: "tiga-qul-pagi",
    category: "morning",
    arabic:
      "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ ۚ ٱللَّٰهُ ٱلصَّمَدُ ۚ لَمْ يَلِدْ وَلَمْ يُولَدْ ۚ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ • قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ … • قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ …",
    transliteration:
      "Qul huwallāhu aḥad … • Qul a'ūdzu birabbil-falaq … • Qul a'ūdzu birabbin-nās …",
    meaning:
      "Surah Al-Ikhlās, Al-Falaq, dan An-Nās — masing-masing dibaca 3 kali.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5082, At-Tirmidzi no. 3575, hasan shahih",
    benefit:
      "Cukup baginya dari segala sesuatu (perlindungan menyeluruh pagi-petang).",
  },
  {
    id: "asbahna-allahumma-pagi",
    category: "morning",
    arabic:
      "اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ، وَإِلَيْكَ النُّشُوْرُ",
    transliteration:
      "Allāhumma bika aṣbaḥnā, wa bika amsaynā, wa bika naḥyā, wa bika namūtu, wa ilaykan-nusyūr",
    meaning:
      "Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi, dan dengan-Mu kami memasuki waktu petang, dengan-Mu kami hidup dan mati, dan kepada-Mu kami dikembalikan.",
    defaultCount: 1,
    source: "HR. At-Tirmidzi no. 3391, Abu Dawud no. 5068, hasan",
  },
  {
    id: "sayyidul-istighfar-pagi",
    category: "morning",
    arabic:
      "اَللَّهُمَّ أَنْتَ رَبِّيْ لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ، فَاغْفِرْ لِيْ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ",
    transliteration:
      "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa ana 'abduk, wa ana 'alā 'ahdika wa wa'dika mastaṭa'tu, a'ūdzu bika min syarri mā ṣana'tu, abū'u laka bini'matika 'alayya, wa abū'u bidzanbī, faghfir lī fa innahū lā yaghfirudz-dzunūba illā anta",
    meaning:
      "Sayyidul Istighfar (penghulu istighfar). Ya Allah, Engkau Tuhanku, tiada Tuhan selain-Mu. Engkau menciptakanku dan aku hamba-Mu. Aku setia pada janjiku pada-Mu semampuku. Aku berlindung kepada-Mu dari kejahatan yang kuperbuat, aku akui semua nikmat-Mu padaku, dan aku akui dosaku — maka ampunilah aku, sesungguhnya tidak ada yang mengampuni dosa kecuali Engkau.",
    defaultCount: 1,
    source: "HR. Al-Bukhari no. 6306",
    benefit:
      "Siapa membacanya di pagi hari dengan yakin lalu meninggal sebelum sore, ia masuk surga. Begitu pula sebaliknya di malam hari.",
  },
  {
    id: "afini-fi-badani-pagi",
    category: "morning",
    arabic:
      "اَللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لَا إِلٰهَ إِلَّا أَنْتَ",
    transliteration:
      "Allāhumma 'āfinī fī badanī, allāhumma 'āfinī fī sam'ī, allāhumma 'āfinī fī baṣarī, lā ilāha illā anta",
    meaning:
      "Ya Allah, sehatkan tubuhku. Ya Allah, sehatkan pendengaranku. Ya Allah, sehatkan penglihatanku. Tiada Tuhan selain Engkau.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5090, Ahmad 5/42, hasan",
  },
  {
    id: "afwa-afiyah-pagi",
    category: "morning",
    arabic:
      "اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِيْ دِيْنِيْ وَدُنْيَايَ وَأَهْلِيْ وَمَالِيْ، اَللَّهُمَّ اسْتُرْ عَوْرَاتِيْ وَآمِنْ رَوْعَاتِيْ، اَللَّهُمَّ احْفَظْنِيْ مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِيْ وَعَنْ يَمِيْنِيْ وَعَنْ شِمَالِيْ وَمِنْ فَوْقِيْ، وَأَعُوْذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِيْ",
    transliteration:
      "Allāhumma innī as'alukal-'afwa wal-'āfiyah fid-dunyā wal-ākhirah…",
    meaning:
      "Ya Allah, aku memohon ampunan dan keselamatan di dunia dan akhirat. Ya Allah, ampunilah dan selamatkanlah agama, dunia, keluarga, dan hartaku. Ya Allah, tutupilah auratku, tenangkanlah ketakutanku. Ya Allah, jagalah aku dari depan, belakang, kanan, kiri, dan atasku. Aku berlindung dengan keagungan-Mu agar aku tidak dibinasakan dari bawahku.",
    defaultCount: 1,
    source: "HR. Abu Dawud no. 5074, Ibnu Majah no. 3871, sahih",
  },
  {
    id: "ya-hayyu-ya-qayyum-pagi",
    category: "morning",
    arabic:
      "يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، أَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ، وَلَا تَكِلْنِيْ إِلَىٰ نَفْسِيْ طَرْفَةَ عَيْنٍ",
    transliteration:
      "Yā Ḥayyu yā Qayyūm, biraḥmatika astaghīts, aṣliḥ lī sya'nī kullah, wa lā takilnī ilā nafsī ṭarfata 'ayn",
    meaning:
      "Wahai Yang Maha Hidup, Wahai Yang Maha Berdiri Sendiri — dengan rahmat-Mu aku memohon pertolongan. Perbaikilah seluruh urusanku, dan jangan serahkan aku pada diriku sendiri walau sekejap mata.",
    defaultCount: 3,
    source:
      "HR. An-Nasa'i dalam 'Amalul Yaum wal Lailah no. 575, hasan menurut Al-Albani",
  },
  {
    id: "bismillah-laa-yadhurr-pagi",
    category: "morning",
    arabic:
      "بِسْمِ اللهِ الَّذِيْ لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيْعُ الْعَلِيْمُ",
    transliteration:
      "Bismillāhilladzī lā yaḍurru ma'asmihī syay'un fil-arḍi wa lā fis-samā', wa huwas-samī'ul-'alīm",
    meaning:
      "Dengan nama Allah, yang dengan nama-Nya tidak ada sesuatu pun di bumi maupun di langit yang dapat membahayakan; Dialah Yang Maha Mendengar, Maha Mengetahui.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5088, At-Tirmidzi no. 3388, sahih",
    benefit:
      "Siapa membacanya 3x pagi dan 3x petang, tidak akan ada yang membahayakannya pada hari itu.",
  },
  {
    id: "raditu-billahi-pagi",
    category: "morning",
    arabic:
      "رَضِيْتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِيْنًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
    transliteration:
      "Raḍītu billāhi rabban, wa bil-islāmi dīnan, wa bi-Muḥammadin ﷺ nabiyyan",
    meaning:
      "Aku ridha Allah sebagai Tuhan, Islam sebagai agama, dan Muhammad ﷺ sebagai Nabi.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5072, At-Tirmidzi no. 3389, hasan",
    benefit: "Allah pasti meridhai-nya pada hari kiamat.",
  },
  {
    id: "hasbiyallah-pagi",
    category: "morning",
    arabic:
      "حَسْبِيَ اللهُ لَا إِلٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ الْعَرْشِ الْعَظِيْمِ",
    transliteration:
      "Ḥasbiyallāhu lā ilāha illā huwa, 'alayhi tawakkaltu, wa huwa rabbul-'arsyil-'aẓīm",
    meaning:
      "Cukuplah Allah bagiku, tiada Tuhan selain Dia. Kepada-Nya aku bertawakkal — Dia Tuhan Pemilik Arsy yang agung.",
    defaultCount: 7,
    source:
      "HR. Abu Dawud no. 5081 (ada perselisihan derajat — hasan menurut sebagian, dho'if menurut sebagian)",
    benefit:
      "Diriwayatkan Allah akan mencukupkan urusan dunia & akhiratnya jika dibaca 7x pagi-petang.",
  },
  {
    id: "subhanallah-bihamdihi-100x-pagi",
    category: "morning",
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    meaning: "Maha Suci Allah, dan segala puji bagi-Nya.",
    defaultCount: 100,
    source: "HR. Muslim no. 2692",
    benefit:
      "Dosa-dosanya diampuni meski sebanyak buih di lautan (jika dibaca 100x).",
  },
  {
    id: "tahlil-10x-pagi",
    category: "morning",
    arabic:
      "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ",
    transliteration:
      "Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamd, wa huwa 'alā kulli syay'in qadīr",
    meaning:
      "Tiada Tuhan selain Allah, satu-satu-Nya, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan, dan bagi-Nya segala puji. Dia Maha Kuasa atas segala sesuatu.",
    defaultCount: 10,
    source: "HR. An-Nasa'i, Ahmad 4/60, sahih (Al-Albani)",
    benefit:
      "10x: pahala memerdekakan 10 budak, ditulis 100 kebaikan, dihapus 100 keburukan, dilindungi dari setan hingga sore.",
  },
  {
    id: "shalawat-pagi",
    category: "morning",
    arabic:
      "اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ",
    transliteration: "Allāhumma ṣalli wa sallim 'alā nabiyyinā Muḥammad",
    meaning: "Ya Allah, limpahkanlah shalawat dan salam kepada Nabi kami Muhammad ﷺ.",
    defaultCount: 10,
    source: "HR. Ath-Thabrani 16/297, hasan menurut Al-Albani",
    benefit:
      "Siapa bershalawat 10x pagi & 10x petang, ia mendapat syafa'at Rasulullah ﷺ.",
  },
  {
    id: "istighfar-100x-pagi",
    category: "morning",
    arabic: "أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ",
    transliteration: "Astaghfirullāha wa atūbu ilayh",
    meaning: "Aku memohon ampunan Allah dan bertaubat kepada-Nya.",
    defaultCount: 100,
    source: "HR. Al-Bukhari no. 6307, Muslim no. 2702",
    benefit:
      "Rasulullah ﷺ sendiri beristighfar lebih dari 70/100 kali sehari — sebagai teladan istiqomah taubat.",
  },

  // ─── DZIKIR PETANG ────────────────────────────────────────
  {
    id: "ayat-kursi-petang",
    category: "evening",
    arabic:
      "ٱللَّٰهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ",
    transliteration:
      "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm. Lā ta'khudzuhū sinatuw wa lā nawm…",
    meaning:
      "(Bacalah Ayat Kursi penuh — QS. Al-Baqarah: 255).",
    defaultCount: 1,
    source: "HR. Al-Hakim 1/562, dishahihkan oleh Al-Albani",
    benefit: "Dijaga oleh Allah hingga pagi.",
  },
  {
    id: "tiga-qul-petang",
    category: "evening",
    arabic:
      "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ … • قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ … • قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ …",
    transliteration:
      "Qul huwallāhu aḥad … • Qul a'ūdzu birabbil-falaq … • Qul a'ūdzu birabbin-nās …",
    meaning:
      "Surah Al-Ikhlās, Al-Falaq, dan An-Nās — masing-masing dibaca 3 kali.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5082, At-Tirmidzi no. 3575, hasan shahih",
  },
  {
    id: "amsayna-allahumma-petang",
    category: "evening",
    arabic:
      "اَللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ، وَإِلَيْكَ الْمَصِيْرُ",
    transliteration:
      "Allāhumma bika amsaynā, wa bika aṣbaḥnā, wa bika naḥyā, wa bika namūtu, wa ilaykal-maṣīr",
    meaning:
      "Ya Allah, dengan rahmat-Mu kami memasuki waktu petang, dan dengan-Mu kami memasuki waktu pagi, dengan-Mu kami hidup dan mati, dan kepada-Mu tempat kembali.",
    defaultCount: 1,
    source: "HR. At-Tirmidzi no. 3391, Abu Dawud no. 5068, hasan",
  },
  {
    id: "sayyidul-istighfar-petang",
    category: "evening",
    arabic:
      "اَللَّهُمَّ أَنْتَ رَبِّيْ لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِيْ وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ بِذَنْبِيْ، فَاغْفِرْ لِيْ فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ",
    transliteration:
      "Allāhumma anta rabbī lā ilāha illā anta…",
    meaning: "(Sayyidul Istighfar — sama dengan versi pagi).",
    defaultCount: 1,
    source: "HR. Al-Bukhari no. 6306",
    benefit:
      "Siapa membacanya petang dengan yakin lalu wafat sebelum pagi, ia masuk surga.",
  },
  {
    id: "afini-fi-badani-petang",
    category: "evening",
    arabic:
      "اَللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لَا إِلٰهَ إِلَّا أَنْتَ",
    transliteration:
      "Allāhumma 'āfinī fī badanī…",
    meaning:
      "Ya Allah, sehatkan tubuhku, pendengaranku, penglihatanku. Tiada Tuhan selain Engkau.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5090, Ahmad 5/42, hasan",
  },
  {
    id: "audzu-bikalimatillah-petang",
    category: "evening",
    arabic:
      "أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration:
      "A'ūdzu bikalimātillāhit-tāmmāti min syarri mā khalaq",
    meaning:
      "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.",
    defaultCount: 3,
    source: "HR. Muslim no. 2708",
    benefit:
      "Siapa membacanya 3x ketika sore (petang), tidak akan ada yang membahayakannya malam itu.",
  },
  {
    id: "bismillah-laa-yadhurr-petang",
    category: "evening",
    arabic:
      "بِسْمِ اللهِ الَّذِيْ لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيْعُ الْعَلِيْمُ",
    transliteration:
      "Bismillāhilladzī lā yaḍurru ma'asmihī syay'un fil-arḍi wa lā fis-samā', wa huwas-samī'ul-'alīm",
    meaning:
      "Dengan nama Allah, yang dengan nama-Nya tidak ada sesuatu pun yang dapat membahayakan di bumi maupun langit; Dialah Yang Maha Mendengar, Maha Mengetahui.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5088, At-Tirmidzi no. 3388, sahih",
  },
  {
    id: "raditu-billahi-petang",
    category: "evening",
    arabic:
      "رَضِيْتُ بِاللهِ رَبًّا، وَبِالْإِسْلَامِ دِيْنًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
    transliteration:
      "Raḍītu billāhi rabban, wa bil-islāmi dīnan, wa bi-Muḥammadin ﷺ nabiyyan",
    meaning:
      "Aku ridha Allah sebagai Tuhan, Islam sebagai agama, dan Muhammad ﷺ sebagai Nabi.",
    defaultCount: 3,
    source: "HR. Abu Dawud no. 5072, At-Tirmidzi no. 3389, hasan",
  },
  {
    id: "subhanallah-bihamdihi-100x-petang",
    category: "evening",
    arabic: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    meaning: "Maha Suci Allah, dan segala puji bagi-Nya.",
    defaultCount: 100,
    source: "HR. Muslim no. 2692",
    benefit: "Dosa-dosa diampuni meski sebanyak buih di lautan.",
  },
  {
    id: "shalawat-petang",
    category: "evening",
    arabic:
      "اَللَّهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ",
    transliteration: "Allāhumma ṣalli wa sallim 'alā nabiyyinā Muḥammad",
    meaning: "Ya Allah, limpahkanlah shalawat dan salam kepada Nabi kami Muhammad ﷺ.",
    defaultCount: 10,
    source: "HR. Ath-Thabrani 16/297, hasan",
    benefit: "Mendapatkan syafa'at Rasulullah ﷺ.",
  },
  {
    id: "istighfar-100x-petang",
    category: "evening",
    arabic: "أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ",
    transliteration: "Astaghfirullāha wa atūbu ilayh",
    meaning: "Aku memohon ampunan Allah dan bertaubat kepada-Nya.",
    defaultCount: 100,
    source: "HR. Al-Bukhari no. 6307, Muslim no. 2702",
  },

  // ─── DZIKIR SETELAH SHOLAT FARDHU ─────────────────────────
  {
    id: "istighfar-3x-after",
    category: "afterPrayer",
    arabic: "أَسْتَغْفِرُ اللهَ",
    transliteration: "Astaghfirullāh",
    meaning: "Aku memohon ampunan Allah.",
    defaultCount: 3,
    source: "HR. Muslim no. 591",
    benefit:
      "Sunnah pertama setelah salam: istighfar 3x sebelum dzikir lainnya.",
  },
  {
    id: "allahumma-antas-salam-after",
    category: "afterPrayer",
    arabic:
      "اَللَّهُمَّ أَنْتَ السَّلَامُ، وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
    transliteration:
      "Allāhumma antas-salām, wa minkas-salām, tabārakta yā dzal-jalāli wal-ikrām",
    meaning:
      "Ya Allah, Engkau-lah As-Salām (Maha Sejahtera), dan dari-Mu kesejahteraan. Maha Tinggi Engkau, wahai Yang Mahaagung dan Mahamulia.",
    defaultCount: 1,
    source: "HR. Muslim no. 591",
  },
  {
    id: "subhanallah-after",
    category: "afterPrayer",
    arabic: "سُبْحَانَ اللهِ",
    transliteration: "Subḥānallāh",
    meaning: "Maha Suci Allah.",
    defaultCount: 33,
    source: "HR. Muslim no. 597",
  },
  {
    id: "alhamdulillah-after",
    category: "afterPrayer",
    arabic: "ٱلْحَمْدُ لِلَّٰهِ",
    transliteration: "Alḥamdulillāh",
    meaning: "Segala puji bagi Allah.",
    defaultCount: 33,
    source: "HR. Muslim no. 597",
  },
  {
    id: "allahuakbar-after",
    category: "afterPrayer",
    arabic: "ٱللَّٰهُ أَكْبَرُ",
    transliteration: "Allāhu Akbar",
    meaning: "Allah Maha Besar.",
    defaultCount: 33,
    source: "HR. Muslim no. 597",
  },
  {
    id: "tahlil-penutup-after",
    category: "afterPrayer",
    arabic:
      "لَا إِلٰهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيْرٌ",
    transliteration:
      "Lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamd, wa huwa 'alā kulli syay'in qadīr",
    meaning:
      "Tiada Tuhan selain Allah, satu-satu-Nya, tidak ada sekutu bagi-Nya. Bagi-Nya kerajaan dan segala puji. Dia Maha Kuasa atas segala sesuatu.",
    defaultCount: 1,
    source: "HR. Muslim no. 597",
    benefit:
      "Penutup dzikir 33-33-33 → genap 100. Dosa-dosanya diampuni meski seperti buih lautan.",
  },
  {
    id: "ayat-kursi-after",
    category: "afterPrayer",
    arabic:
      "ٱللَّٰهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ … (Ayat Kursi penuh)",
    transliteration: "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm …",
    meaning: "Bacaan Ayat Kursi (QS. Al-Baqarah: 255) setelah setiap sholat fardhu.",
    defaultCount: 1,
    source:
      "HR. An-Nasa'i 9928, Ath-Thabrani, sahih menurut Al-Albani",
    benefit:
      "Tidak ada yang menghalangi pembacanya masuk surga selain kematian.",
  },
  {
    id: "allahumma-ainni-after",
    category: "afterPrayer",
    arabic:
      "اَللَّهُمَّ أَعِنِّيْ عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    transliteration:
      "Allāhumma a'innī 'alā dzikrika wa syukrika wa ḥusni 'ibādatik",
    meaning:
      "Ya Allah, tolonglah aku untuk berdzikir kepada-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan baik.",
    defaultCount: 1,
    source: "HR. Abu Dawud no. 1522, An-Nasa'i 3/53, sahih",
    benefit:
      "Dianjurkan oleh Rasulullah ﷺ kepada Mu'adz bin Jabal — diucapkan setelah setiap sholat.",
  },
  {
    id: "tiga-qul-after",
    category: "afterPrayer",
    arabic:
      "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ … • قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ … • قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ …",
    transliteration:
      "Al-Ikhlās, Al-Falaq, An-Nās",
    meaning:
      "Tiga surah Al-Mu'awwidzāt — dibaca 1 kali setelah setiap sholat fardhu (3 kali setelah Subuh & Maghrib).",
    defaultCount: 1,
    source: "HR. Abu Dawud no. 1523, An-Nasa'i 3/68, sahih",
  },
];
