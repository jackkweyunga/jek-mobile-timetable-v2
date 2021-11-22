import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

import tmb_main from './modules/tmb-main';
import tmb_topnav from "./modules/tmb-topnav";
import tmb_rightSideNav from './modules/tmb-rightSideNav';
import tmb_leftSideNav from './modules/tmb-leftSideNav';
import tmb_content from './modules/tmb-content'


// htmls

tmb_wrapper.appendChild(tmb_topnav)
tmb_wrapper.appendChild(tmb_leftSideNav)
tmb_wrapper.appendChild(tmb_rightSideNav)
tmb_wrapper.appendChild(tmb_main);
tmb_main.appendChild(tmb_content)


// js
const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})