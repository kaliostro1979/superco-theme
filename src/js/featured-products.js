import {initSlider} from "./slider";


const selectors = {
    container: ".products-slider",
    next_arrow: ".product-slider-arrow_prev",
    prev_arrow: ".product-slider-arrow_next"
}

const options = {
    spaceBetween: 2,
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
            slidesPerView: 3
        }
    },
    on: {
        init: function() {
            checkArrow();
        },
        resize: function () {
            checkArrow();
        }
    }
}

initSlider(selectors.container, options)

function checkArrow() {
    const swiperPrev = document.querySelector(selectors.prev_arrow);
    const swiperNext = document.querySelector(selectors.next_arrow);
    if ( window.innerWidth > 768  ) {
        swiperPrev.style.display = 'block';
        swiperNext.style.display = 'block';
    } else {
        swiperPrev.style.display = 'none';
        swiperNext.style.display = 'none';
    }
}

const products = document.querySelectorAll(".product-card__wrapper")
let cartItems = []

const getCartItems = async ()=>{
    cartItems = await fetch(window.Shopify.routes.root + 'cart.js')
        .then(res=>res.json())
        .then(data=>data.items)
    console.log(cartItems)
}

products.forEach(product => {
    product.addEventListener("click", async function (event) {
        let selectedProductId = product.getAttribute("data-id")

        let formData = {
            'items': [{
                'id': selectedProductId,
                'quantity': 1
            }]
        };

        await fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                return response.json();
            }).then(()=>getCartItems())
            .catch((error) => {
                console.error('Error:', error);
            });
    })
})



