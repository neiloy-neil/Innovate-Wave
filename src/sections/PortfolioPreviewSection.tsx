import React, { useState } from 'react';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';
import { portfolioItems } from '../data/mockData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const PortfolioPreviewSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50/80 to-cyan-50/80 backdrop-blur-sm relative overflow-hidden">
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
      
      <motion.div 
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold text-sky-900 sm:text-4xl">
          Charting Success Stories
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          Explore our portfolio of transformative digital solutions across diverse industries
        </p>
      </motion.div>
      
      <div className="mt-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item, index) => (
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
              <Card className="overflow-hidden tech-glow water-texture h-full backdrop-blur-sm bg-white/50 border border-cyan-200/50">
                <Link to={`/portfolio/${item.id}`} className="block h-full">
                  <div className="relative h-48 overflow-hidden">
                    <motion.img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredItem === item.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      onError={({ currentTarget }) => {
                        currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23bae6fd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%230c4a6e'%3ENo Image Available%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <span 
                        className="px-4 py-2 bg-white text-sky-900 rounded-lg font-medium hover:bg-sky-100 transition-colors"
                      >
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-sky-900">{item.title}</h3>
                    <p className="text-sky-700 text-sm mt-2">{item.description.substring(0, 100)}...</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">{item.category}</span>
                      <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full">{item.date}</span>
                    </div>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="primary" 
            size="large"
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="tech-glow"
          >
            View Full Portfolio
          </Button>
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
            fillOpacity="0.2" 
            d="M0,256L60,250.7C120,245,240,235,360,240C480,245,600,267,720,272C840,277,960,267,1080,245C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className="wave-secondary"
          ></path>
        </svg>
      </div>
    </SectionContainer>
  );
};

export default PortfolioPreviewSection;