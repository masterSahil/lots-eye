import React, { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Cassian Eiden",
    role: "Cloud Sales Representative",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    feedback:
      "Cassian helped us triple our website traffic in just two months. Her SEO strategy and email campaigns were game changers. We now rank on the first page for multiple keywords. Highly impressed!",
  },
  {
    name: "Kaizen Jahmir",
    role: "Cloud Sales Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    feedback:
      "She built our entire digital marketing funnel from scratch — and sales jumped by 62% in the first quarter! Her ad copy, targeting, and landing pages were all on point. Super smooth to work with.",
  },
  {
    name: "Ava Carter",
    role: "Cloud Sales Executive",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    feedback:
      "I had no clue about online branding — but she helped us launch with a bang. From social media content plans to influencer outreach, everything was handled with strategy and care. Would hire again.",
  },
];

// Animation variants for fade up
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Other animation variants remain the same
const imageVariants = {
  initial: { opacity: 0, y: 30, scale: 1 },
  animate: { opacity: 1, y: 0, scale: 1 },
  hover: {
    scale: 1.05,
    rotate: 12,
    transition: { duration: 0.6, repeatType: "reverse", repeat: Infinity },
  },
  exit: { opacity: 0, y: -30 },
};

const textVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const starsVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

const feedbackVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  // Ref and inView detection for fade up on entire section
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" }); // triggers a bit before fully visible

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const { name, role, img, rating, feedback } = testimonials[index];

  return (
    <motion.div
      className="bg-blue-100 py-[120px] relative overflow-hidden"
      ref={ref}
      variants={fadeUpVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      aria-label="Testimonials Section"
    >
      {/* Floating Bubble Background */}
      <div className="bubble bubble1" />
      <div className="bubble bubble2" />
      <div className="bubble bubble3" />
      <div className="bubble bubble4" />

      <section className="relative max-w-5xl mx-auto p-10 bg-white rounded-3xl shadow-xl select-none overflow-hidden z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          What My Clients Say
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 min-h-[280px]">
          <motion.img
            key={img}
            src={img}
            alt={name}
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400 shadow-lg cursor-pointer"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300 }}
          />

          <div className="max-w-3xl text-center md:text-left space-y-4">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`name-${name}`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold"
              >
                {name}
              </motion.h3>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`role-${role}`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-blue-600 font-medium"
              >
                {role}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`stars-${rating}`}
                className="flex justify-center md:justify-start text-yellow-400"
                variants={starsVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`feedback-${feedback}`}
                variants={feedbackVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-700 text-lg leading-relaxed"
              >
                {feedback}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center my-5 gap-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-14 h-14 bg-blue-400 hover:bg-blue-500 active:bg-blue-500 text-white text-2xl font-bold rounded-full shadow flex items-center justify-center transition"
          >
            <FiChevronLeft />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-14 h-14 bg-blue-400 hover:bg-blue-500 active:bg-blue-500 text-white text-2xl font-bold rounded-full shadow flex items-center justify-center transition"
          >
            <FiChevronRight />
          </button>
        </div>
      </section>

      {/* Bubble styles */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 9999px;
          filter: blur(40px);
          opacity: 0.5;
          z-index: 0;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .bubble1 {
          width: 180px;
          height: 180px;
          background: linear-gradient(to bottom right, #cfe8ff, #3b82f6);
          top: -60px;
          left: -60px;
          animation-name: float1;
          animation-duration: 8s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .bubble2 {
          width: 260px;
          height: 260px;
          background: linear-gradient(to bottom right, #93c5fd, #2563eb);
          bottom: -100px;
          right: -100px;
          animation-name: float2;
          animation-duration: 10s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .bubble3 {
          width: 160px;
          height: 160px;
          background: linear-gradient(to bottom right, #bfdbfe, #60a5fa);
          top: 50%;
          left: -80px;
          animation-name: float3;
          animation-duration: 12s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        .bubble4 {
          width: 100px;
          height: 100px;
          background: linear-gradient(to bottom right, #dbeafe, #3b82f6);
          top: 30px;
          right: 30px;
          animation-name: float4;
          animation-duration: 9s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(25px) translateX(-15px); }
        }

        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(15px); }
        }

        @keyframes float4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(-10px); }
        }
      `}</style>
    </motion.div>
  );
};

export default TestimonialCarousel;