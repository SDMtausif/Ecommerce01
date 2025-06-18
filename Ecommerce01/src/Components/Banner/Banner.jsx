import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import iPhone14 from '../../assets/iPhone14.jpg'

const NavHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const catagories =[
  {
    name:"Woman’s Fashion"
  },
  {
    name:"Men’s Fashion"
  },
  {
    name:"Electronics"
  },
  {
    name:"Home & Lifestyle"
  },
  {
    name:"Medicine"
  },
  {
    name:"Sports & Outdoor"
  },
  {
    name:"Baby’s & Toys"
  },
  {
    name:"Groceries & Pets"
  },
  {
    name:"Health & Beauty"
  }
]

  return (
    <Container>
      <div className='flex w-full gap-[45px]'> {/* the right border should be create by using after before */}

        {/* Right part of the section */}      
         <div className='w-[30%] relative after:absolute after:top-[-42px] after:right-0 after:w-[2px] after:h-[400px] after:bg-gray-200'>
              {catagories.map((catagories) =>
              <p className='mb-[16px] font-Poppins text-[16px] font-normal leading-[24px] text-black'>{catagories.name}</p>
              )}
         </div>
    
       {/* Left part of the section */}
      <div className='w-[70%]'>

        <Slider {...settings}>
       
        <div><Link to="/"><img src={iPhone14} alt="" /></Link></div>
        <div><Link to="/"><img src={iPhone14} alt="" /></Link></div>
        <div><Link to="/"><img src={iPhone14} alt="" /></Link></div>
        <div><Link to="/"><img src={iPhone14} alt="" /></Link></div>
        <div><Link to="/"><img src={iPhone14} alt="" /></Link></div>
        C
        </Slider>
      </div>
      </div>
     
      
    </Container>
  );
};

export default NavHome;
