import React, {useState} from 'react'
import "./Carousel.css"

import {images} from '../../assets/data/CarouselData'
import ArrowBackIosIcoin from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcoin from '@material-ui/icons/ArrowForwardIos';

function Carousel() {

  const [currImg, setCurrImg] = useState(0);

  return (
    <div className='carousel'>
        <div 
          className='carouselInner' 
          style={{backgroundImage: `url(${images[currImg].img})`}}
        >
          <div
           className='left' 
           onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <ArrowBackIosIcoin />
          </div>

          <div className='center'>
            <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p>
          </div>

          <div
           className='right'
           onClick={() => {
            currImg < images.length-1 && setCurrImg(currImg + 1);
            }}
          >
            <ArrowForwardIosIcoin />
          </div>

        </div>      
    </div>
  )
}

export default Carousel
