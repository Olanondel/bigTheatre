const mobileMenuCloseBtn = document.querySelector('.close-mobile-nav')
const mobileMenuOpenBtn = document.querySelector('.open-mobile-nav')
const mainNav = document.querySelector('.nav')
const partnersSliderElement = document.querySelector('.partners__row')
const anchors = document.querySelectorAll('a[href*="#"]')

mobileMenuCloseBtn.addEventListener('click', (e) => {
    e.preventDefault()

    mainNav.classList.toggle('mobile-menu_active')
    document.body.classList.remove('no-scroll')
})

mobileMenuOpenBtn.addEventListener('click', (e) => {
    e.preventDefault()

    mainNav.classList.toggle('mobile-menu_active')
    document.body.classList.add('no-scroll')
})

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('nav') && !e.target.classList.contains('open-mobile-nav')) {
        mainNav.classList.remove('mobile-menu_active')
        document.body.classList.remove('no-scroll')
    }
})

const productionSlider = new Swiper('.our-products__slider', {
    slideToClickedSlide: true,
    watchOverflow: true,
    slidesPerView: 1,
    loop: true,
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

let partnersSlider = new Swiper(partnersSliderElement, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    slideToClickedSlide: true,
    grabCursor: true,
    loop: true,
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
            spaceBetween: 30
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
})

const mainSlider = new Swiper('.slider__container', {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
        prevEl: '.slider__prev',
        nextEl: '.slider__next',
    }
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
            grabCursor: true,
            loop: true,
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
                    spaceBetween: 30
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
for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault()

        const blockId = anchor.getAttribute('href')
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

        mainNav.classList.remove('mobile-menu_active')
    })
}