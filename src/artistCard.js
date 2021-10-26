import React from 'react';
import pic from './imgs/vevol.jpg';

var ArtistCard = (props)=>{
    return(
        <div style={{width:"75px",height:"150px",border:"1px red solid"}}>
            <div>{props.name}</div>
            <div><img style={{width:"75px",height:"auto"}} src={pic}/></div>
            <div style={{fontFamily:'Open Sans Condensed'}}>{props.bio}</div>
        </div>
);}
export default ArtistCard;