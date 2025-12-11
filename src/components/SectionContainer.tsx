import React, { useEffect, useRef, useState } from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ 
  children, 
  className = '',
  id
}) => {
  const baseClasses = 'py-20 px-4 sm:px-6 lg:px-8 relative fade-in';
  const classes = `${baseClasses} ${className}`;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id={id} 
      className={`${classes} ${isVisible ? 'appear' : ''}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;