document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        navigation: {
            nextEl: '.right-button',
            prevEl: '.left-button'
        },
        on: {
            slideChangeTransitionStart: function () {
                updateProgressBar(this.activeIndex);
            },
        },
    });

    function updateProgressBar(activeIndex) {
        const progressWidth = ((activeIndex + 1) / swiper.slides.length) * 100 + '%';
        document.querySelector('.progress-bar').style.width = progressWidth;
    }

    updateProgressBar(swiper.activeIndex);
});
