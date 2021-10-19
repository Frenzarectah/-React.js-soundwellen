import React from 'react';
function changePage(){
  var logo = document.getElementById("soundwellen");
  var sub = document.getElementsByClassName("subtitle")[0];
  logo.style.display="none";
  sub.style.display="none";
  var icon = document.getElementById("ico_mob");
  var icon_desk = document.getElementById("menu_desk");
  icon_desk.className+=" _fadeIn";
  icon.className+=" _fadeIn";
  var head = document.querySelectorAll(".nav-link");
  head.forEach(function(el){
    el.classList.toggle("menu_appear");
  });
}
var Artists = () =>{
    window.onload=() => changePage();
    var head = document.getElementsByClassName("nav-link");
    for (var el of head){
      el.classList+="menu_appear";
      el.style.color="white";
      el.style.textDecoration="none";
    }
    return(
        <React.Fragment>
        <h1 style={{color:"white"}}>ARTISTI</h1>
        </React.Fragment>
);
}
export default Artists;
