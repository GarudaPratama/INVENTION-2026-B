const foodDatabase = [
          {
            targetGroup: "underweight", // Fokus: Kalori Padat & Tinggi Protein
            category: "Protein Padat Gizi",
            expensive: { name: "Daging Sapi Lean (100g)", price: "~Rp 22.000", note: "Protein: 26g" },
            cheap: { name: "Dada Ayam / Tempe (100g)", price: "~Rp 4.000", note: "Protein: 19g - 25g" },
            fact: "Untuk menambah berat badan sehat, Tempe & Dada ayam adalah opsi super murah untuk mengejar target protein harian."
          },
          {
            targetGroup: "underweight",
            category: "Protein Padat Gizi",
            expensive: { name: "Daging Sapi Sirloin (100g)", price: "~Rp 35.000", note: "Protein: 24g | Lemak: 16g" },
            cheap: { name: "Hati Ayam (100g)", price: "~Rp 4.000", note: "Protein: 24g | Zat Besi: 11,6mg" },
            fact: "Hati ayam 88% lebih murah dengan jumlah protein persis sama. Bonus zat besi tinggi buat dongkrak nafsu makan."
          },  
          {
            targetGroup: "underweight",
            category: "Protein Padat Gizi",
            expensive: { name: "Greek Yogurt Impor (200g)", price: "~Rp 30.000", note: "Protein: 15g | Kalori: 130 kcal" },
            cheap: { name: "Susu Full Cream Bubuk + 1 Pisang (1 Porsi)", price: "~Rp 6.000", note: "Protein: 8g | Kalori: 250 kcal" },
            fact: "Greek yogurt terlalu tinggi protein tapi rendah kalori (malah cocoknya buat yang diet kurus). Racikan susu full cream + pisang 80% lebih murah dan kalorinya 2x lipat."
          },
          {
            targetGroup: "overweight", // Fokus: Tinggi Serat agar Kenyang Lama
            category: "Karbohidrat Kompleks & Serat",
            expensive: { name: "Quinoa Impor (100g)", price: "~Rp 25.000", note: "Serat: 7g | GI Rendah" },
            cheap: { name: "Ubi Jalar Rebus (100g)", price: "~Rp 3.000", note: "Serat: 3g | Antioksidan Tinggi" },
            fact: "Ubi jalar bikin kenyang lebih lama dan menahan nafsu makan dengan harga sangat terjangkau dibanding Quinoa."
          },
          {
            targetGroup: "overweight", // Fokus: Tinggi Serat agar Kenyang Lama
            category: "Karbohidrat Kompleks & Serat",
            expensive: { name: "Quinoa Impor (100g)", price: "~Rp 25.000", note: "Serat: 7g | GI Rendah" },
            cheap: { name: "Ubi Jalar Rebus (100g)", price: "~Rp 3.000", note: "Serat: 3g | Antioksidan Tinggi" },
            fact: "Ubi jalar bikin kenyang lebih lama dan menahan nafsu makan dengan harga sangat terjangkau dibanding Quinoa."
          },
          {
            targetGroup: "normal", // Fokus: Pemeliharaan & Lemak Sehat
            category: "Lemak Sehat & Imunitas",
            expensive: { name: "Ikan Salmon (100g)", price: "~Rp 35.000", note: "Omega-3: 2,2g | Protein: 20g" },
            cheap: { name: "Ikan Kembung (100g)", price: "~Rp 8.000", note: "Omega-3: 2,6g | Protein: 19g" },
            fact: "Ikan kembung 85% lebih murah dan kandungan Omega-3 nya terbukti lebih tinggi dari salmon. Proteinnya pun imbang."
          }
        ];