import topnav_html from "./html/tmb-leftSN.html";

const sidenav = document.createElement("aside")

sidenav.setAttribute("id","tmb-sidebar")

// css classes
var classes = ["tmb-sidebar"]
classes.forEach(x => sidenav.classList.add(x));

// html template
sidenav.innerHTML = topnav_html;

// export component
export default sidenav;
