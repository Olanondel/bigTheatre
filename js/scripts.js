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

const partnersSliderElement = document.querySelector('.partners__row')

let partnersSlider = new Swiper(partnersSliderElement, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    watchOverflow: true,
    grabCursor: true,
    slidesPerColumn: 2,
    breakpoints: {
        576: {
            slidesPerView: 2,
            freeMode: true,
        },
        768: {
            slidesPerView: 2.6,
            freeMode: true,
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

window.addEventListener('resize', () => {

    if (window.innerWidth > 1200 && partnersSliderElement.dataset.pc === 'false') {
        partnersSliderElement.dataset.pc = 'true'

    }

    if (window.innerWidth < 1200 && partnersSliderElement.dataset.pc === 'true') {
        partnersSlider = new Swiper(partnersSliderElement, {
            slidesPerView: 1,
            slidesPerGroup: 1,
            slideToClickedSlide: true,
            watchOverflow: true,
            grabCursor: true,
            slidesPerColumn: 2,
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    freeMode: true,
                },
                768: {
                    slidesPerView: 2.6,
                    freeMode: true,
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
        partnersSliderElement.dataset.pc = 'false'
    }
})

// add smooth anchors
const anchors = document.querySelectorAll('a[href^="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()

        const blockId = anchor.getAttribute('href')
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}