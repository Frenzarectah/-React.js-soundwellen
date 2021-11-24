import React from 'react';
import {Carousel,CarouselIndicators,CarouselItem} from 'reactstrap';
import ArtistCard from './artistCard';
import {Button} from 'reactstrap';
var Carosello=(props)=> {
    const [activeIndex, setActiveIndex] = React.useState(0);

     const previousButton = () => {
        if (nextIndex === undefined) document.getElementById("prev").style.display="none";
         var nextIndex = activeIndex-1;
         setActiveIndex(nextIndex);
     }
     const nextButton = () => {
        if (nextIndex === CarouselItem.length) document.getElementById("next").style.display="none";
         var nextIndex = activeIndex + 1;
         setActiveIndex(nextIndex);
     }
   
  return(
    <React.Fragment>
    <Carousel previous={previousButton} activeIndex={activeIndex} next={nextButton}>
        <CarouselItem key="uno">
            primo
        </CarouselItem>
        <CarouselItem key="due">
            secondo
        </CarouselItem>
        <CarouselItem key="tre">
            terzo
        </CarouselItem>
    </Carousel>
    <div id="prev" onClick={previousButton}>prev</div>
    <div id="next" onClick={nextButton}>next</div>
    </React.Fragment>
    )};
    export default Carosello;
   /* <CarouselIndicators directionText="avanti" direction="next" onClickHandler={nextButton}/>
        <CarouselIndicators directionText="dietro" direction="prev" onClickHandler={previousButton}/>*/