import React from 'react';

var ArtistCard = (props)=>{
    return(
        <div style={{width:"250px",height:"350px",border:"1px red solid"}}>
            <div>{props.name}</div>
            <div><img style={{width:"75px",height:"auto"}} src={props.pic} alt="artist photo"/></div>
            <div style={{fontFamily:'Open Sans Condensed'}}>{props.bio}</div>
        </div>
);}
export default ArtistCard;