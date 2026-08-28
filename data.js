const foodDatabase = [
          {
            targetGroup: "underweight", // Fokus: Kalori Padat & Tinggi Protein
            category: "Protein Padat Gizi",
            expensive: { name: "Daging Sapi Lean (100g)", price: "Rp 22.000", note: "Protein: 26g" },
            cheap: { name: "Dada Ayam / Tempe (100g)", price: "Rp 4.000", note: "Protein: 19g - 25g" },
            fact: "Untuk menambah berat badan sehat, Tempe & Dada ayam adalah opsi super murah untuk mengejar target protein harian."
          },
          {
            targetGroup: "overweight", // Fokus: Tinggi Serat agar Kenyang Lama
            category: "Karbohidrat Kompleks & Serat",
            expensive: { name: "Quinoa Impor (100g)", price: "Rp 25.000", note: "Serat: 7g | GI Rendah" },
            cheap: { name: "Ubi Jalar Rebus (100g)", price: "Rp 3.000", note: "Serat: 3g | Antioksidan Tinggi" },
            fact: "Ubi jalar bikin kenyang lebih lama dan menahan nafsu makan dengan harga sangat terjangkau dibanding Quinoa."
          },
          {
            targetGroup: "normal", // Fokus: Pemeliharaan & Lemak Sehat
            category: "Lemak Sehat & Imunitas",
            expensive: { name: "Ikan Salmon (100g)", price: "Rp 35.000", note: "Omega-3: Tinggi" },
            cheap: { name: "Ikan Kembung (100g)", price: "Rp 8.000", note: "Omega-3: Sangat Tinggi" },
            fact: "Ikan Kembung lokal punya kandungan Omega-3 melebihi Salmon dengan harga 1/4-nya untuk menjaga daya tahan tubuh."
          }
        ];