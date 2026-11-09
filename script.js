/* ============================================================
   KUIS HUKUM INDONESIA
   Tambah / ubah soal di array QUESTIONS.
   answer = nomor opsi yang benar (mulai dari 0).
   ============================================================ */

const TOTAL_QUESTIONS = 10;

const QUESTIONS = [
  {
    category: 'PIH (PENGANTAR ILMU HUKUM)',
    story: 'PIH sebagai cabang dari ilmu pengetahuan harus memperhatikan prasyarat pokok,yaitu logis, sistematis, dan metodis sehingga dapat diuji kebenarannya.',
    question: 'suatu penggambaran terhadap sesuatu gejala hukum melalui alur berpikir secara?',
    options: ['1. rasional(logis), 2. suatu pemaparan yang runtut( sistematis), 3. melalui teknik pendekatan tertentu (metodis)'],
    answer: 0,
    explain: '1. rasional(logis), 2. suatu pemaparan yang runtut( sistematis), 3. melalui teknik pendekatan tertentu (metodis).'
  },
  {
    category: 'PIH (PENGANTAR ILMU HUKUM)',
    story: 'PIH memberikan landasan guna mendukung mata kuliah lain sehingga dapat membantu memudahkan dan melancarkan studi mata kuliah hukum yang bukan bersifat pengantar lagi.',
    question: 'ruang lingkup pembahasan PIH antara lain?',
    options: ['1. mempelajari dasar-dasar hukum, termasuk PIH dalam arti sempit,dan pengantar hukum indonesia (PHI), 2. mempelajari ilmu hukum secara keseluruhan dalam garis besar, 3. memperkenalkan konsep-konsep,generalisasi-generalisasi, dan teori hukum umum;dan, 4. memperkenalkan pengertian-pengertian dan asas-asas hukum'],
    answer: 0,
    explain: '1. mempelajari dasar-dasar hukum, termasuk PIH dalam arti sempit,dan pengantar hukum indonesia (PHI), 2. mempelajari ilmu hukum secara keseluruhan dalam garis besar, 3. memperkenalkan konsep-konsep,generalisasi-generalisasi, dan teori hukum umum;dan, 4. memperkenalkan pengertian-pengertian dan asas-asas hukum.'
  },
  {
    category: 'PIH (PENGANTAR ILMU HUKUM)',
    story: 'PIH merupakan dasar dari ilmu hukum,tetapi penjelasan ilmu hukum itu sendiri belum dijelaskan secara garis besar.",
    question: 'Pengertian Ilmu hukum terbagi dalam dua arti, yaitu arti luas dan arti sempit?",
    options: ['1. ilmu hukum dalam arti luas, yaitu ilmu yang mencakup dan membicarakan segala hal yang berhubungan dengan hukum yang bertujuan untuk memperoleh pengetahuan tentang segala hal dan semua seluk-beluk mengenai hukum (Satjipto Rahardjo), 2. ilmu hukum dalam arti sempit, yaitu ilmu yang mempelajari makna objektif tata hukum positif yang disebut dogmatik hukum (ajaran hukum) (Radbruch)'],
    answer: 0,
    explain: '1. ilmu hukum dalam arti luas, yaitu ilmu yang mencakup dan membicarakan segala hal yang berhubungan dengan hukum yang bertujuan untuk memperoleh pengetahuan tentang segala hal dan semua seluk-beluk mengenai hukum (Satjipto Rahardjo), 2. ilmu hukum dalam arti sempit, yaitu ilmu yang mempelajari makna objektif tata hukum positif yang disebut dogmatik hukum (ajaran hukum) (Radbruch).'
  },
  {
    category: 'Hukum Pidana',
    story: 'Andi ditangkap polisi atas dugaan pencurian. Media sudah menyebutnya 'pelaku', padahal belum ada putusan pengadilan.',
    question: 'Asas apa yang seharusnya dihormati?',
    options: ['Asas legalitas', "Asas praduga tak bersalah", "Asas retroaktif", "Asas lex specialis"],
    answer: 1,
    explain: 'Setiap orang dianggap tidak bersalah sampai ada putusan pengadilan yang berkekuatan hukum tetap.'
  },
  {
    category: 'Hukum Pidana',
    story: 'Seseorang dituntut atas perbuatan yang pada saat dilakukan belum diatur sebagai tindak pidana.',
    question: 'Asas apa yang dilanggar?',
    options: ["Asas legalitas", "Asas oportunitas", "Ne bis in idem", "Lex posterior"],
    answer: 0,
    explain: 'Asas legalitas: tidak ada perbuatan yang dapat dipidana tanpa aturan pidana yang sudah ada sebelumnya.'
  },
  {
    category: 'Hukum Pidana',
    story: 'Kamu sedang membahas pembaruan hukum pidana nasional di Indonesia.',
    question: 'Kapan KUHP nasional (UU 1/2023) mulai berlaku?',
    options: ["17 Agustus 2025", "1 Januari 2030", "2 Januari 2026", "2 Januari 2023"],
    answer: 2,
    explain: 'KUHP nasional (UU 1/2023) berlaku sejak 2 Januari 2026, tiga tahun setelah diundangkan.'
  },
  {
    category: "Hukum Perdata",
    story: 'Budi meminjam Rp5 juta dari Sinta dan berjanji membayar bulan depan. Ia tidak membayar, tapi tidak ada tipu muslihat, murni utang-piut'ng.',
    question: 'Ini termasuk apa?',
    options: ["Pencurian", "Wanprestasi", "Pemalsuan", "Makar"],
    answer: 1,
    explain: 'Ingkar janji dalam perjanjian disebut wanprestasi, ranahnya hukum perdata.'
  },
  {
    category: "Hukum Perdata",
    story: 'Karena lalai, moil Tono menabrak pagar rumah tetangga hingga rusak. Keduanya tidak punya perjanjian apa pun.',
    question: 'Dasar gugatan perdata tetangganya adalah...',
    options: ["Wanprestasi", "Daluwarsa", "Perbuatan melawan hukum", "Pailit"],
    answer: 2,
    explain: 'Perbuatan yang melanggar hukum dan merugikan orang lain mewajibkan pelakunya mengganti kerugian (Pasal 1365 KUH Perdata).'
  },
  {
    category: "Hukum Keluarga",
    story: 'Dua calon pengantin bertanya soal syarat usia dalam UU Perkawinan setelah revisi tahun 2019.',
    question: 'Berapa batas usia minimal menikah?',
    options: ["16 tahun", "18 tahun", "19 tahun", "21 tahun"],
    answer: 2,
    explain: 'UU 16/2019 menetapkan usia minimal 19 tahun untuk laki-laki dan perempuan.'
  },
  {
    category: "Hak Kekayaan Intelektual",
    story: 'Dina menggambar ilustrasi dan mengunggahnya ke media sosial, tapi belum mendaftarkannya. Lalu ada yang menjiplaknya.',
    question: 'Apakah Dina tetap punya perlindungan hak cipta?',
    options: [
      'Tidak, harus didaftarkan dulu',
      'Ya, hak cipta timbul otomatis saat ciptaan diwujudkan',
      'Tidak, harus lewat notaris',
      'Ya, tapi hanya 1 tahun'
    ],
    answer: 1,
    explain: 'Hak cipta menganut prinsip deklaratif: perlindungan lahir otomatis sejak ciptaan diwujudkan secara nyata.'
  },
  {
    category: 'Hukum Konsumen',
    story: 'Sebuah toko online menjual barang yang tidak sesuai dengan deskripsi di iklannya.',
    question: 'Hak konsumen apa yang dilanggar?',
    options: [
      'Hak atas informasi yang benar, jelas, dan jujur',
      'Hak memilih partai politik',
      'Hak atas pensiun',
      'Hak imunitas'
    ],
    answer: 0,
    explain: 'UU Perlindungan Konsumen menjamin hak atas informasi yang benar, jelas, dan jujur tentang barang.'
  },
  {
    category: "Hukum Siber",
    story: 'Sebuah aplikasi pinjaman online membocorkan data KTP dan nomor HP penggunanya.',
    question: 'UU yang paling relevan adalah...',
    options: ["UU Pelayaran", "UU Kehutanan", "UU Pelindungan Data Pribadi", "UU Penanaman Modal"],
    answer: 2,
    explain: 'UU 27/2022 tentang Pelindungan Data Pribadi mengatur kewajiban pengelola data dan hak pemilik data.'
  },
  {
    category: "Hak Asasi Manusia",
    story: 'Negara dalam keadaan darurat dan membatasi berbagai kebebasan warga.',
    question: 'Hak mana yang tidak boleh dikurangi dalam keadaan apa pun menurut Pasal 28I UUD 1945?',
    options: [
      'Hak berkumpul',
      'Hak bergerak bebas',
      'Hak menyampaikan pendapat di muka umum',
      'Hak untuk hidup'
    ],
    answer: 3,
    explain: 'Hak untuk hidup termasuk hak yang tidak dapat dikurangi dalam keadaan apa pun (non-derogable rights).'
  },
  {
    category: "Hukum Administrasi",
    story: 'Izin usaha Pak Hasan dicabut sepihak oleh seorang pejabat tanpa prosedur yang jelas. Ia ingin menggugat keputusan itu.',
    question: 'Pengadilan mana yang berwenang?',
    options: ["Pengadilan Niaga", "Pengadilan Tata Usaha Negara", "Pengadilan Agama", "Pengadilan Militer"],
    answer: 1,
    explain: 'Sengketa atas keputusan pejabat tata usaha negara diadili oleh PTUN.'
  },
  {
    category: "Lembaga Peradilan",
    story: 'Ada laporan seorang hakim berperilaku tidak etis di dalam dan di luar persidangan.',
    question: 'Lembaga mana yang berwenang menjaga kehormatan dan perilaku hakim?',
    options: ["Komisi Yudisial", "KPU", "Bawaslu", "Komnas Perempuan"],
    answer: 0,
    explain: 'Komisi Yudisial bertugas menjaga dan menegakkan kehormatan, keluhuran martabat, dan perilaku hakim.'
  }
];

/* ---------------- Util ---------------- */
const $ = (id) => document.getElementById(id);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(id).classList.add("active");
}

function getBest() {
  try { return localStorage.getItem("kuisHukumBest"); } catch (e) { return null; }
}
function setBest(v) {
  try { localStorage.setItem("kuisHukumBest", String(v)); } catch (e) { /* abaikan */ }
}

/* ---------------- State ---------------- */
let queue = [];
let current = null;
let index = 0;
let score = 0;
let locked = false;
let wrongList = [];

/* ---------------- Alur kuis ---------------- */
function startQuiz() {
  queue = shuffle(QUESTIONS).slice(0, TOTAL_QUESTIONS);
  index = 0;
  score = 0;
  wrongList = [];
  showScreen("screen-quiz");
  loadQuestion();
}

function loadQuestion() {
  locked = false;
  const q = queue[index];

  // acak urutan opsi tapi tetap lacak yang benar
  const opts = shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer })));
  current = { ...q, opts };

  $("counter").textContent = `Soal ${index + 1}/${queue.length}`;
  $("category").textContent = q.category;
  $("progress-bar").style.width = (index / queue.length) * 100 + "%";
  $("story").textContent = q.story;
  $("question").textContent = q.question;
  $("feedback").classList.add("hidden");

  const box = $("options");
  box.innerHTML = "";
  opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt.text;
    btn.addEventListener("click", () => answer(i));
    box.appendChild(btn);
  });
}

function answer(choice) {
  if (locked) return;
  locked = true;

  const buttons = [...document.querySelectorAll(".option")];
  buttons.forEach((b) => (b.disabled = true));

  const correctIndex = current.opts.findIndex((o) => o.correct);
  buttons[correctIndex].classList.add("correct");

  const title = $("feedback-title");
  if (choice === correctIndex) {
    score++;
    title.className = "good";
    title.textContent = "✅ Benar!";
  } else {
    buttons[choice].classList.add("wrong");
    title.className = "bad";
    title.textContent = "❌ Kurang tepat";
    wrongList.push({
      story: current.story,
      question: current.question,
      yours: current.opts[choice].text,
      right: current.opts[correctIndex].text,
      explain: current.explain
    });
  }

  $("feedback-text").textContent = current.explain;
  $("btn-next").textContent = index + 1 >= queue.length ? "Lihat Hasil" : "Soal Berikutnya";
  $("feedback").classList.remove("hidden");
}

function next() {
  if (index + 1 >= queue.length) {
    showResult();
    return;
  }
  index++;
  loadQuestion();
}

function showResult() {
  const total = queue.length;
  const percent = Math.round((score / total) * 100);

  $("res-score").textContent = score;
  $("res-total").textContent = total;
  $("res-percent").textContent = `Nilai kamu: ${percent}%`;

  let msg;
  if (percent >= 90) msg = "Mantap! Pemahaman hukummu sangat baik.";
  else if (percent >= 70) msg = "Bagus! Sedikit lagi sempurna.";
  else if (percent >= 50) msg = "Lumayan. Baca lagi pembahasannya lalu coba ulang.";
  else msg = "Jangan menyerah, pelajari pembahasan di bawah lalu coba lagi.";
  $("res-message").textContent = msg;

  // simpan skor terbaik
  const best = getBest();
  if (best === null || score > parseInt(best, 10)) setBest(score);
  $("best").textContent = `${getBest()}/${total}`;

  // review soal yang salah
  const review = $("review");
  review.innerHTML = "";
  if (wrongList.length > 0) {
    const h = document.createElement("h3");
    h.textContent = "Soal yang perlu dipelajari:";
    review.appendChild(h);

    wrongList.forEach((w) => {
      const item = document.createElement("div");
      item.className = "review-item";

      const q = document.createElement("div");
      q.innerHTML = "<strong></strong>";
      q.firstChild.textContent = w.question;

      const y = document.createElement("div");
      y.className = "your";
      y.textContent = "Jawabanmu: " + w.yours;

      const r = document.createElement("div");
      r.className = "right";
      r.textContent = "Yang benar: " + w.right;

      const e = document.createElement("div");
      e.textContent = w.explain;

      item.append(q, y, r, e);
      review.appendChild(item);
    });
  }

  showScreen("screen-result");
}

/* ---------------- Events ---------------- */
$("btn-start").addEventListener("click", startQuiz);
$("btn-restart").addEventListener("click", startQuiz);
$("btn-next").addEventListener("click", next);

(function init() {
  const best = getBest();
  $("best").textContent = best !== null ? `${best}/${TOTAL_QUESTIONS}` : "-";
})();
