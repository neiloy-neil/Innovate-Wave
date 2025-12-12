import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from './Card';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-800 to-sky-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-cyan-700/30 to-sky-800/30 backdrop-blur-sm border border-cyan-600/30 tech-glow">
              <div className="flex items-center mb-4">
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                  <img 
                    src="/src/assets/innovatewavelogo.png" 
                    alt="Innovate Wave" 
                    className="h-10 w-auto"
                  />
                </div>
                <span className="ml-3 text-xl font-bold">Innovate Wave</span>
              </div>
              <p className="text-[#bae6fd] mb-4">
                Transforming ideas into digital realities with cutting-edge technology and creative design.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/services#web-design" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  Web Design
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/services#branding" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  Brand Identity
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/services#seo" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  SEO
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/services#affiliate-marketing" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  Affiliate Marketing
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/services" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  View All Services
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/about" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/portfolio" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  Portfolio
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                <Link to="/contact" className="text-[#bae6fd] hover:text-white w-full text-left block">
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <address className="not-italic text-[#bae6fd] mb-4">
              <p>Bangladesh Office:</p>
              <p className="mb-2">Dhaka, Bangladesh</p>
              <p>Email: info@innovatewave.com</p>
            </address>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }}
                className="text-[#bae6fd] hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }}
                className="text-[#bae6fd] hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }}
                className="text-[#bae6fd] hover:text-white"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-[#0891b2]/30 mt-12 pt-6 text-center text-[#bae6fd]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Innovate Wave. All rights reserved.</p>
        </motion.div>
      </div>
      
      {/* Enhanced wave separator at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-[80px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.3" 
            d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,176C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            className="wave-primary"
          ></path>
          <path 
            fill="#ffffff" 
            fillOpacity="0.2" 
            d="M0,256L60,250.7C120,245,240,235,360,240C480,245,600,267,720,272C840,277,960,267,1080,245C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            className="wave-secondary"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;