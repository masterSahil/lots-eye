import React from 'react'
import Navbar from '../Navbar'
import ServicesSection from '../Dashboard/Services'
import Footer from '../Dashboard/Footer'

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[120px]">
        <ServicesSection />
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage