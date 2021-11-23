
import axios from "axios";
import * as tmb from "../interfaces/programme.js";
// import ghjson from "../../assets/files/faculty.json";

// const api_root = "https://jtu-api.herokuapp.com/api/v1/";

export const api_root = "https://udsmtt.tk/api/v1/";

// const api_root = "http://127.0.0.1:8000/api/v1/";


export const Data = async (pid, pyear) => {


    // let data = await (await fetch(ghjson)).json();

    let data = ( await (axios(api_root+`programme/${pid}`))).data

    console.log(data);

    // check for a not found message 
    if (data["message"] !== undefined) {
        return null;
    }

    
    var process = (ev) => {
        console.log(ev);
        return new tmb.UnivEvent(
            ev["id"],
            ev["day"],
            ev["type"],
            ev["fro"],
            ev["to"],
            ev["rooms"],
            ev["groups"]
        )
    }

    var all = data["events"][pyear];
    var events = all.map(process, all);

    return new tmb.Programme(events, data["name"]);
}
