import React from 'react'
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
const Header = () => {
  return (
    <div className='text-center bg-black py-[15px]'>    
    <Container>
    <p className='text-white font-Poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    <span className='ml-2 font-Poppins underline' ><Link to="/">Shop Now</Link></span></p>
    </Container>
    </div>

  )
}

export default Header