import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { portfolioItems } from '../data/mockData';
import { motion } from 'framer-motion';

const PortfolioFilterSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Get unique categories
  const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
  
  // Filter items based on active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture">
      {/* Ocean surface ripples */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 15, 50 10 T 100 10 L 100 20 L 0 20 Z' fill='rgba(2, 132, 199, 0.2)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 20px',
            animation: 'float 12s linear infinite'
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-sky-200 opacity-20"
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 20 - 10],
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
          Oceanic Portfolio
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          Dive into our collection of successful digital voyages
        </p>
      </motion.div>
      
      {/* Category Filters */}
      <motion.div 
        className="mt-8 flex flex-wrap justify-center gap-2 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-sky-600 text-white tech-glow'
                : 'bg-sky-100 text-sky-800 hover:bg-sky-200'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Portfolio Items */}
      <motion.div 
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Card className="overflow-hidden tech-glow water-texture">
                <motion.div 
                  className="h-48 bg-gradient-to-br from-sky-200 to-cyan-300"
                  animate={{
                    scale: hoveredItem === item.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <motion.span 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800"
                      animate={{
                        backgroundColor: hoveredItem === item.id ? "#0ea5e9" : "#bae6fd",
                        color: hoveredItem === item.id ? "#fff" : "#0c4a6e"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.category}
                    </motion.span>
                    <span className="text-sm text-sky-600">{item.date}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-sky-900">{item.title}</h3>
                  <p className="mt-2 text-sky-700">{item.description}</p>
                  <div className="mt-4">
                    <p className="text-sm text-sky-600">Client: {item.client}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
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

export default PortfolioFilterSection;