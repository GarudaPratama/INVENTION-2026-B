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

  // SVG Icon Lampu
  const lampIconSvg = `
    <svg class="w-6 h-6 text-emerald-950 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
    </svg>
  `;

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

  // Logika Dropdown Navigasi
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

  // Fungsi Utama TDEE dan Rekomendasi Makanan
  const userBmr = parseInt(localStorage.getItem("userBmr")) || 1500;
  const userStatus = localStorage.getItem("userBmiStatus") || "normal";

  $("#textBmr").text(userBmr + " kcal");

  function updateTdee(multiplier) {
    const totalKalori = Math.round(userBmr * multiplier);
    $("#textTdee").text(totalKalori + " kcal/hari");
  }

  updateTdee(1.2);

  $("#selectAktivitas").on("change", function () {
    const pengali = parseFloat($(this).val());
    updateTdee(pengali);
  });

  // Icon Dropdown Aktivitas
$("#selectAktivitas").on("click", function () {
  $("#iconAktivitas").toggleClass("rotate-180");
});

$("#selectAktivitas").on("blur", function () {
  $("#iconAktivitas").removeClass("rotate-180");
});

  const filteredFoods = foodDatabase.filter(
    (item) => item.targetGroup === userStatus,
  );
  const $container = $("#food-container");
  $container.empty();

  filteredFoods.forEach((item) => {
    const cardHtml = `
 <div class="reveal mb-8 flex flex-col gap-4 rounded-[36px] border-2 border-emerald-950 p-4 sm:mb-0 sm:gap-6 sm:rounded-[60px] sm:p-10">
  
  <!-- Header Card -->
  <div class="flex flex-col items-center text-center">
    <span class="mb-2 rounded-full bg-[#D9EF78] px-3.5 py-1 font-rubik text-[12px] font-semibold uppercase text-[#213D34] sm:mb-3 sm:px-4 sm:py-1.5 sm:text-[15px]">
      ${item.subcategory}
    </span>
    <h3 class="font-rubik text-[23px] font-extrabold text-[#213D34] lg:text-[40px] xl:text-[52px]">
      ${item.category}
    </h3>
  </div>

  <!-- Grid Opsi Sultan & Hemat -->
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
    
    <!-- Opsi Sultan -->
    <div class="flex flex-col justify-between gap-3 rounded-[24px] border border-[#F3D0E7] bg-[#F3D0E7]/60 p-4 sm:rounded-[30px] sm:p-6">
      <div>
        <div class="mb-2 flex items-center justify-between gap-2">
          <span class="font-karla text-[12px] font-bold uppercase text-pink-500 sm:text-[15px]">Opsi Sultan</span>
          <span class="rounded-full bg-pink-200 px-3 py-1 font-karla text-[13px] font-bold text-pink-700 sm:text-[15px]">${item.expensive.price}</span>
        </div>
        <h4 class="mb-1 font-rubik text-[16px] font-bold text-pink-950 sm:text-[18px]">${item.expensive.name}</h4>
        <p class="font-karla text-[13px] leading-relaxed text-pink-900 sm:text-[15px]">${item.expensive.note}</p>
      </div>
    </div>

    <!-- Opsi Hemat -->
    <div class="flex flex-col justify-between gap-3 rounded-[24px] border border-[#D2FFEA] bg-[#D2FFEA]/50 p-4 sm:rounded-[30px] sm:p-6">
      <div>
        <div class="mb-2 flex items-center justify-between gap-2">
          <span class="font-karla text-[12px] font-bold uppercase tracking-wide text-emerald-600 sm:text-[15px]">Opsi Hemat</span>
          <span class="rounded-full bg-emerald-200 px-3 py-1 font-karla text-[13px] font-extrabold text-emerald-800 sm:text-[15px]">${item.cheap.price}</span>
        </div>
        <h4 class="mb-1 font-rubik text-[16px] font-bold text-emerald-950 sm:text-[18px]">${item.cheap.name}</h4>
        <p class="font-karla text-[13px] leading-relaxed text-emerald-900 sm:text-[15px]">${item.cheap.note}</p>
      </div>
    </div>

  </div>

  <!-- Fakta Nutrisi -->
  <div class="flex items-start gap-3 rounded-[24px] bg-[#D9EF78] p-4 font-karla text-[#213D34] shadow-sm sm:rounded-[32px] sm:p-6">
    <span class="mt-0.5 shrink-0 text-lg">${lampIconSvg}</span>
    <div>
      <h4 class="mb-1 font-karla text-[14px] font-extrabold uppercase tracking-wide sm:text-[16px]">Fakta Nutrisi</h4>
      <p class="font-karla text-[13px] font-medium leading-relaxed sm:text-[15px]">${item.fact}</p>
    </div>
  </div>

</div>
    `;

    const $card = $(cardHtml);
    $container.append($card);

    observer.observe($card[0]);
  });

  // Render Card Tips & Panduan Gaya Hidup
  const userTip = tipsDatabase.find((item) => item.targetGroup === userStatus);

  if (userTip) {
    $("#tips-section").removeClass("hidden");

    const checkIconSvg = `
      <svg class="w-[18px] h-[18px] text-[#D9EF78] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `;

    const tipsList = userTip.tips
      .split("\n")
      .filter((line) => line.trim() !== "")
      .map(
        (line) => `
          <li class="flex items-start gap-2.5">
            ${checkIconSvg}
            <span class="text-[15px] md:text-[16px] leading-relaxed font-medium">${line.trim()}</span>
          </li>
        `,
      )
      .join("");

    const tipsHtml = `
      <div class="reveal bg-[#213D34] text-[#F1F2ED] rounded-[40px] p-8 md:p-10 shadow-md font-karla border-2 border-[#213D34]">
        <div class="flex items-center gap-3 mb-6">
          <span class="bg-[#D9EF78] text-[#213D34] font-extrabold text-[14px] uppercase px-4 py-1.5 rounded-full font-rubik">
            ${userTip.category}
          </span>
        </div>
        <ul class="flex flex-col gap-3.5">
          ${tipsList}
        </ul>
      </div>
    `;

    const $tipsCard = $(tipsHtml);
    $("#tips-container").html($tipsCard);

    observer.observe($tipsCard[0]);
  }
});
