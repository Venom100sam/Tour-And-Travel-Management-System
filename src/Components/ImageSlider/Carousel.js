import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { images } from '../../assets/data/CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
  // state for current image index
  const [currImg, setCurrImg] = useState(0);
  // state for slide direction
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    // Effect hook to run a timer to slide the images
    const interval = setInterval(() => {
      // set slide direction to right
      setDirection('right');
      // increment current image index in a circular way
      setCurrImg(currImg => (currImg + 1) % images.length);
    }, 3500);
    // cleanup function to clear the timer when component unmounts
    return () => clearInterval(interval);
  }, []);

  const handleSlide = (newIndex) => {
    // Function to handle clicking on the left or right arrow button
    if (newIndex < currImg) {
      setDirection('left');
    } else {
      setDirection('right');
    }
    // set the new current image index
    setCurrImg(newIndex);
  };

  return (
    <div className='carousel'>
      <div
        className={`carouselInner ${direction}`}
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className='left'
          onClick={() => {
            currImg > 0 && handleSlide(currImg - 1);
          }}
        >
          <ArrowBackIosIcon />
        </div>

        <div className='center'>
          {/* <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p> */}
        </div>

        <div
          className='right'
          onClick={() => {
            currImg < images.length - 1 && handleSlide(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
