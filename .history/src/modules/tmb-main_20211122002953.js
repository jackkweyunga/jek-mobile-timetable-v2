

const main = document.createElement("main");

main.setAttribute("id", "tmb-main");

// css classes
var classes = ["tmb-main"]
classes.forEach(x => main.classList.add(x));

export default main;


var tmb_main = document.getElementById("tmb");

tmb_main.style = tmbMainCss;

export default tmb_main