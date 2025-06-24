import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaChartLine, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Digital Advertising",
    icon: <FaBullhorn className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Targeted campaigns that drive measurable results.",
    backDesc:
      "We create campaigns across platforms tailored to your brand and audience.",
  },
  {
    title: "SEO & Analytics",
    icon: <FaChartLine className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Improve visibility and track progress with data-driven SEO.",
    backDesc:
      "Our SEO experts use analytics to boost your ranking and traffic effectively.",
  },
  {
    title: "Mobile Marketing",
    icon: <FaMobileAlt className="text-blue-600 text-5xl mb-4" />,
    frontDesc: "Engage your audience through mobile-first strategies.",
    backDesc:
      "We optimize mobile campaigns to maximize engagement and conversion rates.",
  },
];

const CoreServices = () => {
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
      id="services"
      className="py-16 px-6 md:px-12 bg-blue-50 text-center max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-blue-900 mb-14"
      >
        Core Services
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-1000">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} inView={inView} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ service, inView }) => {
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
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col justify-center items-center p-6 backface-hidden">
          {service.icon}
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-700">{service.frontDesc}</p>
        </div>
        <div className="absolute w-full h-full bg-blue-700 rounded-xl shadow-lg flex flex-col justify-center items-center p-6 text-white rotate-y-180 backface-hidden">
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p>{service.backDesc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CoreServices;