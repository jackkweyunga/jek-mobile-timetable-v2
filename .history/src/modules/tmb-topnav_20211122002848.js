import topnav_html from "./html/topnav.html";

const topnav = document.createElement("header");

var classes = ["tmb-header", "fixed-top", "d-flex", "align-items-center"]
classes.forEach(x => topnav.classList.add(x));

topnav.innerHTML = topnav_html;


export default topnav;
