import React, { useState } from 'react';
import Card from '../components/Card';
import SectionContainer from '../components/SectionContainer';
import { creativeContent } from '../data/mockData';
import { motion } from 'framer-motion';

const FeaturedCreativeContentSection: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  return (
    <SectionContainer className="bg-gradient-to-br from-cyan-50 to-sky-100 relative overflow-hidden water-texture">
      {/* Underwater effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-200 to-transparent opacity-30"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-200 opacity-20"
            style={{
              width: Math.random() * 10 + 3,
              height: Math.random() * 10 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 4,
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
          Oceanic Creations
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          Diving deep into creative excellence with our signature projects
        </p>
      </motion.div>
      
      <div className="mt-12 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {creativeContent.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Make the entire card clickable */}
              <a href={`/portfolio/${item.id}`} className="block h-full">
                <Card className="overflow-hidden tech-glow water-texture h-full">
                  <div className="h-48 overflow-hidden">
                    <motion.img 
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredItem === item.id ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      onError={({ currentTarget }) => {
                        currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23bae6fd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%230c4a6e'%3E" + encodeURIComponent(item.title) + "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <motion.span 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800 capitalize"
                        animate={{
                          backgroundColor: hoveredItem === item.id ? "#0ea5e9" : "#bae6fd",
                          color: hoveredItem === item.id ? "#fff" : "#0c4a6e"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.type}
                      </motion.span>
                      <span className="text-sm text-sky-600">{item.date}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-sky-900">{item.title}</h3>
                    <p className="mt-1 text-sky-700">{item.description}</p>
                    <div className="mt-4">
                      <p className="text-sm text-sky-600">By {item.createdBy}</p>
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
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

export default FeaturedCreativeContentSection;