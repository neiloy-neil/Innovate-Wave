import React, { useState, useEffect } from 'react';
import logo from '../assets/innovatewavelogo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-cyan-700 to-sky-800 bg-opacity-95 backdrop-blur-xl px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-2xl border-b border-cyan-500/30">
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/" className="flex items-center">
            <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
              <img 
                src={logo} 
                alt="Innovate Wave" 
                className="h-14 w-auto"
              />
            </div>
          </a>
        </div>
        
        <div className="block lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 border border-white/20"
          >
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>
        
        {/* Menu - visible on large screens, toggleable on small screens */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`}>
          <div className="text-sm lg:flex lg:items-center lg:space-x-1">
            <a 
              href="/about" 
              className="block mt-4 lg:inline-block lg:mt-0 mx-1 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 w-full text-left lg:w-auto"
            >
              About
            </a>
            <a 
              href="/services" 
              className="block mt-4 lg:inline-block lg:mt-0 mx-1 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 w-full text-left lg:w-auto"
            >
              Services
            </a>
            <a 
              href="/portfolio" 
              className="block mt-4 lg:inline-block lg:mt-0 mx-1 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 w-full text-left lg:w-auto"
            >
              Portfolio
            </a>
            <a 
              href="/contact" 
              className="block mt-4 lg:mt-0 mx-1 px-6 py-2.5 rounded-full text-white font-bold bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 w-full text-left lg:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Ocean Drop Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-cyan-400 to-sky-600 text-white rounded-full shadow-lg hover:from-cyan-300 hover:to-sky-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 group"
          aria-label="Scroll to top"
        >
          {/* Ocean drop shape using SVG */}
          <svg 
            className="w-6 h-6 mx-auto transition-transform duration-300 group-hover:translate-y-[-2px]" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 2C8 2 5 5 5 9C5 11.5 6.5 14 8.5 16C10.5 18 12 22 12 22C12 22 13.5 18 15.5 16C17.5 14 19 11.5 19 9C19 5 16 2 12 2Z" 
              fill="currentColor"
            />
            <path 
              d="M12 6C10.5 6 9 7 9 9C9 10.5 10 12 11 13C11.5 13.5 12 15 12 15C12 15 12.5 13.5 13 13C14 12 15 10.5 15 9C15 7 13.5 6 12 6Z" 
              fill="white"
            />
          </svg>
          
          {/* Ripple effect on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 rounded-full animate-ping bg-cyan-300 opacity-20"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default Navbar;