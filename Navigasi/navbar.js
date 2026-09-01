$(document).ready(function () {
  // Klik tombol Fitur
  $("#btn-fitur").on("click", function (e) {
    e.stopPropagation();

    // Muter icon SVG
    $(this).find("svg").toggleClass("rotate-180");

    // Buka / tutup dropdown
    $(this)
      .find("ul")
      .toggleClass("opacity-0 invisible translate-y-2")
      .toggleClass("opacity-100 visible translate-y-0");
  });

  // Klik di luar dropdown
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#btn-fitur").length) {
      // Kembalikan icon
      $("#btn-fitur svg").removeClass("rotate-180");

      // Tutup dropdown
      $("#btn-fitur ul")
        .addClass("opacity-0 invisible translate-y-2")
        .removeClass("opacity-100 visible translate-y-0");
    }
  });
});
