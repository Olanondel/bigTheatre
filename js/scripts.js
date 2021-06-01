const mobileMenuCloseBtn = document.querySelector('.close-mobile-nav')
const mobileMenuOpenBtn = document.querySelector('.open-mobile-nav')
const mainNav = document.querySelector('.nav')

mobileMenuCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()

    mainNav.classList.toggle('mobile-menu_active')
})

mobileMenuOpenBtn.addEventListener('click', (e) => {
    e.preventDefault()

    mainNav.classList.toggle('mobile-menu_active')
})

const productionSlider = new Swiper('.our-products__slider', {
    slideToClickedSlide: true,
    watchOverflow: true,
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    speed: 800,
    autoplay: {
      speed: 800
    },
    slidesPerGroup: 1,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 'auto',
        }
    }
})

const partnersSlider = new Swiper('.partners__row', {
    slidesPerView: 1,
    slideToClickedSlide: true,
    watchOverflow: true,
    freeMode: true,
    grabCursor: true,
    slidesPerColumn: 2,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.6,
        },
        1200: {
            slidesPerView: 4,
            enabled: false,
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
})