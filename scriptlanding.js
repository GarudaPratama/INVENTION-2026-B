$(document).ready(function () {

  // Smooth Scroll untuk tombol/link yang mengarah ke bagian (#) di halaman ini
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const targetId = $(this).attr('href');
    const $target = $(targetId);

    if ($target.length) {
      // Ambil tinggi navbar kamu (sesuaikan #navbarFixed dengan ID/class nav kamu)
      const navbarHeight = $('#navbarFixed').outerHeight() || 80;

      // Animasi scroll mewah
      $('html, body').animate({
        scrollTop: $target.offset().top - navbarHeight
      }, 800); // 800ms = 0.8 detik
    }
  });

});