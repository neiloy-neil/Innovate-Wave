import React, { useState, useEffect } from 'react';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const CTABannerSection: React.FC = () => {
  const [bubbles, setBubbles] = useState<{id: number, size: number, left: string, delay: number}[]>([]);
  
  useEffect(() => {
    // Create floating bubbles
    const createBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 20; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 25 + 8,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 7
        });
      }
      setBubbles(newBubbles);
    };
    
    createBubbles();
  }, []);
  
  // Handle navigation without full page refresh
  const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  
  return (
    <SectionContainer className="deep-ocean-gradient relative overflow-hidden particle-effect">
      {/* Animated bubbles -->
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map(bubble => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white bg-opacity-20"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              bottom: '-50px'
            }}
            animate={{
              y: [-50, -window.innerHeight - 100],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-extrabold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="block">Ready to Ride the Digital Waves?</span>
        </motion.h2>
        <motion.p 
          className="mt-4 max-w-3xl mx-auto text-xl text-sky-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Let's navigate the digital seas together and chart a course for your brand's success.
        </motion.p>
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-flex rounded-md shadow">
            <button onClick={() => handleNavigation('/contact')}>
              <Button 
                variant="primary" 
                size="large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="tech-glow"
              >
                Set Sail
              </Button>
            </button>
          </div>
          <div className="inline-flex">
            <button onClick={() => handleNavigation('/services')}>
              <Button 
                variant="outline" 
                size="large" 
                className="bg-white bg-opacity-10 text-white hover:bg-opacity-20 border-sky-300 tech-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Voyages
              </Button>
            </button>
          </div>
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