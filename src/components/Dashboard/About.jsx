import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const fadeUpStagger = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const fadeChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutUs = () => {
  const [ref, inView] = useInViewAnimation();

  return (
    <section
      ref={ref}
      id="about"
      className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      {/* Text Block */}
      <motion.div
        className="flex-1"
        variants={fadeUpStagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6"
          variants={fadeChild}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed"
          variants={fadeChild}
        >
          At <strong>Lots Eye</strong>, we’re passionate about helping businesses
          grow through smart, results-driven digital marketing. Our mission is to
          deliver tailored strategies that increase visibility, drive traffic, and
          boost conversions—without the fluff.
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed mt-4"
          variants={fadeChild}
        >
          With a team of experienced marketers, data analysts, and creative thinkers,
          we combine innovation with proven methods to get real results. Clients choose
          us because we’re transparent, reliable, and focused on what matters most:{" "}
          <strong>your success</strong>.
        </motion.p>
      </motion.div>

      {/* Image Block with re-triggerable animation */}
      <motion.div
        className="flex-1 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
          alt="Team working"
          className="w-full rounded-xl shadow-xl"
          animate={
            inView
              ? {
                  y: [0, -5, 0],
                  rotate: [0, 1.5, -1.5, 0],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default AboutUs;
