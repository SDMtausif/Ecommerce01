import React from 'react'
import Container from '../Container/Container'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <Container>
            <div><Link to="/" >Exclusive</Link></div>
            <div></div>
            <div></div>
        </Container>
    </div>
  )
}

export default Navbar