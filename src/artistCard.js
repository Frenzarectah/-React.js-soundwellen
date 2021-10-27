import React from 'react';
import './artistCard.css';

var ArtistCard = (props)=>{
    return(
        <div className="frame">
            <div>[{props.name}]</div>
            <div><img style={{width:"75px",height:"auto"}} src={props.pic} alt="artist photo"/></div>
            <div style={{fontFamily:'Open Sans Condensed'}}>{props.bio}</div>
        </div>
);}
export default ArtistCard;