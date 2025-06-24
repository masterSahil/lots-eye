import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1950&q=80')",
        backgroundColor: "#1E3A8A", // fallback dark blue
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-once="false" // Also can add here, but main init is enough
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <motion.div
        className="relative max-w-2xl text-center z-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 drop-shadow-lg">
          Grow Your Business with Powerful Digital Marketing
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md">
          We help brands increase leads, traffic, and sales with proven digital strategies.
        </p>
        <button className="bg-blue-800 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300 hover:bg-blue-900">
          Start Now
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
