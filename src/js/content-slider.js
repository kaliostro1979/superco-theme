import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const selectors = {
    container: ".content-slider",
    next_arrow: ".swiper-button-next",
    prev_arrow: ".swiper-button-prev"
}


const contentSlider = new Swiper(selectors.container, {
    spaceBetween: 10,
    autoHeight: false,
    navigation: {
        nextEl: selectors.next_arrow,
        prevEl: selectors.prev_arrow,
    },
    breakpoints: {
        0: {
            allowTouchMove: true,
            slidesPerView: "auto"
        },
        768: {
            allowTouchMove: true,
            slidesPerView: 2
        },
        991: {
            allowTouchMove: true,
            slidesPerView: 4
        }
    }
})
