$(document).ready(function () {

  // 1. DETEKSI AKURAT PERANGKAT SENTUH (HP / TABLET)
  const isMobileOrTablet =
    /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) ||
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches;

  // =============================================================
  // 2. SMOOTH SCROLL WHEEL (KHUSUS DESKTOP / MOUSE)
  // =============================================================
  if (!isMobileOrTablet) {
    let targetY = window.scrollY;
    let currentY = window.scrollY;

    const EASE_WHEEL = 0.065; // Kecepatan wheel mouse biasa
    const EASE_BUTTON = 0.02; // Kecepatan lambat saat tombol diklik
    let currentEase = EASE_WHEEL;

    function getMaxScroll() {
      return (
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        ) - window.innerHeight
      );
    }

    // Intersepsi roda mouse saja
    window.addEventListener(
      "wheel",
      (e) => {
        if (document.body.classList.contains("overflow-hidden")) return;

        e.preventDefault();
        currentEase = EASE_WHEEL;
        targetY += e.deltaY;
        targetY = Math.max(0, Math.min(targetY, getMaxScroll()));
      },
      { passive: false }
    );

    // Loop Animasi
    function smoothScrollLoop() {
      currentY += (targetY - currentY) * currentEase;

      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
      }

      window.scrollTo(0, currentY);
      requestAnimationFrame(smoothScrollLoop);
    }

    smoothScrollLoop();

    // Trigger untuk tombol di desktop
    window.__setSmoothTarget = function (destination) {
      currentEase = EASE_BUTTON;
      targetY = destination;
    };
  }

  // =============================================================
  // 3. HANDLER TOMBOL / ANCHOR LINK (#) — (HP, TABLET & DESKTOP)
  // =============================================================
  $(document).on("click", 'a[href^="#"]', function (e) {
    const targetId = $(this).attr("href");

    if (targetId === "#" || !targetId) return;

    const $target = $(targetId);

    if ($target.length) {
      e.preventDefault();

      const navbarHeight = $("#navbar").outerHeight() || 0;
      let destination = $target.offset().top - navbarHeight;

      const maxScroll =
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        ) - window.innerHeight;

      destination = Math.max(0, Math.min(destination, maxScroll));

      if (!isMobileOrTablet && typeof window.__setSmoothTarget === "function") {
        // DESKTOP: Jalankan animasi LERP lambat
        window.__setSmoothTarget(destination);
      } else {
        // HP & TABLET: Gunakan window.scrollTo Native (Lancar & Ringan)
        window.scrollTo({
          top: destination,
          behavior: "smooth"
        });
      }
    }
  });

});