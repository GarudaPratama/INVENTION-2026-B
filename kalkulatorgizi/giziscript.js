$(document).ready(function () {

    $('#navbar, #navbar-container').load('../navigasi/navbar.html', function() {
        $(this).find('img').attr('src', '../navigasi/Logo-9.png');
    });

    // 2. Logika Dropdown Navigasi
    $(document).on('click', '#btn-fitur', function (e) {
        e.stopPropagation();
        $(this).find('div > svg').toggleClass('rotate-180');
        $(this)
            .find('ul')
            .toggleClass('opacity-0 invisible translate-y-2 opacity-100 visible translate-y-0');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#btn-fitur').length) {
            $('#btn-fitur div > svg').removeClass('rotate-180');
            $('#btn-fitur ul')
                .addClass('opacity-0 invisible translate-y-2')
                .removeClass('opacity-100 visible translate-y-0');
        }
    });


    // fungsi utama TDEE dan Rekomendasi makanan
  const userBmr = parseInt(localStorage.getItem('userBmr')) || 1500;
  const userStatus = localStorage.getItem('userBmiStatus') || 'normal';

  $('#textBmr').text(userBmr + ' kcal');

  // Kalkulasi TDEE Awal (Aktivitas Minimal = BMR x 1.2)
  function updateTdee(multiplier) {
    const totalKalori = Math.round(userBmr * multiplier);
    $('#textTdee').text(totalKalori + ' kcal/hari');
  }
  
  updateTdee(1.2);

  $('#selectAktivitas').on('change', function () {
    const pengali = parseFloat($(this).val());
    updateTdee(pengali);
  });

  // Render Card Rekomendasi Makanan
  const filteredFoods = foodDatabase.filter(item => item.targetGroup === userStatus);
  const $container = $('#food-container');
  $container.empty();

  filteredFoods.forEach(item => {
    const cardHtml = `
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-[#213D34] bg-emerald-100 px-3 py-1 rounded-full">
            ${item.subcategory}
          </span>
          <h3 class="text-lg font-bold text-gray-800 mt-2">${item.category}</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div class="p-3.5 bg-red-50/60 border border-red-100 rounded-xl flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start gap-2">
                <span class="font-bold text-red-950 text-sm">${item.expensive.name}</span>
                <span class="text-xs font-extrabold text-red-600 bg-red-100 px-2 py-0.5 rounded">${item.expensive.price}</span>
              </div>
              <p class="text-xs text-red-700 mt-1">${item.expensive.note}</p>
            </div>
            <span class="text-[10px] font-bold text-red-400 uppercase mt-3">Opsi Sultan</span>
          </div>

          <div class="p-3.5 bg-emerald-50/60 border border-emerald-200 rounded-xl flex flex-col justify-between">
            <div>
              <div class="flex justify-between items-start gap-2">
                <span class="font-bold text-emerald-950 text-sm">${item.cheap.name}</span>
                <span class="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">${item.cheap.price}</span>
              </div>
              <p class="text-xs text-emerald-700 mt-1">${item.cheap.note}</p>
            </div>
            <span class="text-[10px] font-bold text-emerald-600 uppercase mt-3">Opsi Hemat ⭐</span>
          </div>
        </div>

        <div class="bg-amber-50 border border-amber-200/80 p-3 rounded-xl text-xs text-amber-900 leading-relaxed">
          <span class="font-bold">💡 Fakta Nutrisi:</span> ${item.fact}
        </div>
      </div>
    `;
    $container.append(cardHtml);
  });

});