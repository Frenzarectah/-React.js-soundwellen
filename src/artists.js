import React from 'react';
import './App.css';
import ArtistCard from './artistCard';
import pic1 from './imgs/not-av.png';
function changePage(){
  var logo = document.getElementById("soundwellen");
  var sub = document.getElementsByClassName("subtitle")[0];
  logo.style.display="none";
  sub.style.display="none";
  var icon = document.getElementById("ico_mob");
  //var icon_desk = document.getElementById("menu_desk");
  //icon_desk.className+=" _fadeIn";
  icon.className+=" _fadeIn";
  var head = document.querySelectorAll(".nav-link");
  head.forEach(function(el){
    el.classList.toggle("menu_appear");
    el.style.color="white";
    el.style.textDecoration="none";
  });
}
var Artists = () =>{
    window.onload=() => changePage();
    return(        
      <React.Fragment>
        <div className="whiteline"></div>
        <div className="subpage">
            <div>artists</div>
            <div className="gallery">
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
            </div>
        </div>
        </React.Fragment>
);
}
export default Artists;
