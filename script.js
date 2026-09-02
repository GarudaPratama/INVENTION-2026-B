$(document).ready(function () {

    $('#navbar').load('./Navigasi/navbar.html', function() {
        
        $(this).find('img').attr('src', '../Navigasi/Logo (9).png');
    });

    $(document).on('click', '#btn-fitur', function (e) {
    e.stopPropagation();

    // HANYA muter SVG panah (SVG yang ada di dalam div), bukan SVG di dalam menu ul
    $(this).find('div > svg').toggleClass('rotate-180');

    // Toggle dropdown menu
    $(this)
      .find('ul')
      .toggleClass('opacity-0 invisible translate-y-2 opacity-100 visible translate-y-0');
  });

  // Tutup dropdown saat klik luar
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#btn-fitur').length) {
      $('#btn-fitur div > svg').removeClass('rotate-180');
      $('#btn-fitur ul')
        .addClass('opacity-0 invisible translate-y-2')
        .removeClass('opacity-100 visible translate-y-0');
    }
  });
    
})