import type { LearnTopic } from "@/types";

const rukunIman: LearnTopic = {
  id: "rukun-iman",
  slug: "rukun-iman",
  category: "aqidah",
  level: "pemula",
  title: "Rukun Iman",
  description: "Enam fondasi keyakinan",
  emoji: "💞",
  intro:
    "Rukun Iman adalah peta hati seorang Muslim — apa yang kita percayai meskipun tak terlihat. Pelan-pelan, hayati satu per satu.",
  items: [
    {
      title: "1. Iman kepada Allah",
      body: "Yakin bahwa Allah Maha Esa, Maha Pencipta, dan satu-satunya yang berhak disembah. Tidak ada yang serupa dengan-Nya.",
    },
    {
      title: "2. Iman kepada Malaikat",
      body: "Yakin Allah menciptakan makhluk-makhluk dari cahaya yang taat penuh dan menjalankan tugas-Nya — Jibril, Mikail, Israfil, dan lainnya.",
    },
    {
      title: "3. Iman kepada Kitab-kitab",
      body: "Yakin Allah menurunkan kitab-kitab suci sebagai petunjuk: Taurat, Zabur, Injil, dan Al-Qur'an sebagai penyempurna.",
    },
    {
      title: "4. Iman kepada Para Rasul",
      body: "Yakin Allah mengutus utusan-utusan-Nya, mulai dari Nabi Adam ﷺ hingga Nabi Muhammad ﷺ sebagai penutup.",
    },
    {
      title: "5. Iman kepada Hari Akhir",
      body: "Yakin akan kehidupan setelah kematian — kebangkitan, hisab, surga dan neraka. Ini yang menjaga kita untuk berbuat baik.",
    },
    {
      title: "6. Iman kepada Qada' & Qadar",
      body: "Yakin bahwa segala kebaikan dan keburukan terjadi atas izin Allah — tanpa menghapus tanggung jawab kita untuk berusaha.",
    },
  ],
  closing:
    "Iman tumbuh dengan ilmu, doa, dan amal. Tidak apa-apa kalau hari ini terasa redup — siram lagi besok.",
};

const rukunIslam: LearnTopic = {
  id: "rukun-islam",
  slug: "rukun-islam",
  category: "aqidah",
  level: "pemula",
  title: "Rukun Islam",
  description: "Lima tiang pondasi amal",
  emoji: "🕌",
  intro:
    "Rukun Islam adalah amal-amal yang menjadikan kita Muslim. Tegakkan satu per satu, di waktu yang Allah berikan.",
  items: [
    {
      title: "1. Syahadat",
      arabic:
        "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ",
      transliteration:
        "Asyhadu an lā ilāha illallāh, wa asyhadu anna Muḥammadan rasūlullāh",
      body: "Persaksian bahwa tiada Tuhan selain Allah dan Muhammad ﷺ adalah utusan-Nya.",
    },
    {
      title: "2. Sholat",
      body: "Lima waktu setiap hari — Subuh, Dzuhur, Ashar, Maghrib, Isya. Pertemuan rutin antara hamba dan Rabb-nya.",
    },
    {
      title: "3. Zakat",
      body: "Menyucikan harta dengan memberi kepada yang berhak. Zakat fitrah di Ramadhan, zakat mal jika harta mencapai nishab.",
    },
    {
      title: "4. Puasa Ramadhan",
      body: "Sebulan penuh menahan diri dari fajar sampai maghrib — bukan hanya makan dan minum, tapi juga lisan dan pandangan.",
    },
    {
      title: "5. Haji",
      body: "Bagi yang mampu — sehat dan cukup biaya. Perjalanan suci ke Baitullah, sekali seumur hidup.",
    },
  ],
  closing: "Tegakkan yang bisa dulu. Yang lain, niatkan dan doakan.",
};

const asmaulHusna: LearnTopic = {
  id: "asmaul-husna",
  slug: "asmaul-husna",
  category: "aqidah",
  level: "pemula",
  title: "Asmaul Husna",
  description: "Mengenal nama-nama indah Allah",
  emoji: "💫",
  intro:
    "Allah memiliki 99 nama yang indah. Mengenalnya membuat doamu lebih dalam — kamu memanggil-Nya dengan sifat yang sesuai dengan kebutuhanmu.",
  items: [
    {
      title: "Ar-Rahman — Maha Pengasih",
      arabic: "ٱلرَّحْمَٰنُ",
      body: "Kasih sayang-Nya untuk semua makhluk, beriman maupun tidak, di dunia ini. Sebut saat butuh kelembutan.",
    },
    {
      title: "Ar-Rahim — Maha Penyayang",
      arabic: "ٱلرَّحِيمُ",
      body: "Kasih sayang khusus untuk orang beriman, terutama di akhirat. Sebut saat butuh harapan.",
    },
    {
      title: "Al-Malik — Maha Raja",
      arabic: "ٱلْمَلِكُ",
      body: "Penguasa segala kerajaan. Tidak ada raja yang lebih tinggi. Sebut saat menghadapi yang berkuasa.",
    },
    {
      title: "Al-Quddus — Maha Suci",
      arabic: "ٱلْقُدُّوسُ",
      body: "Suci dari segala kekurangan. Sebut saat ingin menyucikan hati dari prasangka buruk.",
    },
    {
      title: "As-Salam — Sumber Keselamatan",
      arabic: "ٱلسَّلَامُ",
      body: "Sumber damai dan keselamatan. Sebut saat hatimu gelisah.",
    },
    {
      title: "Al-Mu'min — Pemberi Keamanan",
      arabic: "ٱلْمُؤْمِنُ",
      body: "Yang menanamkan rasa aman di hati hamba-Nya. Sebut saat takut atau cemas.",
    },
    {
      title: "Al-'Aziz — Maha Perkasa",
      arabic: "ٱلْعَزِيزُ",
      body: "Tidak terkalahkan. Sebut saat merasa lemah atau dianiaya.",
    },
    {
      title: "Al-Ghafur — Maha Pengampun",
      arabic: "ٱلْغَفُورُ",
      body: "Mengampuni dosa, kecil dan besar. Sebut saat hatimu berat oleh kesalahan.",
    },
    {
      title: "Al-Wadud — Maha Penyayang",
      arabic: "ٱلْوَدُودُ",
      body: "Mencintai hamba-Nya dengan cinta yang tidak bersyarat. Sebut saat merasa tidak dicintai.",
    },
    {
      title: "Al-Lathif — Maha Lembut",
      arabic: "ٱللَّطِيفُ",
      body: "Mengetahui hal terkecil dan menolong dengan cara yang halus. Sebut saat butuh bantuan tak terduga.",
    },
    {
      title: "Al-Hakim — Maha Bijaksana",
      arabic: "ٱلْحَكِيمُ",
      body: "Setiap takdir-Nya pasti ada hikmahnya, walau kita belum memahami. Sebut saat bingung pada apa yang terjadi.",
    },
    {
      title: "Al-Wakil — Sebaik-baik Pelindung",
      arabic: "ٱلْوَكِيلُ",
      body: "Tempat berserah yang sempurna. Sebut saat ingin tawakkal.",
    },
    {
      title: "Al-Mujib — Maha Mengabulkan",
      arabic: "ٱلْمُجِيبُ",
      body: "Mengabulkan doa hamba-Nya dengan caranya sendiri. Sebut saat memohon hajat.",
    },
    {
      title: "Cara berdoa dengan asmaul husna",
      body: "Sebut sifat-Nya yang sesuai dengan permintaanmu. Contoh: 'Ya Rahman, kasihilah aku.' 'Ya Lathif, lembutkan urusan ini.' 'Ya Mujib, kabulkanlah.'",
    },
  ],
  closing: "Hafal sedikit demi sedikit, dengan memahami maknanya. Doa yang dipanggil dengan nama yang tepat lebih cepat sampai.",
};

const sifatAllah: LearnTopic = {
  id: "sifat-allah",
  slug: "sifat-allah",
  category: "aqidah",
  level: "menengah",
  title: "Sifat Wajib Allah",
  description: "20 sifat yang wajib bagi Allah",
  emoji: "🔆",
  intro:
    "Para ulama merangkum sifat-sifat Allah dalam 20 sifat wajib. Memahaminya menjaga aqidah dari penyimpangan.",
  items: [
    {
      title: "1. Wujud — Ada",
      body: "Allah pasti ada. Mustahil tiada. Bukti: alam ini ada, dan tidak mungkin terjadi sendiri.",
    },
    {
      title: "2. Qidam — Terdahulu",
      body: "Tidak ada permulaan bagi-Nya. Mustahil baru ada. Berbeda dengan makhluk yang punya awal.",
    },
    {
      title: "3. Baqa' — Kekal",
      body: "Tidak akan binasa. Mustahil rusak. Selama-lamanya ada.",
    },
    {
      title: "4. Mukhalafatu lil-hawadits — Berbeda dari makhluk",
      body: "Tidak ada yang menyerupai-Nya. Mustahil sama dengan apa pun yang Dia ciptakan.",
    },
    {
      title: "5. Qiyamuhu binafsihi — Berdiri sendiri",
      body: "Tidak butuh apa pun, tidak butuh tempat, tidak butuh penolong. Mustahil bergantung pada selain-Nya.",
    },
    {
      title: "6. Wahdaniyah — Esa",
      body: "Esa dalam Dzat, sifat, dan perbuatan. Tidak berbilang dan tidak bersekutu.",
    },
    {
      title: "7. Qudrat — Berkuasa",
      body: "Mampu atas segala sesuatu. Mustahil lemah.",
    },
    {
      title: "8. Iradat — Berkehendak",
      body: "Berkehendak dengan bebas. Mustahil terpaksa atau dipengaruhi.",
    },
    {
      title: "9. 'Ilm — Mengetahui",
      body: "Mengetahui yang nyata dan yang ghaib, masa lalu dan masa depan. Mustahil bodoh atau lupa.",
    },
    {
      title: "10. Hayat — Hidup",
      body: "Hidup tanpa awal dan akhir, tanpa makanan atau tidur. Mustahil mati.",
    },
    {
      title: "11. Sama' — Mendengar",
      body: "Mendengar segala suara, sekecil apa pun, sejauh apa pun. Mustahil tuli.",
    },
    {
      title: "12. Bashar — Melihat",
      body: "Melihat segalanya tanpa alat. Mustahil buta.",
    },
    {
      title: "13. Kalam — Berfirman",
      body: "Berbicara tanpa huruf dan suara seperti makhluk. Al-Qur'an adalah firman-Nya. Mustahil bisu.",
    },
    {
      title: "14–20. Sifat Ma'nawiyah",
      body: "Qadiran (Maha Kuasa), Muridan (Maha Berkehendak), 'Aliman (Maha Mengetahui), Hayyan (Maha Hidup), Sami'an (Maha Mendengar), Bashiran (Maha Melihat), Mutakalliman (Maha Berfirman) — bentuk subjek dari sifat ma'ani.",
    },
    {
      title: "Sifat jaiz",
      body: "Allah boleh berbuat atau tidak berbuat sesuatu — tidak ada yang mewajibkan-Nya. Misal: menciptakan atau tidak menciptakan.",
    },
  ],
  closing: "Aqidah yang lurus adalah pondasi semua amal. Pelan-pelan, dengan ulama yang terpercaya.",
};

const tauhidTigaJenis: LearnTopic = {
  id: "tauhid-tiga-jenis",
  slug: "tauhid-tiga-jenis",
  category: "aqidah",
  level: "menengah",
  title: "Tauhid 3 Jenis",
  description: "Rububiyah, Uluhiyah, Asma wa Sifat",
  emoji: "☝️",
  intro:
    "Tauhid adalah inti Islam — mengesakan Allah dalam segala hal. Ulama membaginya menjadi tiga aspek agar lebih mudah dipahami dan dijaga.",
  items: [
    {
      title: "1. Tauhid Rububiyah",
      body: "Mengesakan Allah dalam perbuatan-Nya: hanya Dia yang menciptakan, memberi rezeki, menghidupkan, mematikan, mengatur alam semesta. Bahkan kafir Quraisy mengakui ini — tapi itu belum cukup.",
    },
    {
      title: "Bukti Tauhid Rububiyah",
      body: "Lihat alam — siapa yang mengatur matahari terbit dengan presisi? Siapa yang membuat tubuhmu bekerja saat tidur? Tidak ada yang berani mengaku selain Allah.",
    },
    {
      title: "2. Tauhid Uluhiyah (Tauhid Ibadah)",
      body: "Mengesakan Allah dalam beribadah — hanya Dia yang berhak disembah, dimintai tolong, disujudi, dinazari, dicintai dengan kecintaan tertinggi. Inilah yang sering dilanggar.",
    },
    {
      title: "Bukti Tauhid Uluhiyah",
      body: "Bacaan 'iyyāka na'budu wa iyyāka nasta'īn' — hanya kepada Engkau kami menyembah, hanya kepada Engkau kami minta tolong. Diulang minimal 17x sehari dalam sholat.",
    },
    {
      title: "3. Tauhid Asma' wa Sifat",
      body: "Mengesakan Allah dalam nama dan sifat-Nya. Allah punya nama dan sifat yang Dia tetapkan untuk diri-Nya. Kita meyakininya seperti yang Allah dan Rasul-Nya jelaskan, tanpa: ta'thil (menolak), tahrif (mengubah), takyif (membayangkan), tasybih (menyerupakan).",
    },
    {
      title: "Contoh Tauhid Asma' wa Sifat",
      body: "Allah Maha Mendengar (As-Sami') — kita yakin Dia mendengar, tapi tidak seperti pendengaran kita. Allah memiliki tangan — kita yakini sebagaimana yang disebutkan, tanpa membayangkan bentuknya.",
    },
    {
      title: "Yang Membatalkan Tauhid — Syirik Besar",
      body: "Menyembah selain Allah, meminta dari kuburan, percaya ada yang bisa memberi rezeki/menghidupkan/mematikan selain Allah. Dosa yang tidak diampuni jika tidak bertaubat sebelum mati.",
    },
    {
      title: "Yang Mengurangi Tauhid — Syirik Kecil",
      body: "Riya' (beribadah agar dilihat orang), bersumpah dengan selain nama Allah, sihir, dukun, jimat. Tidak mengeluarkan dari Islam, tapi sangat berbahaya — lebih halus dari semut hitam di malam gelap.",
    },
    {
      title: "Tawassul yang Diperbolehkan",
      body: "Tawassul dengan nama-nama Allah, dengan amal sholeh kita, atau dengan doa orang shalih yang masih hidup. TIDAK dengan kuburan, dengan benda, atau dengan orang yang sudah wafat (perdebatan ulama).",
    },
    {
      title: "Cara Menjaga Tauhid",
      body: "1) Banyak berdoa minta hidayah. 2) Pelajari nama dan sifat Allah. 3) Berkumpul dengan orang shalih. 4) Banyak istighfar — mungkin ada syirik kecil yang tak disadari. 5) Baca surah Al-Ikhlas — tauhid murni.",
    },
  ],
  closing: "Tauhid adalah pondasi. Jika pondasi runtuh, semua amal di atasnya pun ambruk. Jaga ia dengan ilmu dan doa.",
};

const hariAkhir: LearnTopic = {
  id: "hari-akhir",
  slug: "hari-akhir",
  category: "aqidah",
  level: "lanjutan",
  title: "Hari Akhir",
  description: "Perjalanan setelah kematian",
  emoji: "🌅",
  intro:
    "Iman pada hari akhir adalah rukun iman kelima. Memahami detailnya membuat hidup lebih bermakna — kita tahu tujuan dan tahu apa yang menanti.",
  items: [
    {
      title: "1. Sakaratul Maut",
      body: "Saat ruh dicabut. Nyawa orang shalih dicabut dengan lembut, seperti tetesan dari geriba. Ruh orang dzalim dicabut keras. Allah, ringankan saat itu untuk kami.",
    },
    {
      title: "2. Alam Barzakh (Alam Kubur)",
      body: "Antara kematian dan kebangkitan. Ditanya 3 pertanyaan: siapa Tuhanmu? siapa Nabimu? apa agamamu? Yang menjawab benar: kubur diluaskan dan diberi pemandangan surga. Yang tidak: disempitkan dan diberi pemandangan neraka.",
    },
    {
      title: "3. Tanda Kiamat Kecil (Sudah Banyak Terjadi)",
      body: "Diutusnya Nabi Muhammad ﷺ, terbelahnya bulan, banyak fitnah, sedikit ilmu agama, mabuk merata, riba mendominasi, banyak gempa, anak melawan orang tua, gedung-gedung tinggi.",
    },
    {
      title: "4. Tanda Kiamat Besar (Belum Terjadi)",
      body: "Munculnya Imam Mahdi, turunnya Nabi Isa ﷺ, munculnya Dajjal (penipu), keluarnya Ya'juj & Ma'juj, munculnya Dabbah (binatang besar), terbitnya matahari dari barat, asap menyelimuti dunia, api dari Yaman.",
    },
    {
      title: "5. Tiupan Sangkakala Pertama",
      body: "Israfil meniup sangkakala — semua makhluk pingsan/mati. Bumi diluluh-lantakkan, gunung berhamburan, langit terbelah.",
    },
    {
      title: "6. Tiupan Sangkakala Kedua",
      body: "Kebangkitan. Manusia bangkit dari kubur, seluruhnya — dari Adam hingga manusia terakhir. Telanjang, tidak berkhitan, tidak beralas kaki.",
    },
    {
      title: "7. Mahsyar — Padang Penghisaban",
      body: "Berkumpul di padang luas. Matahari sangat dekat, manusia berkeringat sesuai kadar amalnya. Tujuh golongan Allah lindungi dengan naungan-Nya saat tiada naungan selain naungan-Nya.",
    },
    {
      title: "8. Hisab — Penghisaban",
      body: "Setiap manusia diadili sendiri di hadapan Allah. Buku catatan diberikan: dari kanan (selamat), dari kiri (celaka). Anggota tubuh akan bersaksi — tangan, kaki, kulit. Tidak ada yang tersembunyi.",
    },
    {
      title: "9. Mizan — Timbangan Amal",
      body: "Amal kebaikan dan keburukan ditimbang. Sekecil apa pun. Yang berat kebaikan: bahagia. Yang berat keburukan: celaka.",
    },
    {
      title: "10. Shirath — Jembatan",
      body: "Membentang di atas neraka. Setiap orang melewatinya, sesuai amalnya. Yang shalih: cepat seperti kilat. Yang kurang: merangkak. Yang dzalim: jatuh ke neraka.",
    },
    {
      title: "11. Telaga (Haudh) Nabi ﷺ",
      body: "Telaga di Mahsyar. Airnya lebih putih dari susu, lebih manis dari madu, lebih wangi dari kasturi. Yang minum tidak akan haus selamanya. Hanya untuk yang istiqomah dengan sunnah.",
    },
    {
      title: "12. Surga",
      body: "Tempat kebahagiaan abadi. Tidak ada kelelahan, kesedihan, atau kesakitan. Apa yang dilihat mata belum pernah, apa yang didengar telinga belum pernah, dan apa yang terlintas di hati pun tidak. Yang tertinggi: melihat wajah Allah.",
    },
    {
      title: "13. Neraka",
      body: "Tempat penyiksaan. 70x lebih panas dari api dunia. Penghuninya kekal, kecuali Muslim yang membawa dosa — akan dikeluarkan setelah disucikan. Allah, lindungi kami dari neraka.",
    },
    {
      title: "Bekal untuk Hari Itu",
      body: "Iman + amal sholeh + akhlak yang baik + ilmu yang diamalkan + anak shalih yang mendoakan + sedekah jariyah + ilmu yang manfaat. Mulai mempersiapkan hari ini — bukan besok.",
    },
  ],
  closing: "Mengingat hari akhir bukan untuk takut berlebihan, tapi untuk hidup dengan tujuan. Setiap pagi adalah kesempatan baru.",
};

export const aqidahTopics: LearnTopic[] = [
  rukunIman,
  rukunIslam,
  asmaulHusna,
  tauhidTigaJenis,
  sifatAllah,
  hariAkhir,
];
