// Doa-doa dari Al-Qur'an dan As-Sunnah.
//
// Sumber rujukan:
//   - "Hisnul Muslim min Adzkaaril Kitaab was-Sunnah" — Sa'id bin 'Ali
//     bin Wahf al-Qahthani.
//   - "Do'a & Wirid" — Yazid bin Abdul Qadir Jawas (cet. ke-34,
//     Pustaka Imam asy-Syafi'i).
//
// Setiap doa di-citation dengan rujukan hadits/ayat yang shahih atau
// hasan. Yang dilemahkan ulama atau tidak punya dasar hadits ditandai
// secara eksplisit (misalnya "Sholawat Munjiyat — susunan ulama,
// bukan dari hadits langsung").

import type { LearnTopic } from "@/types";

const doaHarian: LearnTopic = {
  id: "doa-harian",
  slug: "doa-harian",
  category: "doa",
  level: "pemula",
  title: "Doa Harian",
  description: "Doa-doa lembut menemani hari",
  emoji: "🤲",
  intro:
    "Doa adalah cara hati bicara pada Allah. Pilih yang akan kamu hafalkan minggu ini — pelan-pelan, sampai mengalir di lidah.",
  items: [
    {
      title: "Bangun tidur",
      arabic:
        "ٱلْحَمْدُ لِلَّٰهِ ٱلَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ ٱلنُّشُورُ",
      transliteration:
        "Alḥamdulillāhilladhī aḥyānā ba'da mā amātanā wa ilaihin-nusyūr",
      body: "Segala puji bagi Allah yang menghidupkan kami setelah mematikan kami, dan kepada-Nya kami akan kembali.",
      source: "HR. Al-Bukhari no. 6312, Muslim no. 2711",
    },
    {
      title: "Sebelum tidur",
      arabic: "بِٱسْمِكَ ٱللَّٰهُمَّ أَمُوتُ وَأَحْيَا",
      transliteration: "Bismika Allāhumma amūtu wa aḥyā",
      body: "Dengan nama-Mu ya Allah, aku mati dan aku hidup.",
      source: "HR. Al-Bukhari no. 6324, Muslim no. 2711",
    },
    {
      title: "Sebelum makan",
      arabic: "بِسْمِ ٱللَّٰهِ",
      transliteration: "Bismillāh",
      body: "Jika lupa di awal, ucapkan saat ingat: 'Bismillāhi awwalahu wa ākhirahu.'",
      source: "HR. Abu Dawud no. 3767, At-Tirmidzi no. 1858, sahih",
    },
    {
      title: "Setelah makan",
      arabic:
        "ٱلْحَمْدُ لِلَّٰهِ ٱلَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ",
      transliteration:
        "Alḥamdulillāhilladhī aṭ'amanā wa saqānā wa ja'alanā muslimīn",
      body: "Segala puji bagi Allah yang memberi kami makan dan minum, serta menjadikan kami orang Muslim.",
      source: "HR. Abu Dawud no. 3850, At-Tirmidzi no. 3457, hasan",
    },
    {
      title: "Keluar rumah",
      arabic:
        "بِسْمِ ٱللَّٰهِ تَوَكَّلْتُ عَلَى ٱللَّٰهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ",
      transliteration:
        "Bismillāhi tawakkaltu 'alallāh, lā ḥaula wa lā quwwata illā billāh",
      body: "Dengan nama Allah, aku bertawakkal kepada Allah. Tiada daya dan kekuatan kecuali dengan Allah.",
      source: "HR. Abu Dawud no. 5095, At-Tirmidzi no. 3426, sahih",
    },
    {
      title: "Masuk rumah",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ ٱلْمَوْلِجِ وَخَيْرَ ٱلْمَخْرَجِ، بِسْمِ ٱللَّٰهِ وَلَجْنَا، وَبِسْمِ ٱللَّٰهِ خَرَجْنَا، وَعَلَى ٱللَّٰهِ رَبِّنَا تَوَكَّلْنَا",
      transliteration:
        "Allāhumma innī as'aluka khairal-maulij wa khairal-makhraj, bismillāhi walajnā, wa bismillāhi kharajnā, wa 'alallāhi rabbinā tawakkalnā",
      body: "Ya Allah, aku memohon kebaikan tempat masuk dan tempat keluar. Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah kami bertawakkal.",
      source: "HR. Abu Dawud no. 5096, hasan",
    },
    {
      title: "Naik kendaraan",
      arabic:
        "سُبْحَانَ ٱلَّذِي سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
      transliteration:
        "Subḥānalladhī sakhkhara lanā hādzā wa mā kunnā lahū muqrinīn, wa innā ilā rabbinā lamunqalibūn",
      body: "Maha Suci Allah yang menundukkan kendaraan ini untuk kami, sedang kami tidak mampu menguasainya. Sesungguhnya kepada Tuhan kami pasti kembali.",
      source: "QS. Az-Zukhruf: 13–14; HR. Muslim no. 1342",
    },
    {
      title: "Untuk orang tua",
      arabic: "رَبِّ ٱرْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
      transliteration: "Rabbirḥamhumā kamā rabbayānī ṣaghīrā",
      body: "Wahai Tuhanku, sayangilah keduanya sebagaimana mereka mengasihiku waktu kecil.",
      source: "QS. Al-Israa': 24",
    },
    {
      title: "Doa kebaikan dunia & akhirat",
      arabic:
        "رَبَّنَا آتِنَا فِي ٱلدُّنْيَا حَسَنَةً وَفِي ٱلْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ ٱلنَّارِ",
      transliteration:
        "Rabbanā ātinā fid-dunyā ḥasanah wa fil-ākhirati ḥasanah wa qinā 'adzāban-nār",
      body: "Ya Rabb, berikanlah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari siksa api neraka.",
      source: "QS. Al-Baqarah: 201; doa yang paling sering dibaca Rasulullah ﷺ (HR. Al-Bukhari no. 6389, Muslim no. 2690)",
    },
  ],
  closing: "Hafalkan satu, ulangi seharian. Doa pendek yang ikhlas lebih baik dari panjang yang lalai.",
};

const doaPilihan: LearnTopic = {
  id: "doa-pilihan",
  slug: "doa-pilihan",
  category: "doa",
  level: "menengah",
  title: "Doa-doa Pilihan",
  description: "Untuk situasi khusus dalam hidup",
  emoji: "💌",
  intro:
    "Beberapa doa khusus yang Rasulullah ﷺ ajarkan untuk situasi tertentu. Saat menghadapinya, doa yang sudah kamu hafal akan datang sendiri ke lisan.",
  items: [
    {
      title: "Saat sedih atau gelisah",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي عَبْدُكَ ٱبْنُ عَبْدِكَ ٱبْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ ٱسْمٍ هُوَ لَكَ، سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوِ ٱسْتَأْثَرْتَ بِهِ فِي عِلْمِ ٱلْغَيْبِ عِنْدَكَ، أَنْ تَجْعَلَ ٱلْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي",
      transliteration:
        "Allāhumma innī 'abduka, ibnu 'abdika, ibnu amatika, nāṣiyatī biyadika, māḍin fiyya ḥukmuka, 'adlun fiyya qaḍā'uka… an taj'alal-Qur'āna rabī'a qalbī, wa nūra ṣadrī, wa jalā'a ḥuznī, wa dzahāba hammī",
      body: "Doa nabawi panjang. Janji Rasulullah ﷺ: barangsiapa membacanya, Allah hilangkan kesedihannya dan ganti dengan kegembiraan.",
      source: "HR. Ahmad 1/391, dishahihkan oleh Al-Albani dalam Silsilah Sahihah no. 199",
    },
    {
      title: "Saat takut atau cemas",
      arabic: "حَسْبِيَ ٱللَّٰهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
      transliteration: "Ḥasbiyallāhu lā ilāha illā huwa 'alaihi tawakkaltu wa huwa rabbul-'arsyil-'aẓīm",
      body: "Cukuplah Allah bagiku, tiada Tuhan selain Dia. Hanya kepada-Nya aku bertawakkal — Dia Tuhan Pemilik Arsy yang Agung. Baca 7x.",
      source: "HR. Abu Dawud no. 5081 (status: ada perselisihan derajat — hasan menurut sebagian ulama)",
    },
    {
      title: "Memohon dimudahkan urusan",
      arabic:
        "رَبِّ ٱشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَٱحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
      transliteration:
        "Rabbisyraḥ lī ṣadrī wa yassir lī amrī, waḥlul 'uqdatam min lisānī yafqahū qaulī",
      body: "Doa Nabi Musa ﷺ — sangat mustajab saat hendak menghadapi hal yang berat: ujian, presentasi, percakapan sulit.",
      source: "QS. Thaha: 25–28",
    },
    {
      title: "Memohon ketenangan hati",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ ٱلْهَمِّ وَٱلْحَزَنِ، وَٱلْعَجْزِ وَٱلْكَسَلِ، وَٱلْبُخْلِ وَٱلْجُبْنِ، وَضَلَعِ ٱلدَّيْنِ، وَغَلَبَةِ ٱلرِّجَالِ",
      transliteration: "Allāhumma innī a'ūdzu bika minal-hammi wal-ḥazani, wal-'ajzi wal-kasali, wal-bukhli wal-jubni, wa ḍala'iddaini, wa ghalabatir-rijāl",
      body: "Ya Allah, aku berlindung dari: kegundahan dan kesedihan, kelemahan dan kemalasan, kikir dan pengecut, lilitan utang, dan tekanan orang-orang.",
      source: "HR. Al-Bukhari no. 6369",
    },
    {
      title: "Saat sakit",
      arabic: "أَذْهِبِ ٱلْبَأْسَ رَبَّ ٱلنَّاسِ، ٱشْفِ أَنْتَ ٱلشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
      transliteration: "Adzhibil-ba'sa rabban-nāsi, isyfi anta-syāfī, lā syifā'a illā syifā'uka, syifā'an lā yughādiru saqamā",
      body: "Hilangkan penyakit ini, wahai Rabb manusia. Sembuhkanlah, Engkau yang Maha Menyembuhkan. Tiada kesembuhan kecuali kesembuhan-Mu — kesembuhan yang tidak meninggalkan penyakit. Letakkan tangan di tempat sakit.",
      source: "HR. Al-Bukhari no. 5743, Muslim no. 2191",
    },
    {
      title: "Menjenguk orang sakit",
      arabic: "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ ٱللَّٰهُ",
      transliteration: "Lā ba'sa, ṭahūrun insyā Allāh",
      body: "Tidak apa-apa, semoga sakit ini menjadi penghapus dosa, insya Allah. Doa pertama saat memasuki kamar.",
      source: "HR. Al-Bukhari no. 3616",
    },
    {
      title: "Memohon rezeki halal",
      arabic:
        "ٱللَّٰهُمَّ ٱكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
      transliteration:
        "Allāhummakfinī biḥalālika 'an ḥarāmika, wa aghninī bifaḍlika 'amman siwāk",
      body: "Ya Allah, cukupkanlah aku dengan yang halal dari yang haram, kayakanlah aku dengan karunia-Mu hingga tidak butuh kepada selain-Mu.",
      source: "HR. At-Tirmidzi no. 3563, Ahmad 1/153, hasan",
    },
    {
      title: "Sebelum belajar",
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      transliteration: "Rabbi zidnī 'ilmā",
      body: "Ya Rabbku, tambahkanlah ilmuku. Doa singkat, sangat dianjurkan sebelum membuka kitab atau hadir kelas.",
      source: "QS. Thaha: 114",
    },
    {
      title: "Doa istikharah",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ ٱلْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ ٱلْغُيُوبِ …",
      transliteration:
        "Allāhumma innī astakhīruka bi'ilmika, wa astaqdiruka biqudratika, wa as'aluka min faḍlikal-'aẓīm…",
      body: "Saat bingung memilih antara dua hal. Setelah sholat istikharah 2 rakaat, baca doa ini sambil menyebut hajat dalam hati.",
      source: "HR. Al-Bukhari no. 1162",
    },
    {
      title: "Doa untuk anak yang sholeh",
      arabic: "رَبِّ هَبْ لِي مِنَ ٱلصَّالِحِينَ",
      transliteration: "Rabbi hab lī minaṣ-ṣāliḥīn",
      body: "Doa Nabi Ibrahim ﷺ memohon keturunan yang shalih. Pendek dan sering diulang oleh para orang tua.",
      source: "QS. Aṣ-Ṣāffāt: 100",
    },
    {
      title: "Doa keselamatan dunia akhirat",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَسْأَلُكَ ٱلْعَفْوَ وَٱلْعَافِيَةَ فِي ٱلدُّنْيَا وَٱلْآخِرَةِ",
      transliteration:
        "Allāhumma innī as'alukal-'afwa wal-'āfiyata fid-dunyā wal-ākhirah",
      body: "Ya Allah, aku memohon ampunan dan keselamatan di dunia dan akhirat. Singkat tapi mencakup segalanya.",
      source: "HR. Abu Dawud no. 5074, Ibnu Majah no. 3871, sahih",
    },
    {
      title: "Doa lailatul qadr",
      arabic:
        "ٱللَّٰهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ ٱلْعَفْوَ فَٱعْفُ عَنِّي",
      transliteration:
        "Allāhumma innaka 'afuwwun karīmun tuḥibbul-'afwa fa'fu 'annī",
      body: "Ya Allah, sesungguhnya Engkau Maha Pemaaf, Maha Mulia, Engkau cinta memaafkan, maka maafkanlah aku. Dibaca di 10 malam terakhir Ramadhan.",
      source: "HR. At-Tirmidzi no. 3513, Ibnu Majah no. 3850, sahih",
    },
  ],
  closing: "Doa adalah ibadah. Walau belum dikabulkan, ia tetap dicatat sebagai amalmu.",
};

const dzikirPagiPetang: LearnTopic = {
  id: "dzikir-pagi-petang",
  slug: "dzikir-pagi-petang",
  category: "doa",
  level: "pemula",
  title: "Dzikir Pagi & Petang",
  description: "Benteng harian dari syaitan",
  emoji: "🌅",
  intro:
    "Dzikir pagi dan petang adalah perisai harian. Versi yang dipakai di sini diambil dari kitab 'Hisnul Muslim' karya Sa'id bin 'Ali bin Wahf al-Qahthani — semua hadits yang dikutip shahih atau hasan. Cukup 5–10 menit, tapi membawa perlindungan sepanjang hari.",
  items: [
    {
      title: "Waktu Pagi",
      body: "Setelah Subuh sampai matahari terbit. Jika terlewat, bisa hingga sebelum Dzuhur. Pegang setiap kalimat, jangan terburu-buru.",
    },
    {
      title: "Waktu Petang",
      body: "Setelah Ashar sampai matahari terbenam. Jika terlewat, sampai sebelum tidur. Yang penting konsisten, walau singkat.",
    },
    {
      title: "1. Ayat Kursi (1x)",
      arabic: "ٱللَّٰهُ لَا إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ …",
      body: "Surah Al-Baqarah ayat 255. Siapa membacanya pagi → dijaga sampai petang. Siapa membacanya petang → dijaga sampai pagi.",
      source: "QS. Al-Baqarah: 255; HR. Al-Hakim 1/562, dishahihkan Al-Albani",
    },
    {
      title: "2. Tiga Surah Qul (3x masing-masing)",
      arabic: "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ · قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ · قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ",
      body: "Al-Ikhlas, Al-Falaq, An-Nas. Cukup baginya dari segala sesuatu — perlindungan menyeluruh.",
      source: "HR. Abu Dawud no. 5082, At-Tirmidzi no. 3575, sahih",
    },
    {
      title: "3. Sayyidul Istighfar (1x)",
      arabic:
        "ٱللَّٰهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا ٱسْتَطَعْتُ …",
      transliteration:
        "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā 'abduk…",
      body: "Pemuka istighfar. Siapa membacanya dengan yakin di pagi hari, lalu wafat siang itu → masuk surga. Sama untuk petang.",
      source: "HR. Al-Bukhari no. 6306",
    },
    {
      title: "4. Subhānallāhi wa biḥamdihi (100x)",
      arabic: "سُبْحَانَ ٱللَّٰهِ وَبِحَمْدِهِ",
      body: "Maha Suci Allah dan segala puji bagi-Nya. Diampuni dosanya walau sebanyak buih di lautan.",
      source: "HR. Muslim no. 2692",
    },
    {
      title: "5. Lā ilāha illallāh waḥdahu lā syarīka lahu (10x)",
      arabic:
        "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      body: "10x: pahala memerdekakan 10 budak, ditulis 100 kebaikan, dihapus 100 keburukan, dilindungi dari setan sampai sore.",
      source: "HR. An-Nasa'i, Ahmad 4/60, dishahihkan Al-Albani",
    },
    {
      title: "6. Bismillāhi alladzī lā yadhurru (3x)",
      arabic:
        "بِسْمِ ٱللَّٰهِ ٱلَّذِي لَا يَضُرُّ مَعَ ٱسْمِهِ شَيْءٌ فِي ٱلْأَرْضِ وَلَا فِي ٱلسَّمَاءِ، وَهُوَ ٱلسَّمِيعُ ٱلْعَلِيمُ",
      transliteration:
        "Bismillāhilladhī lā yaḍurru ma'asmihi syai'un fil-arḍi wa lā fis-samā', wa huwas-samī'ul-'alīm",
      body: "Tidak akan tertimpa musibah mendadak yang membahayakannya. Perlindungan dari hal-hal tak terduga.",
      source: "HR. Abu Dawud no. 5088, At-Tirmidzi no. 3388, sahih",
    },
    {
      title: "7. Raḍītu billāhi (3x)",
      arabic:
        "رَضِيتُ بِٱللَّٰهِ رَبًّا، وَبِٱلْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا",
      transliteration:
        "Raḍītu billāhi rabban, wa bil-islāmi dīnā, wa bi Muḥammadin nabiyyā",
      body: "Aku ridha Allah sebagai Rabb, Islam sebagai agama, Muhammad ﷺ sebagai Nabi. Hak bagi pembacanya: Allah meridhai-nya pada hari kiamat.",
      source: "HR. Abu Dawud no. 5072, At-Tirmidzi no. 3389, hasan",
    },
    {
      title: "8. Ḥasbiyallāhu lā ilāha illā huwa (7x)",
      arabic:
        "حَسْبِيَ ٱللَّٰهُ لَا إِلَٰهَ إِلَّا هُوَ، عَلَيْهِ تَوَكَّلْتُ، وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ",
      transliteration:
        "Ḥasbiyallāhu lā ilāha illā huwa, 'alaihi tawakkaltu, wa huwa rabbul-'arsyil-'aẓīm",
      body: "Cukuplah Allah bagiku. Allah cukupkan urusan dunia & akhirat bagi yang membaca 7x.",
      source: "HR. Abu Dawud no. 5081 (status diperselisihkan: hasan menurut sebagian, dho'if menurut sebagian)",
    },
    {
      title: "9. Sholawat (10x)",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ",
      transliteration:
        "Allāhumma ṣalli wa sallim 'alā nabiyyinā Muḥammad",
      body: "Siapa bersholawat 10x pagi dan 10x petang → mendapat syafa'at Rasulullah ﷺ di hari kiamat.",
      source: "HR. Ath-Thabrani 16/297, hasan menurut Al-Albani",
    },
    {
      title: "10. Khusus Pagi: Aṣbaḥnā wa aṣbaḥal-mulku lillāh",
      arabic:
        "أَصْبَحْنَا وَأَصْبَحَ ٱلْمُلْكُ لِلَّٰهِ، وَٱلْحَمْدُ لِلَّٰهِ …",
      body: "Kami berada di pagi, dan kerajaan ini milik Allah. Segala puji bagi Allah… Versi petang: ganti 'aṣbaḥnā' jadi 'amsainā'.",
      source: "HR. Muslim no. 2723",
    },
    {
      title: "Cara memulai",
      body: "Mulai dari 3–5 dzikir dulu. Konsistensi lebih utama dari kuantitas. Kalau lupa pagi, kerjakan sebelum Dzuhur. Kalau lupa petang, sebelum tidur.",
    },
  ],
  closing: "Pagi & petangmu yang dijaga = harimu yang ringan. Penghuni dzikir adalah penghuni ketenangan.",
};

const sholawat: LearnTopic = {
  id: "sholawat",
  slug: "sholawat",
  category: "doa",
  level: "pemula",
  title: "Sholawat untuk Nabi ﷺ",
  description: "Cinta yang berbalas — Allah dan malaikat menyertai",
  emoji: "🤍",
  intro:
    "Allah dan para malaikat-Nya bersholawat untuk Nabi Muhammad ﷺ — dan Allah perintahkan kita melakukan hal yang sama (QS. Al-Ahzab: 56). Sholawat adalah doa, cinta, dan amal sekaligus. Janji Nabi: 'Siapa bersholawat satu kali, Allah bersholawat untuknya sepuluh kali.' (HR. Muslim no. 384)",
  items: [
    {
      title: "Apa itu sholawat?",
      body: "Sholawat dari Allah = rahmat dan pujian. Sholawat dari malaikat = doa ampunan. Sholawat dari kita = doa untuk Nabi ﷺ, sekaligus untuk diri sendiri.",
    },
    {
      title: "Keutamaan bersholawat",
      body: "Setiap sholawat: Allah balas 10 kali, dihapus 10 keburukan, ditinggikan 10 derajat. Yang paling banyak bersholawat adalah yang paling dekat dengan Nabi di hari kiamat.",
      source: "HR. Muslim no. 384, At-Tirmidzi no. 484",
    },
    {
      title: "Sholawat singkat",
      arabic: "ٱللَّٰهُمَّ صَلِّ وَسَلِّمْ عَلَىٰ نَبِيِّنَا مُحَمَّدٍ",
      transliteration: "Allāhumma ṣalli wa sallim 'alā nabiyyinā Muḥammad",
      body: "Ya Allah, limpahkan rahmat dan keselamatan untuk Nabi kami Muhammad ﷺ. Pendek, mudah dihafal, bisa diulang sepanjang hari.",
      source: "Bentuk ringkas yang umum dipakai; mengikuti perintah QS. Al-Ahzab: 56",
    },
    {
      title: "Sholawat Ibrahimiyah (paling utama)",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
      transliteration:
        "Allāhumma ṣalli 'alā Muḥammad, wa 'alā āli Muḥammad, kamā ṣallaita 'alā Ibrāhīm wa 'alā āli Ibrāhīm, innaka ḥamīdun majīd",
      body: "Sholawat yang Nabi ﷺ ajarkan sendiri saat ditanya bagaimana cara bersholawat. Inilah sholawat yang dibaca dalam tasyahud.",
      source: "HR. Al-Bukhari no. 3370, Muslim no. 406",
    },
    {
      title: "Lanjutan Sholawat Ibrahimiyah",
      arabic:
        "ٱللَّٰهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
      transliteration:
        "Allāhumma bārik 'alā Muḥammad… kamā bārakta 'alā Ibrāhīm…",
      body: "Bagian kedua dari Sholawat Ibrahimiyah — memohon barakah, bukan hanya rahmat.",
      source: "HR. Al-Bukhari no. 3370, Muslim no. 406",
    },
    {
      title: "Sholawat Munjiyat — perlu hati-hati",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ ٱلْأَهْوَالِ وَٱلْآفَاتِ …",
      transliteration:
        "Allāhumma ṣalli 'alā sayyidinā Muḥammadin ṣalātan tunjīnā bihā…",
      body: "Sholawat panjang yang biasa dibaca saat menghadapi kesulitan. PENTING: lafaz ini adalah susunan sebagian ulama belakangan, BUKAN dari hadits Nabi langsung. Lebih utama bersholawat dengan lafaz yang ada riwayat shahih-nya (Sholawat Ibrahimiyah).",
      source: "Tidak ada di kitab hadits standar. Susunan ulama, status diperselisihkan",
    },
    {
      title: "Sholawat Thibbil Qulub — perlu hati-hati",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ عَلَىٰ سَيِّدِنَا مُحَمَّدٍ طِبِّ ٱلْقُلُوبِ وَدَوَائِهَا …",
      transliteration:
        "Allāhumma ṣalli 'alā sayyidinā Muḥammad, ṭibbil-qulūbi wa dawā'ihā…",
      body: "Sholawat yang menyebut Nabi ﷺ sebagai obat hati. PENTING: lafaz ini juga bukan dari hadits langsung, melainkan susunan sebagian ulama. Diperselisihkan oleh ulama hadits kontemporer. Untuk doa kesembuhan yang ada hadits-nya, gunakan 'Adzhibil-ba'sa rabban-nāsi…' (HR. Bukhari).",
      source: "Tidak ada di kitab hadits standar. Susunan ulama, status diperselisihkan",
    },
    {
      title: "Waktu mustajab — Hari Jumat",
      body: "Perbanyak sholawat di hari Jumat dan malam Jumat. Sholawat itu disampaikan kepada Nabi ﷺ secara khusus di hari itu.",
      source: "HR. Abu Dawud no. 1047, An-Nasa'i no. 1374, sahih",
    },
    {
      title: "Waktu mustajab — saat mendengar adzan",
      body: "Setelah muadzin selesai adzan, dianjurkan bersholawat sebelum membaca doa adzan. 'Siapa bersholawat saat itu, dia berhak mendapat syafa'atku.'",
      source: "HR. Muslim no. 384",
    },
    {
      title: "Saat namanya disebut",
      body: "Saat mendengar atau menyebut nama Nabi ﷺ — dianjurkan bersholawat. Yang tidak melakukannya disebut bakhil (pelit).",
      source: "HR. At-Tirmidzi no. 3546, hasan",
    },
    {
      title: "Sebelum & sesudah doa",
      body: "Doa lebih dekat dikabulkan bila diawali dengan pujian kepada Allah dan sholawat untuk Nabi ﷺ.",
      source: "HR. At-Tirmidzi no. 3477, hasan",
    },
    {
      title: "Adab bersholawat",
      body: "Hadirkan rasa cinta. Sebut 'sayyidinā' (junjungan kami) atau langsung Muhammad — keduanya boleh menurut jumhur ulama. Sertakan keluarga dan sahabat ('wa 'alā ālihi wa ṣaḥbihi').",
    },
    {
      title: "Cara membiasakan",
      body: "Pilih 1 sholawat singkat → ucap 100x setiap pagi & petang, atau saat menunggu (di kendaraan, antrian). Lisan basah dengan sholawat = hati yang lembut.",
    },
  ],
  closing: "Cinta pada Nabi ﷺ adalah cabang cinta pada Allah. Sholawat adalah cara mencintai yang sederhana — dan Allah mencintai yang mencintai kekasih-Nya.",
};

export const doaTopics: LearnTopic[] = [
  doaHarian,
  dzikirPagiPetang,
  sholawat,
  doaPilihan,
];
