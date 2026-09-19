let targetY = window.scrollY,
          currentY = window.scrollY;
        const ease = 0.065; // Makin kecil angkanya (misal 0.05), makin "berat/mewah" luncurannya

        window.addEventListener(
          "wheel",
          (e) => {
            e.preventDefault(); // Matikan scroll kaku bawaan browser
            targetY += e.deltaY;
            targetY = Math.max(
              0,
              Math.min(targetY, document.body.scrollHeight - window.innerHeight),
            );
          },
          { passive: false },
        );

        function smoothScroll() {
          currentY += (targetY - currentY) * ease;
          window.scrollTo(0, currentY);
          requestAnimationFrame(smoothScroll);  
        }

        smoothScroll();

// Penjelasan kode:

// Kode ini adalah trik kustom untuk membuat efek Smooth Scroll (Inertia Scroll). Fungsinya mematikan gerak scroll bawaan browser yang kaku/patah-patah dan menggantinya dengan gerakan meluncur yang mulus (seperti efek di HP iPhone atau website mewah).

//targetY & currentY:

// targetY: Angka koordinat lokasi yang ingin kamu tuju saat jari memutar mouse wheel.

// currentY: Posisi layar kamu saat ini.

// const ease = 0.065: Angka kelenturan animasi (Lerp / Linear Interpolation). Angka 0.065 artinya di setiap frame (detik), layar hanya berjalan 6,5% dari sisa jarak menuju target. Ini yang bikin gerakannya berasa "empuk/berat".

// window.addEventListener("wheel", ...):

// e.preventDefault(): Mematikan fungsi scroll asli browser.

// targetY += e.deltaY: Menghitung seberapa jauh mouse diputar lalu menambahkannya ke variabel tujuan (targetY).

// Math.max & Math.min: Pagar pengaman agar layar tidak bisa di-scroll kebablasan menembus batas paling atas (0) atau batas paling bawah dokumen.

// function smoothScroll():

// currentY += (targetY - currentY) * ease: Rumus matematika untuk mengikis jarak secara perlahan sampai currentY menyamai targetY.

// window.scrollTo(0, currentY): Perintah aktual untuk memindahkan posisi layar browser.

// requestAnimationFrame(smoothScroll): Menjalankan fungsi ini terus-menerus di setiap detik layar berkedip (biasanya 60fps/144fps) agar gerakannya super mulus.