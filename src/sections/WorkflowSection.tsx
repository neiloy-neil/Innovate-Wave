import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';

const WorkflowSection: React.FC = () => {
  const steps = [
    {
      id: '01',
      name: 'Charting the Course',
      description: 'We dive deep into understanding your brand goals, target audience, and competitive landscape.'
    },
    {
      id: '02',
      name: 'Navigating Strategy',
      description: 'Based on insights, we develop a customized creative roadmap aligned with your objectives.'
    },
    {
      id: '03',
      name: 'Setting Sail',
      description: 'Our creative teams bring the strategy to life with pixel-perfect execution.'
    },
    {
      id: '04',
      name: 'Riding the Waves',
      description: 'We deploy your creative assets and continuously optimize for maximum impact.'
    }
  ];
  
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture">
      {/* Ocean current effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-sky-200 to-transparent opacity-20"
          style={{
            transform: 'skewY(-3deg)',
            top: '20%'
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-15"
          style={{
            transform: 'skewY(2deg)',
            top: '60%'
          }}
        ></div>
      </div>
      
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-sky-900 sm:text-4xl">
          Our Oceanic Journey
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          Navigating the digital seas with a proven process for exceptional results
        </p>
      </motion.div>
      
      <div className="mt-16 relative z-10">
        <div className="relative">
          {/* Horizontal line with oceanic theme */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-sky-200"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                <div className="flex md:block">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white md:absolute md:h-16 md:w-16 md:-top-8 tech-glow"
                      animate={{ 
                        scale: hoveredStep === index ? 1.1 : 1,
                        rotate: hoveredStep === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="text-lg font-bold">{step.id}</span>
                    </motion.div>
                  </div>
                  <div className="ml-4 md:ml-0 md:pt-12">
                    <h3 className="text-lg font-medium text-sky-900">{step.name}</h3>
                    <p className="mt-2 text-base text-sky-700">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Professional wave separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-[80px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#0ea5e9" 
            fillOpacity="0.2" 
            d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            className="wave-primary"
          ></path>
        </svg>
      </div>
    </SectionContainer>
  );
};

export default WorkflowSection;