import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  ClipboardList,
  Stethoscope,
  Ruler,
  Plane,
  ShieldCheck,
  FileText,
  ArrowUpRight,
  Zap,
  Eye,
  MousePointer
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: <ClipboardList size={32} />,
    title: "Content Strategy",
    description:
      "Crafting high-impact content plans tailored to your audience to increase engagement and brand loyalty.",
    number: "01",
    stats: "85% Engagement Boost"
  },
  {
    icon: <Stethoscope size={32} />,
    title: "SEO Optimization",
    description:
      "Boost your website's visibility on search engines with modern SEO best practices and keyword research.",
    number: "02",
    stats: "300% Traffic Increase"
  },
  {
    icon: <Ruler size={32} />,
    title: "Creative Design",
    description:
      "Designing stunning visuals and assets that resonate with your brand and captivate your audience.",
    number: "03",
    stats: "95% Client Satisfaction"
  },
  {
    icon: <Plane size={32} />,
    title: "Social Media Marketing",
    description:
      "Engaging and converting followers into customers with platform-specific social media campaigns.",
    number: "04",
    stats: "250% Follower Growth"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Brand Reputation Management",
    description:
      "Protect and enhance your digital image by monitoring feedback and strategically addressing concerns.",
    number: "05",
    stats: "99% Issue Resolution"
  },
  {
    icon: <FileText size={32} />,
    title: "Email Campaigns",
    description:
      "Designing and executing personalized email marketing flows that convert subscribers into loyal customers.",
    number: "06",
    stats: "45% Open Rate"
  }
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-100, 100], [10, -10]);
  const rotateY = useTransform(mouseX, [-100, 100], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
    >
      {/* Main Card */}
      <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gray-900 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-900 rounded-full transform -translate-x-12 translate-y-12"></div>
        </div>

        {/* Service Number - Large Background */}
        <div className="absolute top-4 right-4 text-8xl font-black text-gray-50 select-none">
          {service.number}
        </div>

        {/* Icon with Magnetic Effect */}
        <motion.div
          animate={{
            x: isHovered ? mouseX.get() * 0.1 : 0,
            y: isHovered ? mouseY.get() * 0.1 : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="relative z-10 w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg"
        >
          {service.icon}
          
          {/* Glowing dot indicator */}
          <motion.div
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              opacity: isHovered ? [0.7, 1, 0.7] : 0.7,
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
            {service.title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Stats Badge */}
          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap size={14} className="mr-2 text-blue-500" />
            {service.stats}
          </div>

          {/* Minimal CTA */}
          <motion.div
            className="flex items-center text-gray-900 font-medium cursor-pointer group-hover:text-blue-600 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="mr-2">Explore Service</span>
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        {/* Hover Line Effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gray-900"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Corner Accent */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gray-300 rounded-tl-2xl"></div>
      </div>

      {/* Floating Shadow Card */}
      <motion.div
        className="absolute inset-0 bg-gray-900 rounded-2xl -z-10"
        animate={{
          x: isHovered ? 8 : 4,
          y: isHovered ? 8 : 4,
          opacity: isHovered ? 0.1 : 0.05,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  };

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-gray-400 rounded-full"
        animate={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute top-40 right-32 w-1 h-8 bg-gray-300"
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * 40,
          rotate: mousePosition.x * 45,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-32 left-1/3 w-3 h-3 border border-gray-400"
        animate={{
          x: mousePosition.x * 25,
          y: mousePosition.y * -35,
          rotate: mousePosition.y * 90,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </div>
  );
};

const ServicesSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });

  const Navigate = useNavigate();
  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gray-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      id="services"
    >
      <InteractiveBackground />

      {/* Minimalist Header */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
        >
          {/* Service Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-gray-400"></div>
              <div className="flex items-center space-x-2 text-gray-600 font-medium">
                <Eye size={16} />
                <span>SERVICES</span>
                <MousePointer size={16} />
              </div>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight"
          >
            Digital Marketing Solutions
            <span className="block text-gray-600 font-light text-3xl md:text-4xl mt-2">
              Tailored for Your Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From visibility to conversion, we offer comprehensive digital marketing
            services that are built to scale your business. Our solutions are
            data-driven, creative, and tailored to meet your unique goals.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center space-x-8">
            <div className="w-16 h-px bg-gray-300"></div>
            <motion.button
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>Navigate('/contact')}
            >
              Start Your Project
            </motion.button>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;