import type { ParentingTopic } from "@/types";
import { id as t } from "@/lib/i18n/id";

export const seedParenting: ParentingTopic[] = [
  {
    id: "doa",
    slug: "ajarkan-doa",
    title: t.parenting.cards.doa.title,
    description: t.parenting.cards.doa.desc,
    illustration: "doa",
    intro:
      "Doa adalah bahasa cinta antara hamba dan Rabb-nya. Kenalkan si kecil dengan doa-doa pendek yang menemani hari-harinya.",
    steps: [
      {
        title: "Sebelum makan",
        arabic: "بِسْمِ ٱللَّٰهِ",
        transliteration: "Bismillāh",
        body: "Ajarkan dengan riang sebelum suapan pertama. Ucapkan bersama, jangan dipaksa.",
      },
      {
        title: "Setelah makan",
        arabic: "ٱلْحَمْدُ لِلَّٰهِ",
        transliteration: "Alḥamdulillāh",
        body: "Tuntun mereka mengucap syukur. Beri pelukan, bukan tekanan.",
      },
      {
        title: "Sebelum tidur",
        arabic: "بِٱسْمِكَ ٱللَّٰهُمَّ أَمُوتُ وَأَحْيَا",
        transliteration: "Bismika Allāhumma amūtu wa aḥyā",
        body: "Bisikkan di telinga mereka sambil mengusap kepala. Jadikan ritual yang menenangkan.",
      },
      {
        title: "Bangun tidur",
        arabic: "ٱلْحَمْدُ لِلَّٰهِ ٱلَّذِي أَحْيَانَا",
        transliteration: "Alḥamdulillāhilladhī aḥyānā",
        body: "Ajak mereka mensyukuri pagi yang baru, sambil membuka jendela.",
      },
    ],
    closing:
      "Ulangi tanpa mengejar kesempurnaan. Allah melihat usaha lembutmu.",
  },
  {
    id: "sholat",
    slug: "ajarkan-sholat",
    title: t.parenting.cards.sholat.title,
    description: t.parenting.cards.sholat.desc,
    illustration: "sholat",
    intro:
      "Mengenalkan sholat bukan tentang kesempurnaan gerakan, tapi tentang menumbuhkan rindu pada Allah.",
    steps: [
      {
        title: "Bangun rasa, bukan aturan",
        body: "Ceritakan kisah Rasulullah ﷺ saat sholat. Ajak menonton ayah/ibu sholat sambil bermain di sajadah kecilnya.",
      },
      {
        title: "Mulai dari satu rakaat",
        body: "Anak usia 3–5 tahun bisa ikut satu rakaat saja. Pelukan dan pujian setelahnya jauh lebih melekat dari koreksi.",
      },
      {
        title: "Ajarkan gerakan satu per satu",
        body: "Berdiri tegak, ruku', sujud — kenalkan secara bertahap. Sebut nama gerakan dengan nada gembira.",
      },
      {
        title: "Hafalkan bacaan pendek",
        body: "Mulai dari Al-Fatihah dan surat-surat pendek. Nyanyikan bersama saat di mobil atau menjelang tidur.",
      },
      {
        title: "Konsisten, lembut, sabar",
        body: "Rasulullah ﷺ menyuruh sholat di umur 7 tahun. Sebelum itu, fokus pada cinta dulu.",
      },
    ],
    closing: "Tidak apa-apa pelan. Yang penting hangat dan terus.",
  },
  {
    id: "habits",
    slug: "kebiasaan-baik",
    title: t.parenting.cards.habits.title,
    description: t.parenting.cards.habits.desc,
    illustration: "habits",
    intro:
      "Kebiasaan kecil yang dilakukan setiap hari menumbuhkan akar yang kuat. Pilih satu, mulai hari ini.",
    steps: [
      {
        title: "Salam saat masuk rumah",
        body: "Tradisikan ucapan salam saat membuka pintu. Si kecil akan menirunya tanpa diminta.",
      },
      {
        title: "Sedekah satu hari sekali",
        body: "Beri uang receh untuk dimasukkan ke kotak amal. Sekecil apa pun, niatnya yang dibesarkan.",
      },
      {
        title: "Membaca Al-Qur'an 5 menit",
        body: "Cukup 1–2 ayat per hari, di waktu yang sama. Dudukkan di pangkuan, bacakan dengan tenang.",
      },
      {
        title: "Bersyukur sebelum tidur",
        body: "Tanyakan tiga hal yang membuatnya bahagia hari ini. Tutup dengan doa dan ciuman di kening.",
      },
    ],
    closing:
      "Anak meniru lebih banyak dari yang diajarkan. Jadilah yang ingin mereka tiru.",
  },
];

export function findParentingTopic(slug: string) {
  return seedParenting.find((t) => t.slug === slug);
}
