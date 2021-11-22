import topnav_html from "./html/sidenav.html";

const sidenav = document.createElement("aside")

// css classes
var classes = ["tmb-sidebar"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = topnav_html;

// export component
export default sidenav;
