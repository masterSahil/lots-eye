import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, PenTool, Code2, Eye } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Strategy',
    icon: <Lightbulb className="w-12 h-12 text-black mb-4" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.',
    bg: 'bg-yellow-100',
    animation: { x: 80, y: -40 }, // right + up
  },
  {
    number: '02',
    title: 'Design',
    icon: <PenTool className="w-12 h-12 text-black mb-4" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.',
    bg: 'bg-green-100',
    animation: { x: -80, y: 40 }, // left + down
  },
  {
    number: '03',
    title: 'Development',
    icon: <Code2 className="w-12 h-12 text-black mb-4" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.',
    bg: 'bg-blue-100',
    animation: { x: -80, y: 40 }, // left + down
  },
  {
    number: '04',
    title: 'Quality check',
    icon: <Eye className="w-12 h-12 text-black mb-4" />,
    description: 'Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor.',
    bg: 'bg-gray-100',
    animation: { x: 80, y: -40 }, // right + up
  },
];

const HowIWork = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-start justify-between px-6 py-20 gap-12 md:gap-20 overflow-hidden border max-w-[90vw] mx-auto rounded-2xl overflow-x-hidden mt-10 mb-[120px] "
    >
      {/* Left Sticky Section */}
      <div className="md:w-1/2 h-fit md:sticky md:top-28 self-start">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          How I work on <br /> projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6 text-gray-600 text-sm md:text-base"
        >
          Lorem ipsum dolor sit amet consectetur. Bibendum mi bibendum nisi mi at ornare tempor. Urna ut quam massa eu
          tellus adipiscing quis. Tincidunt facilisis purus enim posuere gravida. Pellentesque est consequat risus
          viverra amet.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="px-6 py-3 bg-black text-white font-semibold rounded-full"
        >
          Contact Now
        </motion.button>
      </div>

      {/* Right Cards Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:w-1/2 w-full">
        {steps.map((step, index) => {
          const { ref: stepRef, inView: stepInView } = useInView({
            triggerOnce: false,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={index}
              ref={stepRef}
              initial={{ opacity: 0, x: step.animation.x, y: step.animation.y }}
              animate={
                stepInView
                  ? { opacity: 1, x: 0, y: 0 }
                  : { opacity: 0, x: step.animation.x, y: step.animation.y }
              }
              transition={{ duration: 0.7, delay: (index + 1) * 0.8 }}
              className={`${step.bg} p-6 sm:p-8 rounded-3xl text-center shadow-md relative max-w-[360px] w-full mx-auto`}
            >
              <div className="absolute top-0 right-8 text-[80px] font-extrabold text-black/10">
                {step.number}
              </div>
              <div className="z-10 relative mt-20 flex flex-col items-center">
                {step.icon}
                <h3 className="text-2xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-black text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HowIWork;