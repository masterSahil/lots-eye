import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaLightbulb,
  FaChartBar,
  FaTools,
  FaCommentDots,
} from "react-icons/fa";

const features = [
  {
    title: "Personalized Attention",
    icon: <FaHandshake className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "We work closely with every client to understand your goals.",
    backDesc: "Tailored strategies for your unique challenges and growth.",
  },
  {
    title: "Strategy-Driven",
    icon: <FaLightbulb className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Every campaign is built on data, not guesswork.",
    backDesc: "Smarter decisions and better outcomes through data.",
  },
  {
    title: "Focused on Growth",
    icon: <FaChartBar className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Helping your business grow through digital strategy.",
    backDesc: "We maximize your returns through cost-effective campaigns.",
  },
  {
    title: "Adaptable & Agile",
    icon: <FaTools className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "Flexible and quick to respond to your evolving needs.",
    backDesc: "We adjust fast to trends or changes in your market.",
  },
  {
    title: "Clear Communication",
    icon: <FaCommentDots className="text-blue-600 text-4xl mb-4" />,
    frontDesc: "No jargon—just honest updates and transparent reporting.",
    backDesc: "You always know what’s happening and why.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      id="why-choose-us"
      className="py-16 px-6 md:px-12 bg-white max-w-7xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-blue-900 mb-14"
      >
        Why Choose Us?
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
        {features.map((feature, i) => (
          <FlipCard key={i} feature={feature} inView={inView} />
        ))}
      </div>
    </section>
  );
};

const FlipCard = ({ feature, inView }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-full h-64 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full bg-blue-50 rounded-xl shadow-md flex flex-col justify-center items-center p-6 backface-hidden">
          {feature.icon}
          <h3 className="text-xl font-semibold text-blue-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600">{feature.frontDesc}</p>
        </div>
        <div className="absolute w-full h-full bg-blue-800 text-white rounded-xl shadow-md flex flex-col justify-center items-center p-6 rotate-y-180 backface-hidden">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p>{feature.backDesc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;