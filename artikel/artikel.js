// Database sederhana 6 artikel
const databaseArtikel = {
  "1": {
    judul: "Kenali Titik Mulaimu dengan Kalkulator BMI",
    gambar: "assets/images/bmi-detail.jpg",
    isi: "<p>Gizify tidak menghakimi. Masukkan tinggi dan berat badanmu untuk mengetahui target kalori harian secara presisi.</p><p>Ini adalah langkah awal sebelum mengatur pola makan harian kamu.</p>"
  },
  "2": {
    judul: "Bongkar Alternatif: Salmon vs Lele & Tempe",
    gambar: "assets/images/fish-detail.jpg",
    isi: "<p>Tidak perlu beli bahan mahal untuk dapat gizi seimbang. Lele dan Tempe punya kandungan Protein dan Zat Besi yang setara bahkan lebih tinggi dari Salmon.</p>"
  },
  "3": {
    judul: "Panduan Eksekusi Pangan di Pasar Tradisional",
    gambar: "assets/images/map-detail.jpg",
    isi: "<p>Temukan lokasi warteg sehat dan pasar tradisional terdekat dari lokasimu dengan fitur Peta Pangan Gizify.</p>"
  },
  "4": {
    judul: "Mitos Gizi Mahal yang Perlu Kamu Tahu",
    gambar: "assets/images/mitos.jpg",
    isi: "<p>Banyak yang mengira sehat itu mahal. Padahal makanan lokal Indonesia sangat melimpah nutrisi.</p>"
  },
  "5": {
    judul: "Cara Menghitung Kebutuhan Kalori Harian",
    gambar: "assets/images/kalori.jpg",
    isi: "<p>Menghitung kalori bukan berarti menyiksa diri. Ini tentang memberikan bahan bakar yang cukup untuk tubuh.</p>"
  },
  "6": {
    judul: "Resep Hemat & Sehat Berbahan Dasar Tempe",
    gambar: "assets/images/resep.jpg",
    isi: "<p>Olahan tempe kreatif yang tidak membosankan untuk menu makan harian kamu.</p>"
  }
};

$(document).ready(function () {
  // 1. Ambil ID dari URL (contoh: detail.html?id=2)
  const urlParams = new URLSearchParams(window.location.search);
  const artikelId = urlParams.get('id');

  // 2. Cek apakah artikel dengan ID tersebut ada di database
  if (artikelId && databaseArtikel[artikelId]) {
    const data = databaseArtikel[artikelId];

    // Render ke HTML
    $('#article-title').text(data.judul);
    $('#page-title').text(data.judul + " - Gizify");
    $('#article-content').html(data.isi);

    if (data.gambar) {
      $('#article-image').attr('src', data.gambar).removeClass('hidden');
    }
  } else {
    // Jika ID tidak ditemukan/salah
    $('#article-title').text('Artikel Tidak Ditemukan');
    $('#article-content').html('<p>Maaf, artikel yang kamu cari tidak ada.</p>');
  }

});


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
    .querySelectorAll(".reveal, .reveal-throw")
    .forEach((el) => observer.observe(el));
});