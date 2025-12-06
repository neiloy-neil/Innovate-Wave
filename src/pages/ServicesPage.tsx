import React from 'react';
import ServicesHeroSection from '../sections/ServicesHeroSection';
import ServicesListSection from '../sections/ServicesListSection';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <ServicesHeroSection />
      <ServicesListSection />
    </div>
  );
};

export default ServicesPage;