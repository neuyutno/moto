// Слайдер основной

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.sample-slider', {
        loop: true,
        direction: 'vertical',
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,  // Добавлено для возможности клика на пагинацию
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});