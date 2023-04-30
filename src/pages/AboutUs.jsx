
import React from 'react'
import '../styles/AboutUs.css'
import Image from '../assets/images/Aboutus.jpeg';
import Slide from '../Components/slide';

const AboutUs = () => {
    return (
        <div className="about-us">
          
          <div className='img-about'><img src={Image} />
          <h1>About Us</h1>
          </div>

          <div className='description'>
          <p>Welcome to Travel Monkey! We are a new company with a passion for providing unforgettable travel experiences to our customers. Our company was founded by a group of experienced travel professionals who wanted to create a company that puts customers first and provides exceptional service at every step of the journey.</p>
          <h5>Our Mission and Values:</h5>
          <p>At Travel Monkey, our mission is to provide our clients with personalized, memorable travel experiences that exceed their expectations. We believe that travel has the power to transform people's lives and that every trip should be an adventure. Our core values of authenticity, inclusivity, and sustainability guide everything we do, from the tours we offer to the partners we work with.</p>

          </div>

          <div className='counter'>
            <div className='counter-b'>
            <div className='counter-trips'>
              <p>0</p>
              <p>Trips</p>
            </div>
            <div className='counter-customers'>
              <p>0</p>
              <p>Customers</p>
            </div>
            <div className='counter-response'>
              <p>0</p>
              <p>Happy Customers
              </p>
            </div>
            </div>
          </div>
<div>
  
<Slide />
  </div>         
        </div>
    );
}

export default AboutUs;