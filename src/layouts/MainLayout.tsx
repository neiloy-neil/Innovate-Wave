import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [ripples, setRipples] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const [rippleId, setRippleId] = useState(0);
  
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Create ripple effect on click
      const newRipple = {
        id: rippleId,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 40 + 20 // Random size between 20-60px
      };
      
      setRipples(prev => [...prev, newRipple]);
      setRippleId(prev => prev + 1);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 2000);
    };
    
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [rippleId]);
  
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow relative pt-20">
        {children}
        {/* Ripple effects */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{
              left: ripple.x - ripple.size/2,
              top: ripple.y - ripple.size/2,
              width: ripple.size,
              height: ripple.size,
              borderWidth: Math.random() * 2 + 1
            }}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;