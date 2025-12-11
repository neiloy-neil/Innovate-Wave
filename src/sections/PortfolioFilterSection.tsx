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
            animation: 'float 8s ease-in-out infinite'
          }}
        ></div>
      </div>
      
      <div className="text-center">
        <motion.h2 
          className="text-3xl font-extrabold text-sky-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Charting Success Stories
        </motion.h2>
        <motion.p 
          className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore our portfolio of transformative digital solutions across diverse industries
        </motion.p>
      </div>
      
      {/* Category filters */}
      <motion.div 
        className="mt-12 flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-sky-100 text-sky-800 hover:bg-sky-200'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>
      
      {/* Portfolio items grid */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card 
                className="h-full flex flex-col tech-glow water-texture card-hover overflow-hidden"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative">
                  <motion.img 
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    animate={{
                      scale: hoveredItem === item.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    onError={({ currentTarget }) => {
                      currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23bae6fd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%230c4a6e'%3ENo Image Available%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={item.link} 
                      className="px-4 py-2 bg-white text-sky-900 rounded-lg font-medium hover:bg-sky-100 transition-colors btn-animated"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="font-bold text-lg text-sky-900">{item.title}</h3>
                  <p className="text-sky-700 text-sm mt-1">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-sky-100 text-sky-800 text-xs rounded-full">{item.category}</span>
                    <span className="px-2 py-1 bg-sky-100 text-sky-800 text-xs rounded-full">{item.date}</span>
                  </div>
                  <a 
                    href={item.link}
                    className="mt-4 inline-block px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium hover:bg-sky-700 transition-colors btn-animated"
                  >
                    View Project
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default PortfolioFilterSection;