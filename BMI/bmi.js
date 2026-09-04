$(document).ready(function () {

  $('#btnBmi').on('click', function(e) {
    e.preventDefault();

    // 1. Ambil nilai input
    const berat = parseFloat($('#inputBerat').val());
    const tinggiCm = parseFloat($('#inputTinggi').val());
    const umur = parseInt($('#inputUmur').val());
    const gender = $('#inputGender').val(); // 'pria' atau 'wanita'

    // Validasi input
    if (isNaN(berat) || isNaN(tinggiCm) || isNaN(umur)) {
      alert('Mohon isi Berat, Tinggi, dan Umur dengan lengkap!');
      return;
    }

    // 2. Hitung BMI
    const tinggiM = tinggiCm / 100;
    const bmiResult = (berat / (tinggiM * tinggiM)).toFixed(1);

    // 3. Hitung BMR (Rumus Mifflin-St Jeor)
    let bmr = (10 * berat) + (6.25 * tinggiCm) - (5 * umur);
    if (gender === 'pria') {
      bmr = bmr + 5;
    } else {
      bmr = bmr - 161;
    }
    bmr = Math.round(bmr); // Membulatkan angka BMR

    // 4. Kategori BMI
    let targetGroup = '';
    let categoryText = '';

    if (bmiResult < 18.5) {
      targetGroup = 'underweight';
      categoryText = 'Underweight (Kurang Berat Badan)';
    } else if (bmiResult <= 24.9) {
      targetGroup = 'normal';
      categoryText = 'Normal (Ideal)';
    } else {
      targetGroup = 'overweight';
      categoryText = 'Overweight (Kelebihan Berat Badan)';
    }

    // 5. Tampilkan Hasil di Halaman BMI
    $('#bmiResult').text(bmiResult);
    $('#bmiCategory').text(categoryText);
    $('#bmrResult').text(bmr + ' kcal/hari'); // Ikon/teks BMR ringkas
    $('#resultSection').removeClass('hidden');

    // 6. Simpan data ke localStorage untuk Halaman Gizi
    localStorage.setItem('userBmiStatus', targetGroup);
    localStorage.setItem('userBmr', bmr);
  });

});