import React from "react";
import { useState } from "react";
function Clocke(){
    
    var [clicca, setClicca]= useState("under construction");
        return(
         <h1 onLoad={()=> setTimeout(setClicca(clicca="UNDER CONSTRUCTION"), 5000)}>{clicca}</h1>
     )
}
export default Clocke;