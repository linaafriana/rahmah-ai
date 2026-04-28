import type { LearnTopic } from "@/types";

const pengantarIslam: LearnTopic = {
  id: "pengantar-islam",
  slug: "pengantar-islam",
  category: "dasar",
  level: "pemula",
  title: "Pengantar Islam",
  description: "Mulai dari sini — apa itu Islam?",
  emoji: "🌱",
  intro:
    "Selamat datang. Jika kamu baru saja tertarik mengenal Islam, atau lahir Muslim tapi merasa belum tahu banyak — ini tempat yang baik untuk memulai. Tidak ada pertanyaan yang terlalu mendasar.",
  items: [
    {
      title: "Apa itu Islam?",
      body: "Islam berasal dari kata 'salam' (damai) dan 'aslama' (berserah diri). Secara istilah: berserah diri kepada Allah, satu-satunya Tuhan, dan mengikuti tuntunan Nabi Muhammad ﷺ. Islam adalah agama untuk seluruh manusia.",
    },
    {
      title: "Siapa Allah?",
      body: "Allah adalah nama Tuhan dalam bahasa Arab. Dia satu, tidak ada yang menyerupai-Nya, tidak punya anak atau orang tua. Pencipta langit, bumi, dan kamu. Selalu mendengar, selalu dekat dengan hamba-Nya.",
    },
    {
      title: "Siapa Muhammad ﷺ?",
      body: "Nabi terakhir yang Allah utus untuk seluruh umat manusia. Lahir di Makkah tahun 570 M. Beliau bukan Tuhan, hanya manusia biasa yang Allah pilih untuk menyampaikan pesan-Nya. Ucapan ﷺ artinya 'shalawat dan salam atas beliau'.",
    },
    {
      title: "Apa itu Al-Qur'an?",
      body: "Kitab suci Islam, firman Allah yang diturunkan kepada Nabi Muhammad ﷺ selama 23 tahun melalui malaikat Jibril. Berisi 114 surah. Dijaga keasliannya oleh Allah hingga akhir zaman.",
    },
    {
      title: "Bagaimana cara menjadi Muslim?",
      arabic:
        "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ",
      transliteration:
        "Asyhadu an lā ilāha illallāh, wa asyhadu anna Muḥammadan rasūlullāh",
      body: "Dengan mengucap dua kalimat syahadat — 'Aku bersaksi tiada Tuhan selain Allah, dan Muhammad adalah utusan Allah' — dengan keyakinan, seseorang menjadi Muslim. Sederhana itu pintu masuknya.",
    },
    {
      title: "Apa yang dilakukan seorang Muslim?",
      body: "Lima rukun Islam: bersaksi (syahadat), sholat 5 waktu, puasa Ramadhan, membayar zakat, dan haji bagi yang mampu. Plus enam rukun iman dan akhlak yang baik.",
    },
    {
      title: "Apa pahala dan dosa?",
      body: "Pahala adalah catatan kebaikan dari Allah. Dosa adalah catatan keburukan. Akhirnya kita akan dihisab. Tapi rahmat Allah lebih luas dari murka-Nya — pintu taubat selalu terbuka.",
    },
    {
      title: "Bagaimana kalau aku belum tahu apa-apa?",
      body: "Tidak masalah. Allah tidak menuntut kesempurnaan, tapi proses. Mulailah dengan satu hal kecil: belajar wudhu, atau menghafal Al-Fatihah, atau sekadar berdzikir. Setiap langkah dicatat.",
    },
    {
      title: "Bagaimana kalau aku punya banyak dosa?",
      body: "Allah berfirman: 'Wahai hamba-Ku yang melampaui batas terhadap dirimu sendiri, jangan berputus asa dari rahmat Allah. Sesungguhnya Allah mengampuni semua dosa.' (Az-Zumar: 53). Mulai hari ini, lembar baru.",
    },
    {
      title: "Mengapa Islam?",
      body: "Karena Islam menjawab pertanyaan dasar manusia — siapa aku, dari mana, untuk apa — dengan tuntunan yang masuk akal dan menenangkan. Karena Allah memilihmu untuk mengenal-Nya. Itu hadiah, bukan beban.",
    },
    {
      title: "Peta belajar dari sini",
      body: "1) Aqidah — apa yang dipercaya. 2) Tahsin — cara baca Qur'an. 3) Fiqih — cara beribadah. 4) Akhlak — cara berperilaku. 5) Doa — cara bicara dengan Allah. 6) Sirah — kisah Nabi. 7) Hadits — sabda Nabi. Tidak harus urut, ikuti hatimu.",
    },
  ],
  closing: "Setiap orang punya jalannya. Yang penting kamu memulai. Allah lebih mencintai langkah kecil yang konsisten.",
};

export const dasarTopics: LearnTopic[] = [pengantarIslam];
