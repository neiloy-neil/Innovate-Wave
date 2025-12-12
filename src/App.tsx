import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createBubble = () => {
      if (!containerRef.current) return;
      
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size
      const size = Math.random() * 30 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      bubble.style.left = `${Math.random() * 100}%`;
      
      // Random animation duration
      bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
      
      // Random opacity
      bubble.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      
      // Random color variation
      const hue = Math.floor(Math.random() * 30) + 180; // Blue-green range
      bubble.style.backgroundColor = `hsla(${hue}, 70%, 80%, 0.3)`;
      
      containerRef.current.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 15000);
    };
    
    // Create bubbles periodically
    const bubbleInterval = setInterval(createBubble, 150);
    
    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-sky-50 to-cyan-100 relative overflow-hidden">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;