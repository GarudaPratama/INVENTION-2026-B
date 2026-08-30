$(document).ready(function () {

    $('#btnBmi').on('click', function(e) {
        e.preventDefault();

        const berat = parseFloat($('#inputBerat').val());
        const tinggiCm = parseFloat($('#inputTinggi').val());

        if (isNaN(berat) || isNaN(tinggiCm)) {
            return;
        }

        const tinggiM = tinggiCm / 100;
        const bmiResult = (berat / (tinggiM * tinggiM)).toFixed(1);

        let category = '';
        let colorClass = '';

        if (bmiResult < 18.5) {
            category = 'Underweight (Kurang Berat Badan)';
            colorClass = 'text-amber-600 bg-amber-50 border-amber-200';
        } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
            category = 'Normal (Ideal)';
            colorClass = 'text-emerald-600 bg-emerald-50 border-emerald-200';
        } else {
            category = 'Overweight (Kelebihan Berat Badan)';
            colorClass = 'text-red-600 bg-red-50 border-red-200';
        }

        $('#bmiResult').text(bmiResult);
        $('#bmiCategory').text(category);
        
        $('resultCard')
            .removeClass('text-amber-600 bg-amber-50 border-amber-200 text-emerald-600 bg-emerald-50 border-emerald-200 text-red-600 bg-red-50 border-red-200')
            .addClass(colorClass);

        $('buttonToGizi').attr('href', 'kalkulatorgizi/gizi.html?bmi=' + bmiResult);

        $('#resultSection').removeClass('hidden');
    })
})