import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Pokhara",
    city: "Pokhara",
    distance: 300,
    address: 'Pokhara',
    price: 99,
    maxGroupSize: 10,
    desc: "Pokhara is a city located in the western part of Nepal, near the foothills of the Himalayas. It is a popular tourist destination known for its stunning natural beauty, including the picturesque Fewa Lake, the Annapurna mountain range, and the World Peace Pagoda. Pokhara is also a hub for adventure tourism, offering activities such as paragliding, trekking, and rafting. The city has a vibrant atmosphere with a mix of traditional Nepalese culture and modern amenities, including restaurants, cafes, and shops.",
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Chitwan National Park",
    city: "Chitwan",
    distance: 400,
    address: 'Sauraha, Chitwan',
    price: 99,
    maxGroupSize: 8,
    desc: "Chitwan is a district located in the southwestern part of Nepal. It is famous for its national park, the Chitwan National Park, which is a UNESCO World Heritage Site and home to various species of wildlife, including tigers, rhinoceroses, elephants, and many others. The district has a rich cultural heritage, with indigenous Tharu communities and their unique traditions and lifestyle. Chitwan is also known for its beautiful landscapes, dense forests, and serene rivers, making it a popular tourist destination in Nepal.",
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Annapurna Base Camp",
    city: "Annapurna Region",
    distance: 500,
    address: 'Annapurna Conservation Area',
    price: 99,
    maxGroupSize: 8,
    desc: "Annapurna Base Camp is a popular trekking destination located in the Annapurna mountain range of Nepal. It is a high-altitude base camp situated at an elevation of 4,130 meters (13,550 feet) above sea level. The trekking trail to Annapurna Base Camp offers stunning views of majestic peaks such as Annapurna South, Annapurna I, Hiunchuli, Gangapurna, and Machhapuchhre (also known as Fishtail). The trek usually takes around 7-12 days to complete, depending on the starting point and the trekker's pace. Along the way, trekkers pass through charming villages, lush forests, and alpine landscapes, making it an unforgettable adventure for nature enthusiasts and outdoor adventurers.",
    photo: tourImg03,
    featured: true,
  },

  {
    id: "04",
    title: "Lumbini",
    city: "Rupendehi District",
    distance: 500,
    address: 'Lumbini',
    price: 99,
    maxGroupSize: 8,
    desc: "Lumbini is a small town located in the southern Terai plains of Nepal. It is considered a holy site for Buddhists, as it is believed to be the birthplace of Siddhartha Gautama, who later became known as Buddha, the founder of Buddhism. Lumbini attracts many visitors from all over the world who come to pay their respects at the sacred site and explore the numerous monasteries, temples, and other historical and cultural attractions in the area.",
    photo: tourImg04,
    featured: true,
  },

  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    photo: tourImg03,
    featured: false,
  },
];

export default tours;