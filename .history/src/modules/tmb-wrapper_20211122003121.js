import tmbCss from "./styles/tmb-main.css";

var tmb_wrapper = document.getElementById("tmb");

tmb_wrapper.style = tmbCss;

export default tmb_wrapper
const wrapper = document.getElementById("tmb");

wrapper.style = `
    position: relative;
    min-height: 100vh;
    max-height: 100vh;
    width: 100%; 
    margin:0;
    overflow: hidden;
    -moz-box-shadow: 0px 0px 1px #ddd;
    -webkit-box-shadow: 0px 0px 1px #ddd;
    box-shadow: 0px 0px 5px #ddd;
    `;

export default wrapper;

