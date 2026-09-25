let targetY = window.scrollY,
  currentY = window.scrollY;
const ease = 0.08; // Sedikit dinaikkan agar lebih responsif di HP

function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

function getMaxScroll() {
  return document.body.scrollHeight - window.innerHeight;
}

// 1. Desktop (Mouse Wheel)
window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    targetY += e.deltaY;
    targetY = clamp(targetY, 0, getMaxScroll());
  },
  { passive: false },
);

// 2. HP / Mobile Touch dengan Inersia (Fling Momentum)
let touchStartY = 0;
let lastTouchY = 0;
let velocityY = 0;
let lastTouchTime = 0;

window.addEventListener(
  "touchstart",
  (e) => {
    touchStartY = e.touches[0].clientY;
    lastTouchY = touchStartY;
    lastTouchTime = performance.now();
    velocityY = 0; // Reset kecepatan saat sentuhan baru
  },
  { passive: true },
);

window.addEventListener(
  "touchmove",
  (e) => {
    const touchCurrentY = e.touches[0].clientY;
    const now = performance.now();
    const dt = now - lastTouchTime || 16;

    const deltaY = lastTouchY - touchCurrentY;

    // Hitung kecepatan geseran jari (px/ms)
    velocityY = deltaY / dt;

    lastTouchY = touchCurrentY;
    lastTouchTime = now;

    targetY += deltaY * 1.1;
    targetY = clamp(targetY, 0, getMaxScroll());
  },
  { passive: true },
);

window.addEventListener(
  "touchend",
  () => {
    // Tambahkan lemparan momentum saat jari diangkat berdasarkan kecepatan usapan
    targetY += velocityY * 220;
    targetY = clamp(targetY, 0, getMaxScroll());
  },
  { passive: true },
);

// 3. Render Loop
function smoothScroll() {
  currentY += (targetY - currentY) * ease;
  window.scrollTo(0, currentY);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();

// Penjelasan kode:

// Kode ini adalah trik kustom untuk membuat efek Smooth Scroll (Inertia Scroll). Fungsinya mematikan gerak scroll bawaan browser yang kaku/patah-patah dan menggantinya dengan gerakan meluncur yang mulus (seperti efek di HP iPhone atau website mewah).

//targetY & currentY:

// targetY: Angka koordinat lokasi yang ingin kamu tuju saat jari memutar mouse wheel.

// currentY: Posisi layar kamu saat ini.

// const ease = 0.065: Angka kelenturan animasi (Lerp / Linear Interpolation). Angka 0.065 artinya di setiap frame (detik), layar hanya berjalan 6,5% dari sisa jarak menuju target. Ini yang bikin gerakannya berasa "empuk/berat".

// window.addEventListener("wheel", ...):

// e.preventDefault(): Mematikan fungsi scroll asli browser.

// targetY += e.deltaY: Menghitung seberapa jauh mouse diputar lalu menambahkannya ke variabel tujuan (targetY).

// Math.max & Math.min: Pagar pengaman agar layar tidak bisa di-scroll kebablasan menembus batas paling atas (0) atau batas paling bawah dokumen.

// function smoothScroll():

// currentY += (targetY - currentY) * ease: Rumus matematika untuk mengikis jarak secara perlahan sampai currentY menyamai targetY.

// window.scrollTo(0, currentY): Perintah aktual untuk memindahkan posisi layar browser.

// requestAnimationFrame(smoothScroll): Menjalankan fungsi ini terus-menerus di setiap detik layar berkedip (biasanya 60fps/144fps) agar gerakannya super mulus.

// touchstart:
// Saat jari pertama kali menyentuh layar, kode mencatat posisi awal Y jari (touchStartY = e.touches[0].clientY).

// touchmove:
// Saat jari digeser:

// deltaY = touchStartY - touchCurrentY: Menghitung seberapa jauh jari bergerak dari titik awal.

// targetY += deltaY * 1.2: Mengubah target scroll berdasarkan jarak geseran tersebut. Angka 1.2 adalah sensitivitas usapan (bisa kamu naikkan jika usapan terasa terlalu pendek/berat).

// touchStartY = touchCurrentY: Mengupdate posisi awal untuk perhitungan frame berikutnya selama jari masih menempel.

// Tanpa batas pengaman, targetY bisa bernilai minus (di atas batas top) atau melebihi panjang halaman (di bawah batas bottom).

// getMaxScroll(): Menghitung tinggi maksimal halaman yang bisa di-scroll (tinggi_dokumen - tinggi_layar).

// clamp(val, min, max): Memastikan nilai targetY selalu terkunci di dalam rentang 0 sampai getMaxScroll(), sehingga scroll tidak bablas.
