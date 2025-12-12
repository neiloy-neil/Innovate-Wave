import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-cyan-600 to-sky-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">Ride the Wave of</span>
                <span className="block text-cyan-300">Digital Innovation</span>
              </motion.h1>
              
              <motion.p 
                className="mt-3 text-base text-cyan-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Innovate Wave transforms your digital dreams into reality with cutting-edge web solutions, 
                creative design, and strategic marketing that propels your business forward.
              </motion.p>
              
              <motion.div 
                className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                  <div className="rounded-md shadow">
                    <Link to="/services">
                      <Button 
                        variant="primary" 
                        size="large"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="tech-glow btn-animated"
                      >
                        Dive In
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link to="/contact">
                      <Button 
                        variant="outline" 
                        size="large" 
                        className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-[#bae6fd] tech-glow btn-animated"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore More
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
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