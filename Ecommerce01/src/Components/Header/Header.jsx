import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
const Header = () => {
  return (
    <div className='text-center bg-black py-[15px]'>    
    <Container>
    <p className='text-white font-Poppins text-[12px] md:text-[14px] md:font-Poppins md:leading-[21px] md:font-normal lg:text-[18px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    <span className='ml-2 font-Poppins underline' ><Link to="/">Shop Now</Link></span></p>
    </Container>
    </div>

  )
}

export default Header