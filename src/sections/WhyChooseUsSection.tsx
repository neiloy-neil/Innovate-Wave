import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      name: 'Oceanic Expertise',
      description: 'Our multidisciplinary team navigates the digital tides with expertise in design, creativity, and strategy.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: 'Results-Driven',
      description: 'We chart courses toward measurable outcomes that directly impact your brand growth and success.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: 'Creative Excellence',
      description: 'We harness the latest creative techniques and methodologies to deliver outstanding solutions.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      name: 'Collaborative Approach',
      description: 'We sail alongside you throughout the journey to ensure alignment with your vision.',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ];
  
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  // Handle navigation without full page refresh
  const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  
  return (
    <SectionContainer className="deep-ocean-gradient relative overflow-hidden water-texture">
      {/* Deep sea bubbles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-300 opacity-10"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="lg:text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Why Navigate With Us
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-200 lg:mx-auto">
          Charting the course with a creative agency that understands both design and business
        </p>
      </motion.div>
      
      <div className="mt-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-sky-900 bg-opacity-30 p-6 rounded-lg backdrop-blur-sm tech-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <motion.div 
                className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-sky-600"
                animate={{ 
                  scale: hoveredFeature === index ? 1.1 : 1,
                  rotate: hoveredFeature === index ? 5 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="mt-4 text-lg font-medium text-white">{feature.name}</h3>
              <p className="mt-2 text-base text-sky-100">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mt-8 text-center">
              <Button 
                variant="primary" 
                size="large"
                href="/contact"
                className="tech-glow px-8 py-4 text-lg font-bold"
              >
                Begin Your Journey
              </Button>
            </div>
          </motion.div>
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
            fill="#0c4a6e" 
            fillOpacity="0.3" 
            d="M0,288L48,282.7C96,277,192,267,288,272C384,277,480,299,576,304C672,309,768,299,864,277C960,256,1056,224,1152,203C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="wave-tertiary"
          ></path>
        </svg>
      </div>
    </SectionContainer>
  );
};

export default WhyChooseUsSection;