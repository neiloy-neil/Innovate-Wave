import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle navigation without full page refresh
  const handleNavigation = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setIsMenuOpen(false); // Close mobile menu
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-cyan-700 to-sky-800 bg-opacity-95 backdrop-blur-xl px-6 py-4 fixed top-0 left-0 right-0 z-50 shadow-2xl border-b border-cyan-500/30">
      <div className="flex items-center flex-shrink-0 mr-6">
        <button onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
          <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
            <img 
              src="/src/assets/innovatewavelogo.png" 
              alt="Innovate Wave" 
              className="h-14 w-auto"
            />
          </div>
        </button>
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
          <button 
            onClick={() => handleNavigation('/about')} 
            className="block mt-4 lg:inline-block lg:mt-0 mx-1 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer w-full text-left lg:w-auto"
          >
            About
          </button>
          <button 
            onClick={() => handleNavigation('/services')} 
            className="block mt-4 lg:inline-block lg:mt-0 mx-1 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer w-full text-left lg:w-auto"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavigation('/portfolio')} 
            className="block mt-4 lg:inline-block lg:mt-0 mx-1 px-4 py-2 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300 cursor-pointer w-full text-left lg:w-auto"
          >
            Portfolio
          </button>
          <button 
            onClick={() => handleNavigation('/contact')} 
            className="block mt-4 lg:mt-0 mx-1 px-6 py-2.5 rounded-full text-white font-bold bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 cursor-pointer w-full text-left lg:w-auto"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;