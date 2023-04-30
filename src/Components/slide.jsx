import React, { useState } from 'react';
import '../styles/styles.css'
import Image from '../assets/images/Aboutus.jpeg';
import Sameer from '../assets/images/Sameer.jpg';
import Nirjal from '../assets/images/Nirjal.jpg';
import Rahul from '../assets/images/Rahul.jpg';
import Sujal from '../assets/images/Sujal.jpg';
import Sashank from '../assets/images/Sashank.jpg';







const members = [
  { name: 'Sameer Maharjan', role: 'Project Manager', image: Sameer},
  { name: 'Sashank Shrestha', role: 'Business Analyst', image:Sashank },
  { name: 'Sujal Shakya', role: 'Developer', image:Sujal },
  { name: 'Nirjal Kansakar', role: 'Developer', image:Nirjal },
  { name: 'Rahul Shah', role: 'Developer', image:Rahul },

];

const Slide = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? members.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === members.length - 1 ? 0 : index + 1);
  };

  const member = members[index];

  return (
    <div className="slide">
        <button className="prev" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="image-container">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="info-container">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
      
      <button className="next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Slide;
 