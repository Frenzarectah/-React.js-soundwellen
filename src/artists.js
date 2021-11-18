import React from 'react';
import { Carousel, CarouselCaption, CarouselItem } from 'reactstrap';
import './App.css';
import ArtistCard from './artistCard';
import pic1 from './imgs/not-av.png';
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
        <div className="whiteline"></div>
        <div className="subpage">
            <div>[  artists   ]</div>
            <div className="gallery">
               <Carousel>
                 <CarouselCaption>
                   <h1>copertina</h1>
                 </CarouselCaption> 
                 <CarouselItem>
                   <h1>PAGINAUNO</h1>
                 </CarouselItem>
                 <CarouselItem>
                   <h1>PAGINAUNO</h1>
                 </CarouselItem>
              </Carousel>
            </div>
        </div>
        </React.Fragment>
);
}
export default Home;
/*<ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
              <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" />
*/