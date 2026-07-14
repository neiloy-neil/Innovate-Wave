import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import Button from '../components/Button';
import { testimonials } from '../data/mockData';

const TestimonialsSection: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-b from-cyan-50 to-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-extrabold text-sky-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Charting Success Stories
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-sky-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Navigating businesses toward digital excellence, one success story at a time
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full tech-glow water-texture">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {testimonial.avatarUrl ? (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name} 
                        loading="lazy" 
                        width="48" 
                        height="48" 
                        className="w-12 h-12 rounded-full object-cover shadow-sm border border-cyan-200"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-sky-900">{testimonial.name}</h3>
                      <p className="text-sky-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <blockquote className="text-sky-700 italic">
                    "{testimonial.content}"
                  </blockquote>
                  {testimonial.rating && (
                    <div className="mt-4 flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
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
            <Button 
              variant="primary" 
              size="large" 
              href="/services"
              className="tech-glow px-8 py-4 text-lg font-bold btn-animated"
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              href="/contact"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white border-[#bae6fd] tech-glow px-8 py-4 text-lg font-bold btn-animated"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default TestimonialsSection;