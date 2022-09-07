import React from 'react'
import Banner from '../Components/HomePage/Banner'
import Feature from '../Components/HomePage/Feature'
import Footer from '../Components/HomePage/Footer'
import HeroSection from '../Components/HomePage/HeroSection'

const HomePage = () => {
  return (
    <div>
        <HeroSection />
        <Feature />
        <Banner />
        <Footer />
    </div>
  )
}

export default HomePage