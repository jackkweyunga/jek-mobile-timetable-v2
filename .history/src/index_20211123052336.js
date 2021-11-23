import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle';

import { default as content, drawTimeTable } from "./modules/tmb-content";
import { api_root } from "./services/data.js";
import axios from "axios";

import tmb_main from './modules/tmb-main';
import tmb_topnav from "./modules/tmb-topnav";
import tmb_rightSideNav from './modules/tmb-rightSideNav';
import tmb_leftSideNav from './modules/tmb-leftSideNav';
import tmb_content from './modules/tmb-content';
import tmb_wrapper from './modules/tmb-wrapper';


// htmls

tmb_wrapper.appendChild(tmb_topnav)
tmb_wrapper.appendChild(tmb_leftSideNav)
tmb_wrapper.appendChild(tmb_rightSideNav)
tmb_wrapper.appendChild(tmb_main);
tmb_main.appendChild(tmb_content)

// 


var loader = document.getElementById("tmb-search");

function startLoading() {
  loader.style.display = "flex";
}

function stopLoading() {
  loader.style.display = "none";
}

stopLoading();

var ndays = 5;
var Ttype = "Lecture";
var search_value = "";


const SelectionListener = (pid, pyear) => {
  startLoading();
  drawTimeTable(pid, pyear, ndays, Ttype).then(() => {
    stopLoading();
  });
};

const filterListener = (_d, _t) => {
  startLoading();
  var from_local = window.localStorage.getItem('selected-programme');
  console.log(from_local);
  if (from_local !== null) {
    var _i = from_local.split("-")
    var id = Number(_i[0])
    var year = _i[1] + " year";
  }

  drawTimeTable(id, year, _d, _t).then(() => {
    stopLoading();
  });
};


// draws timetable when the window loads
window.onload = () => {
  filterListener(ndays, Ttype);
};


// listening for localstorage changes
const originalSetItem = localStorage.setItem;

localStorage.setItem = function (key, value) {
  const event = new Event('itemInserted');

  event.value = value; // Optional..
  event.key = key; // Optional..

  document.dispatchEvent(event);

  originalSetItem.apply(this, arguments);
};

document.addEventListener("itemInserted", function (e) {
  if (e.key === "selected-programme") {
    var _i = e.value.split("-")
    var id = Number(_i[0])
    var year = _i[1] + " year";
    // console.log(year);
    SelectionListener(id, year);
  }
}, false);




// 

// main swiper 




// miscellinious

(async function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Sidebar toggle
   */
  if (select('.toggle-tmb-sidebar-btn')) {
    on('click', '.toggle-tmb-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-tmb-sidebar')
    })
  }

  /**
   * Right Sidebar toggle
   */
  if (select('.toggle-tmb-right-sidebar-btn')) {
    on('click', '.toggle-tmb-right-sidebar-btn', function (e) {
      select('body').classList.toggle('toggle-tmb-right-sidebar')
    })
  }

  /**
   * Search bar toggle
   */
  if (select('.search-bar-toggle')) {
    on('click', '.search-bar-toggle', function (e) {
      select('.search-bar').classList.toggle('search-bar-show')
    })
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#tmb-header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('tmb-header-scrolled')
      } else {
        selectHeader.classList.remove('tmb-header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * filter
   */
  var programmes = (await axios(`${api_root}programmes_namelist/`)).data["results"];

  var ul = document.getElementById("programmes-list");

  var render_lists = function (lists) {
    var li = "";
    for (let el of lists) {
      li += `
        <li class='list-group-item programme-item'>
          <h2 style="color:#225DCC;" class="programme-header"> ${el["name"]} </h2>`;

      for (let t of el["tags"]) {

        var json_data = `${el["id"]}-${t.replace(" ", "-")}`;

        li += `<button onclick="window.localStorage.setItem('selected-programme', '${json_data}');document.getElementById('selected-programme').innerText='${el["name"]}';" class="m-1 shadow-sm text-link btn btn-sm"> ${t} </button>`
      }

      li += `</li>`;
    }
    ul.innerHTML = li;
  }

  render_lists(programmes);

  // lets filters it
  var input = document.getElementById('filter_programmes');

  var filterProgrammes = function (event) {
    var keyword = input.value.toLowerCase();
    var filtered_programmes = programmes.filter(function (programme) {
      programme = programme["name"].toLowerCase();
      return programme.indexOf(keyword) > -1;
    });

    render_lists(filtered_programmes);
  }

  var checkInput = () => {
    if (input === document.activeElement) 
    return }
    else {
      if (document.getElementById("seacrch-area-dropdown").classList.indexOf("d-none") > 0) {
        return
      } else {
        document.getElementById("seacrch-area-dropdown").classList.add("d-none");
      }
    }
  }

  checkInput();


  input.addEventListener('keyup', () => {
    document.getElementById("seacrch-area-dropdown").classList.remove("d-none");
    input.addEventListener('keyup', filterProgrammes);

  });

  /**
   * Initiate tooltips
   */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})();
