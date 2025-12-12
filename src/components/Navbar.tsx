import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/innovatewavelogo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to show/hide scroll top button and change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        if (window.scrollY > 300) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      } else {
        setIsScrolled(false);
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
      <nav className={`flex items-center justify-between flex-wrap px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-2xl border-b transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border-cyan-400/20' 
          : 'bg-gradient-to-r from-cyan-700 to-sky-800 bg-opacity-95 backdrop-blur-xl border-cyan-500/30'
      }`}>
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="flex items-center group">
            <div className="bg-gradient-to-br from-white/20 to-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/30 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img 
                src={logo} 
                alt="Innovate Wave" 
                className="h-14 w-auto drop-shadow-lg"
              />
            </div>
            <span className={`ml-3 text-xl font-bold tracking-tight ${
              isScrolled ? 'text-cyan-400' : 'text-white'
            } transition-colors duration-300`}>
              Innovate<span className="text-cyan-300">Wave</span>
            </span>
          </Link>
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
          <div className="text-sm lg:flex lg:items-center lg:space-x-2 mt-4 lg:mt-0">
            <Link 
              to="/about" 
              className={`block lg:inline-block mx-1 px-5 py-3 rounded-xl font-semibold transition-all duration-300 w-full text-left lg:w-auto ${
                isScrolled 
                  ? 'text-cyan-100 hover:bg-cyan-900/50 hover:text-white' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`block lg:inline-block mx-1 px-5 py-3 rounded-xl font-semibold transition-all duration-300 w-full text-left lg:w-auto ${
                isScrolled 
                  ? 'text-cyan-100 hover:bg-cyan-900/50 hover:text-white' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`block lg:inline-block mx-1 px-5 py-3 rounded-xl font-semibold transition-all duration-300 w-full text-left lg:w-auto ${
                isScrolled 
                  ? 'text-cyan-100 hover:bg-cyan-900/50 hover:text-white' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contact" 
              className="block mt-2 lg:mt-0 mx-1 px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/40 w-full text-left lg:w-auto transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Ocean Drop Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-700 text-white rounded-full shadow-lg hover:from-cyan-400 hover:to-sky-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 group"
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