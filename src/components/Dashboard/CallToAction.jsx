import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import cta from '../../assets/cta.png'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const CallToAction = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white py-28 px-6 md:px-12"
      style={{
        backgroundImage: `url('${cta}')`,
      }}
    >
      <div className="absolute inset-0 bg-[rgba(15,23,42,0.65)] z-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={inView ? "title-visible" : "title-hidden"}
        >
          Let’s Grow Your Business Together
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl mb-8 text-white/90"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          key={inView ? "text-visible" : "text-hidden"}
        >
          Whether you need more traffic, better leads, or a full marketing strategy—we’re here to help.
          Let’s talk about your goals and how we can achieve them together.
        </motion.p>

        {/* ✨ Enhanced Animated Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
          key={inView ? "btn-visible" : "btn-hidden"}
          className="inline-block"
        >
          <button
            className="group relative overflow-hidden rounded-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-all duration-700 ${isHovered ? 'animate-pulse' : ''}`}></div>

            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl transform transition-all duration-500 group-hover:scale-100 group-active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.2}s`,
                      animation: isHovered ? 'float 2s ease-in-out infinite' : 'none'
                    }}
                  ></div>
                ))}
              </div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="group-hover:tracking-wide transition-all duration-300">
                  Schedule Your Free Consultation
                </span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-100 bg-white/20 transform scale-0 group-active:scale-110 transition-all duration-200"></div>
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
