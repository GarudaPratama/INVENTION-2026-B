$(document).ready(function () {
  // SVG Icon Lampu (Rapi, ringan, & flex-shrink-0 agar tidak gepeng)
  const lampIconSvg = `
    <svg class="w-6 h-6 text-emerald-950 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
    </svg>
  `;

  $("#navbar, #navbar-container").load("../navigasi/navbar.html", function () {
    $(this).find("img").attr("src", "../navigasi/Logo-9.png");
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

  // Fungsi Utama TDEE dan Rekomendasi Makanan
  const userBmr = parseInt(localStorage.getItem("userBmr")) || 1500;
  const userStatus = localStorage.getItem("userBmiStatus") || "normal";

  $("#textBmr").text(userBmr + " kcal");

  // Kalkulasi TDEE Awal (Aktivitas Minimal = BMR x 1.2)
  function updateTdee(multiplier) {
    const totalKalori = Math.round(userBmr * multiplier);
    $("#textTdee").text(totalKalori + " kcal/hari");
  }

  updateTdee(1.2);

  $("#selectAktivitas").on("change", function () {
    const pengali = parseFloat($(this).val());
    updateTdee(pengali);
  });

  // Render Card Rekomendasi Makanan
  const filteredFoods = foodDatabase.filter(
    (item) => item.targetGroup === userStatus,
  );
  const $container = $("#food-container");
  $container.empty();

  filteredFoods.forEach((item) => {
    const cardHtml = `
      <div class="border-2 border-emerald-950 rounded-[60px] p-10 flex flex-col gap-6 mb-8">
      
        <div class="flex flex-col items-center text-center">
          <span class="text-[15px] font-semibold uppercase text-[#213D34] bg-[#D9EF78] px-4 py-1.5 rounded-full mb-3 font-rubik">
            ${item.subcategory}
          </span>
          <h3 class="text-[52px] font-extrabold text-[#213D34] font-rubik">
            ${item.category}
          </h3>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div class="p-6 bg-[#F3D0E7]/60 rounded-[30px] flex flex-col justify-between gap-4 border border-[#F3D0E7]">
            <div>
              <div class="flex justify-between items-start gap-2 mb-2">
                <span class="font-bold text-pink-950 text-[15px] font-rubik">${item.expensive.name}</span>
                <span class="text-[15px] font-karla font-bold text-pink-700 bg-pink-200 px-3 py-1 rounded-full">${item.expensive.price}</span>
              </div>
              <p class="text-[15px] text-pink-900 leading-relaxed font-karla">${item.expensive.note}</p>
            </div>
            <span class="text-[15px] font-bold text-pink-400 uppercase font-karla">Opsi Sultan</span>
          </div>

          <!-- Sub-Card 2: Opsi Hemat -->
          <div class="p-6 bg-[#D2FFEA]/50 rounded-[30px] flex flex-col justify-between gap-4 border border-[#D2FFEA]">
            <div>
              <div class="flex justify-between items-start gap-2 mb-2">
                <span class="font-bold text-emerald-950 text-[15px] font-rubik">${item.cheap.name}</span>
                <span class="text-[15px] font-karla font-extrabold text-emerald-800 bg-emerald-200 px-3 py-1 rounded-full">${item.cheap.price}</span>
              </div>
              <p class="text-[15px] font-karla text-emerald-900 leading-relaxed">${item.cheap.note}</p>
            </div>
            <span class="text-[15px] font-karla font-bold text-emerald-600 uppercase tracking-wide">Opsi Hemat</span>
          </div>

        </div>

        <div class="bg-[#D9EF78] p-6 rounded-[32px] font-karla text-[#213D34] shadow-sm">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-lg">${lampIconSvg}</span>
            <span class="font-extrabold text-[16px] tracking-wide uppercase">
              Fakta Nutrisi
            </span>
          </div>
          <p class="text-[15px] font-medium leading-relaxed">
            ${item.fact}
          </p>
        </div>
      </div>
    `;
    $container.append(cardHtml);
  });

  // Render Card Tips & Panduan Gaya Hidup (Paling Bawah)
  const userTip = tipsDatabase.find((item) => item.targetGroup === userStatus);

  if (userTip) {
    $("#tips-section").removeClass("hidden");

    // Icon centang (dipakai di depan tiap poin)
    const checkIconSvg = `
      <svg class="w-[18px] h-[18px] text-[#D9EF78] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    `;

    // Pecah tips jadi baris-baris terpisah, lalu bungkus tiap baris jadi <li>
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
      <div class="bg-[#213D34] text-[#F1F2ED] rounded-[40px] p-8 md:p-10 shadow-md font-karla border-2 border-[#213D34]">
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

    $("#tips-container").html(tipsHtml);
  }
});