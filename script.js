let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    const visibleSlides = 5; // Adjust to 4 if needed
    const maxIndex = totalSlides - visibleSlides;

    if (index > maxIndex) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = maxIndex;
    } else {
        slideIndex = index;
    }

    const container = document.querySelector('.carousel-container');
    container.style.transform = `translateX(${-slideIndex * (100 / visibleSlides)}%)`;
}

function nextSlide() {
    showSlides(slideIndex + 1);
}

function prevSlide() {
    showSlides(slideIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});
