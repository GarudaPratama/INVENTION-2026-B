const databaseArtikel = {
  1: {
    judul: "Kenali Titik Mulaimu dengan Kalkulator BMI",
    gambar: "/assets/cardimg1.png",
    deskripsi:
      "Gizify tidak menghakimi. Masukkan tinggi dan berat badanmu untuk mengetahui target kalori harian.",
    isi: `
      <p>
        Gizify tidak menghakimi. Masukkan tinggi dan berat badanmu
        untuk mengetahui target kalori harian secara presisi.
      </p>
      <p>
        Ini adalah langkah awal sebelum mengatur pola makan harian kamu.
      </p>
    `,
  },

  2: {
    judul: "Bongkar Alternatif: Salmon vs Lele & Tempe",
    gambar: "/assets/cardimg2.png",
    deskripsi:
      "Tidak perlu beli bahan mahal untuk dapat gizi seimbang. Lele dan tempe punya kandungan gizi yang baik.",
    isi: `
      <p>
        Tidak perlu beli bahan mahal untuk dapat gizi seimbang.
        Lele dan Tempe punya kandungan Protein dan Zat Besi yang setara
        bahkan lebih tinggi dari Salmon.
      </p>
    `,
  },

  3: {
    judul: "Panduan Eksekusi Pangan di Pasar Tradisional",
    gambar: "/assets/cardimg3.png",
    deskripsi:
      "Temukan lokasi warteg sehat dan pasar tradisional terdekat dari lokasimu dengan fitur Peta Pangan Gizify.",
    isi: `
      <p>
        Temukan lokasi warteg sehat dan pasar tradisional terdekat
        dari lokasimu dengan fitur Peta Pangan Gizify.
      </p>
    `,
  },

  4: {
    judul: "Mitos Gizi Mahal yang Perlu Kamu Tahu",
    gambar: "/assets/artikelsalad.png",
    deskripsi:
      "Banyak yang mengira sehat itu mahal. Padahal makanan lokal Indonesia sangat melimpah nutrisi.",
    isi: `
      <p>
        Banyak yang mengira sehat itu mahal. Padahal makanan lokal
        Indonesia sangat melimpah nutrisi.
      </p>
    `,
  },

  5: {
    judul: "Cara Menghitung Kebutuhan Kalori Harian",
    gambar: "/assets/cardimg4.png",
    deskripsi:
      "Menghitung kalori bukan berarti menyiksa diri. Ini tentang memberikan bahan bakar yang cukup untuk tubuh.",
    isi: `
      <p>
        Menghitung kalori bukan berarti menyiksa diri.
        Ini tentang memberikan bahan bakar yang cukup untuk tubuh.
      </p>
    `,
  },

  6: {
    judul: "Resep Hemat & Sehat Berbahan Dasar Tempe",
    gambar: "/assets/cardimg5.png",
    deskripsi:
      "Olahan tempe kreatif yang tidak membosankan untuk menu makan harian kamu.",
    isi: `
      <p>
        Olahan tempe kreatif yang tidak membosankan
        untuk menu makan harian kamu.
      </p>
    `,
  },
};

// ===== MENAMPILKAN ARTIKEL DI HALAMAN DAFTAR =====

function tampilkanArtikel(data) {
  $("#daftarArtikel").empty();

  $.each(data, function (id, artikel) {
    const kartuArtikel = `
      <a
        href="detailartikel.html?id=${id}"
        class="flex flex-col rounded-2xl overflow-hidden shadow mt-6 min-h-[550px] bg-[#F1F2ED] mr-2"
      >
        <img
          src="${artikel.gambar}"
          alt="${artikel.judul}"
          class="w-full h-[300px] object-cover"
        />

        <div class="px-8 py-6 pb-8 flex flex-col flex-1">
          <h3
            class="font-rubik font-semibold text-[28px] leading-tight text-[#213D34] mb-2 line-clamp-2 min-h-[70px]"
          >
            ${artikel.judul}
          </h3>

          <p
            class="font-karla font-regular text-[16px] leading-normal text-[#5C6660] mb-8 line-clamp-3 min-h-[72px]"
          >
            ${artikel.deskripsi}
          </p>

          <button
            class="mt-auto relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-[#213D34] transition duration-300 ease-out border-2 border-[#213D34] rounded-full shadow-md group cursor-pointer"
          >
            <span
              class="absolute inset-0 flex items-center justify-center w-full h-full text-[#D9EF78] duration-700 -translate-x-full bg-[#213D34] group-hover:translate-x-0 ease"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </span>

            <span
              class="absolute flex items-center justify-center w-full h-full text-[#213D34] font-karla font-bold transition-all duration-700 transform group-hover:translate-x-full ease"
            >
              Baca Artikel
            </span>

            <span class="relative invisible font-karla font-black">
              Baca Artikel
            </span>
          </button>
        </div>
      </a>
    `;

    $("#daftarArtikel").append(kartuArtikel);
  });
}

// ===== DETAIL ARTIKEL =====

$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if ($("#daftarArtikel").length) {
    tampilkanArtikel(databaseArtikel);
  }

  if (id && databaseArtikel[id]) {
    const artikel = databaseArtikel[id];

    $("#article-title").text(artikel.judul);
    $("#page-title").text(artikel.judul);
    $("#article-content").html(artikel.isi);

    $("#article-image")
      .attr("src", artikel.gambar)
      .attr("alt", artikel.judul)
      .removeClass("hidden");
  } else if ($("#article-title").length && !id) {
    $("#article-title").text("Artikel Tidak Ditemukan");
  }
});

// ===== ANIMASI SCROLL REVEAL =====

document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  reveals.forEach(function (reveal) {
    observer.observe(reveal);
  });
});

// ===== SEARCH BAR =====

$(document).on("input", "#searchArtikel", function () {
  if ($(this).val().length > 0) {
    $("#clearSearch").removeClass("hidden");
  } else {
    $("#clearSearch").addClass("hidden");
  }
});

$(document).on("click", "#clearSearch", function () {
  $("#searchArtikel").val("").focus();
  $(this).addClass("hidden");
});

// navbar

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
        "bg-white/90 backdrop-blur-md shadow-md rounded-b-[50px] left-6 right-6",
      )
      .removeClass("left-0 right-0");
  }

  // Saat scroll kurang dari/sama dengan 50px DAN sedang dalam status scrolled

  else if (scrollTop <= 50 && isScrolled) {
    isScrolled = false;

    $("#navbar")
      .removeClass(
        "bg-white/90 backdrop-blur-md shadow-md rounded-b-[50px] left-6 right-6",
      )
      .addClass("left-0 right-0");
  }
});

// 2. Logika Dropdown Navigasi

$(document).on("click", "#btn-fitur", function (e) {
  e.stopPropagation();

  $(this).find("div > svg").toggleClass("rotate-180");

  $(this)
    .find("ul")
    .toggleClass(
      "opacity-0 invisible translate-y-2 opacity-100 visible translate-y-0",
    );
});

$(document).on("click", function (e) {
  if (!$(e.target).closest("#btn-fitur").length) {
    $("#btn-fitur div > svg").removeClass("rotate-180");

    $("#btn-fitur ul")
      .addClass("opacity-0 invisible translate-y-2")
      .removeClass("opacity-100 visible translate-y-0");
  }
});