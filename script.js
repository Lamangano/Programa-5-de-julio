let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
    const container = document.querySelector('.carousel-container');
    const slideWidth = slides[0].clientWidth;
    const margin = parseInt(window.getComputedStyle(slides[0]).marginRight);
    const containerWidth = container.clientWidth;
    const totalWidth = slideWidth + margin;

    container.style.transform = `translateX(${-(currentIndex * totalWidth)}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Ajustar la cantidad de imágenes visibles según el ancho de la pantalla
window.addEventListener('resize', () => {
    updateCarousel();
});

updateCarousel();
