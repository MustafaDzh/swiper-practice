document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.right-button',
            prevEl: '.left-button'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 6,
            renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
            },
        },
        on: {
            slideChange: function () {
                const progressWidth = `${(this.realIndex + 1) / this.slides.length * 100}%`;
                document.querySelector('.progress-bar').style.width = progressWidth;
            },
        },
    });

    const newSwiper = new Swiper('.swiper-container-1', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.right-button-1',
            prevEl: '.left-button-1'
        },
        pagination: {
            el: ".swiper-pagination-1",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 6,
            renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
            },
        },
        on: {
            slideChange: function () {
                const progressWidth = `${(this.realIndex + 1) / this.slides.length * 100}%`;
                document.querySelector('.progress-bar-1').style.width = progressWidth;
            },
        },
    });
});
