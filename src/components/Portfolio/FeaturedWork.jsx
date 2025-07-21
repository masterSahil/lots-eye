import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import img1 from "../../assets/works/img1.jpeg";
import img2 from "../../assets/works/img2.jpeg";
import img3 from "../../assets/works/img3.jpeg";
import img4 from "../../assets/works/img4.jpeg";
import img5 from "../../assets/works/img5.jpeg";

// Custom reusable fade function
const fade = (x = 0, y = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
});

const FeaturedWork = () => {
  return (
    <section className="sm:px-4 md:px-10 lg:px-20 py-20  bg-white w-full overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/2">
            <motion.div
              variants={fade(-80, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={1}
              className="space-y-4 w-full"
            >
              <div className="rounded-3xl w-full h-[20rem] sm:h-[25rem] relative overflow-hidden">
                <img
                  src={img1}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 m-4 bg-white px-4 py-1 rounded-full shadow">
                  Photography
                </div>
              </div>

              <div className="bg-gray-100 rounded-3xl p-6 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl">Digital Marketing</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      Lorem ipsum dolor sit amet consectetur. Vivamus nullam
                      fermentum consequat.
                    </p>
                  </div>
                  <div className="bg-black text-white flex items-center justify-center h-10 w-10 p-2 rounded-full mt-1">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fade(-80, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={2}
              className="flex flex-col sm:flex-row-reverse gap-4 mt-4 w-full"
            >
              <div className="relative h-60 w-full sm:w-1/2 rounded-3xl overflow-hidden">
                <img
                  src={img5}
                  alt="Project Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 m-4 bg-white px-4 py-1 rounded-full shadow">
                  Project Management
                </div>
              </div>
              <div className="bg-gray-100 rounded-3xl p-6 flex flex-col justify-center items-center w-full sm:w-1/2">
                <h3 className="font-bold text-xl mb-2">Hire Me</h3>
                <div className="bg-black text-white p-2 rounded-full">
                  <ArrowLeft size={16} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 px-1">
            <motion.h2
              variants={fade(0, 40)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={1}
              className="text-3xl sm:text-4xl font-bold"
            >
              Featured Work
            </motion.h2>

            <motion.p
              variants={fade(0, 40)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={2}
              className="text-gray-600 text-sm sm:text-base"
            >
              Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum
              nisi mi at ornare tempor. Urna ut quam massa eu tellus
              adipiscing quis.
            </motion.p>

            <motion.div
              variants={fade(0, 40)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="relative rounded-3xl overflow-hidden w-full sm:w-1/2 h-[15rem]">
                <img
                  src={img2}
                  alt="Digital Marketing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 m-4 bg-white px-4 py-1 rounded-full shadow">
                  Digital Marketing
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden w-full sm:w-1/2 h-[15rem]">
                <img
                  src={img3}
                  alt="Photography"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 m-4 bg-white px-4 py-1 rounded-full shadow">
                  Photography
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fade(0, 40)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={4}
              className="relative rounded-3xl overflow-hidden h-[15rem] w-full"
            >
              <img
                src={img4}
                alt="SEO/SMM"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 m-4 bg-white px-4 py-1 rounded-full shadow">
                SEO/SMM
              </div>
            </motion.div>

            <motion.div
              variants={fade(0, 40)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={5}
              className="bg-gray-100 rounded-3xl p-6 mt-2 w-full"
            >
              <h3 className="font-bold text-xl">Digital Marketing</h3>
              <p className="text-gray-600 text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur. Vivamus nullam
                fermentum consequat.
              </p>
              <div className="mt-4 flex justify-end">
                <div className="bg-black text-white p-2 rounded-full">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;