import React, { useState } from "react";
import ArtistCard from "./artistCard";
import './Gallery.css';
import pic1 from './imgs/not-av.png';
import logod from './imgs/logo_nowrite.jpg';
var lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod";
var Gallery = (props)=>{
    var items=[<ArtistCard name="the Verol" pic={pic1} bio={lorem}/>,
              <ArtistCard name="doitlater" pic={logod} bio={lorem}/>,
              <ArtistCard name="bluecollar" pic={pic1} bio={lorem}/>];
    const [indx, setIndx] = useState(0);
    
    var nextClick = () =>{
        setIndx(indx+1);
        if(indx===items.length-1) setIndx(0);
    }
    return(
    <div className="gal" onClick={()=>nextClick()}>
            {items[indx]}
    </div>

);}

export default Gallery;