import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Dashboard/Hero'
import AboutUs from './components/Dashboard/About'
import CoreServices from './components/Dashboard/Services'
import WhyChooseUs from './components/Dashboard/WhyChooseUs'
import CallToAction from './components/Dashboard/CallToAction'
import Footer from './components/Dashboard/Footer'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <AboutUs />
        <CoreServices />
        <WhyChooseUs />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}

export default App

