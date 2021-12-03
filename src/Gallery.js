import React, { useState } from "react";
import ArtistCard from "./artistCard";
import './Gallery.css';
import pic1 from './imgs/not-av.png';
import arrow from './imgs/back.png';
import arrow_fwd from './imgs/forward.png';
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var Gallery = (props)=>{
    var items=[<ArtistCard name="the verol" pic={pic1} bio={lorem}/>,
              <ArtistCard name="doitlater" pic={pic1} bio={lorem}/>,
              <ArtistCard name="bluecollar" pic={pic1} bio={lorem}/>];
    const [indx, setIndx] = useState(0);
    var nextClick = () =>{
        setIndx(indx+1);
        console.log(indx);
        if(indx===items.length-1) setIndx(0);
    }
    var prevClick = () =>{
        setIndx(indx-1);
        console.log(indx);
        if(indx===0) setIndx(items.length-1);
    }
    return(
    <div className="gal">
        <div className="left" onClick={()=>prevClick()}>
                   <img className="dx" src={arrow}/>
        </div>
        <div className="image">
                    {items[indx]}
        </div>
        <div className="right" onClick={()=>nextClick()}>
                    <img className="sx" src={arrow_fwd}/>
        </div>
    </div>

);}

export default Gallery;