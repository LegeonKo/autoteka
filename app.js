import '/assets/app.styl'

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        startPosition: 0,
        items: 1,
        loop: true,
        margin: 25,
        URLhashListener: true,
        mouseDrag: false,
        touchDrag: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 7,
    });
});


const carouselListItems = document.querySelectorAll(".carousel-list__item");
const carouselListCount = 8;

for (let i = 0; i <= carouselListCount; i++) {
    carouselListItems[i].addEventListener("click", ()=> {
        for (let j = 0; j <= carouselListCount; j++) {
            carouselListItems[j].classList.remove("carousel-list__item-active");
        }
       carouselListItems[i].classList.add("carousel-list__item-active");
    });
}

