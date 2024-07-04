document.addEventListener('DOMContentLoaded', function() {
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
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
          },
        on: {
            slideChangeTransitionStart: handleSlideChange
        },
    });

    function handleSlideChange() {
        const activeIndex = swiper.activeIndex;
        updateProgressBar(activeIndex);
    }
    function updateProgressBar(activeIndex) {
        const progressWidth = ((activeIndex + 1) / swiper.slides.length) * 100 + '%';
        document.querySelector('.progress-bar').style.width = progressWidth;
    }

    handleSlideChange();
});