const logo = document.querySelector('.header-logo a')
const body = document.querySelector('body')
const headerInner = document.querySelector('.header-inner')

window.addEventListener('scroll', function (){
    if (window.scrollY > 0){
        body.classList.add('cream')
        headerInner.classList.add('scrolled')
    }else {
        body.classList.remove('cream')
        headerInner.classList.remove('scrolled')
    }
})
