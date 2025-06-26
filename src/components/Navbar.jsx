import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'

const navLinks = ["Home", "About", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }),
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* Header */}
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className="sticky top-4 z-50 flex justify-center px-4" >

        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-7xl px-4 md:px-6 lg:px-10 py-4  flex items-center justify-between rounded-full shadow-xl bg-white/20 backdrop-blur-md border border-white/40">

          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }} className="flex items-center gap-3" >
            <img src={Logo} alt="Logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-wide">LOTS EYE</h1>
              <p className="text-[10px] sm:text-xs text-gray-600 font-medium">YOUR BRAND | OUR VISION</p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a key={link} href="#" custom={i} variants={linkVariants} initial="hidden"
                animate="visible" className="relative text-gray-700 font-medium hover:text-black transition duration-300 text-base" >
                {link}
                <motion.span whileHover={{ scaleX: 1 }}  className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-black origin-left transition-transform" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <motion.button whileHover={{ backgroundColor: "#222222", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 }, }} whileTap={{ scale: 0.95 }} className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow-md transition-shadow duration-300
             focus:outline-none focus:ring-4 focus:ring-gray-700" >     Contact Me
            </motion.button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
              <FaBars />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="fixed top-0 left-0 w-full h-full bg-white/40 backdrop-blur-md z-[9999] px-6 py-6 overflow-auto" >
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)} className="text-xl text-gray-700 hover:text-black" >
                <FaTimes />
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a key={link} href="#" onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-gray-800 hover:text-black transition"
                  variants={linkVariants} custom={i} initial="hidden" animate="visible" exit="hidden" >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;