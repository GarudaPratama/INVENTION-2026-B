$(document).ready(function () {
  // 1. Load Navbar
  $('#navbar').load('./Navigasi/navbar.html', function () {
    $(this).find('img').attr('src', './Navigasi/Logo-9.png');
  });

  // 2. Event Handler Dropdown Fitur
  $(document).on('click', '#btn-fitur', function (e) {
    e.stopPropagation();

    // Muter SVG panah di dalam div utama
    $(this).find('div > svg').toggleClass('rotate-180');

    // Toggle dropdown menu
    $(this)
      .find('ul')
      .toggleClass('opacity-0 invisible translate-y-2 opacity-100 visible translate-y-0');
  });

  // 3. Tutup Dropdown saat Klik di Luar
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#btn-[#btn-fitur]').length) {
      $('#btn-fitur div > svg').removeClass('rotate-180');
      $('#btn-fitur ul')
        .addClass('opacity-0 invisible translate-y-2')
        .removeClass('opacity-100 visible translate-y-0');
    }
  });

  // 4. Logika Pergantian Gambar Mockup HP Berdasarkan Scroll (Smooth Fade)
  $(window).on('scroll', function () {
    if ($('#step-1').length && $('#step-2').length && $('#step-3').length) {
      var scrollPosition = $(window).scrollTop() + $(window).height() / 2;

      var topStep1 = $('#step-1').offset().top;
      var topStep2 = $('#step-2').offset().top;
      var topStep3 = $('#step-3').offset().top;

      var activeStep = 1;
      if (scrollPosition >= topStep3) {
        activeStep = 3;
      } else if (scrollPosition >= topStep2) {
        activeStep = 2;
      } else {
        activeStep = 1;
      }

      // Sembunyikan semua layar HP dengan transisi fade out
      $('.step-screen')
        .removeClass('opacity-100 visible')
        .addClass('opacity-0 invisible');

      // Tampilkan layar HP yang aktif dengan transisi fade in
      $('#img-step-' + activeStep)
        .removeClass('opacity-0 invisible')
        .addClass('opacity-100 visible');
    }
  });
});

// 5. Intersection Observer untuk Animasi Fade In (Scroll Reveal)
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.20 }
  );

  document.querySelectorAll(".reveal, .reveal-throw").forEach((el) => observer.observe(el));
});