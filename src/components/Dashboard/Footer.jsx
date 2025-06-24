import React from "react";
import footerbg from "../../assets/footerBg.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="max-w-[1320px] mx-auto">
      <footer
        className="bg-cover bg-center text-[20px] text-gray-100 p-[50px] pb-[25px] w-full rounded-[40px] mt-[2%] shadow-2xl"
        style={{ backgroundImage: `url(${footerbg})` }}
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div data-aos="fade-up" data-aos-delay="100">
            <a href="#">
              <img
                src={logo}
                alt="Lotseye Logo"
                className="w-28 mb-4 bg-white rounded-[30px]"
              />
            </a>
            <p className="text-sm text-gray-400 text-[16px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#4E47E5] font-semibold mr-1">
                LOTS EYE
              </span>
              elevates your digital presence.
            </p>
            <div className="flex gap-4">
              {["facebook-f", "twitter", "instagram"].map((icon, i) => (
                <p
                  key={i}
                  className="text-sm mt-[19px] text-[16px]"
                  data-aos="zoom-in"
                  data-aos-delay={200 + i * 100}
                >
                  <a
                    href="#"
                    className="text-white p-[7px_10px] rounded-full bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] font-semibold mr-1"
                  >
                    <i className={`fa-brands fa-${icon}`}></i>
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-white tracking-wider text-[22px] mb-3 relative pb-[5px]">
              QUICK LINKS
              <span className="absolute w-[20%] left-0 h-[4px] rounded bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] bottom-0 z-50"></span>
            </h3>
            <ul className="space-y-2 text-sm text-[15px]">
              {["Customer Spotlight", "Customer Service", "Marketing", "FAQ"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-gray-300 hover:tracking-wider group duration-[0.2s]"
                  >
                    <i className="fa-solid fa-arrow-right text-[#3B82F6] text-[14px] mr-[-10px] translate-x-[-10px] invisible group-hover:mr-[5px] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0px] group-hover:visible pb-[5px] duration-[0.2s]"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-white tracking-wider text-[22px] mb-3 relative pb-[5px]">
              COMPANY
              <span className="absolute w-[20%] left-0 h-[4px] rounded bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] bottom-0 z-50"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              {["About Us", "Services", "Contact"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-gray-500 text-gray-300 hover:tracking-wider group duration-[0.2s]"
                  >
                    <i className="fa-solid fa-arrow-right text-[#3B82F6] text-[14px] mr-[-10px] translate-x-[-10px] invisible group-hover:mr-[5px] opacity-0 group-hover:opacity-100 group-hover:translate-x-[0px] group-hover:visible pb-[5px] duration-[0.2s]"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-white tracking-wider text-[22px] pb-[5px] mb-3 relative">
              CONTACT
              <span className="absolute w-[20%] left-0 h-[4px] rounded bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] bottom-0 z-50"></span>
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
               <a href="mailto:ayushiparmar9997@gmail.com" className="hover:text-gray-500 text-gray-300">
                <i className="fa-solid fa-envelope text-[#3B82F6] text-[14px] mr-[10px]"></i>
                  ayushiparmar9997@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916353292499" className="hover:text-gray-500 text-gray-300">
                  <i className="fa-solid fa-phone text-[#3B82F6] text-[14px] mr-[10px]"></i>
                  +91 6353292499
                </a>
              </li>
              <li data-aos="zoom-in" data-aos-delay="500">
                <div className="max-w-md mx-auto mt-5">
                  <div className="flex items-center overflow-hidden rounded-full bg-white shadow-lg">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 text-gray-800 focus:outline-none"
                    />
                    <a
                      href="#"
                      className="bg-gradient-to-r from-[#4E47E5] to-[#3B82F6] text-white px-5 py-3"
                    >
                      <i className="fa-solid fa-paper-plane text-[16px]"></i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div
          className="mt-10 text-center text-sm text-gray-400 pt-[25px] border-t-[1px] border-white/20"
          data-aos="fade-in"
          data-aos-delay="600"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#4E47E5] font-semibold mr-1">
            Lotseye
          </span>
          . Empowering Brand's Online.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
