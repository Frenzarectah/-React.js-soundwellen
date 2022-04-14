import React from 'react';
import './App.css';
import Gallery from './Gallery';

function changePage(){
  var app = document.querySelector(".App"); 
  app.className+=" justify-content-start";
  var logo = document.getElementById("soundwellen");
  var sub = document.getElementsByClassName("subtitle")[0];
  logo.style.display="none";
  sub.style.display="none";
  var icon = document.getElementById("ico_mob");
  icon.className+=" _fadeIn";
  var bttn = document.querySelector(".enter_btn");
  bttn.style.display="none";
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
            <div className="title">[  artists   ]</div>
            <div className="content"><Gallery/></div>    
            <div className="title" style={{position:"absolute",top:"2000px"}} name="shows">[   shows  ]</div>
            <div className="content">More info soon...</div> 
            <div className="title">[   news   ]</div>
            <div className="content">More info soon...</div> 
            <div className="title">[  contacts ]</div>
            <div className="content">More info soon...</div> 
        </div>
);
}
export default Home;