import React from "react";
import { useState,useEffect } from "react";
function Clocke(){
    var [clicca, setClicca]= useState("under construction");
    var clickEvent=()=>{
        setClicca("UNDER CONSTRUCTION");
    }
    return(
         <h1 onClick={clickEvent}>{clicca}</h1>
     )
}
export default Clocke;