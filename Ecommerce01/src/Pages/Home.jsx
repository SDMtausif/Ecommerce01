import React from 'react'
import Header from '../Components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Nabvar/Navbar'
const Home = () => {
  return (
   <>
    <Router>
        <Header />
        <Navbar />
    </Router>
    
   </>
  )
}

export default Home