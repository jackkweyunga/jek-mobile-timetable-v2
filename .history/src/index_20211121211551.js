import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

import tmbMain from './modules/tmb-main';
import tmbCarousel from "./modules/tmb-carousel";

// htmls
tmbMain.appendChild(tmbCarousel);


// js

const swiper = new Swiper(".swiper", {
})