// Fungsi untuk animasi teks muncul kata per kata
function animateText() {
    const textElement = document.getElementById('animated-text');
    const text = textElement.textContent;
    const words = text.split(' ');

    // Bersihkan konten teks
    textElement.textContent = '';

    // Loop melalui setiap kata dan buat elemen <span> untuk setiap kata
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const span = document.createElement('span');
        span.textContent = word + ' ';

        // Terapkan animasi dengan penundaan berdasarkan urutan kata
        span.style.animation = `fadeIn 1s ${i * 1}s both`;

        // Tambahkan elemen <span> ke teks
        textElement.appendChild(span);
    }
}

// Panggil fungsi animasi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', animateText);
