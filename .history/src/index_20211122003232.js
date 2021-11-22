import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

import tmbMain from './modules/tmb-main';
import tmbCarousel from "./modules/tmb-carousel";


// htmls
tmbMain.appendChild(tmbCarousel);


tmb_wrapperwrapper.appendChild(sidenav)
wrapper.appendChild(righttopnav)
wrapper.appendChild(main);
main.appendChild(content)


// js

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})