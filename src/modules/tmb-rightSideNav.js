import topnav_html from "./html/tmb-rightSN.html";

const rightSidenav = document.createElement("aside")

// css classes
var classes = ["tmb-right-sidebar"]
classes.forEach(x => rightSidenav.classList.add(x));

// html template
rightSidenav.innerHTML = topnav_html;

// export component
export default rightSidenav;
