$(document).ready(function () {
  // 1. Load Navbar
  $("#navbar").load("./Navigasi/navbar.html", function () {
    $(this).find("img").attr("src", "./Navigasi/Logo-9.png");
  });

  // Variabel penanda agar kode tidak dieksekusi terus-menerus saat scroll
  let isScrolled = false;

  $(window).on("scroll", function () {
    const scrollTop = $(window).scrollTop();

    // Saat scroll lebih dari 50px DAN belum dalam status scrolled
    if (scrollTop > 50 && !isScrolled) {
      isScrolled = true;

      $("#navbar")
        .addClass(
          "bg-white/90 backdrop-blur-md shadow-md rounded-b-[50px] left-6 right-6 max-sm:rounded-b-[32px] max-sm:left-2 max-sm:right-2",
        )
        .removeClass("left-0 right-0");
    }

    // Saat scroll kurang dari/sama dengan 50px DAN sedang dalam status scrolled
    else if (scrollTop <= 50 && isScrolled) {
      isScrolled = false;

      $("#navbar")
        .removeClass(
          "bg-white/90 backdrop-blur-md shadow-md rounded-b-[50px] left-6 right-6 max-sm:rounded-b-[32px] max-sm:left-2 max-sm:right-2",
        )
        .addClass("left-0 right-0");
    }
  });

  // 4. Logika Pergantian Gambar Mockup HP Berdasarkan Scroll (Smooth Fade)
  $(window).on("scroll", function () {
    if ($("#step-1").length && $("#step-2").length && $("#step-3").length) {
      var scrollPosition = $(window).scrollTop() + $(window).height() / 2;

      var topStep1 = $("#step-1").offset().top;
      var topStep2 = $("#step-2").offset().top;
      var topStep3 = $("#step-3").offset().top;

      var activeStep = 1;

      if (scrollPosition >= topStep3) {
        activeStep = 3;
      } else if (scrollPosition >= topStep2) {
        activeStep = 2;
      } else {
        activeStep = 1;
      }

      // Sembunyikan semua layar HP dengan transisi fade out
      $(".step-screen")
        .removeClass("opacity-100 visible")
        .addClass("opacity-0 invisible");

      // Tampilkan layar HP yang aktif dengan transisi fade in
      $("#img-step-" + activeStep)
        .removeClass("opacity-0 invisible")
        .addClass("opacity-100 visible");
    }
  });

  // 5. FAQ - Buka dan Tutup Pertanyaan
  $(document).on("click", ".faq-header", function () {
    // Ambil FAQ yang sedang diklik
    var item = $(this).closest(".faq-item");

    // Ambil bagian jawaban
    var desc = item.find(".faq-desc");

    // Ambil tombol
    var btn = item.find(".faq-btn");

    // Ambil icon panah
    var icon = item.find(".arrow-icon");

    // Tampilkan atau sembunyikan jawaban dengan animasi
    desc.slideToggle(200);

    // Ganti warna card
    item.toggleClass("bg-[#F3F4EE] bg-transparent");

    // Ganti warna tombol
    btn.toggleClass("bg-[#D9EF78] bg-white");

    // Putar panah
    icon.toggleClass("rotate-180");
  });
});

// 1. Tahan (pause) animasi throw semua ornamen di awal
$(".reveal-throw").css("animation-play-state", "paused");

// Fungsi untuk menjalankan animasi Hero
function startScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const $target = $(entry.target);

          // A. Teks Hero (.reveal) Mulai Muncul
          $target.addClass("active");

          // B. Cari ornamen sayuran di Section ini
          const $parentSection = $target.closest("section");
          const $throws = $parentSection.find(".reveal-throw");

          // C. Tunggu 500ms (.reveal selesai), baru jalankan animasi sayuran
          setTimeout(() => {
            $throws.css("animation-play-state", "running");
          }, 500);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  $(".reveal").each(function () {
    observer.observe(this);
  });
}

// 2. CEK APAKAH USER BARU PERTAMA KALI BUKA WEB (PER SESI TAB)
if (!sessionStorage.getItem("hasSeenSplash")) {
  // --- SKENARIO A: PERTAMA KALI BUKA ---
  setTimeout(() => {
    $("#splash-screen").addClass("opacity-0 pointer-events-none");

    setTimeout(() => {
      $("#splash-screen").remove();
      startScrollAnimations();
      // Simpan penanda bahwa splash sudah pernah tampil
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 300);
  }, 2000); // Tampil 2 detik
} else {
  // --- SKENARIO B: SUDAH PERNAH BUKA (REFRESH / PINDAH HALAMAN) ---
  // Langsung hapus splash screen tanpa nunggu & langsung jalankan animasi hero
  $("#splash-screen").remove();
  startScrollAnimations();
}
