let targetY = window.scrollY;
let currentY = window.scrollY;

// 1. ATUR KECEPATAN DI SINI
const EASE_WHEEL = 0.065;  // Kecepatan biasa untuk roda mouse (responsif)
const EASE_BUTTON = 0.02;  // Kecepatan LAMBAT untuk tombol (semakin kecil angkanya, makin lambat)

let currentEase = EASE_WHEEL;

// 2. Handler Wheel Mouse
window.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    currentEase = EASE_WHEEL; // Pakai kecepatan mouse wheel biasa
    targetY += e.deltaY;
    targetY = Math.max(
      0,
      Math.min(targetY, document.body.scrollHeight - window.innerHeight)
    );
  },
  { passive: false }
);

// 3. Loop Animasi Utama
function smoothScroll() {
  currentY += (targetY - currentY) * currentEase;
  window.scrollTo(0, currentY);
  requestAnimationFrame(smoothScroll);
}

smoothScroll();

// 4. Handler Klik Tombol / Anchor Link
$(document).ready(function () {
  $(document).on("click", 'a[href^="#"]', function (e) {
    e.preventDefault();

    const targetId = $(this).attr("href");
    const $target = $(targetId);

    if ($target.length) {
      const navbarHeight = $("#navbar").outerHeight() || 0;
      let destination = $target.offset().top - navbarHeight;

      destination = Math.max(
        0,
        Math.min(destination, document.body.scrollHeight - window.innerHeight)
      );

      // PAKAI KECEPATAN LAMBAT KHUSUS SAAT TOMBOL DIKLIK
      currentEase = EASE_BUTTON; 
      targetY = destination;
    }
  });
});