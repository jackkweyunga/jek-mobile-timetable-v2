
import tmbCarouselHtml from "./html/tmb-carousel.html";
import tmbCarouselCss from "./styles/tmb-carousel.css";

var tmb_carousel = document.createElement("div");
tmb_carousel.innerHTML = tmbCarouselHtml;
tmb_carousel.classList.add("swiper");
tmb_carousel.classList.add("mainSwiper");

tmb_carousel.style = tmbCarouselCss;


export default tmb_carousel