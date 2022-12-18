import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);


export function initSlider(container, options){
    new Swiper(container, options)
}
