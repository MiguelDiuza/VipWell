// Carousel Scroll Logic
function scrollCarousel(direction) {
    const carousel = document.getElementById('home-carousel');
    if (!carousel) return;
    const scrollAmount = carousel.offsetWidth * 0.8;
    carousel.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
