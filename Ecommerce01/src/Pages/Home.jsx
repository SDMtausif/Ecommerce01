import React from 'react'
import Header from '../Components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Nabvar/Navbar'
import Banner from '../Components/Banner/Banner'
const Home = () => {
  return (
   <>
    <Router>
        <Header />
        <Navbar />
        <Banner />
    </Router>
    
   </>
  )
}

export default Home