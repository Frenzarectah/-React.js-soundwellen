import React from 'react';
import {Carousel,CarouselIndicators,CarouselItem} from 'reactstrap';
import ArtistCard from './artistCard';
import {Button} from 'reactstrap';
var Carosello=(props)=> {
    const [activeIndex, setActiveIndex] = React.useState(0);

     const previousButton = () => {
        if (nextIndex === 0) alert("finiti!");
         var nextIndex = activeIndex-1;
         setActiveIndex(nextIndex);
     }
     const nextButton = () => {
        if (nextIndex === CarouselItem.length) alert("finiti!");
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
    <div onClick={previousButton}>prev</div>
    <div onClick={nextButton}>next</div>
    </React.Fragment>
    )};
    export default Carosello;
   /* <CarouselIndicators directionText="avanti" direction="next" onClickHandler={nextButton}/>
        <CarouselIndicators directionText="dietro" direction="prev" onClickHandler={previousButton}/>*/