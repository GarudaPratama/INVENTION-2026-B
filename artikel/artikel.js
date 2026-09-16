// Database sederhana 6 artikel
const databaseArtikel = {
  1: {
    judul: "Kenali Titik Mulaimu dengan Kalkulator BMI",
    gambar: "/assets/cardimg1.png",
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
    gambar: "#",
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
    gambar: "#",
    isi: `
      <p>
        Temukan lokasi warteg sehat dan pasar tradisional terdekat
        dari lokasimu dengan fitur Peta Pangan Gizify.
      </p>
    `,
  },

  4: {
    judul: "Mitos Gizi Mahal yang Perlu Kamu Tahu",
    gambar: "#",
    isi: `
      <p>
        Banyak yang mengira sehat itu mahal. Padahal makanan lokal
        Indonesia sangat melimpah nutrisi.
      </p>
    `,
  },

  5: {
    judul: "Cara Menghitung Kebutuhan Kalori Harian",
    gambar: "#",
    isi: `
      <p>
        Menghitung kalori bukan berarti menyiksa diri.
        Ini tentang memberikan bahan bakar yang cukup untuk tubuh.
      </p>
    `,
  },

  6: {
    judul: "Resep Hemat & Sehat Berbahan Dasar Tempe",
    gambar: "#",
    isi: `
      <p>
        Olahan tempe kreatif yang tidak membosankan
        untuk menu makan harian kamu.
      </p>
    `,
  },
};

// Menampilkan artikel di halaman daftar
function tampilkanArtikel(data) {
  $("#daftarArtikel").empty();

  $.each(data, function (id, artikel) {
 const kartuArtikel = `
  <a
    href="detailartikel.html?id=${id}"
    class="block bg-white rounded-2xl overflow-hidden shadow mt-6 h-[500px]"
  >
    <img
      src="${artikel.gambar}"
      alt="${artikel.judul}"
      class="w-full h-[300px] object-cover"
    />

    <div class="p-5">
      <h3 class="font-rubik font-semibold text-[32px] leading-none text-[#213D34] mb-5">
        ${artikel.judul}
      </h3>

      <span
        class="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-[#5C6660] px-5 py-2.5"
      >
        <!-- Layer warna yang muncul saat hover -->
        <span
          class="absolute inset-0 bg-[#213D34] -translate-x-full transition-transform duration-700 ease-in-out group-hover/btn:translate-x-0"
        ></span>

        <!-- Teks + ikon tombol -->
        <span
          class="relative z-10 flex items-center gap-2 text-[#213D34] transition-colors duration-700 group-hover/btn:text-white"
        >
          Baca Artikel
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12h.5m3 0h1.5m3 0h6" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
          </svg>
        </span>
      </span>
    </div>
  </a>
`;

    $("#daftarArtikel").append(kartuArtikel);
  });
}

// Detail artikel
$(document).ready(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Kalau sedang berada di halaman daftar artikel
  if ($("#daftarArtikel").length) {
    tampilkanArtikel(databaseArtikel);
  }

  // Kalau sedang berada di halaman detail artikel
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

// Animasi scroll reveal
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

// search bar
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
