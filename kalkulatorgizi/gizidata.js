const foodDatabase = [
          {
            targetGroup: "underweight", // Fokus: Kalori Padat & Tinggi Protein
            category: "Protein Padat Gizi",
            subcategory: "Protein Utama",
            expensive: { name: "Daging Sapi Lean (100g)", price: "~Rp 22.000", note: "Protein: 26g" },
            cheap: { name: "Dada Ayam / Tempe (100g)", price: "~Rp 4.000", note: "Protein: 19g - 25g" },
            fact: "Untuk menambah berat badan sehat, Tempe & Dada ayam adalah opsi super murah untuk mengejar target protein harian."
          },
          {
            targetGroup: "underweight",
            category: "Protein Padat Gizi",
            subcategory: "Protein Utama",
            expensive: { name: "Daging Sapi Sirloin (100g)", price: "~Rp 35.000", note: "Protein: 24g | Lemak: 16g" },
            cheap: { name: "Hati Ayam (100g)", price: "~Rp 4.000", note: "Protein: 24g | Zat Besi: 11,6mg" },
            fact: "Hati ayam 88% lebih murah dengan jumlah protein persis sama. Bonus zat besi tinggi buat dongkrak nafsu makan."
          },  
          {
            targetGroup: "underweight",
            category: "Protein Padat Gizi", 
            subcategory: "Minuman Weight Gainer",
            expensive: { name: "Greek Yogurt Impor (200g)", price: "~Rp 30.000", note: "Protein: 15g | Kalori: 130 kcal" },
            cheap: { name: "Susu Full Cream Bubuk + 1 Pisang (1 Porsi)", price: "~Rp 6.000", note: "Protein: 8g | Kalori: 250 kcal" },
            fact: "Greek yogurt terlalu tinggi protein tapi rendah kalori (malah cocoknya buat yang diet kurus). Racikan susu full cream + pisang 80% lebih murah dan kalorinya 2x lipat."
          },
          {
            targetGroup: "overweight", // Fokus: Tinggi Serat agar Kenyang Lama
            category: "Karbohidrat Kompleks & Serat",
            subcategory: "Kenyang Lama",
            expensive: { name: "Quinoa Impor (100g)", price: "~Rp 25.000", note: "Serat: 7g | GI Rendah" },
            cheap: { name: "Ubi Jalar Rebus (100g)", price: "~Rp 3.000", note: "Serat: 3g | Antioksidan Tinggi" },
            fact: "Ubi jalar bikin kenyang lebih lama dan menahan nafsu makan dengan harga sangat terjangkau dibanding Quinoa."
          },
          {
            targetGroup: "overweight",
            category: "Karbohidrat Kompleks & Serat",
            subcategory: "Karbo Volume Tinggi",
            expensive: { name: "Beras Shirataki / Conjac (100g)", price: "~Rp 25.000", note: "Kalori: 10 kcal | Serat: 3g" },
            cheap: { name: "Nasi Kembang Kol / Ubi Kukus (100g)", price: "~Rp 4.000", note: "Kalori: -+50 kcal | Serat: 3g" },
            fact: "Hemat 84%. Shirataki emang hampir 0 kalori tapi mahal dan gampang bikin lemes. Kembang kol dicincang halus teksturnya mirip nasi tapi harganya merakyat."
          },
          {
            targetGroup: "overweight",
            category: "Karbohidrat Kompleks & Serat",
            subcategory: "Minuman Diet",
            expensive: { name: "Cold-Pressed Juice Botol (350ml)", price: "~Rp 45.000", note: "Kalori: 180 kcal | Gula: 28g" },
            cheap: { name: "Es Teh Hijau Tubruk + Stevia (350ml)", price: "~Rp 2.000", note: "Kalori: 0 kcal | Gula: 0g" },
            fact: "Juice botol itu gula murni karena seratnya dibuang pas di-press. Teh hijau + pemanis nol kalori 95% lebih murah dan beneran 0 kalori."
          },
          {
            targetGroup: "normal", // Fokus: Pemeliharaan & Lemak Sehat
            category: "Lemak Sehat & Imunitas",
            subcategory: "Lemak Sehat",
            expensive: { name: "Ikan Salmon (100g)", price: "~Rp 35.000", note: "Omega-3: 2,2g | Protein: 20g" },
            cheap: { name: "Ikan Kembung (100g)", price: "~Rp 8.000", note: "Omega-3: 2,6g | Protein: 19g" },
            fact: "Ikan kembung 85% lebih murah dan kandungan Omega-3 nya terbukti lebih tinggi dari salmon. Proteinnya pun imbang."
          },
          {
            targetGroup: "normal",
            category: "Lemak Sehat & Imunitas",
            subcategory: "Sarapan Penjaga Energi",
            expensive: { name: "Artisan Granola Impor (1 Porsi)", price: "~Rp 25.000", note: "Serat: 3g | Gula: 12g (Sirup/Madu)" },
            cheap: { name: "Oatmeal Biasa + Pisang + Wijen (1 Porsi)", price: "~Rp 4.000", note: "Serat: 6g | Gula: 8g (Alami buah)" },
            fact: "Hemat 84%. Granola kemasan estetik biasanya tinggi gula tersembunyi yang bikin gula darah spiking (gampang lemes siang hari). Racikan oat + pisang lokal seratnya 2x lipat."
          },
          {
            targetGroup: "normal",
            category: "Lemak Sehat & Imunitas",
            subcategory: "Minuman Kesegaran & Elektrolit",
            expensive: { name: "Kombucha Botolan Aesthetic (300ml)", price: "~Rp 45.000", note: "Gula: 10g | Probiotik: Ada" },
            cheap: { name: "Air Kelapa Muda Murni (300ml)", price: "~Rp 10.000", note: "Gula: 6g (Alami) | Kalium/Elektrolit: Sangat Tinggi" },
            fact: "Air kelapa 78% lebih murah. Kombucha sering kali mengandung gula tambahan dari proses fermentasinya. Air kelapa murni ngasih hidrasi dan elektrolit jauh lebih bersih."
          },
];