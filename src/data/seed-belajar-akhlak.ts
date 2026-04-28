import type { LearnTopic } from "@/types";

const akhlakHarian: LearnTopic = {
  id: "akhlak-harian",
  slug: "akhlak-harian",
  category: "akhlak",
  level: "pemula",
  title: "Akhlak Harian",
  description: "Adab kecil yang menumbuhkan jiwa",
  emoji: "🌷",
  intro:
    "Rasulullah ﷺ bersabda, 'Aku diutus untuk menyempurnakan akhlak.' Akhlak adalah cermin hati. Pilih satu untuk dijaga hari ini.",
  items: [
    {
      title: "Jujur (ash-shidq)",
      body: "Mulai dari hal kecil — janji ke diri sendiri pun ditepati. Kejujuran membawa kepada surga.",
    },
    {
      title: "Sabar (ash-shabr)",
      body: "Bukan diam saat tertindas, tapi tahan reaksi yang menyakiti. Sabar tiga jenis: dalam taat, dalam menjauhi maksiat, dan saat ditimpa musibah.",
    },
    {
      title: "Pemaaf (al-'afwu)",
      body: "Memaafkan tidak melemahkan harga diri — justru meninggikannya. Tidak harus berhubungan kembali, cukup melepaskan.",
    },
    {
      title: "Berbakti pada orang tua (birrul walidain)",
      body: "Bicara dengan suara lembut, jangan berkata 'ah'. Doakan mereka di setiap sholat — surga ada di telapak kaki ibu.",
    },
    {
      title: "Tolong-menolong (ta'awun)",
      body: "Dalam kebaikan dan ketakwaan, bukan dalam dosa. Sekecil apa pun bantuanmu, dicatat oleh Allah.",
    },
    {
      title: "Menjaga lisan",
      body: "'Barangsiapa beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.' (HR. Bukhari–Muslim)",
    },
    {
      title: "Malu (al-haya')",
      body: "Malu adalah sebagian dari iman. Bukan minder, tapi peka pada apa yang Allah lihat.",
    },
    {
      title: "Lemah lembut (ar-rifq)",
      body: "Pada keluarga, pada orang asing, pada hewan. Kelembutan tidak ada pada sesuatu kecuali ia menghiasinya.",
    },
  ],
  closing: "Pilih satu hari ini. Besok satu lagi. Pelan-pelan jadi kebiasaan.",
};

const adabSehariHari: LearnTopic = {
  id: "adab-sehari-hari",
  slug: "adab-sehari-hari",
  category: "akhlak",
  level: "menengah",
  title: "Adab Sehari-hari",
  description: "Sopan santun yang Rasulullah ﷺ ajarkan",
  emoji: "✋",
  intro:
    "Adab adalah akhlak dalam tindakan kecil. Para salaf berkata, 'Pelajari adab dulu, baru ilmu.' Berikut adab yang menemani harimu.",
  items: [
    {
      title: "Adab makan",
      body: "Cuci tangan, baca bismillah, makan dengan tangan kanan, dari yang dekat, jangan mencela makanan. Tutup dengan alhamdulillah.",
    },
    {
      title: "Adab minum",
      body: "Duduk (tidak berdiri), tiga tegukan dengan jeda, jangan meniup ke dalam gelas, baca bismillah dan alhamdulillah.",
    },
    {
      title: "Adab tidur",
      body: "Wudhu sebelum tidur, miring ke kanan, tangan di bawah pipi, baca ayat kursi dan tiga qul. Doa sebelum tidur.",
    },
    {
      title: "Adab masuk-keluar rumah",
      body: "Masuk dengan kaki kanan dan baca doa. Keluar dengan kaki kiri dan baca doa. Ucapkan salam — bahkan jika rumah kosong (untuk diri sendiri).",
    },
    {
      title: "Adab masuk WC",
      body: "Kaki kiri masuk dulu, baca doa perlindungan dari setan. Kaki kanan keluar dulu, baca ghufranaka (memohon ampunan).",
    },
    {
      title: "Adab bertamu",
      body: "Salam dulu sebelum mengetuk. Jika tidak dijawab tiga kali, pulang. Jangan duduk di tempat tuan rumah. Jangan mengintip ke dalam.",
    },
    {
      title: "Adab dengan tetangga",
      body: "Jangan menyakiti, sekecil apa pun. Bagi makanan saat memasak yang harum. Jenguk saat sakit. Tahu nama dan kondisi mereka.",
    },
    {
      title: "Adab di jalan",
      body: "Tundukkan pandangan, jangan halangi jalan, jawab salam, perintahkan kebaikan jika ada kesempatan, singkirkan duri (sedekah jariyah).",
    },
    {
      title: "Adab berbicara",
      body: "Senyum, suara tidak terlalu keras, tatap mata pembicara, jangan memotong, hindari ghibah dan namimah (mengadu domba).",
    },
    {
      title: "Adab belajar & pada guru",
      body: "Hadir dengan niat ikhlas, hormati guru walau ilmunya sedikit, jangan debat untuk mengalahkan, doakan guru-gurumu setelah selesai belajar.",
    },
    {
      title: "Adab dengan suami/istri",
      body: "Bicara dengan lembut, jangan menyebut aib di depan orang lain, dahulukan kebutuhan pasangan, terima kekurangan dengan ridha.",
    },
    {
      title: "Adab dengan anak",
      body: "Tepati janji walau bercanda, panggil dengan nama yang baik, jangan teriaki di depan orang, doakan kebaikan untuknya — bukan keburukan.",
    },
  ],
  closing: "Adab adalah tujuh per sepuluh ilmu. Mulai dari yang paling sering kamu lakukan.",
};

const penyakitHati: LearnTopic = {
  id: "penyakit-hati",
  slug: "penyakit-hati",
  category: "akhlak",
  level: "lanjutan",
  title: "Penyakit Hati",
  description: "Mengenal & menyembuhkan luka jiwa",
  emoji: "💔",
  intro:
    "Hati bisa sakit, seperti tubuh. Tapi penyakit hati lebih berbahaya — ia menggerus iman tanpa terasa. Kenali, agar bisa diobati. Imam al-Ghazali mengulas ini dalam Ihya' Ulumuddin.",
  items: [
    {
      title: "Riya' — Beribadah Untuk Dilihat",
      body: "Beramal agar dipuji manusia. Disebut 'syirik kecil' yang lebih halus dari semut hitam. Tanda: mood ibadah berubah saat sendiri vs disaksikan. Obat: niat ulang setiap mulai amal, ingat hanya Allah yang menerima.",
    },
    {
      title: "Sum'ah — Cerita Amal Untuk Dipuji",
      body: "Sepupu riya'. Beramal sembunyi-sembunyi, tapi diceritakan. Obat: ingat hadits 'Yang Allah cintai adalah hamba yang taqi (bertakwa), naqi (bersih dari riya'), khafi (tersembunyi).'",
    },
    {
      title: "Hasad (Iri) — Tidak Suka Nikmat Orang",
      body: "Berharap nikmat orang lain hilang, atau pindah padamu. Hasad memakan kebaikan seperti api memakan kayu bakar. Obat: doakan kebaikan untuk yang kau iri-i, ucapkan 'māsyā'allāh tabārakallāh.'",
    },
    {
      title: "Ghibah — Membicarakan Aib",
      body: "Menyebutkan kekurangan saudaramu di belakang, walau benar. Allah misalkan: seperti memakan daging saudaranya yang sudah mati. Obat: bayangkan ia mendengar; jika tidak senang, hentikan.",
    },
    {
      title: "Namimah — Mengadu Domba",
      body: "Membawa cerita dari satu pihak ke pihak lain untuk merusak hubungan. Tidak masuk surga seorang qattat (tukang adu). Obat: jadi penjernih, bukan pemicu.",
    },
    {
      title: "Kibr (Sombong)",
      body: "Merasa lebih baik dari orang lain — karena harta, ilmu, keturunan, kecantikan. Tidak masuk surga yang ada kesombongan sebesar zarrah di hatinya. Obat: ingat bahwa kau dari mani, akan kembali jadi tanah.",
    },
    {
      title: "'Ujub (Kagum Diri)",
      body: "Mirip sombong, tapi internal — tanpa membandingkan dengan orang lain. Bangga pada amal, ilmu, atau kebaikanmu. Obat: ingat bahwa segala karunia dari Allah, dan amalmu mungkin tidak diterima.",
    },
    {
      title: "Hubbud Dunya (Cinta Dunia Berlebihan)",
      body: "Kepala penuh oleh dunia hingga akhirat terlupa. Allah berfirman: 'Apa yang ada padamu akan habis, apa yang ada di sisi Allah kekal.' Obat: ziarah kubur, ingat kematian.",
    },
    {
      title: "Tama' (Rakus)",
      body: "Tidak pernah cukup. Selalu kurang. Obat: zuhud — bukan tidak punya, tapi tidak terikat hati. Cukup yang halal, syukuri yang ada.",
    },
    {
      title: "Bukhl (Pelit)",
      body: "Berat memberi. Allah marah pada yang menahan rezeki yang dititipkan-Nya. Obat: paksa diri sedekah walau kecil — sampai jadi kebiasaan, lalu jadi kenikmatan.",
    },
    {
      title: "Ghadhab (Pemarah)",
      body: "Marah berlebihan tanpa kendali. Saat marah, ucapkan 'a'ūdzu billāhi minas-syaiṭānir-rajīm.' Wudhu. Diam. Pindah posisi (berdiri → duduk → berbaring). Tidur jika perlu.",
    },
    {
      title: "Was-was — Bisikan Setan",
      body: "Bisikan ragu di hati: apakah wudhuku batal, niatku salah, dst. Obat: abaikan, jangan dilayani. 'A'ūdzu billāh' lalu lanjutkan amal. Setan menyerah pada yang konsisten.",
    },
    {
      title: "Cara Menyembuhkan Hati",
      body: "1) Banyak istighfar. 2) Baca Al-Qur'an dengan tadabbur. 3) Bergaul dengan orang shalih. 4) Mengingat kematian. 5) Lapar (puasa sunnah). 6) Sholat malam. 7) Berdoa minta hati yang bersih.",
    },
    {
      title: "Doa untuk hati",
      arabic:
        "ٱللَّٰهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
      transliteration:
        "Allāhumma āti nafsī taqwāhā, wa zakkihā anta khairu man zakkāhā",
      body: "Ya Allah, berikan jiwaku ketakwaannya, sucikanlah, Engkau sebaik-baik yang menyucikan, Engkau Pelindung dan Penolongnya.",
    },
  ],
  closing: "Hati bersih → ibadah ringan → hidup nyaman. Mulai dari satu penyakit yang paling kau rasakan, obati pelan-pelan.",
};

const niatIkhlas: LearnTopic = {
  id: "niat-ikhlas",
  slug: "niat-ikhlas",
  category: "akhlak",
  level: "pemula",
  title: "Niat & Ikhlas",
  description: "Pondasi semua amal yang diterima",
  emoji: "🪷",
  intro:
    "Rasulullah ﷺ bersabda: 'Setiap amal tergantung niatnya.' Ikhlas adalah memurnikan niat hanya untuk Allah. Tanpa ikhlas, amal hanya capek tanpa pahala.",
  items: [
    {
      title: "Apa itu niat?",
      body: "Tujuan dalam hati saat memulai amal. Bukan pengucapan lisan — tapi kesadaran hati. 'Aku melakukan ini karena Allah.' Itu niat.",
    },
    {
      title: "Apa itu ikhlas?",
      body: "Memurnikan niat hanya karena Allah, tanpa keinginan dipuji manusia, tanpa harapan duniawi. 'Lillāhi ta'ālā' — karena Allah semata.",
    },
    {
      title: "Tiga tingkat niat",
      body: "1) Karena dunia (gaji, pujian) — tidak ada pahala akhirat. 2) Campuran (Allah + dunia) — terhitung lemah. 3) Murni karena Allah — penuh pahala. Hadits: 'Allah tidak menerima amal kecuali yang ikhlas dan sesuai sunnah.'",
    },
    {
      title: "Riya' — Lawan Ikhlas",
      body: "Beramal agar dilihat dan dipuji manusia. 'Syirik kecil' yang lebih halus dari semut hitam di malam gelap di atas batu hitam. Hampir semua orang terkena, sebagian besar tidak menyadari.",
    },
    {
      title: "Tanda riya' dalam diri",
      body: "Mood ibadah berubah saat sendiri vs disaksikan. Senang amalmu disebut, kesal jika diabaikan. Hadits: 'Senang dipuji + benci dicela = tanda hatimu belum lurus.'",
    },
    {
      title: "Cara meluruskan niat",
      body: "1) Sebelum amal: tanyakan 'Karena siapa aku ini?' 2) Saat amal: ingat Allah, jangan berhitung dengan manusia. 3) Setelah amal: jangan ungkit, biarkan Allah yang membalas.",
    },
    {
      title: "Saat niat campur — apa yang harus dilakukan?",
      body: "Jangan tinggalkan amal — itu langkah setan. Tetap lakukan, sambil terus meluruskan niat. Niat bisa diperbaiki di tengah amal. Sufyan ats-Tsauri: 'Tidak ada yang lebih berat aku perbaiki daripada niatku.'",
    },
    {
      title: "Sembunyikan amal",
      body: "Amal yang tersembunyi lebih bersih dari riya'. Sedekah yang tidak diketahui kanan ketika kiri yang memberi. Sholat malam saat orang tidur. 'Tujuh golongan yang Allah lindungi di hari yang tak ada naungan' — termasuk yang sedekah dengan tangan kiri tidak tahu apa yang tangan kanan berikan.",
    },
    {
      title: "Saat amal terungkap — apa yang dilakukan?",
      body: "Jika amalmu terlihat tanpa disengaja, biarkan. Selama niatmu lurus, itu tetap diterima. Yang dibahaya: jika kamu yang memamerkan.",
    },
    {
      title: "Doa minta ikhlas",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أُشْرِكَ بِكَ وَأَنَا أَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا لَا أَعْلَمُ",
      transliteration:
        "Allāhumma innī a'ūdzu bika an usyrika bika wa anā a'lam, wa astaghfiruka limā lā a'lam",
      body: "Ya Allah, aku berlindung dari syirik yang aku ketahui, dan aku memohon ampun atas yang tidak aku ketahui. Doa untuk membersihkan riya' yang tidak disadari.",
    },
    {
      title: "Surah Al-Ikhlas — manifesto ikhlas",
      arabic:
        "قُلْ هُوَ ٱللَّٰهُ أَحَدٌ، ٱللَّٰهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
      body: "Surah ke-112. Disebut 'Al-Ikhlas' karena memurnikan tauhid. Setara sepertiga Al-Qur'an saat dibaca. Bacalah saat memulai amal, agar niat tetap lurus.",
    },
    {
      title: "Saat amal tidak diterima",
      body: "Allah tidak melihat tubuh dan rupa kalian, tapi melihat hati dan niat kalian. (HR. Muslim). Amal sederhana dengan hati murni > amal banyak dengan hati kotor.",
    },
  ],
  closing: "Niat adalah ruh amal. Tubuh tanpa ruh adalah mayat. Amal tanpa ikhlas adalah lelah tanpa pahala. Mulai hari ini, periksa niatmu di setiap amal.",
};

const tobatNasuha: LearnTopic = {
  id: "tobat-nasuha",
  slug: "tobat-nasuha",
  category: "akhlak",
  level: "menengah",
  title: "Tobat Nasuha",
  description: "Kembali pada Allah dengan tulus",
  emoji: "🌧️",
  intro:
    "Tobat bukan hanya 'mengaku salah'. Tobat nasuha (yang murni) adalah berpaling dari dosa dengan sepenuh hati. Allah lebih senang dengan tobat hamba-Nya, daripada seseorang yang menemukan untanya yang hilang di gurun.",
  items: [
    {
      title: "Allah selalu menerima tobat",
      body: "'Wahai hamba-Ku yang melampaui batas, jangan berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni semua dosa.' (Az-Zumar: 53). Tidak ada dosa yang terlalu besar — selama nyawa masih ada, pintu tobat terbuka.",
    },
    {
      title: "Syarat 1: Berhenti dari dosa",
      body: "Tinggalkan dosa segera. Bukan 'mulai besok' atau 'setelah bulan ini'. Sekarang. Tobat sambil masih melakukan = pengakuan kosong.",
    },
    {
      title: "Syarat 2: Menyesal",
      body: "Penyesalan murni dari hati — bukan karena ketahuan, bukan karena takut akibat sosial. Karena Allah. Air mata tidak wajib, tapi hati yang terluka adalah tandanya.",
    },
    {
      title: "Syarat 3: Berazam tidak mengulangi",
      body: "Niat keras untuk tidak kembali pada dosa itu. Walau kemudian terjatuh lagi karena lemah, niat saat tobat harus murni 'tidak akan pernah lagi'.",
    },
    {
      title: "Syarat 4: Jika menyangkut hak orang",
      body: "Kembalikan hak — barang dicuri dikembalikan, fitnah diklarifikasi, hutang dibayar, minta maaf jika menyakiti. Tobat ke Allah saja tidak cukup jika hak makhluk dilanggar.",
    },
    {
      title: "Setan suka membisikkan keputusasaan",
      body: "'Kamu sudah terlalu jauh.' 'Allah tidak akan mengampuni dosamu.' 'Tobat tidak ada gunanya.' Itu bisikan setan. Allahu Akbar dari setan, dan ampunan Allah lebih luas dari dosamu.",
    },
    {
      title: "Sayyidul Istighfar",
      arabic:
        "ٱللَّٰهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا ٱسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَٱغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ ٱلذُّنُوبَ إِلَّا أَنْتَ",
      transliteration:
        "Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā 'abduk, wa anā 'alā 'ahdika wa wa'dika mastaṭa't…",
      body: "Pemuka istighfar. Siapa membaca dengan yakin di pagi hari, lalu meninggal siang itu — ia masuk surga. Sama untuk petang.",
    },
    {
      title: "Sholat Tobat",
      body: "Dua rakaat sholat sunnah, lalu beristighfar dengan tulus. Rasulullah ﷺ bersabda: 'Tidak seorang pun yang berdosa, lalu wudhu, sholat dua rakaat, dan beristighfar — kecuali Allah ampuni.' (HR. Abu Dawud).",
    },
    {
      title: "Tobat berlapis — terus-menerus",
      body: "Rasulullah ﷺ — yang ma'shum — beristighfar 100x sehari. Apalagi kita. Tobat bukan event sekali — gaya hidup. Setiap nafas adalah kesempatan istighfar.",
    },
    {
      title: "Saat terjatuh lagi",
      body: "Bangun lagi. Setan ingin kau menyerah, bukan melemparmu jatuh — jatuh sudah pasti. Bangun-jatuh-bangun lebih baik dari berhenti mencoba. Imam Malik: 'Tobat yang terbaik adalah yang tidak diulang dosanya. Tapi jika diulang — tobat lagi, tanpa berputus asa.'",
    },
    {
      title: "Tanda tobat diterima",
      body: "1) Setelah tobat, kau lebih takut Allah. 2) Tidak meremehkan dosa kecil lagi. 3) Tidak bangga dengan amal sholehmu. 4) Sahabatmu menjadi lebih baik. 5) Hatimu lebih lembut.",
    },
    {
      title: "Surga dijanjikan untuk yang bertaubat",
      body: "'Sungguh aku Maha Pengampun bagi yang bertaubat, beriman, beramal sholeh, lalu tetap dalam petunjuk.' (Thaha: 82). Empat syarat: tobat, iman, amal, istiqomah.",
    },
  ],
  closing: "Hari ini adalah hari terbaik untuk kembali. Bukan kemarin, bukan besok. Allah menunggumu dengan tangan terbuka.",
};

const bahayaMenunda: LearnTopic = {
  id: "bahaya-menunda",
  slug: "bahaya-menunda",
  category: "akhlak",
  level: "menengah",
  title: "Bahaya Menunda Taat",
  description: "Penyakit 'nanti aja' yang membunuh ibadah",
  emoji: "⏳",
  intro:
    "Ulama menyebutnya 'taswif' — kebiasaan menunda. 'Aku akan tobat... nanti.' 'Aku akan rajin sholat... mulai bulan depan.' 'Aku akan baca Qur'an... habis sibuk ini.' Penyakit ini lebih halus dari maksiat besar — karena tidak terasa.",
  items: [
    {
      title: "Apa itu taswif?",
      body: "Menunda amal sholeh dengan janji 'nanti', 'besok', 'setelah ini selesai'. Setan mencintai taswif — karena dia tahu, jika ditunda terus, banyak yang tidak pernah memulai.",
    },
    {
      title: "Mengapa berbahaya?",
      body: "Karena kita tidak tahu kapan kita mati. Hari ini sehat, besok bisa di kubur. Yang ditunda mungkin tidak pernah terjadi. Allah berfirman: 'Mereka tidak tahu di bumi mana mereka akan mati.' (Luqman: 34).",
    },
    {
      title: "Hadits tentang menunda",
      body: "'Manfaatkan lima sebelum lima: mudamu sebelum tuamu, sehatmu sebelum sakitmu, kayamu sebelum miskinmu, longgar sebelum sibukmu, hidupmu sebelum matimu.' (HR. Hakim). Setiap nikmat sekarang adalah modal yang bisa hilang.",
    },
    {
      title: "Pelajaran dari Iblis",
      body: "Iblis tidak menyuruh manusia kafir secara langsung — terlalu jelas. Dia menyuruh menunda. 'Tobat saja, tapi nanti.' 'Sholat saja, tapi sebentar lagi.' Lalu nyawa diambil, dan terlambat.",
    },
    {
      title: "Setan menyukai 4 kalimat",
      body: "'Aku akan...' (saufa). 'Nanti...' (ba'da). 'Sebentar lagi...' (qarīban). 'Setelah aku punya waktu...' Setiap kali kau mengucapkan ini untuk amal sholeh, setan tersenyum.",
    },
    {
      title: "Kelelahan adalah jebakan",
      body: "'Aku terlalu lelah hari ini, sholat malam besok saja.' Esok hari datang dengan kelelahan baru. Lalu setiap esok, hingga setahun, sepuluh tahun lewat. Tidak satu malam pun bangun.",
    },
    {
      title: "Mulai dari yang kecil — sekarang",
      body: "Tidak perlu memulai dengan amal besar. 1 ayat Qur'an hari ini. 2 rakaat sholat sunnah. 1 kali istighfar. Apa pun, asal SEKARANG. Konsistensi mengalahkan intensitas.",
    },
    {
      title: "Strategi: Aturan 2 menit",
      body: "Jika amal bisa dilakukan dalam 2 menit, lakukan SEKARANG, tanpa berpikir. Sholat sunnah qabliyah subuh — 2 menit. Istighfar 100x — 2 menit. Sholawat 33x — kurang dari 2 menit.",
    },
    {
      title: "Strategi: Niat saat lemah",
      body: "Saat tidak bisa amal, niatkan. Allah membalas niat. 'Andai aku sehat, aku akan sholat tahajud' — Allah catat sebagai amal walau tidak terlaksana karena uzur yang sah.",
    },
    {
      title: "Belajar dari Imam Ahmad",
      body: "Saat ditanya 'kapan kita bisa istirahat?', beliau menjawab: 'Saat kaki kita pertama kali masuk surga.' Istirahat sejati bukan di dunia. Dunia adalah ladang amal.",
    },
    {
      title: "Dzikir 'lā ḥaula wa lā quwwata illā billāh'",
      arabic: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِٱللَّٰهِ",
      transliteration: "Lā ḥaula wa lā quwwata illā billāh",
      body: "Tidak ada daya dan kekuatan kecuali dari Allah. Saat kau merasa lemah dan ingin menunda, ucapkan ini — pintu langit yang menggerakkan hati untuk bergerak.",
    },
    {
      title: "Doa saat malas datang",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ ٱلْعَجْزِ وَٱلْكَسَلِ",
      transliteration: "Allāhumma innī a'ūdzu bika minal-'ajzi wal-kasal",
      body: "Ya Allah, aku berlindung dari kelemahan dan kemalasan. Doa nabawi yang sangat sering Rasulullah ﷺ ucapkan.",
    },
  ],
  closing: "Waktumu yang paling berharga adalah sekarang. Yang lalu sudah pergi, yang akan datang belum pasti. Mulai amal kecil — sekarang.",
};

const menghidupkanHati: LearnTopic = {
  id: "menghidupkan-hati",
  slug: "menghidupkan-hati",
  category: "akhlak",
  level: "lanjutan",
  title: "Menghidupkan Hati yang Mati",
  description: "Saat ibadah terasa hambar — apa obatnya",
  emoji: "💗",
  intro:
    "Pernah merasa sholat hanya gerakan? Qur'an tidak menggerakkan hati? Doa terasa kosong? Itu futur — gejala hati yang mulai tertidur. Ada obatnya, dan kau tidak sendirian.",
  items: [
    {
      title: "Apa itu futur?",
      body: "Penurunan semangat ibadah setelah masa rajin. Wajar terjadi pada setiap mukmin. Rasulullah ﷺ menyebut: 'Setiap amal ada masa giatnya, dan setiap masa giat ada masa lemahnya.' Yang penting: jangan biarkan futur menjadi total terhenti.",
    },
    {
      title: "Tanda hati mulai mati",
      body: "Tidak menangis saat baca Qur'an, tidak bergetar saat dengar adzan, tidak takut saat berdosa, tidak senang saat beramal sholeh, lupa kematian, sibuk dengan dunia, tidak ada keinginan ke masjid.",
    },
    {
      title: "Sebab matinya hati",
      body: "1) Banyak dosa kecil yang dianggap sepele. 2) Banyak makan & minum. 3) Banyak bicara. 4) Banyak tidur. 5) Banyak berinteraksi dengan dunia. 6) Banyak melihat dengan pandangan haram. 7) Mengabaikan dzikir.",
    },
    {
      title: "Obat 1: Banyak baca Qur'an",
      body: "Imam Ahmad: 'Setiap kali aku menemui kesulitan dalam ilmu, aku istighfar 1000 kali, dan baca Qur'an.' Qur'an adalah obat hati. Walau tidak paham artinya — bacalah, biarkan ayat menyentuh.",
    },
    {
      title: "Obat 2: Mengingat kematian",
      body: "Ziarah kubur. Tonton video pemakaman. Bayangkan dirimu di liang lahat. Ini bukan menakut-nakuti — ini menyadarkan. Rasulullah ﷺ memerintahkan ziarah kubur 'karena ia mengingatkan akhirat.'",
    },
    {
      title: "Obat 3: Bergaul dengan orang shalih",
      body: "Lingkungan menentukan kondisi hati. 'Seseorang itu sesuai dengan agama temannya.' Cari satu sahabat yang membuatmu ingat Allah saat bersama dengannya. Hindari sebaliknya.",
    },
    {
      title: "Obat 4: Hadir di majelis ilmu",
      body: "Mendengar kajian, walau via online. Lebih baik 5 menit ilmu daripada 5 jam scrolling. Malaikat hadir di majelis ilmu, mengelilingi mereka, mendoakan mereka.",
    },
    {
      title: "Obat 5: Sholat malam, walau 2 rakaat",
      body: "Bangun di sepertiga malam terakhir. Sholat 2 rakaat saja. Doa di waktu itu mustajab — termasuk doa minta hati yang hidup. 'Ya Allah, hidupkan hatiku.'",
    },
    {
      title: "Obat 6: Sedekah, walau sedikit",
      body: "Sedekah membersihkan hati. Sedekah pagi atau saat punya keinginan tertentu. Tangan bawah lebih baik dari yang tidak. Mulai dari recehan di kotak amal.",
    },
    {
      title: "Obat 7: Tinggalkan satu dosa kecil",
      body: "Pilih satu — pandangan haram, ghibah, hutang yang ditunda, kebohongan kecil. Tinggalkan satu yang paling sering kau lakukan. Hati menjadi sensitif lagi setelahnya.",
    },
    {
      title: "Obat 8: Diam dan istirahat dari medsos",
      body: "Hari ini, hati banyak dirusak oleh konsumsi konten tanpa filter. Coba 1 hari tanpa media sosial. Banyak orang menemukan hati mereka kembali setelah detox sederhana ini.",
    },
    {
      title: "Obat 9: Doa khusus",
      arabic:
        "يَا مُقَلِّبَ ٱلْقُلُوبِ، ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ",
      transliteration: "Yā muqallibal-qulūb, tsabbit qalbī 'alā dīnik",
      body: "Wahai yang membolak-balikkan hati, teguhkan hatiku dalam agama-Mu. Doa yang Rasulullah ﷺ sering baca — beliau bersabda 'hati anak Adam ada di antara dua jari Ar-Rahman, Dia membolak-balikkannya sesuai kehendak-Nya.'",
    },
    {
      title: "Obat 10: Rasa cukup terhadap diri sendiri",
      body: "Allah tidak menuntut kesempurnaan. Yang Dia mau: usaha. Walau hari ini hanya bisa sholat 5 waktu tepat waktu, itu sudah luar biasa. Jangan beratkan diri sampai patah. Pelan-pelan tapi konsisten > cepat lalu berhenti.",
    },
    {
      title: "Tanda hati hidup kembali",
      body: "Mulai bisa menangis saat doa. Senang ke masjid. Rindu sholat malam. Mudah mengucap istighfar. Tidak nyaman saat berbuat dosa. Anggap kesalahan kecil sebagai dosa besar.",
    },
  ],
  closing: "Hati seperti besi — bisa berkarat. Lap dengan istighfar dan dzikir. Polish dengan amal sholeh. Allah tidak meninggalkan hamba-Nya yang ingin kembali.",
};

const tazkiyatunNafs: LearnTopic = {
  id: "tazkiyatun-nafs",
  slug: "tazkiyatun-nafs",
  category: "akhlak",
  level: "lanjutan",
  title: "Tazkiyatun Nafs",
  description: "Pembersihan jiwa, perjalanan seumur hidup",
  emoji: "✨",
  intro:
    "Tazkiyatun nafs = menyucikan jiwa. Allah berfirman: 'Sungguh beruntung orang yang menyucikan jiwa.' (Asy-Syams: 9). Inilah inti dari perjalanan seorang hamba — naik dari nafs yang rendah ke nafs yang tenang.",
  items: [
    {
      title: "Apa itu nafs?",
      body: "Nafs = jiwa, ego, diri yang punya keinginan. Bukan musuh, tapi perlu dididik. Nafs yang dibiarkan liar akan membawa pada kebinasaan. Nafs yang dididik akan membawa pada kemuliaan.",
    },
    {
      title: "Tingkat 1: Nafs Ammārah Bissū'",
      body: "Jiwa yang menyuruh kepada keburukan. Dominan: hawa nafsu, syahwat, kesombongan. Tanda: menikmati dosa, membenci ketaatan, sulit beribadah. Allah berfirman: 'Sesungguhnya nafs itu menyuruh keburukan.' (Yusuf: 53).",
    },
    {
      title: "Tingkat 2: Nafs Lawwāmah",
      body: "Jiwa yang mencela diri sendiri. Sudah mulai sadar saat berdosa, menyesal, tapi masih sering jatuh. Tanda: bergumul antara taat dan maksiat. Allah bersumpah dengannya (Al-Qiyamah: 2) — tanda mulia.",
    },
    {
      title: "Tingkat 3: Nafs Mulhamah",
      body: "Jiwa yang diberi ilham — bisa membedakan baik dan buruk dengan jelas. Hati lebih lembut, lebih cepat tobat, lebih dekat dengan Allah.",
    },
    {
      title: "Tingkat 4: Nafs Muthma'innah",
      body: "Jiwa yang tenang. Tidak goyah oleh ujian, tidak sombong saat nikmat. Allah panggil: 'Wahai jiwa yang tenang, kembalilah pada Tuhanmu, ridha dan diridhai. Masuklah ke dalam hamba-hamba-Ku, masuklah ke dalam surga-Ku.' (Al-Fajr: 27-30).",
    },
    {
      title: "Tingkat 5–7: Lebih tinggi",
      body: "Sebagian ulama menyebut: Rādhiyah (yang ridho), Mardhiyyah (yang diridhoi), Kāmilah (yang sempurna). Tingkat para nabi dan auliya. Bagi kita, mencapai Muthma'innah saja sudah karunia luar biasa.",
    },
    {
      title: "Cara membersihkan: Dzikir",
      body: "Dzikir adalah pembersih hati paling cepat. 'Ingatlah, hanya dengan mengingat Allah hati menjadi tenang.' (Ar-Ra'd: 28). Pilih satu wirid, konsisten setiap hari.",
    },
    {
      title: "Cara membersihkan: Tafakkur",
      body: "Merenung. Tentang diri, tentang ciptaan Allah, tentang kematian. 1 jam tafakkur > banyak ibadah dengan hati lalai. Imam Hasan al-Bashri: 'Tafakkur itu cermin yang memperlihatkan kebaikan dan keburukan.'",
    },
    {
      title: "Cara membersihkan: Mujahadah",
      body: "Memaksa diri melakukan yang berat untuk Allah. Bangun saat ngantuk, sedekah saat ingin pelit, sabar saat ingin marah. Setiap perlawanan = kemenangan kecil.",
    },
    {
      title: "Cara membersihkan: Muhasabah",
      body: "Hisab diri sebelum dihisab. Setiap malam, sebelum tidur: 'Apa yang aku perbuat hari ini? Mana yang baik, mana yang buruk?' Umar RA: 'Hisablah dirimu sebelum kau dihisab.'",
    },
    {
      title: "Halangan utama — Hawa Nafsu",
      body: "Hawa = keinginan rendah. Setan tidak bekerja sendiri — dia membonceng hawa nafsu. Cara melawan: tunda, lawan, atau ganti dengan amal. 'Tidak ada penyembahan terburuk daripada penyembahan hawa nafsu.' (Al-Furqan: 43).",
    },
    {
      title: "Pelan tapi konsisten",
      body: "Tazkiyah bukan event satu malam — ia perjalanan seumur hidup. Setiap hari sedikit lebih bersih dari kemarin. Pasti ada hari mundur — itu wajar. Yang penting: kembali ke jalan.",
    },
    {
      title: "Doa Nabi ﷺ untuk jiwa",
      arabic:
        "ٱللَّٰهُمَّ آتِ نَفْسِي تَقْوَاهَا، وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
      transliteration:
        "Allāhumma āti nafsī taqwāhā, wa zakkihā anta khairu man zakkāhā",
      body: "Ya Allah, berikan jiwaku ketakwaannya, sucikanlah ia, Engkau sebaik-baik yang menyucikan, Engkau Pelindung dan Penolongnya. Doa harian yang sangat agung.",
    },
  ],
  closing: "Tujuan akhir: pulang dengan jiwa yang tenang, ridha pada Allah, diridhai Allah. Inilah sukses sejati — bukan harta, bukan jabatan.",
};

const keutamaanAmalKecil: LearnTopic = {
  id: "keutamaan-amal-kecil",
  slug: "keutamaan-amal-kecil",
  category: "akhlak",
  level: "pemula",
  title: "Keutamaan Amal Kecil",
  description: "Sedikit yang konsisten > banyak yang sesekali",
  emoji: "🌱",
  intro:
    "Banyak yang mengira ibadah harus besar agar berarti — sehingga tidak pernah memulai. Padahal Allah lebih mencintai amal yang konsisten walau sedikit. Inilah obat dari penyakit perfeksionis.",
  items: [
    {
      title: "Hadits utama",
      arabic:
        "أَحَبُّ ٱلْأَعْمَالِ إِلَى ٱللَّٰهِ أَدْوَمُهَا وَإِنْ قَلَّ",
      transliteration: "Aḥabbul-a'māli ilallāhi adwamuhā wa in qalla",
      body: "Amal yang paling dicintai Allah adalah yang paling konsisten, walau sedikit. (HR. Bukhari & Muslim, dari 'Aisyah RA).",
    },
    {
      title: "Mengapa konsistensi diutamakan?",
      body: "Karena ibadah membentuk kebiasaan, kebiasaan membentuk karakter, karakter mendekatkan kepada Allah. Sekali burst tidak membentuk apa-apa. Sedikit setiap hari mengukir jiwa.",
    },
    {
      title: "Aisyah RA tentang Nabi ﷺ",
      body: "'Amal Nabi ﷺ itu konsisten. Jika beliau mengerjakan suatu amal, beliau menetapinya.' Bahkan jika tertinggal sholat malam karena tertidur, beliau qadha siangnya — agar konsistensi tidak terputus.",
    },
    {
      title: "Bahaya 'aku akan mulai besar'",
      body: "Setan menyukai niat besar yang tidak realistis. 'Mulai besok aku tahajud setiap malam.' Lalu hari ke-3 berhenti total, karena kelelahan. Padahal kalau dari awal: '2 rakaat 3x seminggu' — bisa istiqomah seumur hidup.",
    },
    {
      title: "Aturan: kurangi target 50%",
      body: "Jika hatimu mengatakan 'aku akan baca 1 juz per hari', mulailah dengan setengah halaman. Jika 'sholat dhuha 8 rakaat', mulai dengan 2 rakaat. Naikkan setelah konsisten 30 hari.",
    },
    {
      title: "Hadits kasih sayang Allah",
      body: "'Jika hamba-Ku mendekat kepada-Ku sejengkal, Aku mendekat sehasta. Jika dia mendekat sehasta, Aku mendekat sedepa. Jika dia datang berjalan, Aku datang berlari.' (HR. Bukhari, hadits qudsi). Allah membalas usaha kecilmu dengan kasih sayang berlipat.",
    },
    {
      title: "Contoh amal kecil yang dahsyat",
      body: "1) Subhanallahi wa biḥamdihi 100x — diampuni dosa walau sebanyak buih lautan. 2) 2 rakaat sebelum subuh — lebih baik dari dunia dan seisinya. 3) Senyum pada saudaramu — sedekah. 4) Salam ke 3 orang — pintu kebaikan terbuka.",
    },
    {
      title: "Pelajaran dari ibu yang menyusui",
      body: "Ibu yang konsisten menyusui sedikit setiap kali, anaknya tumbuh sehat. Yang menyumpalkan banyak dalam satu jam, anaknya muntah. Begitu juga ruh kita — butuh asupan kecil tapi rutin.",
    },
    {
      title: "Cara membangun kebiasaan kecil",
      body: "1) Pilih satu amal yang paling mudah bagimu. 2) Ikat dengan kebiasaan yang sudah ada (setelah sholat → istighfar 10x). 3) Jangan absen 2 hari berturut-turut. 4) Rayakan dalam hati setiap hari, walau singkat.",
    },
    {
      title: "Saat tertinggal, jangan reset",
      body: "Tertinggal hari ini, lanjutkan besok. Tidak perlu mulai dari nol. Setan menginginkan kau menyerah karena 'sudah putus' — Allah hanya melihat usaha kembali.",
    },
    {
      title: "Daftar amal kecil yang mengubah hidup",
      body: "• Wudhu sebelum tidur. • Baca ayat kursi sebelum tidur. • Subuh berjamaah 1x seminggu. • Sedekah Rp 1.000 setiap pagi. • 2 rakaat sebelum dzuhur. • Sholawat 10x setelah maghrib. Pilih SATU.",
    },
    {
      title: "Doa istiqomah",
      arabic:
        "ٱللَّٰهُمَّ يَا مُقَلِّبَ ٱلْقُلُوبِ، ثَبِّتْ قَلْبِي عَلَىٰ دِينِكَ وَعَلَىٰ طَاعَتِكَ",
      transliteration:
        "Allāhumma yā muqallibal-qulūb, tsabbit qalbī 'alā dīnika wa 'alā ṭā'atik",
      body: "Ya Allah, wahai yang membolak-balikkan hati, teguhkan hatiku di atas agama-Mu dan ketaatan kepada-Mu.",
    },
  ],
  closing: "Mulai dari yang paling mudah, hari ini. Jangan menunggu rasa siap — rasa siap datang dari memulai.",
};

const rahmatUntukDiri: LearnTopic = {
  id: "rahmat-untuk-diri",
  slug: "rahmat-untuk-diri",
  category: "akhlak",
  level: "menengah",
  title: "Rahmat untuk Diri",
  description: "Lembut pada diri di jalan agama",
  emoji: "🤲",
  intro:
    "Banyak yang menyangka taqwa berarti keras pada diri sendiri. Padahal Allah tidak menyuruh demikian — Dia memberi rukhsah, menerima taubat berulang, dan tidak membebani melebihi kesanggupan. Belajarlah memperlakukan diri seperti Allah memperlakukanmu.",
  items: [
    {
      title: "Allah sendiri lembut padamu",
      arabic:
        "لَا يُكَلِّفُ ٱللَّٰهُ نَفْسًا إِلَّا وُسْعَهَا",
      transliteration: "Lā yukallifullāhu nafsan illā wus'ahā",
      body: "Allah tidak membebani seseorang kecuali sesuai kesanggupannya. (Al-Baqarah: 286). Jika Allah lembut padamu, mengapa kau keras pada dirimu sendiri?",
    },
    {
      title: "Bedakan: penyesalan vs penghakiman",
      body: "Penyesalan (taubat): 'Aku salah, aku ingin lebih baik.' Penghakiman: 'Aku payah, aku tidak pantas.' Yang pertama menggerakkan, yang kedua melumpuhkan. Yang pertama dari Allah, yang kedua dari setan.",
    },
    {
      title: "Hadits Rasulullah ﷺ",
      body: "Beliau bersabda: 'Sesungguhnya agama ini mudah. Dan tidak ada seorang pun yang memberat-beratkan diri dalam agama ini, kecuali ia akan dikalahkan. Maka berlaku tepatlah, dekati yang sempurna, dan bergembiralah.' (HR. Bukhari).",
    },
    {
      title: "Saat ibadah terasa berat",
      body: "Jangan paksa sampai patah. Berhenti sebentar, beristirahat, lalu lanjutkan. Ibadah bukan lomba ketahanan. Yang penting: kau tidak menyerah selamanya.",
    },
    {
      title: "Kelelahan adalah sinyal, bukan kelemahan",
      body: "Tubuhmu adalah amanah. Saat lelah, tidur dulu. Saat lapar, makan dulu. Saat hati gelap, beristirahat dari urusan dunia. Lalu kembali kepada Allah dengan jiwa yang segar.",
    },
    {
      title: "Sahabat yang tidur menjadi pelajaran",
      body: "Sahabat Nabi pernah ditegur saat menahan diri tidak tidur, tidak makan daging, dan tidak menikah agar 'lebih taat'. Nabi ﷺ bersabda: 'Aku tidur dan bangun, makan dan berpuasa, dan menikahi wanita. Siapa yang tidak menyukai sunnahku, bukan dari golonganku.'",
    },
    {
      title: "Allah menerima taubat berkali-kali",
      body: "'Demi yang jiwaku ada di tangan-Nya, jika kalian tidak berdosa, Allah akan ganti kalian dengan kaum yang berdosa lalu beristighfar — agar Allah mengampuni mereka.' (HR. Muslim). Allah suka mengampuni — itulah sifat-Nya.",
    },
    {
      title: "Kau bukan amalmu",
      body: "Kau adalah hamba yang Allah ciptakan, bukan dijumlahkan dari amal-amalmu. Identitasmu bukan 'orang berdosa' atau 'orang shalih' — kau adalah hamba Allah yang berusaha. Pisahkan diri dari penilaian.",
    },
    {
      title: "Saat membandingkan diri",
      body: "Jangan iri pada amal orang lain — kau tidak tahu pergumulan mereka. Jangan kasihani diri pada amalmu — kau tidak tahu apa yang Allah catat dari niatmu. Fokus pada satu langkah berikutnya.",
    },
    {
      title: "Bicaralah pada dirimu seperti pada sahabat",
      body: "Jika sahabatmu jatuh, kau akan berkata: 'Tidak apa-apa, bangun lagi.' Maka katakan hal yang sama pada dirimu. Kau berhak atas kelembutanmu sendiri.",
    },
    {
      title: "Doa lembut untuk diri",
      arabic:
        "ٱللَّٰهُمَّ ٱرْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ",
      transliteration:
        "Allāhummarḥamnī raḥmatan tughnīnī bihā 'an raḥmati man siwāk",
      body: "Ya Allah, kasihilah aku dengan kasih sayang yang membuatku tidak butuh kasih sayang selain-Mu — termasuk kasih sayang dari diriku yang lemah ini.",
    },
    {
      title: "Pesan terakhir",
      body: "Jadilah lembut pada dirimu sendiri — bukan untuk membenarkan kelalaian, tapi agar tetap kuat untuk besok. Hati yang sering dikecam akan membatu. Hati yang dirahmati akan mekar.",
    },
  ],
  closing: "Allah lebih cinta padamu daripada cintamu pada dirimu. Jangan menjadi musuh dirimu sendiri di jalan menuju-Nya.",
};

const muhasabahDiri: LearnTopic = {
  id: "muhasabah-diri",
  slug: "muhasabah-diri",
  category: "akhlak",
  level: "menengah",
  title: "Muhasabah Diri",
  description: "Hisab diri sebelum dihisab",
  emoji: "🪞",
  intro:
    "Umar bin Khattab RA berkata: 'Hisablah dirimu sebelum kau dihisab. Timbanglah amalmu sebelum ditimbang.' Muhasabah adalah cermin yang memperlihatkan jiwamu — agar tidak kaget di hari perhitungan.",
  items: [
    {
      title: "Apa itu muhasabah?",
      body: "Mengoreksi diri secara rutin: amal hari ini, niat di balik amal, dan arah hari esok. Bukan untuk menyiksa diri — tapi untuk meluruskan langkah.",
    },
    {
      title: "Empat pertanyaan pokok",
      body: "1) Adakah aku melalaikan kewajiban? 2) Adakah aku melakukan yang dilarang? 3) Adakah aku lupa menyukuri nikmat? 4) Adakah aku melukai sesama? Empat pertanyaan ini menutup sebagian besar dosa.",
    },
    {
      title: "Waktu terbaik: sebelum tidur",
      body: "Imam al-Ghazali menyebut malam hari sebagai 'waktu hisab'. Tubuh telah selesai aktivitas, hati lebih tenang, ingatan masih segar. 5–10 menit cukup.",
    },
    {
      title: "Bedakan: muhasabah vs penghakiman",
      body: "Muhasabah: 'Aku salah di sini, bagaimana memperbaiki?' Penghakiman: 'Aku payah, aku tidak pantas.' Yang pertama produktif. Yang kedua dari setan.",
    },
    {
      title: "Hadits pendukung",
      body: "Rasulullah ﷺ bersabda: 'Yang cerdas adalah yang menghisab dirinya dan beramal untuk setelah kematian. Yang lemah adalah yang mengikuti hawa nafsu lalu berangan-angan kepada Allah.' (HR. Tirmidzi).",
    },
    {
      title: "Format sederhana",
      body: "(1) Apa amal terbaikku hari ini? — syukur. (2) Apa yang ingin kuperbaiki? — niat. (3) Adakah aku menyakiti orang? — taubat & istighfar. (4) Niat satu hal kecil untuk besok.",
    },
    {
      title: "Saat banyak salah ditemukan",
      body: "Itu pertanda hatimu hidup. Hati yang mati tidak peka. Bersyukurlah pada kepekaan, lalu istighfar — jangan tenggelam dalam rasa bersalah.",
    },
    {
      title: "Saat tidak menemukan yang baik",
      body: "Pasti ada — bahkan napasmu adalah nikmat. Mata yang melihat. Telinga yang mendengar. Mulai dari yang terkecil, lalu syukurmu tumbuh.",
    },
    {
      title: "Doa di akhir muhasabah",
      arabic:
        "ٱللَّٰهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ ٱلْحَمْدُ وَلَكَ ٱلشُّكْرُ",
      transliteration:
        "Allāhumma mā aṣbaḥa bī min ni'matin au bi'aḥadin min khalqika faminka waḥdaka…",
      body: "Ya Allah, segala nikmat yang kuterima atau diterima makhluk-Mu — semuanya dari-Mu, tanpa sekutu. Bagi-Mu segala puji dan syukur.",
    },
    {
      title: "Frekuensi yang dianjurkan",
      body: "Harian: sebelum tidur, ringkas. Mingguan: Jumat sore, lebih dalam. Tahunan: malam tahun baru Hijriah, lihat 1 tahun perjalanan. Bulan Ramadhan: hisab khusus untuk niat tobat.",
    },
    {
      title: "Tutup dengan harapan",
      body: "Setelah hisab, jangan tinggalkan jiwa dalam kesedihan. Tutup dengan ucapan harapan: 'Aku tahu Allah Maha Pengampun. Aku akan mencoba lagi besok.'",
    },
  ],
  closing: "Muhasabah teratur menumbuhkan kepekaan. Kepekaan menumbuhkan tobat. Tobat menumbuhkan kedekatan dengan Allah.",
};

export const akhlakTopics: LearnTopic[] = [
  niatIkhlas,
  akhlakHarian,
  keutamaanAmalKecil,
  adabSehariHari,
  tobatNasuha,
  bahayaMenunda,
  rahmatUntukDiri,
  muhasabahDiri,
  penyakitHati,
  menghidupkanHati,
  tazkiyatunNafs,
];
