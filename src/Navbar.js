import react from 'react';
import React from 'react';
import frame from './imgs/frame.jpg';

var openDJS =()=>{
 alert("massivo");
 var freim = document.getElementById("freim");
 freim.style.opacity="1";
 freim.className+="frame_in";
}
function Navbar(props){
    return(
        <react.Fragment>
        <img src={frame} id="freim" className="frame"/>
        <div id="list"><ul>
            <li onClick={()=>openDJS()}>{props.menu1}</li>
            <li>{props.menu2}</li>
            <li>{props.menu3}</li>
            <li>{props.menu4}</li>
            <li>{props.menu5}</li>
            </ul>
            </div>      
        </react.Fragment>  
    );
}
export default Navbar;