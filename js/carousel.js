const carouselItems = document.querySelector('.carousel__items');
const slides = document.querySelectorAll('.carousel__item');
let slideNumber = 0;


document.querySelector('.carousel__btn--next').addEventListener('click', (() => {
    slideNumber++;
    if (slideNumber >= slides.length) {
        slideNumber = 0;
    }
    updateCarousel();
}));

document.querySelector('.carousel__btn--prev').addEventListener('click', (() => {
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = slides.length - 1;
    }
    updateCarousel();
}))

function updateCarousel() {
    carouselItems.style.transform = `translateX(${-slideNumber * 100}%)`;
}