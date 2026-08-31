$(document).ready(function () {

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    const targetId = $(this).attr('href');
    const $target = $(targetId);

    if ($target.length) {
      const navbarHeight = $('#navbarFixed').outerHeight() || 80;

      $('html, body').animate({
        scrollTop: $target.offset().top - navbarHeight
      }, 800);
    }
  });

});