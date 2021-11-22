import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

import tmbMain from './modules/tmb-main';
import tmbCarousel from "./modules/tmb-carousel";
import tmb_main from './modules/tmb-main';
import tmbRightSideNav from './'
import tmbLeftSideNav from './modules/tmb-leftSideNav'


// htmls
tmbMain.appendChild(tmbCarousel);


tmb_wrapper.appendChild(topnav)
tmb_wrapper.appendChild(sidenav)
tmb_wrapper.appendChild(righttopnav)
tmb_wrapper.appendChild(main);
tmb_main.appendChild(content)


// js

const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})