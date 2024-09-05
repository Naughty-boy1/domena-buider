document.addEventListener('DOMContentLoaded', function() {

let currentIndex2 = 0;
const slides2 = document.querySelector('.projectnavi2 .mobile-slides');
const totalSlides2 = document.querySelectorAll('.projectnavi2 .single-slide').length;

function showSlide(index) {
    slides2.style.transform = `translateX(${-index * 100}%)`;

}

function nextSlide() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    showSlide(currentIndex2);
}

function prevSlide() {
    currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
    showSlide(currentIndex2);
    
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const urlsammie = new URLSearchParams(window.location.search);
    currentIndex2 = parseInt(urlsammie.get('single-slide')) || 0;
    showSlide(currentIndex2);
    // const urlParams2 = new URLSearchParams(window.location.search);
    // currentIndex2 = parseInt(urlParams2.get(' single-slide')) || 0;
    // showSlide(currentIndex2);
});
});
// setInterval(nextSlide, 3000);
 // Change slide every 3 seconds