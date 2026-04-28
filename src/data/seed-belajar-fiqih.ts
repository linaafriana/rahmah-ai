import type { LearnTopic } from "@/types";

const najis: LearnTopic = {
  id: "najis",
  slug: "najis",
  category: "fiqih",
  level: "pemula",
  title: "Mengenal Najis",
  description: "Tiga tingkat dan cara menyucikannya",
  emoji: "🧼",
  intro:
    "Najis adalah kotoran yang harus dibersihkan sebelum sholat. Para ulama membaginya menjadi tiga tingkat berdasarkan cara membersihkannya.",
  items: [
    {
      title: "1. Najis Mughallazhah (Berat)",
      body: "Air liur dan kotoran anjing & babi. Cara menyucikan: dicuci 7x, salah satunya dengan tanah/sabun.",
    },
    {
      title: "2. Najis Mukhaffafah (Ringan)",
      body: "Air kencing bayi laki-laki yang belum makan selain ASI dan belum berusia 2 tahun. Cara: cukup memercikkan air ke tempat terkena.",
    },
    {
      title: "3. Najis Mutawassithah (Sedang)",
      body: "Selain dua di atas: kencing, kotoran, darah, nanah, bangkai (selain ikan & belalang). Sebagian besar najis termasuk kategori ini.",
    },
    {
      title: "Cara menyucikan najis sedang",
      body: "Najis 'ainiyah (terlihat): hilangkan zat, warna, dan baunya dengan air mengalir. Najis hukmiyah (tidak terlihat): cukup alirkan air.",
    },
    {
      title: "Yang dimaafkan",
      body: "Najis sedikit dan tidak terlihat — seperti percikan kecil di pakaian. Tetapkan niat untuk menjaga kebersihan, bukan kekakuan.",
    },
    {
      title: "Catatan",
      body: "Air seni hewan halal dimakan (sapi, kambing) tetap najis. Bangkai ikan dan belalang tidak najis. Kulit bangkai jadi suci setelah disamak.",
    },
  ],
  closing: "Allah Maha Bersih dan mencintai kebersihan. Jaga diri tanpa berlebihan.",
};

const wudhu: LearnTopic = {
  id: "wudhu",
  slug: "wudhu",
  category: "fiqih",
  level: "pemula",
  title: "Tata Cara Wudhu",
  description: "Bersuci sebelum menghadap Allah",
  emoji: "💧",
  intro:
    "Wudhu adalah jeda lembut antara dunia dan sholatmu. Lakukan dengan tenang, sambil meresapi air yang membersihkan.",
  items: [
    { title: "Niat dalam hati", body: "Niatkan wudhu untuk menghilangkan hadats dan menghadap Allah." },
    { title: "Membaca bismillah", arabic: "بِسْمِ ٱللَّٰهِ", transliteration: "Bismillāh", body: "Mulai dengan menyebut nama Allah." },
    { title: "Mencuci kedua tangan 3x", body: "Sampai pergelangan, sela-sela jari pun dibersihkan." },
    { title: "Berkumur 3x", body: "Ambil air dengan tangan kanan, kumurkan, lalu keluarkan." },
    { title: "Memasukkan air ke hidung 3x", body: "Hirup pelan, lalu keluarkan dengan tangan kiri." },
    { title: "Membasuh wajah 3x", body: "Dari batas tumbuhnya rambut hingga dagu, telinga ke telinga." },
    { title: "Membasuh tangan sampai siku 3x", body: "Mulai tangan kanan dulu, lalu kiri. Pastikan rata." },
    { title: "Mengusap sebagian kepala", body: "Dengan tangan basah, usap dari depan ke belakang lalu kembali." },
    { title: "Mengusap kedua telinga", body: "Bagian dalam dengan jari telunjuk, luar dengan ibu jari." },
    { title: "Membasuh kedua kaki sampai mata kaki 3x", body: "Kanan dulu, lalu kiri. Sela-sela jari kaki dibasuh." },
    {
      title: "Doa setelah wudhu",
      arabic:
        "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration:
        "Asyhadu an lā ilāha illallāh, wa asyhadu anna Muḥammadan 'abduhu wa rasūluh",
      body: "Tutup dengan syahadat. Insya Allah, Allah membuka 8 pintu surga untukmu.",
    },
  ],
  closing: "Air yang menyentuh kulitmu menggugurkan dosa-dosa kecil 🤍",
};

const tayammum: LearnTopic = {
  id: "tayammum",
  slug: "tayammum",
  category: "fiqih",
  level: "pemula",
  title: "Tayammum",
  description: "Bersuci dengan debu saat air tak ada",
  emoji: "🌫️",
  intro:
    "Saat air tidak tersedia atau membahayakan kesehatan, Allah memberi keringanan dengan tayammum — bersuci menggunakan debu yang suci.",
  items: [
    {
      title: "Kapan boleh tayammum",
      body: "Tidak ada air, sakit yang kambuh karena air, perjalanan jauh, air dibutuhkan untuk minum, atau air sangat dingin tanpa pemanas.",
    },
    {
      title: "Niat",
      body: "Aku berniat bersuci dengan tayammum untuk menunaikan sholat karena Allah Ta'ala.",
    },
    {
      title: "1. Letakkan kedua telapak tangan ke debu",
      body: "Pada permukaan yang berdebu — tanah, batu, dinding bersih, atau kain yang berdebu.",
    },
    {
      title: "2. Tiup atau kibaskan ringan",
      body: "Agar debu tidak terlalu banyak menempel. Cukup tipis.",
    },
    {
      title: "3. Usap wajah",
      body: "Dengan kedua telapak tangan, dari atas ke bawah, satu kali usapan rata.",
    },
    {
      title: "4. Letakkan tangan ke debu lagi",
      body: "Kemudian usap punggung tangan kanan dengan telapak kiri sampai pergelangan, lalu sebaliknya.",
    },
    {
      title: "5. Tertib",
      body: "Lakukan urut: niat → wajah → tangan. Jangan dibalik urutannya.",
    },
    {
      title: "Yang membatalkan",
      body: "Sama seperti yang membatalkan wudhu, ditambah: ditemukannya air sebelum sholat dimulai.",
    },
  ],
  closing: "Tayammum adalah rahmat — Allah tidak ingin memberatkanmu.",
};

const mandiWajib: LearnTopic = {
  id: "mandi-wajib",
  slug: "mandi-wajib",
  category: "fiqih",
  level: "pemula",
  title: "Mandi Wajib",
  description: "Cara bersuci dari hadats besar",
  emoji: "🚿",
  intro:
    "Mandi wajib (mandi junub) adalah cara bersuci dari hadats besar. Wajib dilakukan sebelum sholat, puasa wajib, dan menyentuh mushaf.",
  items: [
    {
      title: "Penyebab wajib mandi",
      body: "Keluar mani (sengaja/tidak), berhubungan suami-istri, selesai haid, selesai nifas, masuk Islam, dan meninggal dunia (dimandikan oleh keluarga).",
    },
    {
      title: "Niat",
      body: "Aku berniat mandi untuk mengangkat hadats besar karena Allah Ta'ala. Dilakukan saat air pertama menyentuh badan.",
    },
    {
      title: "1. Mencuci kedua tangan 3x",
      body: "Sampai pergelangan, bersih dari kotoran apa pun.",
    },
    {
      title: "2. Membasuh kemaluan dan kotoran",
      body: "Dengan tangan kiri, lalu cuci tangan dengan sabun.",
    },
    {
      title: "3. Berwudhu sempurna",
      body: "Seperti wudhu untuk sholat. Boleh menunda mencuci kaki sampai akhir mandi.",
    },
    {
      title: "4. Menyiram kepala 3x",
      body: "Hingga sampai ke akar rambut. Pastikan tidak ada bagian kulit kepala yang kering.",
    },
    {
      title: "5. Menyiram seluruh tubuh",
      body: "Mulai dari sisi kanan, lalu kiri. Gosok bagian-bagian yang sulit terjangkau (ketiak, pusar, lipatan).",
    },
    {
      title: "6. Cuci kaki",
      body: "Jika tadi ditunda saat wudhu, sekarang waktunya. Pastikan sela-sela jari basah.",
    },
    {
      title: "Yang sering terlupa",
      body: "Wanita: pastikan air sampai ke akar rambut walau diikat ringan. Pria & wanita: gosok kulit kepala.",
    },
  ],
  closing: "Setelah mandi wajib, hatimu kembali bersih untuk menghadap Allah.",
};

const sholatFardhu: LearnTopic = {
  id: "sholat-fardhu",
  slug: "sholat-fardhu",
  category: "fiqih",
  level: "pemula",
  title: "Tata Cara Sholat",
  description: "Langkah dasar sholat 2 rakaat",
  emoji: "🕌",
  intro:
    "Sholat adalah percakapan langsung antara hamba dan Rabb-nya. Mulai dari 2 rakaat sederhana — yang penting hadirkan hati, bukan kesempurnaan gerakan.",
  items: [
    { title: "Berdiri menghadap kiblat", body: "Dengan tenang, kaki sedikit terbuka." },
    { title: "Niat dalam hati", body: "Sesuaikan dengan sholat yang akan ditunaikan." },
    {
      title: "Takbiratul ihram",
      arabic: "ٱللَّٰهُ أَكْبَرُ",
      transliteration: "Allāhu Akbar",
      body: "Angkat kedua tangan sejajar telinga, lalu sedekapkan di dada.",
    },
    { title: "Membaca doa iftitah", body: "Doa pembuka yang lembut, memuji Allah dan menjauhkan diri dari syaitan." },
    { title: "Membaca Al-Fatihah", body: "Surah pembuka yang wajib di setiap rakaat." },
    { title: "Membaca surat pendek", body: "Misalnya Al-Ikhlas, An-Nas, atau Al-Falaq." },
    {
      title: "Ruku'",
      arabic: "سُبْحَانَ رَبِّيَ ٱلْعَظِيمِ",
      transliteration: "Subḥāna rabbiyal-'aẓīm",
      body: "Membungkuk, punggung lurus, tangan di lutut. Baca tasbih 3x.",
    },
    {
      title: "I'tidal",
      arabic: "سَمِعَ ٱللَّٰهُ لِمَنْ حَمِدَهُ",
      transliteration: "Sami'allāhu liman ḥamidah",
      body: "Berdiri kembali dengan tenang.",
    },
    {
      title: "Sujud (2x)",
      arabic: "سُبْحَانَ رَبِّيَ ٱلْأَعْلَىٰ",
      transliteration: "Subḥāna rabbiyal-a'lā",
      body: "Dahi, hidung, telapak tangan, lutut, dan ujung kaki menyentuh sajadah. Baca tasbih 3x. Antara dua sujud, duduk sebentar.",
    },
    { title: "Berdiri untuk rakaat kedua", body: "Ulangi Al-Fatihah dan surat pendek, lalu ruku', i'tidal, dua sujud." },
    {
      title: "Tasyahud akhir",
      body: "Duduk tahiyat akhir, baca tasyahud + sholawat Nabi.",
    },
    {
      title: "Salam ke kanan dan kiri",
      arabic: "ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ",
      transliteration: "Assalāmu 'alaikum wa raḥmatullāh",
      body: "Tutup sholat dengan menoleh ke kanan, lalu ke kiri.",
    },
  ],
  closing:
    "Tidak apa-apa kalau pikiran sempat ke mana-mana. Tarik kembali, dan Allah tetap mendengarkanmu.",
};

const yangMembatalkanSholat: LearnTopic = {
  id: "yang-membatalkan-sholat",
  slug: "yang-membatalkan-sholat",
  category: "fiqih",
  level: "menengah",
  title: "Yang Membatalkan Sholat",
  description: "Hindari, agar sholat tetap sah",
  emoji: "⚠️",
  intro:
    "Beberapa hal membuat sholat batal dan harus diulang. Bukan untuk menakut-nakuti, tapi agar kita lebih khusyu' dan sadar.",
  items: [
    {
      title: "Berbicara dengan sengaja",
      body: "Bukan bacaan sholat. Bahkan satu kata pun di luar bacaan membatalkan sholat.",
    },
    {
      title: "Bergerak banyak di luar gerakan sholat",
      body: "Tiga gerakan berturut-turut yang bukan sholat (misalnya menggaruk berulang) membatalkan. Gerakan kecil tidak masalah.",
    },
    {
      title: "Makan atau minum",
      body: "Walau sedikit, dengan sengaja → batal. Jika tidak sengaja menelan sisa makanan di gigi yang sangat kecil → tidak batal.",
    },
    {
      title: "Tertawa",
      body: "Sampai terdengar dua huruf → batal. Senyum kecil tidak membatalkan.",
    },
    {
      title: "Hadats besar atau kecil",
      body: "Buang angin, kencing, BAB, mengeluarkan mani → batal. Harus wudhu/mandi ulang.",
    },
    {
      title: "Berpaling dari kiblat",
      body: "Membalik tubuh atau dada dari arah kiblat dengan sengaja → batal. Hanya menoleh kepala (tanpa membalik dada) tidak membatalkan.",
    },
    {
      title: "Terkena najis",
      body: "Najis yang tidak dimaafkan jatuh ke pakaian/tempat sholat → batal. Jika bisa segera dibersihkan tanpa banyak gerakan, sholat lanjut.",
    },
    {
      title: "Murtad atau ragu",
      body: "Niat keluar dari Islam (na'udzubillah) atau ragu pada rukun yang sudah dilakukan → batal.",
    },
    {
      title: "Meninggalkan rukun atau syarat",
      body: "Lupa membaca Al-Fatihah, lupa rukuk, sholat tanpa wudhu → batal. Sujud sahwi bisa untuk lupa kecil; tapi rukun tetap harus dilakukan.",
    },
  ],
  closing: "Khusyu' adalah perlindungan terbaik dari batalnya sholat. Mulai dari menjaga pandangan ke tempat sujud.",
};

const sholatSunnah: LearnTopic = {
  id: "sholat-sunnah",
  slug: "sholat-sunnah",
  category: "fiqih",
  level: "menengah",
  title: "Sholat Sunnah",
  description: "Pelengkap yang Allah cintai",
  emoji: "✨",
  intro:
    "Sholat sunnah menambah kedekatan dan menutupi kekurangan sholat fardhu. Pilih satu untuk istiqomah — lebih baik sedikit yang konsisten.",
  items: [
    {
      title: "Sunnah Rawatib (Sebelum/Sesudah Fardhu)",
      body: "12 rakaat sehari yang dianjurkan: 2 sebelum Subuh, 4 sebelum Dzuhur + 2 sesudah, 2 sesudah Maghrib, 2 sesudah Isya. Allah bangun rumah di surga untuk yang istiqomah.",
    },
    {
      title: "Sholat Dhuha",
      body: "2–8 rakaat di pagi hari setelah matahari naik (sekitar 07.00–11.00). Doa rezeki dan keberkahan hari.",
    },
    {
      title: "Sholat Tahajud",
      body: "Sholat malam minimal 2 rakaat setelah tidur. Waktu terbaik: sepertiga malam terakhir. Doa di waktu ini sangat mustajab.",
    },
    {
      title: "Sholat Witir",
      body: "Penutup sholat malam, ganjil 1, 3, 5, atau 7 rakaat. Boleh setelah Isya atau setelah Tahajud.",
    },
    {
      title: "Sholat Tahiyatul Masjid",
      body: "2 rakaat saat pertama kali masuk masjid, sebelum duduk. Bentuk penghormatan rumah Allah.",
    },
    {
      title: "Sholat Istikharah",
      body: "2 rakaat saat bingung memilih. Dilanjutkan doa istikharah memohon yang terbaik dari Allah. Bisa diulang sampai hati merasa tenang.",
    },
    {
      title: "Sholat Tasbih",
      body: "4 rakaat dengan 75x tasbih per rakaat (total 300x). Sangat dianjurkan minimal sekali seumur hidup.",
    },
    {
      title: "Sholat Hajat",
      body: "2 rakaat saat memiliki keperluan khusus. Diakhiri dengan doa hajat dan tawassul kepada Allah.",
    },
    {
      title: "Sholat Tarawih",
      body: "Sholat malam khusus Ramadhan, 8 atau 20 rakaat + Witir. Dilakukan berjamaah lebih utama.",
    },
    {
      title: "Sholat Idul Fitri & Idul Adha",
      body: "2 rakaat di pagi hari raya. Takbir 7x di rakaat pertama, 5x di rakaat kedua, sebelum Al-Fatihah.",
    },
  ],
  closing: "Pilih satu sunnah untuk dijadikan kebiasaan. Allah lebih cinta amal kecil yang istiqomah.",
};

const jamakQashar: LearnTopic = {
  id: "jamak-qashar",
  slug: "jamak-qashar",
  category: "fiqih",
  level: "menengah",
  title: "Jamak & Qashar",
  description: "Keringanan sholat saat safar",
  emoji: "✈️",
  intro:
    "Saat dalam perjalanan jauh, Allah memberi keringanan: menggabung dua sholat (jamak) atau memendekkannya (qashar). Bentuk kasih sayang-Nya pada musafir.",
  items: [
    {
      title: "Syarat boleh qashar",
      body: "Perjalanan minimal sekitar 88 km dengan tujuan halal. Bukan dalam keadaan maksiat. Sebagian ulama menambah: belum sampai 4 hari di tempat tujuan.",
    },
    {
      title: "Cara qashar",
      body: "Sholat 4 rakaat (Dzuhur, Ashar, Isya) → diringkas menjadi 2 rakaat. Subuh & Maghrib tidak diqashar.",
    },
    {
      title: "Jamak Taqdim (Maju)",
      body: "Menggabung 2 sholat di waktu yang awal. Contoh: Dzuhur + Ashar, dilakukan di waktu Dzuhur. Maghrib + Isya di waktu Maghrib.",
    },
    {
      title: "Jamak Ta'khir (Mundur)",
      body: "Menggabung 2 sholat di waktu yang akhir. Contoh: Dzuhur + Ashar di waktu Ashar. Maghrib + Isya di waktu Isya.",
    },
    {
      title: "Jamak Qashar (Gabungan)",
      body: "Menggabung sekaligus memendekkan. Contoh: di Dzuhur, sholat Dzuhur 2 rakaat lalu langsung Ashar 2 rakaat. Total 4 rakaat saja.",
    },
    {
      title: "Niat",
      body: "Niat dalam hati 'aku sholat Dzuhur, qashar/jamak dengan Ashar, karena Allah'. Tidak harus diucapkan.",
    },
    {
      title: "Selain safar",
      body: "Boleh juga jamak (tanpa qashar) saat hujan deras, sakit yang sulit, atau kondisi mendesak. Tapi ini istimewa, jangan dijadikan kebiasaan.",
    },
    {
      title: "Yang penting",
      body: "Keringanan ini agar sholat tidak ditinggalkan, bukan untuk dimudahkan saat tidak perlu. Allah suka rukhsah-Nya digunakan.",
    },
  ],
  closing: "Allah tidak ingin memberatkan. Manfaatkan keringanan-Nya saat memang dibutuhkan.",
};

const puasaRamadhan: LearnTopic = {
  id: "puasa-dasar",
  slug: "puasa-dasar",
  category: "fiqih",
  level: "pemula",
  title: "Puasa Ramadhan",
  description: "Yang membatalkan dan yang menjaga",
  emoji: "🌙",
  intro:
    "Puasa bukan hanya menahan lapar dan haus, tapi juga menjaga lisan, pandangan, dan hati. Mari kenali dasar-dasarnya.",
  items: [
    { title: "Niat sebelum fajar", body: "Untuk puasa Ramadhan, niat dilakukan setiap malam atau sekali untuk sebulan." },
    { title: "Sahur", body: "Sunnah, walau hanya seteguk air. Akhirkan sahur untuk mengikuti sunnah." },
    { title: "Yang membatalkan puasa", body: "Makan & minum dengan sengaja, muntah disengaja, haid & nifas, hubungan suami-istri di siang hari." },
    { title: "Yang tidak membatalkan", body: "Lupa makan/minum, mimpi basah, tidak sengaja menelan ludah, mandi atau berenang sewajarnya." },
    { title: "Menjaga lisan & pandangan", body: "Hindari ghibah, dusta, dan hal yang mengotori puasa. Pahala bisa berkurang walau lapar tetap." },
    {
      title: "Doa berbuka",
      arabic:
        "ذَهَبَ ٱلظَّمَأُ وَٱبْتَلَّتِ ٱلْعُرُوقُ وَثَبَتَ ٱلْأَجْرُ إِنْ شَاءَ ٱللَّٰهُ",
      transliteration:
        "Dzahabaẓ-ẓama'u wabtallatil-'urūqu wa tsabatal-ajru insyā Allāh",
      body: "Telah hilang dahaga, urat-urat telah basah, dan pahala telah tetap insya Allah.",
    },
    { title: "Berbuka dengan kurma atau air", body: "Sunnah berbuka dengan kurma atau air putih sebelum makan berat." },
  ],
  closing:
    "Puasa mengajarkan pengendalian. Setiap rasa lapar yang kamu sabari, mendekatkanmu pada Allah.",
};

const puasaSunnah: LearnTopic = {
  id: "puasa-sunnah",
  slug: "puasa-sunnah",
  category: "fiqih",
  level: "menengah",
  title: "Puasa Sunnah",
  description: "Latihan jiwa di luar Ramadhan",
  emoji: "📅",
  intro:
    "Setelah Ramadhan, banyak puasa sunnah yang menjaga ritme spiritualmu. Pilih satu yang sesuai dengan rutinitasmu.",
  items: [
    {
      title: "Senin & Kamis",
      body: "Hari diangkatnya amal kepada Allah. Rasulullah ﷺ rutin berpuasa di kedua hari ini.",
    },
    {
      title: "Ayyamul Bidh (13, 14, 15 setiap bulan Hijriah)",
      body: "Tiga hari putih saat bulan purnama. Pahalanya seperti puasa sepanjang tahun jika konsisten.",
    },
    {
      title: "6 hari di bulan Syawal",
      body: "Setelah Idul Fitri. Rasulullah ﷺ bersabda: 'Siapa berpuasa Ramadhan + 6 hari Syawal, seperti puasa setahun penuh.' Boleh berurutan atau terpisah.",
    },
    {
      title: "Puasa Asyura (10 Muharram)",
      body: "Menghapus dosa setahun lalu. Dianjurkan tambah 9 atau 11 Muharram untuk membedakan dengan tradisi Yahudi.",
    },
    {
      title: "Puasa Arafah (9 Dzulhijjah)",
      body: "Bagi yang tidak berhaji. Menghapus dosa setahun lalu dan setahun mendatang. Hari paling utama dalam setahun.",
    },
    {
      title: "Puasa Daud",
      body: "Sehari puasa, sehari tidak. Puasa paling utama menurut Rasulullah ﷺ. Berat di awal, ringan setelah terbiasa.",
    },
    {
      title: "Puasa di bulan Sya'ban",
      body: "Bulan persiapan menuju Ramadhan. Rasulullah ﷺ banyak berpuasa di bulan ini.",
    },
    {
      title: "Yang dilarang puasa",
      body: "Hari raya Idul Fitri & Idul Adha, hari Tasyrik (11–13 Dzulhijjah), khusus hari Jumat saja, dan khusus hari Sabtu saja.",
    },
  ],
  closing: "Mulai dari satu hari per minggu — Senin atau Kamis. Itu sudah luar biasa.",
};

const zakat: LearnTopic = {
  id: "zakat",
  slug: "zakat",
  category: "fiqih",
  level: "menengah",
  title: "Zakat",
  description: "Hak harta yang harus dikeluarkan",
  emoji: "🌾",
  intro:
    "Zakat menyucikan harta dan memberkahi sisanya. Bukan beban, tapi hak orang lain yang dititipkan Allah lewat tanganmu.",
  items: [
    {
      title: "Zakat Fitrah — Wajib setiap Muslim",
      body: "Dikeluarkan akhir Ramadhan sebelum sholat Id. Setiap jiwa: 2,5 kg / 3,5 liter makanan pokok (beras di Indonesia). Boleh diuangkan menurut sebagian ulama.",
    },
    {
      title: "Zakat Mal — Dari harta yang berkembang",
      body: "Wajib jika harta sudah mencapai nishab dan haul (1 tahun Hijriah). Kadar umumnya 2,5%.",
    },
    {
      title: "Nishab Emas & Perak",
      body: "Emas: 85 gram. Perak: 595 gram. Jika kepemilikan mencapai nishab dan disimpan setahun → zakat 2,5% dari total.",
    },
    {
      title: "Zakat Perdagangan",
      body: "Jika modal + barang dagangan + laba mencapai nishab emas (85g) dan haul setahun → 2,5%. Hitung pada akhir tahun buku.",
    },
    {
      title: "Zakat Profesi (Penghasilan)",
      body: "Ulama kontemporer mengqiyaskan dengan zakat pertanian: 2,5% dari penghasilan bersih saat diterima, jika setahun mencapai nishab emas.",
    },
    {
      title: "Zakat Pertanian",
      body: "Saat panen. 5% jika diairi dengan biaya, 10% jika tadah hujan. Nishab: 653 kg gabah / 520 kg beras.",
    },
    {
      title: "Zakat Hewan Ternak",
      body: "Sapi, kerbau, kambing, unta. Ada nishab dan kadarnya tersendiri. Hewan piaraan biasa (kucing, ayam pribadi) tidak wajib zakat.",
    },
    {
      title: "8 Asnaf Penerima",
      body: "Fakir, miskin, amil (pengelola), muallaf, riqab (memerdekakan budak), gharimin (terlilit hutang), fi sabilillah, ibnu sabil (musafir kehabisan bekal).",
    },
    {
      title: "Niat",
      body: "Sebut dalam hati: 'Aku berniat mengeluarkan zakat fitrah/mal untuk diriku/keluargaku karena Allah.' Lebih utama saat menyerahkan.",
    },
  ],
  closing: "Harta yang dizakati tidak akan berkurang — justru tumbuh dengan keberkahan.",
};

const sholatJamaah: LearnTopic = {
  id: "sholat-jamaah",
  slug: "sholat-jamaah",
  category: "fiqih",
  level: "pemula",
  title: "Sholat Berjamaah & Jumat",
  description: "Adab makmum, imam, dan sholat Jumat",
  emoji: "🕌",
  intro:
    "Sholat berjamaah pahalanya 27x lipat dari sendiri. Sholat Jumat wajib bagi laki-laki Muslim baligh yang mukim. Kenali aturannya agar nyaman saat berjamaah.",
  items: [
    {
      title: "Pahala berjamaah",
      body: "27 derajat dibanding sholat sendiri. Setiap langkah menuju masjid menggugurkan dosa dan menaikkan derajat. Pintu surga dibuka untuk yang menjaga sholat berjamaah.",
    },
    {
      title: "Adab masuk masjid",
      body: "Kaki kanan masuk dulu sambil baca doa. Sholat Tahiyatul Masjid 2 rakaat sebelum duduk (kecuali waktu sangat sempit). Tidak ribut, tidak menyibakkan jamaah lain.",
    },
    {
      title: "Adab berdiri di shaf",
      body: "Rapatkan dengan tetangga (bahu, kaki). Luruskan shaf. Jangan ada celah — setan mengisi celah. Shaf depan lebih utama, terutama untuk laki-laki.",
    },
    {
      title: "Mengikuti imam",
      body: "Tidak mendahului imam dalam gerakan. Tidak bersamaan. Sedikit setelah imam selesai. 'Imam dijadikan untuk diikuti.'",
    },
    {
      title: "Jika imam keliru",
      body: "Laki-laki: ucapkan 'Subhānallāh.' Wanita: tepukkan tangan. Imam yang sadar akan mengoreksi.",
    },
    {
      title: "Masbuq (terlambat)",
      body: "Jika tertinggal — langsung takbir dan ikuti imam apa pun posisinya. Kekurangan rakaat ditambah setelah imam salam. Mendapat ruku' = mendapat satu rakaat.",
    },
    {
      title: "Sholat Jumat — Hukumnya",
      body: "Wajib bagi laki-laki Muslim, baligh, berakal, sehat, dan mukim (bukan musafir). Wanita boleh sholat Jumat berjamaah, tapi sholat Dzuhur juga sah baginya.",
    },
    {
      title: "Adab sebelum Jumat",
      body: "Mandi, pakai pakaian terbaik, wewangian, sikat gigi. Berangkat lebih awal — sebaiknya saat matahari mulai meninggi. Membaca surah Al-Kahfi sebelumnya.",
    },
    {
      title: "Tata cara Jumat",
      body: "Khutbah dua bagian (rukun) → sholat dua rakaat berjamaah. Saat khutbah, tidak boleh bicara, makan, atau bahkan menyuruh diam. Diamlah dan resapi.",
    },
    {
      title: "Yang membatalkan kewajiban Jumat",
      body: "Sakit yang berat, hujan deras yang menyulitkan, ketakutan akan diri/harta, safar. Boleh diganti dengan Dzuhur 4 rakaat.",
    },
  ],
  closing: "Masjid adalah rumah Allah. Datanglah dengan hati yang bersih, bukan hanya tubuh.",
};

const sholatJenazah: LearnTopic = {
  id: "sholat-jenazah",
  slug: "sholat-jenazah",
  category: "fiqih",
  level: "menengah",
  title: "Sholat Jenazah",
  description: "Mengantar saudara kembali pada Allah",
  emoji: "🤲",
  intro:
    "Setiap kita akan kembali. Sholat jenazah adalah hadiah terakhir untuk saudara seiman — fardhu kifayah. Jika sebagian sudah, gugur kewajiban yang lain. Tapi jika kita yang melakukannya, pahalanya satu qirath (sebesar gunung Uhud).",
  items: [
    {
      title: "Memandikan jenazah",
      body: "Fardhu kifayah. Dimulai dengan menyiram sambil menutupi auratnya, dibersihkan najis, diwudhukan, lalu dimandikan 3, 5, atau 7 kali dengan air dan sabun (lebih utama daun bidara).",
    },
    {
      title: "Mengkafani",
      body: "Laki-laki: 3 lapis kain putih bersih. Wanita: 5 lapis (kerudung, baju, sarung, dan dua kain pembungkus). Tidak perlu mahal, yang penting menutup seluruh tubuh.",
    },
    {
      title: "Sholat jenazah — 4 takbir",
      body: "Berdiri menghadap kiblat, jenazah di depan imam. Tidak ada ruku', tidak ada sujud. Hanya 4 takbir sambil berdiri.",
    },
    {
      title: "Takbir 1 — Al-Fatihah",
      body: "Setelah takbiratul ihram, sedekapkan tangan dan baca Surah Al-Fatihah dalam hati.",
    },
    {
      title: "Takbir 2 — Sholawat",
      arabic:
        "ٱللَّٰهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ …",
      transliteration:
        "Allāhumma ṣalli 'alā Muḥammad…",
      body: "Membaca sholawat Ibrahimiyah lengkap (seperti dalam tasyahud).",
    },
    {
      title: "Takbir 3 — Doa untuk jenazah",
      arabic:
        "ٱللَّٰهُمَّ ٱغْفِرْ لَهُ وَٱرْحَمْهُ وَعَافِهِ وَٱعْفُ عَنْهُ",
      transliteration:
        "Allāhummaghfir lahu warḥamhu wa 'āfihi wa'fu 'anhu",
      body: "Doa khusus untuk si mayit. Untuk perempuan: ganti 'lahu' jadi 'lahā'. Untuk anak: ada doa khusus yang lebih pendek.",
    },
    {
      title: "Takbir 4 — Doa penutup",
      arabic:
        "ٱللَّٰهُمَّ لَا تَحْرِمْنَا أَجْرَهُ وَلَا تَفْتِنَّا بَعْدَهُ وَٱغْفِرْ لَنَا وَلَهُ",
      transliteration:
        "Allāhumma lā taḥrimnā ajrahu wa lā taftinnā ba'dahu",
      body: "Memohon agar pahala mengiring, kita tidak terfitnah setelahnya, dan keluarga diberi kesabaran. Lalu salam ke kanan dan kiri.",
    },
    {
      title: "Mengantar dan mengubur",
      body: "Berjalan tanpa banyak bicara. Liang lahat menghadap kiblat, jenazah di sisi kanan menghadap kiblat. Talqin dibacakan saat dikubur.",
    },
    {
      title: "Adab takziyah",
      body: "Datangi keluarga dengan kalimat penghibur, bukan tangisan berlebihan. Sedekah dan doakan si mayit. Jangan membicarakan keburukannya — ia sudah pulang.",
    },
    {
      title: "Yang dilarang",
      body: "Meratapi berlebihan, merobek pakaian, menampar pipi. Berduka boleh, tapi tetap ridho pada qadar Allah. Maksimal 3 hari berduka, kecuali istri yang ditinggal suami (4 bulan 10 hari).",
    },
  ],
  closing: "Setiap pemakaman adalah peringatan. Doakan saudaramu — suatu hari, kau juga butuh didoakan.",
};

const hukumDarahWanita: LearnTopic = {
  id: "hukum-darah-wanita",
  slug: "hukum-darah-wanita",
  category: "fiqih",
  level: "pemula",
  title: "Hukum Darah Wanita",
  description: "Haid, nifas, istihadhah",
  emoji: "🌸",
  intro:
    "Allah menciptakan tubuh wanita dengan siklus alami. Memahami hukumnya adalah bagian dari mengenal diri sendiri sebagai hamba Allah.",
  items: [
    {
      title: "Haid (Menstruasi)",
      body: "Darah alami yang keluar dari rahim wanita sehat, biasanya setiap bulan. Minimal 1 hari semalam, maksimal 15 hari. Antara dua haid minimal 13 hari suci.",
    },
    {
      title: "Yang dilarang saat haid",
      body: "Sholat (tidak diqadha), puasa (diqadha), thawaf, menyentuh mushaf, membaca Al-Qur'an (sebagian ulama membolehkan membaca tanpa menyentuh), masuk masjid (sebagian membolehkan lewat saja), berhubungan suami-istri.",
    },
    {
      title: "Yang boleh saat haid",
      body: "Berdzikir, berdoa, mendengar Al-Qur'an, mendekap pasangan tanpa hubungan, mengasuh anak, melakukan amal apa pun selain yang dilarang. Tetap pelajari ilmu, tetap hidupkan hatimu.",
    },
    {
      title: "Cara berakhirnya haid",
      body: "Diketahui dari berhentinya darah dan bersihnya tempat keluarnya (lendir putih atau kering). Lalu wajib mandi besar untuk kembali sholat.",
    },
    {
      title: "Mandi setelah haid",
      body: "Niat mandi besar (mengangkat hadats), lalu mandi seperti mandi wajib. Wanita: bisa cukup melepas jepit/ikat rambut tanpa harus dilepas semua, asal air sampai ke akar.",
    },
    {
      title: "Nifas (Pasca Melahirkan)",
      body: "Darah yang keluar setelah melahirkan. Maksimal 40 hari menurut mayoritas ulama (60 hari menurut sebagian). Hukumnya seperti haid: tidak sholat, tidak puasa, dst.",
    },
    {
      title: "Setelah nifas berhenti",
      body: "Walau belum 40 hari, jika darah sudah berhenti dan sudah suci → wajib mandi dan kembali beribadah. Tidak menunggu 40 hari penuh.",
    },
    {
      title: "Istihadhah (Darah Penyakit)",
      body: "Darah di luar masa haid normal — bisa karena sakit, hormonal, atau setelah masa haid biasa. Hukumnya BUKAN seperti haid: tetap sholat, puasa, dan ibadah biasa.",
    },
    {
      title: "Cara wanita istihadhah berwudhu",
      body: "Cuci kemaluan, pakai pembalut, wudhu setiap masuk waktu sholat. Boleh menggabungkan beberapa sholat dengan satu wudhu — Islam memberi keringanan.",
    },
    {
      title: "Membedakan haid dan istihadhah",
      body: "Haid: warnanya kehitaman/merah pekat, kental, bau khas, datang di siklus normal. Istihadhah: lebih cair, di luar siklus, kadang berwarna lebih cerah. Jika ragu, ikuti siklus haid biasanya.",
    },
    {
      title: "Mengganti puasa & thawaf",
      body: "Puasa Ramadhan yang ditinggalkan karena haid → wajib diqadha sebelum Ramadhan berikutnya. Sholat tidak diqadha — Allah memberi keringanan, bukan beban tambahan.",
    },
    {
      title: "Bagi yang masih remaja",
      body: "Tidak perlu malu — ini pintu kewajiban (mukallaf). Ibumu, gurumu, atau muslimah yang lebih senior bisa membimbingmu. Tubuhmu adalah amanah, bukan aib.",
    },
  ],
  closing: "Allah mengetahui keadaanmu. Beribadah dalam keterbatasan tetap dicatat — niatmu yang dihitung.",
};

const manasikHaji: LearnTopic = {
  id: "manasik-haji",
  slug: "manasik-haji",
  category: "fiqih",
  level: "lanjutan",
  title: "Manasik Haji & Umrah",
  description: "Perjalanan suci ke Baitullah",
  emoji: "🕋",
  intro:
    "Haji adalah rukun Islam kelima — kewajiban sekali seumur hidup bagi yang mampu. Umrah adalah versi yang lebih ringkas, bisa kapan saja. Pahami rukunnya agar saat panggilan datang, kau siap.",
  items: [
    {
      title: "Perbedaan Haji & Umrah",
      body: "Haji: dilakukan pada bulan Dzulhijjah, ada wukuf di Arafah, mabit di Muzdalifah & Mina, lempar jumrah. Umrah: bisa kapan saja, lebih singkat, tanpa wukuf.",
    },
    {
      title: "Rukun Haji (5)",
      body: "1) Niat ihram, 2) Wukuf di Arafah (9 Dzulhijjah), 3) Thawaf Ifadhah, 4) Sa'i Shafa-Marwah, 5) Tahallul (mencukur/memotong rambut). Jika satu saja tertinggal, haji tidak sah.",
    },
    {
      title: "Wajib Haji",
      body: "Niat dari miqat, mabit di Muzdalifah & Mina, lempar jumrah, thawaf wada' (perpisahan). Jika tertinggal, bisa diganti dengan dam (denda kambing).",
    },
    {
      title: "1. Ihram dari Miqat",
      body: "Mandi, pakai dua kain putih (laki-laki), wewangian sebelum ihram. Niat di Miqat. Setelah niat, haram melakukan: memotong kuku/rambut, memakai wewangian, menutup kepala (laki-laki), menikah, berhubungan, berburu.",
    },
    {
      title: "Talbiyah",
      arabic:
        "لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ ٱلْحَمْدَ وَٱلنِّعْمَةَ لَكَ وَٱلْمُلْكَ، لَا شَرِيكَ لَكَ",
      transliteration:
        "Labbaika Allāhumma labbaik. Labbaika lā syarīka laka labbaik…",
      body: "Aku datang memenuhi panggilan-Mu ya Allah. Diucapkan terus-menerus dari ihram sampai mulai thawaf.",
    },
    {
      title: "2. Thawaf — 7 Putaran",
      body: "Mengelilingi Ka'bah 7x dengan Ka'bah di sebelah kiri. Mulai dari Hajar Aswad, melambai jika tidak bisa mencium. Doa bebas, atau ada doa tertentu di tiap putaran.",
    },
    {
      title: "Sholat 2 Rakaat di Maqam Ibrahim",
      body: "Setelah thawaf, sholat sunnah 2 rakaat di belakang Maqam Ibrahim. Lalu minum air zamzam.",
    },
    {
      title: "3. Sa'i — Shafa ke Marwah",
      body: "Berjalan kaki bolak-balik 7x. Mengenang Hajar yang mencari air untuk Ismail. Dimulai dari Shafa, berakhir di Marwah.",
    },
    {
      title: "4. Wukuf di Arafah (Tanggal 9 Dzulhijjah)",
      body: "Inti haji. Berdiri/duduk di Arafah dari setelah Dzuhur hingga maghrib. Berdoa, beristighfar, banyak menangis. 'Haji adalah Arafah.'",
    },
    {
      title: "5. Mabit di Muzdalifah",
      body: "Setelah maghrib di Arafah, ke Muzdalifah. Sholat Maghrib & Isya jamak ta'khir. Tidur sebentar sambil mengumpulkan kerikil untuk lempar jumrah besoknya.",
    },
    {
      title: "6. Lempar Jumrah Aqabah (10 Dzulhijjah)",
      body: "Lempar 7 kerikil ke Jumrah Aqabah. Lalu menyembelih hadyu (kurban) dan tahallul awal — boleh ganti pakaian biasa.",
    },
    {
      title: "7. Thawaf Ifadhah",
      body: "Kembali ke Makkah untuk thawaf, lalu sa'i (jika belum). Setelah ini, tahallul tsani — semua larangan ihram berakhir.",
    },
    {
      title: "8. Mabit di Mina (11, 12, 13 Dzulhijjah)",
      body: "Tinggal di Mina, lempar 3 jumrah setiap hari (Ula, Wustha, Aqabah). Boleh nafar awal (selesai 12), atau nafar tsani (selesai 13).",
    },
    {
      title: "9. Thawaf Wada'",
      body: "Sebelum pulang, thawaf perpisahan — 7 putaran terakhir. Pemandangan terindah: melihat Ka'bah untuk terakhir kali, banyak yang menangis.",
    },
    {
      title: "Umrah — Lebih Ringkas",
      body: "Niat ihram dari Miqat → Thawaf 7x → Sa'i Shafa-Marwah 7x → Tahallul (potong rambut). Selesai. Bisa selesai dalam beberapa jam.",
    },
    {
      title: "Persiapan haji",
      body: "Ilmu (manasik), fisik (latihan jalan jauh), finansial (sah dari harta halal), spiritual (taubat, perbaiki hubungan, pelunasan hutang). Mulai persiapan setahun sebelum keberangkatan.",
    },
  ],
  closing: "Allah memanggil hamba-Nya ke Baitullah. Jika belum dipanggil, doakan dan teruskan amal — pintu rahmat tetap terbuka.",
};

const munakahat: LearnTopic = {
  id: "munakahat",
  slug: "munakahat",
  category: "fiqih",
  level: "lanjutan",
  title: "Munakahat (Pernikahan)",
  description: "Setengah dari agama",
  emoji: "💍",
  intro:
    "Rasulullah ﷺ bersabda: 'Siapa menikah, ia telah menyempurnakan setengah agamanya. Maka takutlah pada Allah pada setengah yang lain.' Pernikahan adalah ibadah panjang yang Allah ridhai.",
  items: [
    {
      title: "Hukum Pernikahan",
      body: "Sunnah muakkadah (sangat dianjurkan). Bisa wajib (jika takut zina dan mampu), makruh (jika tidak mampu memenuhi hak), atau haram (jika niat menyakiti). Default: sunnah muakkadah.",
    },
    {
      title: "Rukun Nikah (5)",
      body: "1) Calon suami, 2) Calon istri, 3) Wali (dari pihak perempuan), 4) Dua saksi laki-laki Muslim adil, 5) Ijab qabul. Tanpa salah satu, nikah tidak sah.",
    },
    {
      title: "Wali Nikah",
      body: "Untuk perempuan: ayah → kakek dari ayah → saudara laki-laki kandung → saudara seayah → paman dari ayah → wali hakim. Tanpa wali yang sah, nikah tidak sah (mayoritas mazhab).",
    },
    {
      title: "Mahar",
      body: "Pemberian wajib dari suami untuk istri. Tidak ada batas minimal/maksimal — yang terbaik adalah yang ringan. 'Wanita terbaik adalah yang termurah maharnya.' Bisa berupa apa saja: emas, uang, hafalan Qur'an.",
    },
    {
      title: "Khitbah (Lamaran)",
      body: "Sebelum akad. Boleh melihat calon (wajah dan telapak tangan). Tidak boleh berkhalwat (berdua tanpa mahram), tidak boleh saling sentuh. Tunangan bukan suami-istri.",
    },
    {
      title: "Akad Nikah",
      body: "Wali mengucapkan ijab: 'Aku nikahkan engkau dengan putriku, dengan mahar...' Calon suami menjawab qabul: 'Aku terima nikahnya...' Disaksikan dua saksi.",
    },
    {
      title: "Walimah",
      body: "Sunnah muakkadah — adakan walimah, walau dengan satu kambing. Undang fakir-miskin, jangan hanya orang kaya. Doakan: 'Bārakallāhu laka wa bāraka 'alaika wa jama'a bainakumā fī khairin.'",
    },
    {
      title: "Hak Suami atas Istri",
      body: "Ditaati dalam kebaikan, dijaga kehormatannya, izinnya dimintai untuk keluar rumah jauh, hartanya tidak diberikan ke orang lain tanpa izinnya.",
    },
    {
      title: "Hak Istri atas Suami",
      body: "Mahar dibayar penuh, nafkah (makan, pakaian, tempat tinggal layak), diperlakukan dengan ma'ruf (baik), tidak dipukul wajah, tidak diceraikan tanpa alasan.",
    },
    {
      title: "Yang Haram Dinikahi",
      body: "Mahram nasab (ibu, anak, saudari, bibi, keponakan), mahram persusuan, ipar saat istri masih hidup, dua bersaudara sekaligus, lebih dari 4 istri sekaligus.",
    },
    {
      title: "Talak (Cerai)",
      body: "Halal tapi paling dibenci Allah. 3 talak — dengan batasan. Setelah talak ada masa iddah (3 bulan/3 kali haid). Selama iddah, bisa rujuk tanpa akad baru. Setelah iddah berakhir tanpa rujuk, perlu akad baru.",
    },
    {
      title: "Iddah",
      body: "Masa tunggu wanita setelah cerai: 3 kali haid (perceraian biasa), 4 bulan 10 hari (suami wafat), sampai melahirkan (jika hamil), 3 bulan (jika belum haid/menopause).",
    },
    {
      title: "Pondasi rumah tangga",
      body: "Mawaddah (cinta), rahmah (kasih sayang), sakinah (ketenangan). Komunikasi yang baik, saling memaafkan, bersabar pada kekurangan masing-masing. 'Sebaik-baik kalian adalah yang terbaik bagi keluarganya, dan aku adalah yang terbaik bagi keluargaku.' (Nabi ﷺ)",
    },
  ],
  closing: "Pernikahan bukan akhir cerita, tapi awal perjalanan ibadah panjang. Niatkan untuk Allah, untuk membangun keturunan yang shalih.",
};

const muamalah: LearnTopic = {
  id: "muamalah",
  slug: "muamalah",
  category: "fiqih",
  level: "menengah",
  title: "Muamalah (Ekonomi Islam)",
  description: "Halal-haram dalam transaksi",
  emoji: "🤝",
  intro:
    "Rezeki yang halal jadi penolong, yang haram jadi penghalang doa. Islam mengatur muamalah agar harta menjadi berkah, bukan beban di akhirat.",
  items: [
    {
      title: "Prinsip Dasar",
      body: "Asal mula muamalah adalah boleh, kecuali ada dalil yang melarang. Berbeda dengan ibadah, yang asal mulanya tidak boleh kecuali ada perintahnya.",
    },
    {
      title: "Riba — Diharamkan dengan Tegas",
      body: "Tambahan atas modal pinjaman/utang. Allah berperang kepada pemakannya. 'Satu dirham riba lebih besar dosanya dari 36 kali zina,' (HR. Ahmad). Termasuk: bunga bank konvensional, pinjaman online berbunga.",
    },
    {
      title: "Jenis Riba",
      body: "1) Riba Nasi'ah — penundaan dengan tambahan (utang berbunga). 2) Riba Fadhl — pertukaran barang sejenis tidak setara (1 kg emas dengan 1,1 kg emas).",
    },
    {
      title: "Gharar — Jual Beli Tidak Pasti",
      body: "Transaksi yang mengandung ketidakjelasan. Contoh: menjual ikan di laut yang belum ditangkap, menjual buah yang belum matang, lotere. Salah satu pihak pasti dirugikan.",
    },
    {
      title: "Rukun Jual Beli",
      body: "1) Penjual & pembeli (cakap), 2) Barang & harga (jelas, halal, ada), 3) Ijab qabul (bisa lisan atau perbuatan). Khiyar (hak memilih) berlaku selama belum berpisah.",
    },
    {
      title: "Yang Haram dalam Jual Beli",
      body: "Menjual barang haram (alkohol, babi, riba), menipu (curang timbangan, sembunyikan cacat), memaksa, menjual sebelum kepemilikan, jual beli sistem MLM yang mirip riba.",
    },
    {
      title: "Hutang-Piutang",
      body: "Sangat dianjurkan ditulis (QS Al-Baqarah 282). Pengutang wajib membayar, pemberi pinjaman tidak boleh meminta tambahan (itu riba). Memberi tangguh kepada yang kesulitan adalah pahala besar.",
    },
    {
      title: "Wadi'ah & Mudharabah (Bank Syariah)",
      body: "Wadi'ah: titipan, tanpa bunga. Mudharabah: bagi hasil — modal dari pemilik, kerja dari pengelola, untung-rugi dibagi sesuai kesepakatan. Bank syariah idealnya menggunakan akad ini.",
    },
    {
      title: "Sedekah, Hibah, Wasiat",
      body: "Sedekah: pemberian sukarela, niatkan untuk Allah. Hibah: pemberian saat hidup, harus adil di antara anak. Wasiat: maksimal 1/3 harta untuk selain ahli waris.",
    },
    {
      title: "Pekerjaan yang Haram",
      body: "Bekerja di tempat yang produknya haram (alkohol, riba, pornografi), berdusta untuk kepentingan kerja, mencuri waktu kerja, menerima suap. Cari rezeki halal walau lebih sedikit.",
    },
    {
      title: "Etika Bekerja",
      body: "Bekerja sebagai ibadah. Tepat waktu, jujur, profesional. 'Allah mencintai jika seseorang bekerja, ia menyempurnakan pekerjaannya.' (HR. Baihaqi).",
    },
    {
      title: "Investasi Halal",
      body: "Saham syariah, reksa dana syariah, properti, emas, bisnis nyata. Hindari: forex tanpa underlying, kripto spekulatif, MLM piramida, judi terselubung.",
    },
  ],
  closing: "Harta yang sedikit dengan keberkahan lebih baik dari banyak tanpa berkah. Jujur dalam mencari rezeki = doa yang dikabulkan.",
};

const khusyuSholat: LearnTopic = {
  id: "khusyu-sholat",
  slug: "khusyu-sholat",
  category: "fiqih",
  level: "menengah",
  title: "Khusyu' dalam Sholat",
  description: "Saat tubuh & hati hadir bersama",
  emoji: "🌿",
  intro:
    "Sholat tanpa khusyu' bagai tubuh tanpa ruh. Allah berfirman: 'Sungguh beruntung orang-orang beriman, yaitu yang khusyu' dalam sholatnya.' (Al-Mu'minun: 1-2). Khusyu' bukan kemustahilan — ia bisa dilatih, sedikit demi sedikit.",
  items: [
    {
      title: "Apa itu khusyu'?",
      body: "Hati hadir, tunduk, dan tenang. Sadar bahwa sedang berdiri di hadapan Allah. Bukan tentang menangis atau perasaan tertentu — tentang kesadaran.",
    },
    {
      title: "Mengapa pikiran kabur?",
      body: "Karena hati terikat pada dunia. Saat takbir, dunia tidak tertinggal — ikut masuk ke sholat. Solusinya bukan memaksa fokus, tapi memutus ikatan dunia sebelum masuk sholat.",
    },
    {
      title: "Persiapan: Wudhu yang khusyu'",
      body: "Lambatkan wudhu. Rasakan air. Niatkan bahwa setiap basuhan menggugurkan dosa. Wudhu yang baik adalah pintu sholat yang baik.",
    },
    {
      title: "Datang lebih awal ke masjid",
      body: "Atau bersiap 5 menit sebelum sholat di rumah. Duduk tenang, baca Qur'an sebentar, atau diam dan ingat Allah. Jangan masuk sholat dalam keadaan terburu-buru.",
    },
    {
      title: "Sadari setiap takbir",
      body: "Setiap kali angkat tangan dan ucap 'Allāhu Akbar', tinggalkan sesuatu di luar — pekerjaan, pikiran, kekhawatiran. Allah lebih besar dari apa pun yang sedang menempel di hati.",
    },
    {
      title: "Pahami bacaan",
      body: "Belajar arti Al-Fatihah, surah pendek, doa rukuk, doa sujud. Saat tahu artinya, mulut bicara dan hati ikut. Mulai dari arti satu surah saja.",
    },
    {
      title: "Bayangkan Allah melihatmu",
      body: "Hadits Jibril menyebut: 'Beribadahlah seakan engkau melihat-Nya, jika tidak bisa, ingatlah Dia melihatmu.' Ini definisi ihsan, dan kunci khusyu'.",
    },
    {
      title: "Sujud — momen terdekat",
      body: "Rasulullah ﷺ bersabda: 'Hamba paling dekat dengan Tuhannya saat sujud.' Manfaatkan dengan doa singkat di setiap sujud. Walau hanya sekali per sholat, mulai dari satu sujud.",
    },
    {
      title: "Berdoa sebelum salam",
      body: "Saat tasyahud akhir, sebelum salam — adalah waktu mustajab. Sebut hajat dengan singkat. 'Ya Allah, mudahkan...' 'Ya Allah, lindungilah keluargaku.'",
    },
    {
      title: "Fokus pada satu rakaat dulu",
      body: "Daripada memaksa khusyu' empat rakaat sekaligus, fokus pada satu rakaat — yang pertama atau yang terakhir. Konsisten satu, lalu naikkan.",
    },
    {
      title: "Hindari setan saat sholat",
      body: "Khinzab namanya — setan yang membisikkan urusan dunia saat sholat. Saat terasa, ucapkan 'a'ūdzu billāhi minasy-syaiṭānir-rajīm' dalam hati, lalu tarik diri kembali. Tanpa rasa bersalah berlebihan.",
    },
    {
      title: "Saat lupa rakaat / bacaan",
      body: "Tidak masalah, jangan panik. Sujud sahwi setelah salam (atau sebelum salam) — dua sujud tambahan untuk kekurangan/kelebihan. Allah Maha Pengampun.",
    },
    {
      title: "Sholat yang khusyu' = ringan",
      body: "Anehnya, semakin khusyu' semakin ringan. Tidak terasa lama. Selesai sholat, hati tenang. Itulah tanda Allah menerima.",
    },
    {
      title: "Doa diberi khusyu'",
      arabic:
        "ٱللَّٰهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ قَلْبٍ لَا يَخْشَعُ",
      transliteration: "Allāhumma innī a'ūdzu bika min qalbin lā yakhsya'",
      body: "Ya Allah, aku berlindung dari hati yang tidak khusyu'. Doa Nabi ﷺ — sangat baik dibaca berulang-ulang.",
    },
  ],
  closing: "Khusyu' adalah perjalanan, bukan tujuan. Hari ini lebih baik dari kemarin sudah cukup.",
};

export const fiqihTopics: LearnTopic[] = [
  najis,
  wudhu,
  tayammum,
  mandiWajib,
  hukumDarahWanita,
  sholatFardhu,
  sholatJamaah,
  khusyuSholat,
  yangMembatalkanSholat,
  sholatSunnah,
  jamakQashar,
  sholatJenazah,
  puasaRamadhan,
  puasaSunnah,
  zakat,
  muamalah,
  manasikHaji,
  munakahat,
];
