

import mainHtml from "./html/tmb-main.html";

const tmb_main = document.createElement("main");

tmb_main.innerHTML = 

tmb_main.setAttribute("id", "tmb-main");

// css classes
var classes = ["tmb-main"]
classes.forEach(x => tmb_main.classList.add(x));

export default tmb_main;

