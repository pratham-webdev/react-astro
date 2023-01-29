import LeftNavbar from "./LeftNavbar.js"
import MainContent from "./MainContent.js"

import {useState, useEffect} from "react";

const gSheetScheduleID = '1TNURmlgoChcAuGTcfihctMXGg6w7rKdYIll_ovAuCO0';


export default function App(){

    const [astroArray, addAstro] = useState([]);
    const [post, havePosted] = useState(0);

    useEffect(() => {
        fetch(`https://docs.google.com/spreadsheets/d/${gSheetScheduleID}/gviz/tq?sheet=Astrosigns&tqx=out:json`)
        .then((res) => res.text())
        .then((text) => {
          const json = JSON.parse(text.substr(47).slice(0, -2));
          let testArray = json.table.rows.map((item,index) => {
            return {
                id:`astro-${index}`,
                name: item.c[0].v,
                date: item.c[1].v,
                desc: item.c[2].v,
            }
          });
          console.log(testArray);
          addAstro(testArray);
          })
      }, [post]);
    return(
        <div className="container d-flex justify-content-between h-100">
            <LeftNavbar array={astroArray} />
            <MainContent array={astroArray} />
        </div>
    )
}