import React, { useState } from "react";
import logo from '../../assets/whiteLogo.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaHeadset,
  FaQuestionCircle,
  FaUsers,
  FaCogs,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
  FaArrowUp,
  FaHome
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // Sample testimonials for the testimonial section
  const testimonials = [
    {
      text: "Outstanding service and results!",
      author: "Dhruv M.",
      role: "Website Designer",
    },
    {
      text: "Professional and reliable person.",
      author: "Krish R.",
      role: "Website Developer",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  return (
    <section className=" mt-20">
      <footer className="bg-[radial-gradient(circle_at_75%_50%,_#020617_0%,_#1e40af_30%,_#3b82f6_80%,_#ffffff_140%)] text-gray-100 shadow-2xl border-t-4 border-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        {/* Main Footer Content */}
        <div className="px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Brand & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-[100px] h-[80px] rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-white font-bold text-lg">
                    <img src={logo} alt="" />
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    LOTS EYE
                  </h2>
                  <p className="text-xs text-gray-400">Digital Solutions</p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Elevating your digital presence with innovative solutions,
                creative designs, and strategic marketing approaches.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                {[
                  { icon: <FaFacebookF />, color: "from-blue-600 to-blue-700", href: "#" },
                  { icon: <FaTwitter />, color: "from-sky-500 to-sky-600", href: "#" },
                  { icon: <FaInstagram />, color: "from-pink-500 to-purple-600", href: "#" },
                  { icon: <FaLinkedinIn />, color: "from-blue-700 to-indigo-700", href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Customer Spotlight", icon: <FaStar /> },
                  { name: "Customer Service", icon: <FaHeadset /> },
                  { name: "FAQ & Support", icon: <FaQuestionCircle /> },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                      onMouseEnter={() => setHoveredLink(`quick-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`text-blue-400 text-xs mr-3 group-hover:text-purple-400 transition-colors duration-300`}>
                        {item.icon}
                      </span>
                      <span
                        className={`transition-all duration-300 ${
                          hoveredLink === `quick-${index}`
                            ? "translate-x-1"
                            : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", icon: <FaHome />, navigateTo: '/' }, 
                  { name: "Our Services", icon: <FaCogs />, navigateTo: '/service' }, 
                  { name: "Contact Us", icon: <FaEnvelope />, navigateTo: '/contact' }, 
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.navigateTo}
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                      onMouseEnter={() => setHoveredLink(`company-${index}`)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className={`text-blue-400 text-xs mr-3 group-hover:text-purple-400 transition-colors duration-300`}>
                        {item.icon}
                      </span>
                      <span
                        className={`transition-all duration-300 ${
                          hoveredLink === `company-${index}`
                            ? "translate-x-1"
                            : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Testimonials */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 relative">
                Get in Touch
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </h3>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaEnvelope className="text-white text-xs" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Email</p>
                    <a
                      href="mailto:ayushiparmar9997@gmail.com"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      ayushiparmar9997@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaPhone className="text-white text-xs" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <a
                      href="tel:+916353292499"
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-300"
                    >
                      +91 6353292499
                    </a>
                  </div>
                </div>
              </div>

              {/* Client Testimonial Slider */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-white">
                    What Clients Say
                  </h4>
                  <button
                    onClick={nextTestimonial}
                    className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <FaChevronRight className="text-white text-xs" />
                  </button>
                </div>

                <div className="min-h-[80px]">
                  <p className="text-gray-300 text-sm italic mb-2">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-semibold">
                        {testimonials[currentTestimonial].author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700/50 bg-gray-900/50 px-8 py-6">
          <div className="max-w-7xl mx-auto">
              {/* Copyright */}
                <p className="text-gray-400 text-sm text-center">
                  © {new Date().getFullYear()} {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold bg-[radial-gradient(circle_at_center,_#020617_0%,_#1e40af_50%,_#3b82f6_80%,_#ffffff_100%)]">
                    Lotseye
                  </span>
                  . All rights reserved. Empowering brands online.
                </p>
                  
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;