import React from 'react';
import reactDom from 'react-dom';
import './artistCard.css';


var ArtistCard = (props)=>{
    return(
        <React.Fragment>
        <div className="frame" style={{ backgroundImage: `url(${props.pic})`}}>
                <div className="name">[ {props.name} ]</div>
                <div style={{fontFamily:'Open Sans Condensed'}}>{props.bio}</div>
        </div>
        </React.Fragment>
);}
export default ArtistCard;