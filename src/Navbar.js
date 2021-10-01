import react from 'react';
import React from 'react';
import frame from './imgs/frame.jpg';

var openDJS =()=>{
 alert("massivo");
}
function Navbar(props){
    return(
        <react.Fragment>
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