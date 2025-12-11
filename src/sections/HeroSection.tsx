import React, { useEffect, useState } from 'react';
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
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <main className="mt-16 md:mt-24">
          <div className="text-center">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Navigate the Digital</span>
              <span className="block text-cyan-200">Seas with Confidence</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 max-w-lg mx-auto text-xl text-cyan-100 sm:max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Innovate Wave crafts immersive digital experiences that propel brands forward through creative excellence and strategic innovation.
            </motion.p>
            
            <motion.div 
              className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                <div className="rounded-md shadow">
                  <a href="/services">
                    <Button 
                      variant="primary" 
                      size="large"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="tech-glow btn-animated"
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
                      className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-[#bae6fd] tech-glow btn-animated"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Explore More
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
      
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.div 
          className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full opacity-30 float-animation"
          animate={{ 
            scale: [1, 1.02, 1],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <img 
            src="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,200 Q150,100 300,200 T600,200 L600,400 L0,400 Z' fill='%230891b2'/%3E%3Ccircle cx='100' cy='150' r='20' fill='%237dd3fc'/%3E%3Ccircle cx='200' cy='180' r='15' fill='%237dd3fc'/%3E%3Ccircle cx='400' cy='160' r='25' fill='%237dd3fc'/%3E%3C/svg%3E" 
            alt="Wave visualization"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;