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
  const [currentPage, setCurrentPage] = useState<string>(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    // Get the current path and set the page
    const path = window.location.pathname;
    setCurrentPage(path);
    
    // Listen for popstate events (browser back/forward buttons)
    const handlePopState = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(window.location.pathname);
        setIsTransitioning(false);
      }, 150);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Also listen for hashchange events
    const handleHashChange = () => {
      setCurrentPage(window.location.pathname);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
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
        <div className={`page-transition ${isTransitioning ? '' : 'appear'}`}>
          {renderPage()}
        </div>
      </MainLayout>
    </div>
  );
};

export default App;