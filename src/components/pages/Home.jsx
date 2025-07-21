import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Dashboard/Hero'
import CoreServices from '../Dashboard/Services'
import WhyChooseUs from '../Dashboard/WhyChooseUs'
import Contact from '../Dashboard/Contact'
import CallToAction from '../Dashboard/CallToAction'
import Footer from '../Dashboard/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Hero />
                <CoreServices />
                <WhyChooseUs />
                <CallToAction />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Home