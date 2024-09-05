// let currentSlide1 = 0;
// const slide1 = document.querySelectorAll('.projectnavi1 .slide');

// function showSlide(index) {
//     slide1.forEach((slide, i) => {
//         slide.style.display = (i === index) ? 'block' : 'none';
//     });
// }

// function changeSlide(direction) {
//     currentSlide1 += direction;
//     if (currentSlide1 < 0) {
//         currentSlide1 = slide1.length - 1;
//     } else if (currentSlide1 >= slide1.length) {
//         currentSlide1 = 0;
//     }
//     showSlide(currentSlide1);
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams1 = new URLSearchParams(window.location.search);
//     currentSlide1 = parseInt(urlParams1.get('slide')) || 0;
//     showSlide(currentSlide1);
// });
// document.addEventListener('DOMContentLoaded', function() {

let currentSlide = 0;
const slides = document.querySelectorAll('.projectnavi1 .slide');

function showSlide(index) {
    slides.forEach((slides, i) => {
        slides.style.display = (i === index) ? 'block' : 'none';
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentSlide = parseInt(urlParams.get('slide')) || 0;
    showSlide(currentSlide);
});

