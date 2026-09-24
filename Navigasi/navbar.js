 $(document).ready(function () {

  // ============================================================
  // 1. DROPDOWN "FITUR" — tampilan desktop
  // ============================================================
  $(document).on('click', '#btn-fitur', function (e) {
    // Abaikan jika yang diklik ada DI DALAM dropdown-nya sendiri
    // (misal: klik link di dropdown, jangan sampai ikut men-toggle)
    if ($(e.target).closest('#btn-fitur ul').length > 0) return;

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

  // ============================================================
  // 2. SUBMENU "FITUR" DI MENU MOBILE — buka/tutup seperti akordeon
  // ============================================================
  $(document).on('click', '#btn-fitur-mobile', function () {
    $('#submenu-mobile').toggleClass('hidden');
    $('#icon-fitur-mobile').toggleClass('rotate-180');
  });

  // ============================================================
  // 3. MENU MOBILE — panel turun dari atas + latar blur
  // ============================================================
  function bukaMenu() {
    $('#mobile-menu').removeClass('-translate-y-full hidden');           // panel turun dari atas
    $('#backdrop').removeClass('opacity-0 pointer-events-none hidden');  // blur muncul
    $('body').addClass('overflow-hidden');                        // larang scroll halaman
  }

  function tutupMenu() {
    $('#mobile-menu').addClass('-translate-y-full');              // panel naik kembali ke atas
    $('#backdrop').addClass('opacity-0 pointer-events-none');     // blur hilang
    $('body').removeClass('overflow-hidden');

    // sekalian tutup submenu fitur agar rapi
    $('#submenu-mobile').addClass('hidden');
    $('#icon-fitur-mobile').removeClass('rotate-180');
  }

  $(document).on('click', '#btn-hamburger', bukaMenu);
  $(document).on('click', '#btn-close', tutupMenu);
  $(document).on('click', '#backdrop', tutupMenu);   // klik area blur juga menutup

  // jika link di dalam menu diklik, tutup menunya juga
  $(document).on('click', '#mobile-menu a', tutupMenu);

  // jaga-jaga: jika layar dilebarkan ke desktop saat menu terbuka,
  // tutup menunya agar halaman desktop tidak terkunci (tidak bisa scroll)
  $(window).on('resize', function () {
    if (window.innerWidth >= 768) tutupMenu();
  });

});