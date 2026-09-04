$(document).ready(function () {

  // 1. Ambil data BMR & Status BMI dari localStorage
  const userBmr = localStorage.getItem('userBmr') || 1500; // default 1500 jika kosong
  const userStatus = localStorage.getItem('userBmiStatus') || 'normal';

  // 2. Tampilkan BMR awal di Halaman Gizi
  $('#textBmr').text(userBmr + ' kcal');
  
  // Hitung TDEE awal (Default: Aktivitas Minimal = BMR x 1.2)
  let initialTdee = Math.round(userBmr * 1.2);
  $('#textTdee').text(initialTdee + ' kcal/hari');

  // 3. Hitung Ulang TDEE Otomatis saat Dropdown Aktivitas Diubah
  $('#selectAktivitas').on('change', function () {
    const pengaliAktivitas = parseFloat($(this).val());
    const totalKalori = Math.round(userBmr * pengaliAktivitas);

    // Update angka TDEE di tampilan
    $('#textTdee').text(totalKalori + ' kcal/hari');
  });

});