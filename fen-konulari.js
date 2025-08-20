const konular = {
    1: {
        baslik: "Güneş Sistemi ve Ötesi",
        video: "https://www.youtube.com/watch?v=RRKUfYYM4E4",
        telafiVideo: "https://www.youtube.com/watch?v=G6R0WzY5S8Y",
        quiz: [
            {soru: "Güneş sistemindeki en büyük gezegen hangisidir?", secenekler: ["Mars", "Jüpiter", "Venüs", "Satürn"], dogruCevap: "Jüpiter"},
            {soru: "Uzay kirliliğine neden olan temel etken nedir?", secenekler: ["Yıldız kaymaları", "Meteorlar", "Ömrü bitmiş uydular", "Kuyruklu yıldızlar"], dogruCevap: "Ömrü bitmiş uydular"},
            {soru: "Kızıl Gezegen olarak bilinen gezegen hangisidir?", secenekler: ["Venüs", "Merkür", "Mars", "Jüpiter"], dogruCevap: "Mars"}
        ]
    },
    2: {
        baslik: "Hücre ve Bölünmeler",
        video: "https://www.youtube.com/watch?v=rC_cT9oV7jQ",
        telafiVideo: "https://www.youtube.com/watch?v=kYJv-t8sL9o",
        quiz: [
            {soru: "Canlıların en küçük yapı birimi nedir?", secenekler: ["Doku", "Organ", "Hücre", "Sistem"], dogruCevap: "Hücre"},
            {soru: "Mitoz bölünmenin temel amacı nedir?", secenekler: ["Üreme", "Büyüme ve onarım", "Eşeyli üreme", "Kromozom sayısını yarıya indirme"], dogruCevap: "Büyüme ve onarım"},
            {soru: "Sadece bitki hücrelerinde bulunan organel hangisidir?", secenekler: ["Ribozom", "Mitokondri", "Kloroplast", "Endoplazmik retikulum"], dogruCevap: "Kloroplast"}
        ]
    },
    3: {
        baslik: "Kuvvet ve Enerji",
        video: "https://www.youtube.com/watch?v=eaxF9U_Zoz0",
        telafiVideo: "https://www.youtube.com/watch?v=3U139GUJhAw",
        quiz: [
            {soru: "Birim zamanda yapılan işe ne ad verilir?", secenekler: ["Kuvvet", "Enerji", "Güç", "İş"], dogruCevap: "Güç"},
            {soru: "Esneklik potansiyel enerjisine sahip olan cisim hangisidir?", secenekler: ["Fırlatılan top", "Sıkıştırılmış yay", "Durmakta olan araba", "Yüksekteki kitap"], dogruCevap: "Sıkıştırılmış yay"},
            {soru: "Duran bir cisme etki eden kuvvetin cisme ne kazandırması beklenir?", secenekler: ["Enerji", "İş", "Hız", "Sürtünme"], dogruCevap: "Hız"}
        ]
    },
    4: {
        baslik: "Saf Madde ve Karışımlar",
        video: "https://www.youtube.com/watch?v=m4qxLftBXX4",
        telafiVideo: "https://www.youtube.com/watch?v=MSzYDBK3Dxs",
        quiz: [
            {soru: "Farklı tür atomlardan oluşan saf maddeye ne ad verilir?", secenekler: ["Element", "Karışım", "Bileşik", "Homojen karışım"], dogruCevap: "Bileşik"},
            {soru: "Aşağıdakilerden hangisi bir element sembolü değildir?", secenekler: ["H", "O", "NaCl", "He"], dogruCevap: "NaCl"},
            {soru: "Saf maddelerin ayırt edici özellikleri nelerdir?", secenekler: ["Yoğunluk ve hacim", "Hacim ve kütle", "Erime noktası ve kaynama noktası", "Şekil ve renk"], dogruCevap: "Erime noktası ve kaynama noktası"}
        ]
    },
    5: {
        baslik: "Işığın Madde İle Etkileşimi",
        video: "https://www.youtube.com/watch?v=DwdIHCypVRI",
        telafiVideo: "https://www.youtube.com/watch?v=0h94h57gO0g",
        quiz: [
            {soru: "Işığın saydam bir ortamdan başka bir saydam ortama geçerken yön değiştirmesine ne denir?", secenekler: ["Yansıma", "Soğurulma", "Kırılma", "Saçılma"], dogruCevap: "Kırılma"},
            {soru: "Bir maddenin üzerine düşen ışığın tamamını yansıttığı renk hangisidir?", secenekler: ["Siyah", "Mavi", "Kırmızı", "Beyaz"], dogruCevap: "Beyaz"},
            {soru: "En çok ışığı soğuran renk hangisidir?", secenekler: ["Beyaz", "Sarı", "Mavi", "Siyah"], dogruCevap: "Siyah"}
        ]
    },
    6: {
        baslik: "Canlılarda Üreme, Büyüme ve Gelişme",
        video: "https://www.youtube.com/watch?v=s4o0tZ_hpkg",
        telafiVideo: "https://www.youtube.com/watch?v=Cd92e5C31WU",
        quiz: [
            {soru: "Çiçekli bir bitkinin dişi üreme organı nedir?", secenekler: ["Çanak yaprak", "Taç yaprak", "Dişicik borusu", "Sapçık"], dogruCevap: "Dişicik borusu"},
            {soru: "Memelilerde embriyonun gelişimini sağlayan yapı nedir?", secenekler: ["Yumurta", "Yavru", "Anne karnı (rahim)", "Tozlaşma"], dogruCevap: "Anne karnı (rahim)"},
            {soru: "Metamorfoz (başkalaşım) geçiren canlıya örnek hangisidir?", secenekler: ["İnsan", "Kuş", "Kurbağa", "Balık"], dogruCevap: "Kurbağa"}
        ]
    },
    7: {
        baslik: "Elektrik Devreleri",
        video: "https://www.youtube.com/watch?v=h6a1SEKRq4k",
        telafiVideo: "https://www.youtube.com/watch?v=yrj90Q9ypMg",
        quiz: [
            {soru: "Devredeki akımı ölçen alet hangisidir?", secenekler: ["Voltmetre", "Ampermetre", "Ohmmetre", "Termometre"], dogruCevap: "Ampermetre"},
            {soru: "Bir elektrik devresinde seri bağlı dirençler artırılırsa ne olur?", secenekler: ["Toplam direnç artar", "Toplam direnç azalır", "Devreden geçen akım artar", "Akım sabit kalır"], dogruCevap: "Toplam direnç artar"},
            {soru: "Aşağıdakilerden hangisi yalıtkan maddedir?", secenekler: ["Bakır tel", "Alüminyum", "Cam", "Altın"], dogruCevap: "Cam"}
        ]
    },
};