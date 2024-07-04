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
            slideChange: function () {
                const numbers = document.querySelectorAll('.accommodation-number');
                const activeIndex = this.activeIndex; 
                numbers.forEach(number => {
                    const slideIndex = parseInt(number.getAttribute('data-slide-index'));
                    number.style.opacity = slideIndex === activeIndex ? '1.0' : '0.7';
                });
            },
        },
    });

    const numbers = document.querySelectorAll('.accommodation-number');
    numbers[0].style.opacity = '1.0';
});
