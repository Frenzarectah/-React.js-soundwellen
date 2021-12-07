import React, { Component } from 'react';
import reactDom from 'react-dom';
import './artistCard.css';
import './App.css';

var vanish = ()=>{
      /*  var name = document.querySelector(".name");
        console.log(name);
        name.className+="_fadeIn";*/
        console.log("loaded!");
}
var ArtistCard = (props)=>{
    return(
        <div className="frame" style={{ backgroundImage: `url(${props.pic})`}} onLoad={()=>vanish()}> 
                <div style={{width:"60%"}}></div>
                <div className="name">{props.name}</div>
                <div className="bio" style={{fontFamily:'Open Sans Condensed'}}>{props.bio}</div>
        </div>
);}
export default ArtistCard;