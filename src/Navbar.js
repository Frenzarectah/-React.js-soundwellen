import React from 'react';

function Navbar(props){
    return(
        <navbar><ul>
            <li>{props.menu1}</li>
            <li>{props.menu2}</li>
            <li>{props.menu3}</li>
            </ul></navbar>        
    );
}
export default Navbar;