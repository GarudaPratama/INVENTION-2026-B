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
      .addClass("bg-white/90 backdrop-blur-md shadow-md rounded-b-2xl left-6 right-6")
      .removeClass("left-0 right-0");
  } 
  // Saat scroll kurang dari/sama dengan 50px DAN sedang dalam status scrolled
  else if (scrollTop <= 50 && isScrolled) {
    isScrolled = false;
    $("#navbar")
      .removeClass("bg-white/90 backdrop-blur-md shadow-md rounded-b-2xl left-6 right-6")
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

  // fungsi utama BMI
  $("#btnBmi").on("click", function (e) {
    e.preventDefault();

    // 1. Ambil nilai input
    const berat = parseFloat($("#inputBerat").val());
    const tinggiCm = parseFloat($("#inputTinggi").val());
    const umur = parseInt($("#inputUmur").val());
    const gender = $("#inputGender").val(); // 'pria' atau 'wanita'

    // Validasi input
    if (isNaN(berat) || isNaN(tinggiCm) || isNaN(umur)) {
      alert("Mohon isi Berat, Tinggi, dan Umur dengan lengkap!");
      return;
    }

    // 2. Hitung BMI
    const tinggiM = tinggiCm / 100;
    const bmiResult = (berat / (tinggiM * tinggiM)).toFixed(1);

    // 3. Hitung BMR (Rumus Mifflin-St Jeor)
    let bmr = 10 * berat + 6.25 * tinggiCm - 5 * umur;
    if (gender === "pria") {
      bmr = bmr + 5;
    } else {
      bmr = bmr - 161;
    }
    bmr = Math.round(bmr); // Membulatkan angka BMR

    // 4. Kategori BMI
    let targetGroup = "";
    let categoryText = "";

    if (bmiResult < 18.5) {
      targetGroup = "underweight";
      categoryText = "Underweight (Kurang Berat Badan)";
    } else if (bmiResult <= 24.9) {
      targetGroup = "normal";
      categoryText = "Normal (Ideal)";
    } else {
      targetGroup = "overweight";
      categoryText = "Overweight (Kelebihan Berat Badan)";
    }

    // Ganti Avatar Berdasarkan Gender
    if (gender === "wanita") {
      $("#avatarMale").addClass("hidden");
      $("#avatarFemale").removeClass("hidden");
    } else {
      $("#avatarFemale").addClass("hidden");
      $("#avatarMale").removeClass("hidden");
    }

    // 5. Tampilkan Hasil di Halaman BMI
    $("#bmiResult").text(bmiResult);
    $("#bmiCategory").text(categoryText);
    $("#bmrResult").text(bmr + " kcal/hari"); // Ikon/teks BMR ringkas
    $("#resultSection").removeClass("hidden");

    // 6. Simpan data ke localStorage untuk Halaman Gizi
    localStorage.setItem("userBmiStatus", targetGroup);
    localStorage.setItem("userBmr", bmr);
  });
});
