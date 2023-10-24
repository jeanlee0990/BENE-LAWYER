let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }

    const slideWidth = slides[currentSlide].clientWidth;
    const offset = -slideWidth * currentSlide;

    sliderContainer.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    // Mengaitkan fungsi prevSlide dengan tombol sebelumnya
    document.querySelector(".prev").addEventListener("click", prevSlide);

    // Mengaitkan fungsi nextSlide dengan tombol berikutnya
    document.querySelector(".next").addEventListener("click", nextSlide);
});
