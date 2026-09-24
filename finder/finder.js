$(document).ready(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }, // Efek aktif saat 20% elemen terlihat di layar
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Load Navbar
  $("#navbar").load("../Navigasi/navbar.html", function () {
    $(this).find("img").attr("src", "../Navigasi/Logo-9.png");
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

  // 2. Event Handler Dropdown Fitur
  $(document).on("click", "#btn-fitur", function (e) {
    e.stopPropagation();

    // Muter SVG panah di dalam div utama
    $(this).find("div > svg").toggleClass("rotate-180");

    // Toggle dropdown menu
    $(this)
      .find("ul")
      .toggleClass(
        "opacity-0 invisible translate-y-2 opacity-100 visible translate-y-0",
      );
  });

  // 3. Tutup Dropdown saat Klik di Luar
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#btn-fitur").length) {
      $("#btn-fitur div > svg").removeClass("rotate-180");

      $("#btn-fitur ul")
        .addClass("opacity-0 invisible translate-y-2")
        .removeClass("opacity-100 visible translate-y-0");
    }
  });
});
