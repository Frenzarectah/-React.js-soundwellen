import React, { useState } from "react";
import ArtistCard from "./artistCard";
import './Gallery.css';
import pic1 from './imgs/not-av.png';
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

var Gallery = (props)=>{
    var items=[<ArtistCard name="the verol" pic={pic1} bio={lorem}/>,
              <ArtistCard name="doitlater" pic={pic1} bio={lorem}/>,
              <ArtistCard name="bluecollar" pic={pic1} bio={lorem}/>];
    const [indx, setIndx] = useState(0);
    var nextClick = () =>{
        setIndx(indx+1);
        console.log(indx);
        }
    return(
    <div className="gal">
        <div className="sx" style={{fontFamily:"arial"}} onClick={()=>nextClick}>
                    {'<<'}
        </div>
        <div className="image">
                    {items[indx]}
        </div>
        <div className="dx" style={{fontFamily:"arial"}} onClick={()=>setIndx(indx+1)}>
                    {'>>'}
        </div>
    </div>

);}

export default Gallery;