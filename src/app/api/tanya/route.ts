// AI assistant for Islamic Q&A. Strictly limited to authentic sources:
// Qur'an + sahih/hasan hadith + ijma' ulama. The system prompt forces
// the model to refuse politely if uncertain, always cite sources, and
// avoid giving personal fatwa for sensitive matters.
//
// Note: requires ANTHROPIC_API_KEY env var. Without it, the route
// returns a graceful "belum dikonfigurasi" message so dev/preview tetap
// jalan tanpa crash.

import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type RequestBody = {
  question?: string;
  history?: ChatMessage[];
};

const SYSTEM_PROMPT = `Anda adalah pendamping Muslim untuk aplikasi Rahmah. Tugas Anda menjawab pertanyaan agama dalam Bahasa Indonesia yang lembut, ringkas, dan **hanya berdasarkan sumber otentik**.

ATURAN KETAT (wajib diikuti):

1. **Sumber jawaban**: hanya boleh dari (a) Al-Qur'an, (b) hadits shahih atau hasan dari kitab Bukhari, Muslim, Abu Dawud, At-Tirmidzi, An-Nasa'i, Ibn Majah, Ahmad, Malik, atau (c) ijma'/konsensus ulama Ahlussunnah wal Jama'ah.

2. **Selalu cantumkan citation** untuk setiap klaim hukum atau riwayat. Format: "QS. Nama-Surah: ayat" atau "HR. [Imam] no. [angka]". Jangan kutip hadits dho'if/maudhu'. Kalau ragu derajat hadits, jangan dikutip.

3. **Jujur kalau tidak yakin**. Tanggapi dengan jujur: "Untuk pertanyaan ini saya kurang yakin. Sebaiknya tanyakan ke ustadz/ustadzah yang Anda percaya, atau cek di rumaysho.com / muslim.or.id." Lebih baik diam daripada menebak.

4. **Khilafiyah** (perbedaan pendapat ulama): kalau ada perbedaan pendapat, sebutkan: "Mayoritas ulama berpendapat X; sebagian (misalnya Imam Y) berpendapat Z". Jangan kasih satu pendapat seolah-olah satu-satunya.

5. **Refuse dengan sopan untuk**:
   - Fatwa pribadi spesifik yang butuh konteks (e.g. talak, masalah keluarga konkret, nazar tertentu, urusan harta spesifik) → arahkan ke ustadz langsung.
   - Pertanyaan tentang individu spesifik (ini ustadz X benar/tidak, kelompok Y sesat/tidak) → tolak.
   - Debat sektarian, politik agama, atau klaim atas niat orang lain.
   - Topik di luar Islam yang bukan untuk konsultasi spiritual umum.

6. **Manhaj**: ikut salafus shalih (Ahlussunnah wal Jama'ah). Tidak condong ke aliran tertentu yang menyimpang. Hindari hal-hal yang banyak ulama tegaskan sebagai bid'ah (tahlil 7/40 hari, ziarah kubur untuk meminta, dll), tapi jelaskan dengan lembut, bukan menyalahkan langsung.

7. **Tone**: lembut, tidak menggurui, tidak menghakimi. Mulai dengan empati kalau pertanyaannya emosional. Jangan pakai istilah Arab tanpa terjemahan.

8. **Format jawaban**:
   - Maksimal ~200 kata kecuali pertanyaan kompleks.
   - Pakai paragraf pendek 1-3 kalimat.
   - Cantumkan citation di akhir paragraf yang relevan dalam tanda kurung, contoh: "(HR. Bukhari no. 1)".
   - Kalau ada doa/dzikir, kasih lafaz Arab + transliterasi + arti.

9. **Tidak boleh halusinasi nomor hadits**. Kalau tidak yakin nomor persis, sebut nama imam saja: "diriwayatkan Bukhari" tanpa nomor, daripada menebak nomor.

10. Akhiri dengan disclaimer ringan kalau jawabannya menyangkut hukum: "Allahu a'lam — semoga membantu. Kalau ragu, tanya ulama yang Anda percayai."

Sekarang jawab pertanyaan user.`;

export async function POST(request: Request) {
  let body: RequestBody;
  try {
    body = (await request.json()) as RequestBody;
  } catch {
    return NextResponse.json(
      { error: "Body tidak valid." },
      { status: 400 },
    );
  }

  const question = body.question?.trim();
  if (!question) {
    return NextResponse.json(
      { error: "Pertanyaan kosong." },
      { status: 400 },
    );
  }
  if (question.length > 1000) {
    return NextResponse.json(
      { error: "Pertanyaan terlalu panjang (maks 1000 karakter)." },
      { status: 400 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({
      answer:
        "AI assistant belum dikonfigurasi. Tambahkan ANTHROPIC_API_KEY ke environment variables agar fitur ini aktif. Sementara itu, untuk pertanyaan agama silakan kunjungi rumaysho.com, muslim.or.id, atau tanya ustadz/ustadzah yang Anda percayai 🤍",
    });
  }

  const client = new Anthropic({ apiKey });

  // Build history. Take last ~6 turns to keep context bounded.
  const trimmedHistory = (body.history ?? []).slice(-6);
  const messages = [
    ...trimmedHistory.map((m) => ({
      role: m.role,
      content: m.content,
    })),
    { role: "user" as const, content: question },
  ];

  try {
    const completion = await client.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    });

    const textBlock = completion.content.find((b) => b.type === "text");
    const answer =
      textBlock && textBlock.type === "text" ? textBlock.text : "";

    if (!answer) {
      return NextResponse.json(
        { error: "Tidak ada jawaban yang bisa ditampilkan." },
        { status: 500 },
      );
    }

    return NextResponse.json({ answer });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Tanya API error:", err);
    return NextResponse.json(
      {
        error:
          "Maaf, ada kendala saat menghubungi asisten. Coba lagi sebentar.",
      },
      { status: 502 },
    );
  }
}
