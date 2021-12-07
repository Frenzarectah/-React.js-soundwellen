import React from 'react';
import './App.css';
import Gallery from './Gallery';

function changePage(){
  var logo = document.getElementById("soundwellen");
  var sub = document.getElementsByClassName("subtitle")[0];
  logo.style.display="none";
  sub.style.display="none";
  var icon = document.getElementById("ico_mob");
  icon.className+=" _fadeIn";
  var head = document.querySelectorAll(".nav-link");
  head.forEach(function(el){
    el.classList.toggle("menu_appear");
    el.style.color="white";
    el.style.textDecoration="none";
  });
  var page = document.querySelector(".subpage");
  page.className+=" _fadeIn_slow";
}
var Home = () =>{
    window.onload=() => changePage();
    return(        
        <div className="subpage">
        <div className="whiteline"></div>
            <div className="title">[  artists   ]</div>
                <Gallery/>
        </div>
);
}
export default Home;