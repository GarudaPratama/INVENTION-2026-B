$(document).ready(function () {
  
  // Event click pada menu Fitur
  $(document).on('click', '#btn-fitur', function (e) {
    // Abaikan jika yang diklik adalah area di dalam menu <ul> (misal: klik link)
    if ($(e.target).closest('ul').length > 0) return;

    e.stopPropagation();

    const $svg = $(this).find('> div > svg');
    const $ul = $(this).children('ul');

    // Cek status apakah dropdown sedang terbuka
    const isOpen = $ul.hasClass('opacity-100');

    if (isOpen) {
      // Tutup Dropdown
      $svg.removeClass('rotate-180');
      $ul.addClass('opacity-0 invisible translate-y-2')
         .removeClass('opacity-100 visible translate-y-0');
    } else {
      // Buka Dropdown
      $svg.addClass('rotate-180');
      $ul.removeClass('opacity-0 invisible translate-y-2')
         .addClass('opacity-100 visible translate-y-0');
    }
  });

  // Tutup dropdown saat klik di luar area #btn-fitur
  $(document).on('click', function (e) {
    if (!$(e.target).closest('#btn-fitur').length) {
      $('#btn-fitur > div > svg').removeClass('rotate-180');
      $('#btn-fitur > ul')
        .addClass('opacity-0 invisible translate-y-2')
        .removeClass('opacity-100 visible translate-y-0');
    }
  });

});