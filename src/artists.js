import React from 'react';
var Artists = () =>{
    var head = document.getElementsByClassName("nav-link");
    for (var el of head){
      el.classList+="menu_appear";
    }
    return(
        <React.Fragment>
        
        <h1 style={{color:"white"}}>ARTISTI</h1>
        </React.Fragment>
);
}
export default Artists;
