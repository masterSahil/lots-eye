import React from "react";
import profile from '../../assets/ayushi.png';
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const fade = (x = 0, y = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { delay: i * 0.6, duration: 1 },
  }),
});

const PortfolioHero = () => {
  return (
    <>
      <div className="bg-gradient-to-br bg-[#3570f1] to-[#9dedef] text-white py-[120px] px-6 lg:px-15 relative min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
        <div className="lg:flex mt-10">
          <div>
            {/* Top Heading */}
            <motion.h2
              variants={fade(0, -80)}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-center text-xl lg:text-2xl mb-2"
            >
              I, am
            </motion.h2>

            <motion.h1
              variants={fade(0, -80)}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-5xl lg:text-7xl font-extrabold text-center text-white"
            >
              Digital Marketer
            </motion.h1>

            {/* Content Area */}
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full mt-[5vw] max-w-7xl gap-10">
              {/* Left Content */}
              <motion.div
                variants={fade(-80, 0)}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex-1 xl:-mr-6"
              >
                <p className="text-xl mb-6 max-w-md mx-auto text-right lg:mx-0 text-white">
                  Certainly, I can help you create a description for your next
                  project. However, I’ll need more specific information about the
                  project itself. Please provide details such as the project’s
                  purpose, goals, scope, and any relevant information, and I’ll assist
                  you in crafting a suitable project description.
                </p>

                <div className="my-3 flex justify-evenly flex-wrap xl:flex-col">
                  {[
                    "Digital Marketer",
                    "Freelance Photographer",
                    "Content Writer",
                    "Social Media Marketer",
                  ].map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={fade(-40, 0)}
                      initial="hidden"
                      animate="visible"
                      custom={4 + idx}
                      className="bg-white flex flex-row xl:flex-col xl:ml-auto max-w-max text-black rounded-full px-4 py-2 my-1 text-sm font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Center Image */}
              <motion.div
                variants={fade(0, 80)}
                initial="hidden"
                animate="visible"
                custom={8}
                className="flex-1 flex justify-center relative"  // Added relative here
              >
                {/* Image Container with overflow-hidden */}
                <div className="relative bg-blue-950 group max-w-[350px] rounded-full overflow-hidden md:max-w-[500px]">
                  <img
                    src={profile}
                    alt="Ayushi Parmar"
                    className="scale-145 -mt-5 max-w-[350px] md:max-w-[500px] duration-300 rounded-xl"
                  />
                </div>

                {/* Badge outside the image container but inside relative flex container */}
                <motion.div
                  variants={fade(80, -80)}
                  initial="hidden"
                  animate="visible"
                  custom={9}
                  className="absolute bottom-4 right-0 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 shadow z-[9999]"
                >
                  <FaUser className="text-lg" />
                  <span className="font-medium">Ayushi Parmar</span>
                </motion.div>
              </motion.div>


              {/* Right Text */}
              <motion.div
                variants={fade(80, 0)}
                initial="hidden"
                animate="visible"
                custom={10}
                className="flex-1 text-left text-xl xl:-ml-6 text-white"
              >
                <p className="max-w-md">
                  Certainly, I can help you create a description for your next
                  project. However, I’ll need more specific information about the
                  project itself.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats with DIFFERENT animations */}
          <div>
            <div className=" grid grid-cols-1 gap-6 w-full max-w-5xl">
              {[
                { number: "251+", label: "Completed Projects", anim: fade(-100, 0) },
                { number: "12+", label: "Years of Experience", anim: fade(100, 0) },
                { number: "370+", label: "Client’s Review", anim: fade(0, -100) },
                { number: "97%", label: "Job Success Rate", anim: fade(0, 100) },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={item.anim}
                  initial="hidden"
                  animate="visible"
                  custom={12 + idx}
                  className="rounded-2xl p-6 text-center bg-white text-black font-bold text-xl shadow-md"
                >
                  <div className="text-4xl">{item.number}</div>
                  <div className="mt-2">{item.label}</div>
                  {item.label === "Client’s Review" && (
                    <div className="mt-1 text-yellow-400">★★★★★</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioHero;