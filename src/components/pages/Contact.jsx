import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Dashboard/Contact'
import Footer from '../Dashboard/Footer'

const ContactPage = () => {
  return (
    <>
        <Navbar />
        <div className="pt-[120px]">
            <Contact />
        </div>
        <Footer />
    </>
  )
}

export default ContactPage