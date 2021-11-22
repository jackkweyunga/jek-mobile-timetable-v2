
import tmbCarouselHtml from "./html/tmb_carousel.html";
import tmbCarouselCss from "./style/tmb_carousel.css";

var tmb_carousel = document.createElement("div");


tmb_carousel.innerHTML = tmbCarouselHtml
tmb_carousel.style = tmbCarouselCss;


export default tmb_carousel