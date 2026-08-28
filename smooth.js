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