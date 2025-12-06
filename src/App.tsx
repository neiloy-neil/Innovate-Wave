import React, { useEffect, useRef } from 'react';
import MainLayout from './layouts/MainLayout';
import Homepage from './pages/Homepage';

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
  
  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-sky-50 to-cyan-100 relative overflow-hidden">
      <MainLayout>
        <Homepage />
      </MainLayout>
    </div>
  );
};

export default App;