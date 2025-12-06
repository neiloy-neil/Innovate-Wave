import React from 'react';

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
  const baseClasses = 'py-20 px-4 sm:px-6 lg:px-8 relative';
  const classes = `${baseClasses} ${className}`;
  
  return (
    <section id={id} className={classes}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;