import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import logo from '../../assets/Exclusive.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between pt-[49px] pb-[21px]">        
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div> 
          <div className=' '>
            <ul className="sm:flex sm:flex-col sm:gap-[30px] md:flex md:flex-row">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Sign Up</Link></li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative max-w-[220px]">
              <input 
                className="bg-[#F5F5F5] border-0 outline-0 w-full rounded-sm font-Poppins text-[12px] py-[3px] pl-[20px] pr-[70px] text-[#7B7B7B] leading-[18px]" 
                type="text" 
                placeholder="What are you looking for?"
              />
              <div className="absolute top-1/2 right-[10%] transform -translate-y-1/2 hover:scale-[1.05]">
                <CiSearch />
              </div>
            </div>  
            <div className="flex gap-4">
              <div><CiHeart size={32} /></div>
              <div><IoCartOutline size={32} /></div>
            </div>          
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
