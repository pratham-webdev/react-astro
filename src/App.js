import LeftNavbar from "./LeftNavbar.js"
import MainContent from "./MainContent.js"

import {useState, useEffect} from "react";


export default function App(){

    const [imgArray, addImg] = useState([]);
    const [post, havePosted] = useState(0);

    useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks/search?limit=100")
          .then(res => res.json())
          .then(
            (result) => {
            console.log(result);
            addImg(result.data);
              console.log("we have run now");
            }
          )
      }, [post]);
    return(
        <div className="d-flex justify-content-between h-100">
            <LeftNavbar array={imgArray} />
            <MainContent array={imgArray} />
        </div>
    )
}