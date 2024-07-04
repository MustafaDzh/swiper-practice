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
            slideChange: updateProgressBar,
        },
    });

    function updateProgressBar() {
        const progressWidth = `${(swiper.realIndex + 1) / swiper.slides.length * 100}%`;
        document.querySelector('.progress-bar').style.width = progressWidth;
    }
});
