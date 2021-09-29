import React from 'react';

function Navbar(props){
    return(
        <div id="list"><ul>
            <li>{props.menu1}</li>
            <li>{props.menu2}</li>
            <li>{props.menu3}</li>
            </ul></div>        
    );
}
export default Navbar;