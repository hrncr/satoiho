// score-manager.js

// Puanı localStorage'dan yükle veya yoksa 0 olarak başlat
let totalScore = localStorage.getItem('cengaver_score') ? parseInt(localStorage.getItem('cengaver_score')) : 0;

// Puanı güncelleyen ve localStorage'a kaydeden fonksiyon
function updateScore(points) {
    totalScore += points;
    localStorage.setItem('cengaver_score', totalScore);
    displayScore();
}

// Puanı HTML sayfasına yazdıran fonksiyon
function displayScore() {
    const scoreElement = document.getElementById('total-score');
    if (scoreElement) {
        scoreElement.textContent = totalScore;
    }
}

// Sayfa yüklendiğinde puanı hemen göstermek için bu fonksiyonu çağır
document.addEventListener('DOMContentLoaded', () => {
    displayScore();
});