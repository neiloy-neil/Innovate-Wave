import React, { useState } from 'react';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity();
      return;
    }
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50/80 to-cyan-50/80 backdrop-blur-sm relative overflow-hidden">
      {/* Gentle wave texture */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sky-200 to-transparent opacity-20"></div>
        
        {/* Floating bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-200 opacity-20"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-sky-900 sm:text-4xl">
            Chart Your Course
          </h2>
          <p className="mt-4 text-lg text-sky-700">
            Drop us a message and let's navigate the digital seas together.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sky-800">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-cyan-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white/90 text-sky-900 placeholder-sky-400 backdrop-blur-sm"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sky-800">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-cyan-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white/90 text-sky-900 placeholder-sky-400 backdrop-blur-sm"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-sky-800">
                Subject
              </label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-cyan-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white/90 text-sky-900 placeholder-sky-400 backdrop-blur-sm"
                onFocus={() => setFocusedField('subject')}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sky-800">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 border border-cyan-300 rounded-md shadow-sm focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 bg-white/90 text-sky-900 placeholder-sky-400 backdrop-blur-sm"
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              ></motion.textarea>
            </div>
            
            <div>
              <Button 
                type="submit" 
                variant="primary" 
                size="large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="tech-glow"
              >
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
        
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-sky-900 sm:text-4xl">
            Navigation Points
          </h2>
          <p className="mt-4 text-lg text-sky-700">
            Prefer direct contact? Here's how to reach our crew.
          </p>
          
          <div className="mt-8 space-y-6">
            <motion.div 
              className="flex"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 text-white tech-glow">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-sky-900">Phone</h3>
                <p className="mt-1 text-sky-700">+880 2 8888 9999 (Bangladesh)</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 text-white tech-glow">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-sky-900">Email</h3>
                <p className="mt-1 text-sky-700">info@innovatewave.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 text-white tech-glow">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-sky-900">Office</h3>
                <p className="mt-1 text-sky-700">456 Innovation Avenue, Dhaka, Bangladesh</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
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
            d="M0,288L48,282.7C96,277,192,267,288,272C384,277,480,299,576,304C672,309,768,299,864,277C960,256,1056,224,1152,203C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="wave-tertiary"
          ></path>
        </svg>
      </div>
    </SectionContainer>
  );
};

export default ContactFormSection;