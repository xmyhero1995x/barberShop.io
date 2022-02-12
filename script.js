// Бургер меню

$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu,.header__burger-menu,.header__shopping-bag-mobile').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// Slider
const swiper = new Swiper(".slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Слайдер для products.css
// Вправо
let offset = 0;
const productsSlider = document.querySelector('.products__slider-line');

document.querySelector('.products__arrow-right').addEventListener('click', function () {
    offset = offset + 285;
    if (offset > 855) {
        offset = 0;
    }
    productsSlider.style.left = -offset + 'px';
});

// Влево
document.querySelector('.products__arrow-left').addEventListener('click', function () {
    offset = offset - 285;
    if (offset < 0) {
        offset = 855;
    }
    productsSlider.style.left = -offset + 'px';
});