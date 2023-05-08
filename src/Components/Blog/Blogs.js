import React, { useState } from 'react';
import './blog.css'
import blog1 from '../../assets/images/blog1.png'
import blog2 from '../../assets/images/blog2.png'
import blog3 from '../../assets/images/blog3.png'
import blog4 from '../../assets/images/blog4.png'



const blogs = [
    { 
        name: 'Blog 1',
        content: 'Our first Trek in the Everest region wasn’t to Base Camp. We just went for a walk and ended up in Tengboche. This time we flew into Lukla and walked out to Phaplu before taking the bus back to Kathmandu. In 2018 we did the EBC trek, in peak season, October. We flew to Phaplu and walked in, flew out of Lukla. The crowds at this time of year were a little unexpected, as were the flight cancellations. I’m scared of heights, terrified actually. But I do it. Could you? Lukla airport and the experience of flying on tiny planes in the Himalayas. Lukla is billed as the world’s most dangerous airport. It’s pretty cool and we and millions of other trekkers and guides survive just fine. In 2016, just 11 months after the earthquake, we visited Nepal with kids. 2018 was totally different. Our first visit was tough on the children. My elder son and I, he was 11 then, walk to Tengboche Monastery for the first time. Plus more on our walk from Lukla to Tengboche, the first few days of the classic EBC trek. If you’re wondering what to expect in Namche Bazaar, a trekkers’ paradise on the way to Everest, we have a full guide to Namche Bazaar here including, shopping, where to stay, acclimatisation walks and food. If you can, add a few extra days in Namche, it will be great for your acclimatisation and there’s plenty to see and do. Just don’t hit up the Irish Pub as you’re heading up!',
        
        image: blog1
    },
    { 
        name: 'Blog 2', 
        content: 'Things to do in and around Kathmandu, sites to visit and places to see. Also, how to get to them. Most of these places to see in Kathmandu and nearby have their own detailed guides and tips on our blog, but this one blog post gives you a good overview to plan your Nepal itinerary. While in Kathmandu you should, of course see majestic Swayambhunath, The Monkey Temple, as in the photo above. There is also old Freak Street to explore, and the temple complexes of Pashupatinath and Boudhanath. Patan has Kathmandu’s second Durbar Square and is a short taxi ride from tourist Kathmandu. Just off the Patan Durbar Square you’ll find the Golden Temple. It’s a must-visit. Years ago, the Golden Temple was a rat temple. We visited way back when, but on our recent visit there was not a rat to be seen. A look at Patan’s Durbar Square. In the photo below you can see entrails strung accross a doorway. A post-earthquake look at the damage in this historic region. We also bumped into Prince Harry there. Read about that too. If you have time, get outside of Kathmandu and explore the Kathmandu Valley. Starting with Bhaktapur and Nagarkot. Bhaktapur is ancient and relatively tourist-free, it is the Kathmandu Valley’s third Durbar Square. Nagarkot is famous as a Himalayan view point, in season. Both are within 2 hours of Kathmandu. Nagarkot, we got there by bus from Bhaktapur and stayed a few nights, you could also take a day trip to see the Himalayas. Know which times of year will bring you clear skies.', 
        image: blog2
    },
    { 
        name: 'Blog 3', 
        content: 'Pokhara feels like a magical little town, but actually, its Nepal’s second-largest city, on the shores of the huge Phewa lake. Fishtail mountain and the Annapurna range dominate the sky and if the weather is good, views can be breathtaking. This is a great place to just hang out, popular for adventure sports such as hang gliding and parascending. This would be my choice for a digital nomad destination in Nepal, but the internet can be bad sometimes. You’ll need to take a full-day bus journey from Pokhara to Kathmandu. You can fly. If you feel safer flying, small planes will take you to many destinations all over Nepal.', 
        image: blog3
    },
    { 
        name: 'Blog 4', 
        content: 'We’ve had some great food in Nepal. Traditional Nepali, Indian, Tibetan and Western. You will most certainly encounter dal bhat and momos but there is more to discover. We can give you ideas on what food is available in Kathmandu, on your trek, in the Terai and tell you roughly what it costs. Those huge price rises on your trek could be a surprise otherwise. You’ll want our post on traditional Nepalese food. Dishes to look out for include: - Dal Bhat, a delicious thin lentil soup with rice, often includes side dishes such as vegetables, pickles, curd, or popadoms. - Thukpa, A noodle soup. This hearty dish comes in meat and vegetable versions. - Mo Mo, Mo mo can be steamed or fried, “buff” (buffalo meat), chicken, or veg. They’re tasty little dumplings filled with a dense minced filling. - Dhindo, My new favourite Nepali dish isn’t on most menus but if you can find it, try it. There’s a picture in the Nepali food post, above. - Paneer dishes, Paneer is a dense, mild curd cheese. You’ll find it fried in paneer pakoda or in curries suck as paneer saag (spinach). Paneer is one of my favourite things.', 
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
 