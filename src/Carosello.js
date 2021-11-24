import React from 'react';
import {Carousel,CarouselIndicators,CarouselItem} from 'reactstrap';
import ArtistCard from './artistCard';
import pic1 from "./imgs/not-av.png";

var Carosello=(props)=> {
    const [activeIndex, setActiveIndex] = React.useState(0);

     const previousButton = () => {
         var nextIndex = activeIndex-1;
         setActiveIndex(nextIndex);
         console.log(CarouselItem.length);
         /*if (nextIndex === -1) document.getElementById("prev").style.display="none";
         else if(nextIndex !== -1) document.getElementById("prev").style.display="block";
     */}
     const nextButton = () => {
         var nextIndex = activeIndex + 1;
         setActiveIndex(nextIndex);
         console.log(CarouselItem.length);
         //if (nextIndex === CarouselItem.length+1) document.getElementById("next").style.display="none";
     }
   
  return(
    <React.Fragment>
    <div id="prev" onClick={previousButton}>{'<-'}</div>
    <Carousel previous={previousButton} activeIndex={activeIndex} next={nextButton}>
        <CarouselItem key="uno">
        <ArtistCard name="the verol" pic={pic1} bio="Lorem ipsum dolor sit amet, consectetur adipiscing" /> 
        </CarouselItem>
        <CarouselItem key="due">
            secondo
        </CarouselItem>
        <CarouselItem key="tre">
            terzo
        </CarouselItem>
    </Carousel>
    <div id="next" onClick={nextButton}>{'->'}</div>
    </React.Fragment>
    )};
    export default Carosello;
   /* <CarouselIndicators directionText="avanti" direction="next" onClickHandler={nextButton}/>
        <CarouselIndicators directionText="dietro" direction="prev" onClickHandler={previousButton}/>*/