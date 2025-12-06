import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import { testimonials } from '../data/mockData';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const TestimonialsSection: React.FC = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<string | null>(null);
  
  return (
    <SectionContainer className="bg-gradient-to-br from-cyan-50 to-sky-100 relative overflow-hidden water-texture">
      {/* Ocean reflection effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent opacity-30"></div>
        
        {/* Gentle wave motion */}
        <div className="absolute bottom-0 left-0 w-full h-20 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 5, 50 10 T 100 10 L 100 20 L 0 20 Z' fill='rgba(2, 132, 199, 0.3)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 20px',
            animation: 'float 15s linear infinite reverse'
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
          Ocean Voyagers
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          Hear from brands that have sailed with us through digital waters
        </p>
      </motion.div>
      
      <div className="mt-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredTestimonial(testimonial.id)}
              onHoverEnd={() => setHoveredTestimonial(null)}
            >
              <div className="bg-white p-8 rounded-lg shadow-sm tech-glow water-texture">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <motion.div 
                      className="bg-gradient-to-br from-sky-200 to-cyan-300 border-2 border-sky-300 rounded-xl w-16 h-16"
                      animate={{
                        scale: hoveredTestimonial === testimonial.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-sky-900">{testimonial.name}</h4>
                    <p className="text-sky-700">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sky-700 italic">"{testimonial.content}"</p>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className={`h-5 w-5 ${i < (testimonial.rating || 0) ? 'text-cyan-400' : 'text-sky-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        whileHover={{ 
                          scale: hoveredTestimonial === testimonial.id ? 1.2 : 1,
                          rotate: hoveredTestimonial === testimonial.id ? 10 : 0
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/contact">
              <Button 
                variant="primary" 
                size="large" 
                className="tech-glow px-8 py-4 text-lg font-bold"
              >
                Join Our Fleet
              </Button>
            </a>
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

export default TestimonialsSection;