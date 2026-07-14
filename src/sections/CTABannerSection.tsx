import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';

const CTABannerSection: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-r from-cyan-700 to-sky-800 text-white relative overflow-hidden py-20">
      {/* Enhanced bubble background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: `${Math.random() * 0.3 + 0.1}`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="relative z-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block">Ready to Ride the Wave</span>
          <span className="block text-cyan-300">of Digital Success?</span>
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-xl text-cyan-100 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Let's transform your digital vision into reality. Our team of experts is ready to help you navigate the digital landscape and achieve your business goals.
        </motion.p>
        
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button 
            variant="primary" 
            size="large"
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="tech-glow"
          >
            Explore Services
          </Button>
          <Button 
            variant="outline" 
            size="large" 
            href="/contact"
            className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-[#bae6fd] tech-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Professional wave separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.3" 
            d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            className="wave-primary"
          ></path>
          <path 
            fill="#ffffff" 
            fillOpacity="0.2" 
            d="M0,256L60,250.7C120,245,240,235,360,240C480,245,600,267,720,272C840,277,960,267,1080,245C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className="wave-secondary"
          ></path>
        </svg>
      </div>
    </SectionContainer>
  );
};

export default CTABannerSection;