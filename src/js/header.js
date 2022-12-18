const logo = document.querySelector('.header-logo a')
const body = document.querySelector('body')
const headerInner = document.querySelector('.header-inner')
const headerMenuButton = document.querySelector('.header__mobile-menu-icon')
const mobileNavBar = document.querySelector('.header-nav-mobile')
const mobileNavBarCloseIcon = document.querySelector('.header-nav-mobile__close')


window.addEventListener('scroll', function (){
    if (window.scrollY > 0){
        body.classList.add('cream')
        headerInner.classList.add('scrolled')
    }else {
        body.classList.remove('cream')
        headerInner.classList.remove('scrolled')
    }
})

headerMenuButton.addEventListener('click', function (){
    mobileNavBar.classList.remove('left-[-100%]')
    mobileNavBar.classList.add('left-0')
})

mobileNavBarCloseIcon.addEventListener('click', function (){
    mobileNavBar.classList.add('left-[-100%]')
    mobileNavBar.classList.remove('left-0')
})
