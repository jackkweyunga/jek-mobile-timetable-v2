
import { period_box, day_column } from "../utils/utils.js";
import { Data } from "../services/data.js";
import tmbCarousel from "./tmb-carousel";

import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/bundle';



// global time array of object that is used to control collissions
var times = {};

// time range function

var tRange = (_start, _end) => {

    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }

    return [...range(_start, _end)];
}


// intersection of two sets

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return new Array(_intersection);
}

// check for collision

function checkForCollision(key, value, day) {
    var d = times[day];
    var colls = []
    for (const [k, v] of Object.entries(d)) {
        // console.log(`${k}: ${key}`);

        var a = new Set(v);
        var b = new Set(value)
        if (intersection(a, b) !== null | undefined) {
            var ent = `${key} collides ${k} at ${intersection(a, b)}`;
            colls.push(ent);
        }
    }
    return colls;
}

// container
var content = document.createElement("div")

content.classList.add("tmb-content");

// const colors = ["#FF69B4", "#CF9FFF", "#ADD8E6", "#FFF8DC", "#ff9166", "#66ffe8", "#ef66ff"]

const colors = ["#d520b7", "#a03d1a", "#8c2e4f", "#771f84", "#8462bc", "#5688c7", "#f97910", "#24466b", "#16253b"]

var make_styles = (top_content, main_content, main_content_right, main_content_left, collisons, description) => {

    top_content.style = `
        display: flex;
        position: sticky;
        padding: 0;
        top: 0;
        z-index: 2;
        margin-bottom: 15px;
        box-shadow: 0px 3px 10px 0px #eee ;
    `;

    main_content.style = `
        display: flex;
        height: 100%;
        postion: relative;
    `;

    main_content_left.style = `
        background: white;
        display: flex;
        flex: 1;
        position: relative;
        overflow: auto;
        margin-bottom: 60px;
    `;

    main_content_right.style = `
        flex :1;
        background: white;
        max-width: 50px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
    `;
}

// the function to draw the timetable

export const drawTimeTable = async (pid, pyear, ndays = 5, type = 'Seminar') => {
    // console.log(fac);
    Data(pid, pyear).then(data => {

        if (data !== null | undefined) {

            // console.log(data);

            // document.getElementById('selected-programme').innerText = data.name;

            var top_content = document.createElement('div');
            var main_content = document.createElement('div');

            var main_content_right = document.createElement('div');
            var main_content_left = document.createElement('div');

            main_content_left.appendChild(tmbCarousel);

            make_styles(top_content, main_content, main_content_right, main_content_left);

            const bgcolors = []

            const faculty_codes = []

            for (let c of data.events) {
                faculty_codes.push(c.group);
            }

            // console.log(bgcolors);
            // console.log(faculty_codes);
            var for_color_codes = new Set(faculty_codes);
            for_color_codes = [...for_color_codes]

            let k_ = 0;
            for (let c of for_color_codes) {
                let show = { name: c, color: colors[k_] }
                bgcolors.push(show)
                k_++;
            }


            for (let i = 0; i < ndays; i++) {
                let day = day_column()
                day.style.position = "relative";

                let days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

                // title of the day
                const title = period_box();
                title.style.minHeight = "35px";
                title.style.width = '';
                title.style.boxShadow = 'inset 0 0 0 #000';
                title.innerHTML = `
                    <label style="
                        height: 100%;
                        display: flex;
                        z-index: 2;
                        align-items: center;
                        justify-content: center;
                        font-size: 12px;
                        color: #999;
                    ">${days[i]}</label>
                    `;
                top_content.appendChild(title)


                let i_for_colors = 0;
                times[days[i]] = {};

                for (let k = -1; k < 12; k++) {
                    let p = period_box();

                    // for (let course of data.events) {

                    for (let period of data.events) {
                        if ((period.day.slice(0, 3) === days[i]) && (period.type == type)) {
                            let end = period.toTime.slice(0, 5).replace(':', '');
                            if (end.slice(2, 4) === '55') {
                                end = Number(end.slice(0, 2)) + 1
                            } else {
                                end = Number(end.slice(0, 2));
                            }

                            let start = Number(period.fromTime.slice(0, 5).replace(':', '').slice(0, 2));

                            if (k + 8 === start || k + 8 === end) {
                                let lb = period_box()


                                const height = ((end - start) * 80).toString()
                                const top = ((start - 7) * 80).toString()

                                times[days[i]][`${period.group}-${period.type}`] = tRange(start, end);

                                let bgcolor = "#470024";

                                for (let color of bgcolors) {
                                    if (period.group === color.name) {
                                        bgcolor = color.color;
                                    }
                                }


                                lb.innerHTML = `
                                        <div style="
                                            flex:1;
                                            display:flex;
                                            height: ${height}px;
                                            width: 100%;
                                            color: #FFFFFF;
                                            padding: 10px;
                                            justify-content: center;
                                            align-items: center;
                                            align-items: flex-top;
                                        ">
                                        <span style="font-size: 0.7rem;">${period.group} ${period.type} <br> ${period.room} <br>${start} - ${end} </span>
                                        </div>
                                        `;
                                lb.style = `
                                        position: absolute;
                                        background: ${bgcolor};
                                        flex:1;
                                        width: 100%;
                                        z-index: 1;
                                        border: 1px solid #FFFFFF;
                                        top: ${top}px;
                                        min-height: ${height}px;
                                        max-height: ${height}px;
                                    `;

                                day.appendChild(lb)
                                i_for_colors++;

                            }

                        }
                    }
                    // }

                    day.appendChild(p)
                }
                day.classList.add("swiper-slide");
                main_content_left.getElementsByClassName("swiper-wrapper")[0].appendChild(day);
            }


            //  the time column // replaced for the swiper navigation
            const tp = period_box();
            tp.style.minHeight = "35px";
            tp.style.maxWidth = "50px";
            tp.style.boxShadow = 'inset 0 0 0 #000';
            tp.innerHTML = `
                    <div class="swiper-button-next"></div>
                `;
            top_content.appendChild(tp);

            for (let i = -1; i < 13; i++) {
                const t = period_box();
                const label = document.createElement('label');
                label.innerText = `${8 + i}:00`
                label.style = `
                    margin-left: 10px;
                    margin-top: -10px;
                    position: absolute;
                    font-size: 12px;
                    color: #999;
                    `;

                t.style.boxShadow = 'inset 0 0 0';
                t.appendChild(label)
                main_content_right.appendChild(t);

            }

            // swiper navigation

            var days_navigation = document.createElement("div");
            days_navigation.innerHTML = `
                    <div class="swiper-button-prev"></div>
                `;

            top_content.appendChild(days_navigation);


            //
            main_content.appendChild(main_content_left)
            main_content.appendChild(main_content_right)

            content.innerHTML = "";
            content.appendChild(top_content)
            content.appendChild(main_content)

            // configure Swiper to use modules
            Swiper.use([Navigation, Pagination, Scrollbar]);

            const swiper = new Swiper(".swiper", {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                slidesPerView: 1,
            });

            var today = new Date(); 
            let days = ["Mon", "Tue", "Wed", "Thu", "Fri"]

            swiper.on('activeIndexChange', function (e) {
                const kday = today.getDay();
                if (kday <= 5) [
                    
                ]
                console.log(e.activeIndex, );
            });

            swiper.slideTo(3, 300)
        }
    })
        .catch((err) => {
            console.log(err);
        })
}




export default content;
