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

  // Jika hasil pencarian kosong
  if (Object.keys(data).length === 0) {
    $("#daftarArtikel").html(`
      <div class="col-span-full text-center py-12 text-gray-500 font-karla">
        <p class="text-xl font-semibold">Artikel tidak ditemukan.</p>
        <p class="text-sm mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
      </div>
    `);
    return;
  }

  $.each(data, function (id, artikel) {
    // Tombol di dalam <a> diganti dari <button> ke <div> agar valid HTML
    const kartuArtikel = `
      <a
        href="detailartikel.html?id=${id}"
        class="flex flex-col rounded-2xl overflow-hidden shadow mt-6 min-h-[550px] bg-[#F1F2ED] mr-2 transition-transform duration-300 hover:-translate-y-1"
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

          <div
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
          </div>
        </div>
      </a>
    `;

    $("#daftarArtikel").append(kartuArtikel);
  });
}

$(document).ready(function () {

  $("body").addClass("ready");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Jika berada di halaman daftar artikel
  if ($("#daftarArtikel").length) {
    tampilkanArtikel(databaseArtikel);
  }

  // Jika berada di halaman detail artikel
  if ($("#article-title").length) {
    if (id && databaseArtikel[id]) {
      const artikel = databaseArtikel[id];

      $("#article-title").text(artikel.judul);
      $("#page-title").text(artikel.judul);
      $("#article-content").html(artikel.isi);

      $("#article-image")
        .attr("src", artikel.gambar)
        .attr("alt", artikel.judul)
        .removeClass("hidden");
    } else {
      // Penanganan jika ID tidak terdaftar atau tidak ada ID di URL
      $("#article-title").text("Artikel Tidak Ditemukan");
      $("#article-content").html(`
        <div class="py-8 text-center font-karla">
          <p class="text-lg text-gray-600">Maaf, artikel yang kamu cari tidak tersedia atau telah dihapus.</p>
          <a href="artikel.html" class="inline-block mt-4 px-6 py-2 bg-[#213D34] text-[#D9EF78] rounded-full font-bold text-sm">
            &larr; Kembali ke Daftar Artikel
          </a>
        </div>
      `);
      $("#article-image").addClass("hidden");
    }
  }
});

// ===== ANIMASI SCROLL REVEAL =====
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 },
  );

  document
    .querySelectorAll(".reveal")
    .forEach((el) => observer.observe(el));
});

// ===== FITUR PENCARIAN & RESET ARTIKEL =====
$(document).on("input", "#searchArtikel", function () {
  const keyword = $(this).val().toLowerCase().trim();

  if (keyword.length > 0) {
    $("#clearSearch").removeClass("hidden");
  } else {
    $("#clearSearch").addClass("hidden");
  }

  // Filter artikel berdasarkan judul atau deskripsi
  const hasilFilter = {};
  $.each(databaseArtikel, function (id, artikel) {
    if (
      artikel.judul.toLowerCase().includes(keyword) ||
      artikel.deskripsi.toLowerCase().includes(keyword)
    ) {
      hasilFilter[id] = artikel;
    }
  });

  // Render ulang hasil filter
  if ($("#daftarArtikel").length) {
    tampilkanArtikel(hasilFilter);
  }
});

$(document).on("click", "#clearSearch", function () {
  $("#searchArtikel").val("").focus();
  $(this).addClass("hidden");

  // Reset tampilan ke seluruh artikel
  if ($("#daftarArtikel").length) {
    tampilkanArtikel(databaseArtikel);
  }
});

// ===== LOAD NAVBAR & ANIMASI SCROLL NAVBAR =====
$("#navbar").load("../Navigasi/navbar.html", function () {
  $(this).find("img").attr("src", "../Navigasi/Logo-9.png");
});

let isScrolled = false;

$(window).on("scroll", function () {
  const scrollTop = $(window).scrollTop();

  if (scrollTop > 50 && !isScrolled) {
    isScrolled = true;

    $("#navbar")
      .addClass(
        "bg-white/90 backdrop-blur-md shadow-md rounded-b-[50px] left-6 right-6",
      )
      .removeClass("left-0 right-0");
  } else if (scrollTop <= 50 && isScrolled) {
    isScrolled = false;

    $("#navbar")
      .removeClass(
        "bg-white/90 backdrop-blur-md shadow-md rounded-b-[50px] left-6 right-6",
      )
      .addClass("left-0 right-0");
  }
});

// ===== LOGIKA DROPDOWN NAVIGASI =====
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