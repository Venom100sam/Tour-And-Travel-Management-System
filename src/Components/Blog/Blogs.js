import React, { useState } from 'react';
import './blog.css'
import blog1 from '../../assets/images/blog1.png'
import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'
import blog4 from '../../assets/images/blog4.png'



const blogs = [
    { 
        name: 'Blog 1', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, a at ab vitae quia ea sit. Id qui veniam dicta non, dolor voluptate laborum ab nisi, placeat beatae aperiam alias?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam cum quis voluptatum. Laborum provident, ut velit voluptatum vero dolores beatae cum aperiam nesciunt molestiae ipsa nulla! Consectetur possimus harum Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis assumenda repudiandae possimus architecto nisi pariatur nemo, consectetur fugit accusamus eligendi ducimus eaque sint dolorum dignissimos dolores libero amet iste. Aut officiis assumenda repudiandae possimus architecto nisi pariatur nemo, consectetur fugit accusamus eligendi ducimus eaque sint dolorum dignissimos dolores libero amet iste. Aliquam cum labore soluta deserunt voluptatibus dicta doloremque nihil est.', 
        image: blog1
    },
    { 
        name: 'Blog 2', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta facilis quasi totam soluta! Sed in ut totam facilis vitae voluptas inventore! Accusamus reiciendis, culpa ipsum nobis saepe porro rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui nesciunt doloremque cum possimus voluptatibus voluptatum aliquam enim totam ipsam quam molestiae quaerat dolore modi nulla, sunt cupiditate adipisci soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum labore soluta deserunt voluptatibus dicta doloremque nihil est. Vero asperiores repellat, animi ab dignissimos molestiae eligendi a quod soluta hic.  Aut officiis assumenda repudiandae possimus architecto nisi pariatur nemo, consectetur fugit accusamus eligendi ducimus eaque sint dolorum dignissimos dolores libero amet iste.', 
        image: blog2
    },
    { 
        name: 'Blog 3', 
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis saepe, quo repellendus voluptate quos sunt libero? Ipsum eaque illo et quisquam. Minima ipsa dolorum adipisci nulla rerum numquam illo iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis alias, nisi esse vero vitae odio iure. Voluptatibus culpa quam aut vero voluptatem tempore! Dolorem itaque sequi natus, adipisci non aperiam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem magnam accusantium, nam vitae obcaecati neque corrupti! Voluptate, suscipit obcaecati magnam laboriosam perspiciatis itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.  Aut officiis assumenda repudiandae possimus architecto nisi pariatur nemo, consectetur fugit accusamus eligendi ducimus eaque sint dolorum dignissimos dolores iste. Aliquam cum labore soluta deserunt voluptatibus dicta doloremque nihil est.', 
        image: blog3
    },
    { 
        name: 'Blog 4', 
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dicta facilis quasi totam soluta! Sed in ut totam facilis vitae voluptas inventore! Accusamus reiciendis, culpa ipsum nobis saepe porro rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui nesciunt doloremque cum possimus voluptatibus voluptatum aliquam enim totam ipsam quam molestiae quaerat dolore modi nulla, sunt cupiditate adipisci soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero asperiores repellat, animi ab dignissimos molestiae eligendi a quod soluta hic. Aut officiis assumenda repudiandae possimus architecto nisi pariatur nemo, consectetur fugit accusamus eligendi ducimus eaque sint dolorum dignissimos dolores iste.', 
        image: blog4
    },

];

const Slide = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index === 0 ? blogs.length - 1 : index - 1);
  };

  const handleNext = () => {
    setIndex(index === blogs.length - 1 ? 0 : index + 1);
  };

  const blog = blogs[index];

  return (
    <div className="slide">
        <button className="prev" onClick={handlePrev}>
        &#8249;
        </button>

      <div className="info-container">
        <h3 className="blog_Title">{blog.name}</h3>
        <img class="pic" src={blog.image} alt={blog.name} />
        <p className='blogs__p'>{blog.content}</p>
      </div>
      
      <button className="next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Slide;
 