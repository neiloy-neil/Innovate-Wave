import React, { useEffect, useRef, useState } from 'react';
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
  const [currentPage, setCurrentPage] = useState<string>('');

  useEffect(() => {
    // Get the current path and set the page
    const path = window.location.pathname;
    setCurrentPage(path);
    
    // Listen for popstate events (browser back/forward buttons)
    const handlePopState = () => {
      setCurrentPage(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

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
      
      containerRef.current.appendChild(bubble);
      
      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.parentNode.removeChild(bubble);
        }
      }, 15000);
    };
    
    // Create bubbles periodically
    const bubbleInterval = setInterval(createBubble, 200);
    
    return () => {
      clearInterval(bubbleInterval);
    };
  }, []);
  
  // Render the appropriate page based on the current path
  const renderPage = () => {
    // Check if it's a portfolio detail page
    if (currentPage.startsWith('/portfolio/')) {
      // Extract the portfolio item ID
      const pathParts = currentPage.split('/');
      if (pathParts.length >= 3 && pathParts[2]) {
        return <PortfolioDetailPage />;
      }
    }
    
    // Check if it's a service detail page
    if (currentPage.startsWith('/services/')) {
      // Extract the service ID
      const pathParts = currentPage.split('/');
      if (pathParts.length >= 3 && pathParts[2]) {
        return <ServiceDetailPage />;
      }
    }
    
    switch (currentPage) {
      case '/':
        return <Homepage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/portfolio':
        return <PortfolioPage />;
      case '/contact':
        return <ContactPage />;
      default:
        // For any unknown routes, show the homepage
        return <Homepage />;
    }
  };
  
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-sky-50 to-cyan-100 relative overflow-hidden">
      <MainLayout>
        {renderPage()}
      </MainLayout>
    </div>
  );
};

export default App;