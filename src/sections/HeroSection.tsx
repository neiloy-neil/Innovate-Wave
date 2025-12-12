import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-sky-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/3 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Particle effect overlay */}
      <div className="absolute inset-0 particle-effect"></div>
      
      {/* Wave animation at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="waves" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            className="wave-path opacity-30" 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="rgba(255, 255, 255, 0.1)"
          ></path>
          <path 
            className="wave-path opacity-20" 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="rgba(255, 255, 255, 0.05)"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block">Ride the Wave of</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-300">
                  Digital Innovation
                </span>
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
                className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:flex sm:space-x-4">
                  <div className="rounded-md shadow">
                    <Link to="/services">
                      <Button 
                        variant="primary" 
                        size="large"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        whileTap={{ scale: 0.95 }}
                        className="tech-glow btn-animated bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500"
                      >
                        Dive In
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <Link to="/contact">
                      <Button 
                        variant="outline" 
                        size="large" 
                        className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-cyan-400/50 hover:border-cyan-300 tech-glow btn-animated"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
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
          className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative"
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
          {/* Enhanced visualization with multiple layers */}
          <div className="absolute inset-0 opacity-30">
            <img 
              src="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230ea5e9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%230284c7;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M0,200 Q150,100 300,200 T600,200 L600,400 L0,400 Z' fill='url(%23grad1)'/%3E%3Ccircle cx='100' cy='150' r='20' fill='%237dd3fc'/%3E%3Ccircle cx='200' cy='180' r='15' fill='%237dd3fc'/%3E%3Ccircle cx='400' cy='160' r='25' fill='%237dd3fc'/%3E%3C/svg%3E" 
              alt="Wave visualization"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-sky-400/20 backdrop-blur-sm border border-sky-300/30"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;