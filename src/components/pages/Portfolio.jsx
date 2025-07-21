import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Dashboard/Footer'
import PortfolioHero from '../Portfolio/PortfolioHero'
import FeaturedWork from '../Portfolio/FeaturedWork'
import HowIWork from '../Portfolio/HowIWork'
import TestimonialCarousel from '../Portfolio/TestimonialCarousel'
import NewsFeed from '../Portfolio/NewsFeed'
import ServicesSection from '../Dashboard/Services'

const Portfolio = () => {
  return (
    <>
        <Navbar />
        <PortfolioHero />
        <FeaturedWork />
        <HowIWork />
        <TestimonialCarousel />
        <NewsFeed />
        <ServicesSection />
        <Footer />
    </>
  )
}

export default Portfolio