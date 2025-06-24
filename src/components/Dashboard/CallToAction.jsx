import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const CallToAction = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

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
      className="bg-blue-700 text-white py-20 px-4 md:px-8 text-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Let’s Grow Your Business Together
      </motion.h2>

      <motion.p
        className="text-base md:text-lg max-w-2xl mx-auto mb-8 text-white/90"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      >
        Ready to take your digital presence to the next level? Whether you need more traffic, better leads,
        or a full marketing strategy—we’re here to help. Let’s talk about your goals and how we can achieve them together.
      </motion.p>

      <motion.button
        className="bg-white text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.4 }}
      >
        Schedule Your Free Consultation
      </motion.button>
    </section>
  );
};

export default CallToAction;
