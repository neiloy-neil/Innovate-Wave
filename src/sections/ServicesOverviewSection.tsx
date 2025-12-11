import React, { useState } from 'react';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';
import { services } from '../data/mockData';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const ServicesOverviewSection: React.FC = () => {
  // Take only the first 4 services for the overview
  const featuredServices = services.slice(0, 4);
  
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  
  // Handle navigation without full page refresh
  const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  
  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture">
      {/* Underwater bubbles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-200 opacity-20"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-sky-900 sm:text-4xl">
          Our Oceanic Services
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          Riding the waves of innovation with comprehensive digital solutions
        </p>
      </motion.div>
      
      <div className="mt-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              <Card className="h-full tech-glow water-texture">
                <div className="p-6">
                  <motion.div 
                    className="bg-sky-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4"
                    animate={{ 
                      scale: hoveredService === service.id ? 1.1 : 1,
                      rotate: hoveredService === service.id ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <svg className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg font-medium text-sky-900">{service.title}</h3>
                  <p className="mt-2 text-sky-700">{service.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <a 
                    href={`/services/${service.id}`}
                    className="w-full py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors block text-center"
                  >
                    Learn More
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button onClick={() => handleNavigation('/services')}>
              <Button 
                variant="primary" 
                size="large" 
                className="tech-glow px-8 py-4 text-lg font-bold"
              >
                Explore All Services
              </Button>
            </button>
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

export default ServicesOverviewSection;