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
}
var Home = () =>{
    window.onload=() => changePage();
    return(        
      <React.Fragment>
        <div className="subpage">
        <div className="whiteline"></div>
            <div className="title">[  artists   ]</div>
                <Gallery/>
        </div>
        </React.Fragment>
);
}
export default Home;
/*<ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
*/
//subpage classe div esterno
//div piu interno classe gallery