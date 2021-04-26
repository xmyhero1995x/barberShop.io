// Бургер меню

$(document).ready(function () {
    $('.header__burger').click(function (event) {
            $('.header__burger,.header__menu,.header__burger-menu,.header__shopping-bag-mobile').toggleClass('active');
            $('body').toggleClass('lock');
        });
});

// Слайдер для team.css

const teamSlider = document.querySelector('.team__slider-line');

document.querySelector('.team__arrow-right').addEventListener('click', function() {
    offset = offset + 197;
    if (offset > 591) {
        offset = 0;
    }
    teamSlider.style.left = -offset + 'px';
});

// Слайдер для reviews.css

let offset = 0;
const reviewsSlider = document.querySelector('.reviews__slider-line');

// Вправо
document.querySelector('.reviews__arrow-left').addEventListener('click', function() {
    offset = offset + 197;
    if (offset > 591) {
        offset = 0;
    }
    reviewsSlider.style.left = -offset + 'px';
});


// Влево
document.querySelector('.reviews__arrow-right').addEventListener('click', function() {
    offset = offset - 197;
    if (offset < 0) {
        offset = 591;
    }
    reviewsSlider.style.left = -offset + 'px';
});

// Слайдер для products.css
// Вправо
const productsSlider = document.querySelector('.products__slider-line');

document.querySelector('.products__arrow-right').addEventListener('click', function() {
    offset = offset + 285;
    if (offset > 855) {
        offset = 0;
    }
    productsSlider.style.left = -offset + 'px';
});

// Влево
document.querySelector('.products__arrow-left').addEventListener('click', function() {
    offset = offset - 285;
    if (offset < 0) {
        offset = 855;
    }
    productsSlider.style.left = -offset + 'px';
});