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