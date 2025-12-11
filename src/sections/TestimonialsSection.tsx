import React, { useState, useEffect } from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import Button from '../components/Button';
import { testimonials } from '../data/mockData';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [hoveredTestimonial, setHoveredTestimonial] = useState<string | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
      
      <div className="text-center">
        <motion.h2 
          className="text-3xl font-extrabold text-sky-900 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Voices from the Fleet
        </motion.h2>
        <motion.p 
          className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hear from businesses that have navigated success with Innovate Wave
        </motion.p>
      </div>
      
      <div className="mt-16 max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="tech-glow water-texture p-8 md:p-12 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="bg-gradient-to-br from-cyan-400 to-sky-500 rounded-full w-24 h-24 flex items-center justify-center text-white text-3xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                </div>
                <div className="text-center md:text-left flex-grow">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-2xl font-medium text-sky-900 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="mt-6">
                    <p className="text-lg font-bold text-sky-800">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sky-600">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentTestimonial ? 'bg-sky-600' : 'bg-sky-200'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-sky-700 mb-8 max-w-2xl mx-auto">
          Ready to chart your course to digital success? Join our fleet of innovative businesses today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="/services">
            <Button 
              variant="primary" 
              size="large" 
              className="tech-glow px-8 py-4 text-lg font-bold btn-animated"
            >
              Explore Services
            </Button>
          </a>
          <a href="/contact">
            <Button 
              variant="outline" 
              size="large" 
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-[#bae6fd] tech-glow px-8 py-4 text-lg font-bold btn-animated"
            >
              Get in Touch
            </Button>
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
};

export default TestimonialsSection;