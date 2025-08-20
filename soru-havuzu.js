// Bu dosya, tüm matematik konuları ve soru havuzlarını içerir.
// Üslü ifadeler ve pi sembolü, daha iyi okunabilirlik için HTML etiketleri ile düzenlenmiştir.
// Yeni nesil sorular eklendi.

const konular = {
    "1": {
        baslik: "Tam Sayılarla İşlemler",
        video: "http://www.youtube.com/watch?v=YW2L60VAFaU",
        quiz: [
            // Kolay Seviye
            {soru: "(-5) + 3 işleminin sonucu kaçtır?", secenekler: ["-2", "2", "-8", "8"], dogruCevap: "-2", seviye: "Kolay"},
            {soru: "12 / (-3) işleminin sonucu kaçtır?", secenekler: ["4", "-4", "-9", "9"], dogruCevap: "-4", seviye: "Kolay"},
            {soru: "(-2) x (-4) işleminin sonucu kaçtır?", secenekler: ["-8", "8", "-6", "6"], dogruCevap: "8", seviye: "Kolay"},
            {soru: "(-10) - (-5) işleminin sonucu kaçtır?", secenekler: ["-15", "-5", "5", "15"], dogruCevap: "-5", seviye: "Kolay"},
            {soru: "7 + (-15) işleminin sonucu kaçtır?", secenekler: ["-22", "8", "-8", "22"], dogruCevap: "-8", seviye: "Kolay"},
            // Orta Seviye
            {soru: "(-5) x 2 + 10 işleminin sonucu kaçtır?", secenekler: ["0", "20", "-20", "-10"], dogruCevap: "0", seviye: "Orta"},
            {soru: "25 - 5 x (-4) işleminin sonucu kaçtır?", secenekler: ["0", "5", "45", "100"], dogruCevap: "45", seviye: "Orta"},
            {soru: "(15-20) / (-5) işleminin sonucu kaçtır?", secenekler: ["-1", "1", "-5", "5"], dogruCevap: "1", seviye: "Orta"},
            {soru: "(-2) + (-3) x 4 işleminin sonucu kaçtır?", secenekler: ["-20", "-14", "20", "14"], dogruCevap: "-14", seviye: "Orta"},
            {soru: "(-1)<sup>3</sup> + (-1)<sup>2</sup> işleminin sonucu kaçtır?", secenekler: ["-2", "0", "1", "2"], dogruCevap: "0", seviye: "Orta"},
            // Zor Seviye
            {soru: "(-3)<sup>2</sup> - (10 / 5) x (-2)<sup>3</sup> işleminin sonucu kaçtır?", secenekler: ["25", "-7", "1", "9"], dogruCevap: "25", seviye: "Zor"},
            {soru: "(-40) / (4 - 12) + (-2) x (-3) işleminin sonucu kaçtır?", secenekler: ["11", "1", "-1", "-11"], dogruCevap: "11", seviye: "Zor"},
            {soru: "(-3) x (-5) - (8-16) / 2 işleminin sonucu kaçtır?", secenekler: ["11", "19", "2", "23"], dogruCevap: "19", seviye: "Zor"},
            {soru: "(1-4) x (-2) + (18 / 9) - (-5) işleminin sonucu kaçtır?", secenekler: ["-1", "13", "3", "-9"], dogruCevap: "13", seviye: "Zor"},
            {soru: "(-2)<sup>2</sup> + ((-3)<sup>2</sup> - 5) x 2 işleminin sonucu kaçtır?", secenekler: ["12", "14", "8", "4"], dogruCevap: "12", seviye: "Zor"}
        ]
    },
    "2": {
        baslik: "Rasyonel Sayılar",
        video: "http://www.youtube.com/watch?v=wmYKfqe4s_Q",
        quiz: [
            // Kolay Seviye
            {soru: "Aşağıdakilerden hangisi rasyonel sayıdır?", secenekler: ["&pi;", "√2", "-0.25", "Sonsuz"], dogruCevap: "-0.25", seviye: "Kolay"},
            {soru: "7/4 rasyonel sayısının ondalık gösterimi kaçtır?", secenekler: ["1.75", "0.75", "1.4", "0.4"], dogruCevap: "1.75", seviye: "Kolay"},
            {soru: "-1 ve 1/2 tam sayılı kesrinin rasyonel sayı hali nedir?", secenekler: ["3/2", "-3/2", "-1/2", "1/2"], dogruCevap: "-3/2", seviye: "Kolay"},
            {soru: "-0.8 ondalık gösteriminin rasyonel sayı hali nedir?", secenekler: ["4/5", "-8/10", "-2/5", "-4/5"], dogruCevap: "-4/5", seviye: "Kolay"},
            {soru: "Aşağıdaki sayılardan hangisi en büyüktür?", secenekler: ["-0.5", "0.3", "-1.2", "0"], dogruCevap: "0.3", seviye: "Kolay"},
            // Orta Seviye
            {soru: "2 ve 1/3 rasyonel sayısının ondalık gösterimi hangisidir?", secenekler: ["2.3", "2.333...", "2.33", "2.13"], dogruCevap: "2.333...", seviye: "Orta"},
            {soru: "-0.15 rasyonel sayısının en sade hali nedir?", secenekler: ["-15/100", "-3/20", "-3/10", "-15/10"], dogruCevap: "-3/20", seviye: "Orta"},
            {soru: "8/25 kesrinin ondalık gösterimi kaçtır?", secenekler: ["0.32", "0.825", "0.25", "0.08"], dogruCevap: "0.32", seviye: "Orta"},
            {soru: "Aşağıdaki rasyonel sayılardan hangisi -1 ile 0 arasındadır?", secenekler: ["-1.5", "-0.2", "0.5", "-2"], dogruCevap: "-0.2", seviye: "Orta"},
            {soru: "-3/4 ve -1/2 arasında yer alan rasyonel sayı hangisi olabilir?", secenekler: ["-0.4", "-0.9", "-0.6", "0"], dogruCevap: "-0.6", seviye: "Orta"},
            // Zor Seviye
            {soru: "Rasyonel sayıları toplarken paydaları eşitlemek için ne kullanılır?", secenekler: ["EKOK", "EBOB", "Asal Sayı", "Tam Sayı"], dogruCevap: "EKOK", seviye: "Zor"},
            {soru: "1/a kesri, a pozitif tam sayı olmak üzere, 0.1 ile 0.2 arasındaysa, a'nın alabileceği tam sayı değeri kaçtır?", secenekler: ["4", "5", "6", "7"], dogruCevap: "6", seviye: "Zor"},
            {soru: "x bir rasyonel sayı olmak üzere, x * x işleminin sonucu hangisi olamaz?", secenekler: ["9", "0.25", "0.01", "-4"], dogruCevap: "-4", seviye: "Zor"},
            {soru: "1/x = 0.4 ise x rasyonel sayısı kaçtır?", secenekler: ["2.5", "0.4", "-2.5", "-0.4"], dogruCevap: "2.5", seviye: "Zor"},
            {soru: "3/10 kesrinin ondalık gösterimi nedir?", secenekler: ["0.03", "3.0", "0.3", "0.13"], dogruCevap: "0.3", seviye: "Zor"}
        ]
    },
    "3": {
        baslik: "Rasyonel Sayılarla İşlemler",
        video: "http://www.youtube.com/watch?v=dYXPbqHB9pM",
        quiz: [
            // Kolay Seviye
            {soru: "1/2 + 1/4 işleminin sonucu kaçtır?", secenekler: ["1/6", "2/6", "3/4", "1/2"], dogruCevap: "3/4", seviye: "Kolay"},
            {soru: "2/3 - 1/6 işleminin sonucu kaçtır?", secenekler: ["1/3", "1/6", "3/6", "1/2"], dogruCevap: "1/2", seviye: "Kolay"},
            {soru: "3/5 x 10 işleminin sonucu kaçtır?", secenekler: ["3", "6", "15", "30"], dogruCevap: "6", seviye: "Kolay"},
            {soru: "4 / (1/2) işleminin sonucu kaçtır?", secenekler: ["2", "4", "8", "1"], dogruCevap: "8", seviye: "Kolay"},
            {soru: "(-1/2) x (-2/3) işleminin sonucu kaçtır?", secenekler: ["-1/3", "1/3", "1/6", "-1/6"], dogruCevap: "1/3", seviye: "Kolay"},
            // Orta Seviye
            {soru: "(1/2 + 1/3) / (5/6) işleminin sonucu kaçtır?", secenekler: ["1", "5/6", "10/12", "6/5"], dogruCevap: "1", seviye: "Orta"},
            {soru: "(-3/4)<sup>2</sup> işleminin sonucu kaçtır?", secenekler: ["9/16", "-9/16", "-3/4", "3/4"], dogruCevap: "9/16", seviye: "Orta"},
            {soru: "1 - 1/2 + 1/4 - 1/8 işleminin sonucu kaçtır?", secenekler: ["5/8", "3/8", "7/8", "1/8"], dogruCevap: "5/8", seviye: "Orta"},
            {soru: "2 / (1/2 + 1/3) işleminin sonucu kaçtır?", secenekler: ["12/5", "5/6", "1", "2"], dogruCevap: "12/5", seviye: "Orta"},
            {soru: "(-2) + (1/2) x (-3) işleminin sonucu kaçtır?", secenekler: ["-7/2", "-5/2", "5/2", "7/2"], dogruCevap: "-7/2", seviye: "Orta"},
            // Zor Seviye
            {soru: "(-1/2)<sup>2</sup> - (3/4 - 1/2) işleminin sonucu kaçtır?", secenekler: ["0", "-1/4", "1", "1/4"], dogruCevap: "0", seviye: "Zor"},
            {soru: "x = -2/3 için 9x<sup>2</sup> + 6x ifadesinin değeri kaçtır?", secenekler: ["0", "1", "2", "4"], dogruCevap: "0", seviye: "Zor"},
            {soru: "1/(1 + 1/(1+1/2)) işleminin sonucu kaçtır?", secenekler: ["3/5", "2/3", "1/2", "3/4"], dogruCevap: "3/5", seviye: "Zor"},
            {soru: "2 - (1 - (1/2)<sup>2</sup>) işleminin sonucu kaçtır?", secenekler: ["1", "1.25", "1.5", "1.75"], dogruCevap: "1.75", seviye: "Zor"},
            {soru: "Bir sayının 3/5'i ile 1/2'sinin toplamı 11 ise bu sayı kaçtır?", secenekler: ["10", "20", "30", "40"], dogruCevap: "10", seviye: "Zor"}
        ]
    },
    "4": {
        baslik: "Cebirsel İfadeler",
        video: "http://www.youtube.com/watch?v=ive2oxF6hNU",
        quiz: [
            // Kolay Seviye
            {soru: "2a + 3a ifadesinin en sade hali nedir?", secenekler: ["5a", "6a", "5a<sup>2</sup>", "6a<sup>2</sup>"], dogruCevap: "5a", seviye: "Kolay"},
            {soru: "x - 5 = 7 ise x kaçtır?", secenekler: ["2", "-2", "12", "-12"], dogruCevap: "12", seviye: "Kolay"},
            {soru: "Bir sayının 3 katının 5 eksiği ifadesinin cebirsel karşılığı nedir?", secenekler: ["3x-5", "5-3x", "3(x-5)", "x/3-5"], dogruCevap: "3x-5", seviye: "Kolay"},
            {soru: "3(x+2) ifadesinin en sade hali nedir?", secenekler: ["3x+2", "3x+6", "3x", "x+6"], dogruCevap: "3x+6", seviye: "Kolay"},
            {soru: "5x - 2x + x ifadesinin sonucu kaçtır?", secenekler: ["3x", "4x", "5x", "6x"], dogruCevap: "4x", seviye: "Kolay"},
            // Orta Seviye
            {soru: "2(x+3) - (x-1) ifadesinin en sade hali nedir?", secenekler: ["x+7", "x+5", "x-7", "x-5"], dogruCevap: "x+7", seviye: "Orta"},
            {soru: "3x - 5 = 2x + 10 denkleminin çözümü kaçtır?", secenekler: ["5", "10", "15", "20"], dogruCevap: "15", seviye: "Orta"},
            {soru: "x = 4 için 2x<sup>2</sup> - 3x ifadesinin değeri kaçtır?", secenekler: ["10", "20", "30", "40"], dogruCevap: "20", seviye: "Orta"},
            {soru: "x/2 + x/3 = 5 denkleminin çözümü kaçtır?", secenekler: ["2", "4", "6", "10"], dogruCevap: "6", seviye: "Orta"},
            {soru: "Bir dikdörtgenin kısa kenarı x+2, uzun kenarı 2x-1 ise çevresi nedir?", secenekler: ["6x+2", "6x+1", "3x+1", "3x+3"], dogruCevap: "6x+2", seviye: "Orta"},
            // Zor Seviye
            {soru: "5(x-1) - 2(x+3) = 1 denkleminin çözümü kaçtır?", secenekler: ["1", "2", "3", "4"], dogruCevap: "4", seviye: "Zor"},
            {soru: "x = 1/2 için (2x+1)<sup>2</sup> - 4x ifadesinin değeri kaçtır?", secenekler: ["1", "2", "3", "4"], dogruCevap: "2", seviye: "Zor"},
            {soru: "Bir merdivenin basamaklarını 3'er 3'er çıkıp 4'er 4'er inen bir kişinin çıkarken attığı adım sayısı inerken attığı adım sayısından 5 fazla ise bu merdiven kaç basamaklıdır?", secenekler: ["60", "45", "75", "90"], dogruCevap: "60", seviye: "Zor"},
            {soru: "x<sup>2</sup> + 6x + 9 ifadesinin çarpanlarına ayrılmış hali nedir?", secenekler: ["(x+3)<sup>2</sup>", "(x-3)<sup>2</sup>", "(x+6)<sup>2</sup>", "(x-9)<sup>2</sup>"], dogruCevap: "(x+3)<sup>2</sup>", seviye: "Zor"},
            {soru: "Bir sayının 3 fazlasının 2 katı ile 1 eksiğinin 3 katı birbirine eşit ise bu sayı kaçtır?", secenekler: ["5", "7", "9", "11"], dogruCevap: "9", seviye: "Zor"}
        ]
    },
    "5": {
        baslik: "Üslü İfadeler",
        video: "http://www.youtube.com/watch?v=kYJj8w8q_xM",
        quiz: [
            // Kolay Seviye
            {soru: "2<sup>3</sup> işleminin sonucu kaçtır?", secenekler: ["6", "8", "4", "16"], dogruCevap: "8", seviye: "Kolay"},
            {soru: "(-3)<sup>2</sup> işleminin sonucu kaçtır?", secenekler: ["-9", "9", "-6", "6"], dogruCevap: "9", seviye: "Kolay"},
            {soru: "10<sup>-2</sup> işleminin sonucu kaçtır?", secenekler: ["100", "0.1", "0.01", "10"], dogruCevap: "0.01", seviye: "Kolay"},
            {soru: "5<sup>0</sup> işleminin sonucu kaçtır?", secenekler: ["0", "1", "5", "10"], dogruCevap: "1", seviye: "Kolay"},
            {soru: "2<sup>-3</sup> işleminin sonucu kaçtır?", secenekler: ["1/8", "8", "-8", "-1/8"], dogruCevap: "1/8", seviye: "Kolay"},
            // Orta Seviye
            {soru: "2<sup>5</sup> x 2<sup>-3</sup> işleminin sonucu kaçtır?", secenekler: ["2<sup>8</sup>", "2<sup>2</sup>", "2<sup>-8</sup>", "2<sup>-2</sup>"], dogruCevap: "2<sup>2</sup>", seviye: "Orta"},
            {soru: "10<sup>5</sup> / 10<sup>2</sup> işleminin sonucu kaçtır?", secenekler: ["10<sup>7</sup>", "10<sup>3</sup>", "10<sup>-3</sup>", "10<sup>-7</sup>"], dogruCevap: "10<sup>3</sup>", seviye: "Orta"},
            {soru: "(3<sup>2</sup>)<sup>3</sup> işleminin sonucu kaçtır?", secenekler: ["3<sup>5</sup>", "3<sup>6</sup>", "9<sup>6</sup>", "9<sup>5</sup>"], dogruCevap: "3<sup>6</sup>", seviye: "Orta"},
            {soru: "(-2)<sup>3</sup> + (-1)<sup>4</sup> işleminin sonucu kaçtır?", secenekler: ["-7", "-9", "7", "9"], dogruCevap: "-7", seviye: "Orta"},
            {soru: "(1/2)<sup>-2</sup> işleminin sonucu kaçtır?", secenekler: ["1/4", "-4", "4", "2"], dogruCevap: "4", seviye: "Orta"},
            // Zor Seviye
            {soru: "0.000001 sayısının bilimsel gösterimi nedir?", secenekler: ["1 x 10<sup>-6</sup>", "1 x 10<sup>6</sup>", "10<sup>-5</sup>", "10<sup>5</sup>"], dogruCevap: "1 x 10<sup>-6</sup>", seviye: "Zor"},
            {soru: "(2<sup>3</sup> x 2<sup>-2</sup>)<sup>4</sup> işleminin sonucu kaçtır?", secenekler: ["2", "16", "32", "64"], dogruCevap: "16", seviye: "Zor"},
            {soru: "27<sup>2</sup> ifadesi aşağıdakilerden hangisine eşittir?", secenekler: ["3<sup>4</sup>", "3<sup>6</sup>", "9<sup>4</sup>", "27<sup>2</sup>"], dogruCevap: "3<sup>6</sup>", seviye: "Zor"},
            {soru: "2<sup>x</sup> = 64 ise x kaçtır?", secenekler: ["4", "5", "6", "7"], dogruCevap: "6", seviye: "Zor"},
            {soru: "3<sup>-2</sup> + 3<sup>-1</sup> işleminin sonucu kaçtır?", secenekler: ["4/9", "1/9", "2/9", "1/3"], dogruCevap: "4/9", seviye: "Zor"}
        ]
    },
    "6": {
        baslik: "Geometrik Cisimler ve Yüzey Alanları",
        video: "http://www.youtube.com/watch?v=e4oK2J_b63o",
        quiz: [
            // Kolay Seviye
            {soru: "Bir küpün kaç tane yüzeyi vardır?", secenekler: ["4", "6", "8", "12"], dogruCevap: "6", seviye: "Kolay"},
            {soru: "Kare prizmanın taban şekli nedir?", secenekler: ["Kare", "Dikdörtgen", "Üçgen", "Daire"], dogruCevap: "Kare", seviye: "Kolay"},
            {soru: "Yüzey alanı formülü 6a<sup>2</sup> olan geometrik cisim hangisidir?", secenekler: ["Kare prizma", "Küp", "Silindir", "Konik"], dogruCevap: "Küp", seviye: "Kolay"},
            {soru: "Dikdörtgenler prizmasının kaç tane ayrıtı vardır?", secenekler: ["6", "8", "10", "12"], dogruCevap: "12", seviye: "Kolay"},
            {soru: "Silindirin taban şekli nedir?", secenekler: ["Kare", "Üçgen", "Dikdörtgen", "Daire"], dogruCevap: "Daire", seviye: "Kolay"},
            // Orta Seviye
            {soru: "Bir küpün bir kenarı 3 cm ise yüzey alanı kaç cm<sup>2</sup> dir?", secenekler: ["9", "27", "36", "54"], dogruCevap: "54", seviye: "Orta"},
            {soru: "Taban ayrıtı 4 cm, yüksekliği 5 cm olan kare prizmanın yüzey alanı kaç cm<sup>2</sup> dir?", secenekler: ["80", "96", "112", "128"], dogruCevap: "112", seviye: "Orta"},
            {soru: "Yarıçapı 3 cm, yüksekliği 10 cm olan silindirin yanal alanı kaç &pi; cm<sup>2</sup> dir?", secenekler: ["30", "60", "90", "120"], dogruCevap: "60", seviye: "Orta"},
            {soru: "Bir küpün hacmi 64 cm<sup>3</sup> ise yüzey alanı kaç cm<sup>2</sup> dir?", secenekler: ["16", "64", "96", "128"], dogruCevap: "96", seviye: "Orta"},
            {soru: "Taban çevresi 20 cm, yüksekliği 8 cm olan kare prizmanın yanal alanı kaçtır?", secenekler: ["40", "80", "120", "160"], dogruCevap: "160", seviye: "Orta"},
            // Zor Seviye
            {soru: "Ayrıtları 2 cm, 3 cm, 4 cm olan dikdörtgenler prizmasının yüzey alanı kaç cm<sup>2</sup> dir?", secenekler: ["24", "48", "52", "64"], dogruCevap: "52", seviye: "Zor"},
            {soru: "Yarıçapı 5 cm olan bir dairenin alanı kaç cm<sup>2</sup> dir?", secenekler: ["10&pi;", "25&pi;", "50&pi;", "100&pi;"], dogruCevap: "25&pi;", seviye: "Zor"},
            {soru: "Taban çevresi 12 cm olan bir kare prizmanın yüksekliği 5 cm ise yüzey alanı kaç cm<sup>2</sup> dir?", secenekler: ["9", "12", "72", "78"], dogruCevap: "78", seviye: "Zor"},
            {soru: "Aşağıdaki cisimlerden hangisinin tüm yüzeyleri birbirine eşittir?", secenekler: ["Dikdörtgenler Prizması", "Küp", "Silindir", "Koni"], dogruCevap: "Küp", seviye: "Zor"},
            {soru: "Yüksekliği yarıçapının 2 katı olan silindirin yüzey alanı 120&pi; ise yarıçapı kaçtır?", secenekler: ["2", "3", "4", "5"], dogruCevap: "4", seviye: "Zor"}
        ]
    },
    "7": {
        baslik: "Çember ve Daire",
        video: "http://www.youtube.com/watch?v=b0Pz6lqQn4I",
        quiz: [
            // Kolay Seviye
            {soru: "Bir çemberin merkezi ile çember üzerindeki herhangi bir noktayı birleştiren doğru parçasına ne denir?", secenekler: ["Çap", "Yay", "Kiriş", "Yarıçap"], dogruCevap: "Yarıçap", seviye: "Kolay"},
            {soru: "Bir dairenin çevresini veren formül nedir?", secenekler: ["&pi;r<sup>2</sup>", "2&pi;r", "&pi;d", "2r"], dogruCevap: "2&pi;r", seviye: "Kolay"},
            {soru: "Yarıçapı 5 cm olan bir dairenin alanı kaç cm<sup>2</sup> dir?", secenekler: ["5&pi;", "10&pi;", "25&pi;", "50&pi;"], dogruCevap: "25&pi;", seviye: "Kolay"},
            {soru: "Çapı 10 cm olan bir çemberin çevresi kaç cm'dir?", secenekler: ["5&pi;", "10&pi;", "20&pi;", "10"], dogruCevap: "10&pi;", seviye: "Kolay"},
            {soru: "Çevresi 30&pi; cm olan bir dairenin çapı kaç cm'dir?", secenekler: ["15", "30", "60", "15&pi;"], dogruCevap: "30", seviye: "Kolay"},
            // Orta Seviye
            {soru: "Yarıçapı 6 cm olan bir dairenin 60 derecelik diliminin alanı kaçtır?", secenekler: ["6&pi;", "12&pi;", "18&pi;", "36&pi;"], dogruCevap: "6&pi;", seviye: "Orta"},
            {soru: "Alanı 16&pi; cm<sup>2</sup> olan dairenin çevresi kaç cm'dir?", secenekler: ["4&pi;", "8&pi;", "16&pi;", "32&pi;"], dogruCevap: "8&pi;", seviye: "Orta"},
            {soru: "Çemberin çevresinin çapına oranı sabiti nedir?", secenekler: ["e", "&pi;", "phi", "g"], dogruCevap: "&pi;", seviye: "Orta"},
            {soru: "Bir dairenin alanı 49&pi; ise yarıçapı kaçtır?", secenekler: ["5", "6", "7", "8"], dogruCevap: "7", seviye: "Orta"},
            {soru: "Bir çemberin yayı, merkezi 120 derece olan bir dilim ise, yayın uzunluğu çemberin çevresinin kaçta kaçıdır?", secenekler: ["1/2", "1/3", "1/4", "1/5"], dogruCevap: "1/3", seviye: "Orta"},
            // Zor Seviye
            {soru: "Yarıçapı 8 cm olan bir dairenin 135 derecelik diliminin alanı kaç cm<sup>2</sup> dir?", secenekler: ["18&pi;", "24&pi;", "32&pi;", "48&pi;"], dogruCevap: "24&pi;", seviye: "Zor"},
            {soru: "Bir dairenin yarıçapı %10 artırılırsa, alanı yüzde kaç artar?", secenekler: ["10", "20", "21", "25"], dogruCevap: "21", seviye: "Zor"},
            {soru: "Çevresi 40 cm olan bir karenin içine çizilebilecek en büyük dairenin alanı kaç cm<sup>2</sup> dir?", secenekler: ["10&pi;", "25&pi;", "50&pi;", "100&pi;"], dogruCevap: "25&pi;", seviye: "Zor"},
            {soru: "Bir daire diliminin yay uzunluğu 10&pi; cm ve yarıçapı 15 cm ise bu dilimin alanı kaç cm<sup>2</sup> dir?", secenekler: ["50&pi;", "75&pi;", "100&pi;", "125&pi;"], dogruCevap: "75&pi;", seviye: "Zor"},
            {soru: "Alanı 8&pi; cm<sup>2</sup> olan daire diliminin merkez açısı 45 derece ise yarıçapı kaç cm'dir?", secenekler: ["4", "6", "8", "10"], dogruCevap: "8", seviye: "Zor"}
        ]
    },
    "8": {
        baslik: "Yeni Nesil Sorular",
        video: "https://www.youtube.com/watch?v=JmYgK76L570",
        quiz: [
            // Soru 1
            {
                soru: "Bir terzi, her biri 2 metre uzunluğundaki 15 adet kumaşı, her kesimden 20 saniye kazanarak en az sürede 1 metre uzunluğundaki parçalara ayırmak istiyor. Terzinin tüm parçaları elde etmesi ne kadar sürer?",
                secenekler: ["5 dakika", "10 dakika", "15 dakika", "30 dakika"],
                dogruCevap: "5 dakika",
                seviye: "Zor"
            },
            // Soru 2
            {
                soru: "Bir okçu, hedef tahtasındaki 10, 8 ve 5 puanlık bölgelere 3 atış yaparak en yüksek puanı almak istiyor. Okçu, bu 3 atışta en fazla kaç farklı toplam puan elde edebilir?",
                secenekler: ["10", "12", "15", "18"],
                dogruCevap: "10",
                seviye: "Zor"
            },
            // Soru 3
            {
                soru: "Bir sınıfta 40 öğrenci vardır. Öğrencilerin 2/5'i kız öğrencidir. Bu sınıfa 10 yeni erkek öğrenci gelirse, sınıftaki erkek öğrenci sayısı, kız öğrenci sayısının kaç katı olur?",
                secenekler: ["1", "1.5", "2", "2.5"],
                dogruCevap: "1.5",
                seviye: "Zor"
            },
            // Soru 4
            {
                soru: "Bir tren, A şehrinden B şehrine saatte 60 km hızla gidiyor ve saatte 40 km hızla geri dönüyor. Trenin gidiş-dönüş yolculuğunun ortalama hızı saatte kaç km'dir?",
                secenekler: ["50", "48", "45", "40"],
                dogruCevap: "48",
                seviye: "Zor"
            },
            // Soru 5
            {
                soru: "Bir saat 09:00'da çalışmaya başlıyor ve her saatte 5 dakika geri kalıyor. Saat 18:00'de bu saatin gösterdiği gerçek saat kaçtır?",
                secenekler: ["17:15", "17:25", "17:30", "17:45"],
                dogruCevap: "17:15",
                seviye: "Zor"
            },
            {
                soru: "Bir sayının 3 fazlasının 2 katı ile 1 eksiğinin 3 katı birbirine eşit ise bu sayı kaçtır?",
                secenekler: ["5", "7", "9", "11"],
                dogruCevap: "9",
                seviye: "Zor"
            },
            {
                soru: "Bir su deposunun 1/3'ü doludur. Depoya 100 litre su eklendiğinde, deponun 1/2'si doluyor. Deponun tamamı kaç litre su alır?",
                secenekler: ["300", "400", "500", "600"],
                dogruCevap: "600",
                seviye: "Zor"
            },
            {
                soru: "Bir sepetteki elmaların yarısı yeşil, diğer yarısı kırmızıdır. Yeşil elmaların 1/3'ü, kırmızı elmaların ise 1/4'ü çürüktür. Sepetteki çürük olmayan elmaların tüm elmalara oranı kaçtır?",
                secenekler: ["5/12", "7/12", "1/2", "2/3"],
                dogruCevap: "7/12",
                seviye: "Zor"
            },
            {
                soru: "Bir gruptaki 20 kişiden 12'si Almanca, 10'u Fransızca biliyor. Herkes en az bir dil bildiğine göre, her iki dili de bilen kaç kişi vardır?",
                secenekler: ["2", "4", "6", "8"],
                dogruCevap: "2",
                seviye: "Zor"
            },
            {
                soru: "Ali bir işi 12 günde, Veli aynı işi 6 günde bitirebiliyor. İkisi birlikte aynı işin 1/2'sini kaç günde bitirir?",
                secenekler: ["1", "2", "3", "4"],
                dogruCevap: "2",
                seviye: "Zor"
            }
        ]
    }
};

// Quiz için rastgele soru seçme fonksiyonu
function getRandomQuestions(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Rastgele bir soruyu seçmek için (ana ekran için)
function rastgeleSoruSec() {
    let tumSorular = [];
    for (const key in konular) {
        if (konular.hasOwnProperty(key)) {
            const konu = konular[key];
            konu.quiz.forEach(soru => {
                tumSorular.push({
                    konuBasligi: konu.baslik,
                    soru: soru.soru,
                    secenekler: soru.secenekler,
                    dogruCevap: soru.dogruCevap
                });
            });
        }
    }
    const randomIndex = Math.floor(Math.random() * tumSorular.length);
    return tumSorular[randomIndex];
}