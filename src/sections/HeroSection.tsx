import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const [bubbles, setBubbles] = useState<Array<{id: number, size: number, left: string, delay: number}>>([]);
  
  useEffect(() => {
    // Create floating bubbles
    const createBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 30 + 10,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 5
        });
      }
      setBubbles(newBubbles);
    };
    
    createBubbles();
  }, []);
  
  return (
    <div className="relative bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] overflow-hidden particle-effect">
      {/* Floating bubbles */}
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              className="sm:text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="block">Oceanic Digital</span>
                <motion.span 
                  className="block text-[#bae6fd] tech-glow"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Waves of Innovation
                </motion.span>
              </motion.h1>
              <motion.p 
                className="mt-3 text-base text-[#f0f9ff] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Riding the digital tide with cutting-edge solutions that propel your brand into the future.
              </motion.p>
              <motion.div 
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="rounded-md shadow">
                  <a href="/services">
                    <Button 
                      variant="primary" 
                      size="large"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="tech-glow"
                    >
                      Dive In
                    </Button>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/contact">
                    <Button 
                      variant="outline" 
                      size="large" 
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-[#bae6fd] tech-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore More
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div 
          className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full opacity-30 float-animation"
          animate={{ 
            scale: [1, 1.02, 1],
            rotate: [0, 1, 0, -1, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-[#bae6fd] to-[#7dd3fc] rounded-full opacity-50 blur-3xl"></div>
        </motion.div>
      </div>
      
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
          <path 
            fill="#ffffff" 
            fillOpacity="0.1" 
            d="M0,288L48,282.7C96,277,192,267,288,272C384,277,480,299,576,304C672,309,768,299,864,277C960,256,1056,224,1152,203C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="wave-tertiary"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;