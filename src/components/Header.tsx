import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-600 to-sky-700 bg-opacity-95 backdrop-blur-xl shadow-2xl">
      <div className="container mx-auto px-4 py-3">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;