import React, { useState } from "react";
import ArtistCard from "./artistCard";
import './Gallery.css';
import pic1 from './imgs/not-av.png';
import pic2 from './imgs/not-av.png';
import pic3 from './imgs/not-av.png';
var Gallery = (props)=>{
    var items=[<ArtistCard name="theverol"/>,
              <ArtistCard name="doitlater"/>,
              <ArtistCard name="bluecollar"/>];
    const [indx, setIndx] = useState(0);
    return(
    <div className="gal">
        <div className="sx" style={{fontFamily:"arial"}} onClick={()=>setIndx(indx-1)}>
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