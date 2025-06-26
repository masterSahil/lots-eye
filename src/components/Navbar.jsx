import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/logo.png'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/service" },
  { name: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolledToWhite, setIsScrolledToWhite] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setIsScrolledToWhite(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

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
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 w-full z-[99] flex justify-center px-4"
      >
        <div className="w-full max-w-xl md:max-w-3xl lg:max-w-7xl px-4 md:px-6 lg:px-10 py-4 flex items-center justify-between rounded-full shadow-xl bg-white/20 backdrop-blur-md border border-white/40">
          <Link to="/">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src={Logo}
                alt="Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
              />
              <div className="leading-tight">
                <h1
                  className={`text-xl sm:text-2xl font-extrabold tracking-wide ${
                    isHomePage && !isScrolledToWhite
                      ? 'text-white'
                      : 'text-gray-900'
                  }`}
                >
                  LOTS EYE
                </h1>
                <p
                  className={`text-xs sm:text-sm font-medium ${
                    isHomePage && !isScrolledToWhite
                      ? 'text-gray-200'
                      : 'text-gray-600'
                  }`}
                >
                  YOUR BRAND | OUR VISION
                </p>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <Link key={link.name} to={link.path}>
                <motion.div
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className={`relative font-medium transition duration-300 text-base ${
                    isHomePage && !isScrolledToWhite
                      ? location.pathname === link.path
                        ? 'text-white hover:text-gray-200'
                        : 'text-gray-200 hover:text-white'
                      : location.pathname === link.path
                      ? 'text-black hover:text-gray-700'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {link.name}
                  <motion.span
                    whileHover={{ scaleX: 1 }}
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left transition-transform ${
                      location.pathname === link.path
                        ? `scale-x-100 ${
                            isHomePage && !isScrolledToWhite
                              ? 'bg-white'
                              : 'bg-black'
                          }`
                        : `scale-x-0 ${
                            isHomePage && !isScrolledToWhite
                              ? 'bg-white'
                              : 'bg-black'
                          }`
                    }`}
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="group relative inline-block">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`group relative overflow-hidden px-6 py-2 rounded-full font-semibold transition-shadow duration-300 focus:outline-none focus:ring-4 cursor-pointer z-10
                  ${
                    isHomePage && !isScrolledToWhite
                      ? 'bg-white text-black focus:ring-white/50'
                      : 'bg-black text-white focus:ring-gray-700'
                  }
                  group-hover:bg-gradient-to-r group-hover:from-blue-400/20 group-hover:via-purple-400/20 group-hover:to-pink-400/20
                  group-hover:text-black group-hover:shadow-lg
                `}
              >
                {/* Optional shimmer placeholder */}
                <div className="shimmer pointer-events-none absolute inset-0"></div>

                <span className="relative z-20 select-none">Contact Me</span>
              </motion.button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-2xl ${
                isHomePage && !isScrolledToWhite ? 'text-white' : 'text-gray-800'
              }`}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-full bg-white/40 backdrop-blur-md z-[999] px-6 py-6 overflow-auto"
          >
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl text-gray-700 hover:text-black"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.div
                    className={`text-lg font-semibold hover:text-black transition ${
                      location.pathname === link.path
                        ? 'text-black'
                        : 'text-gray-800'
                    }`}
                    variants={linkVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
