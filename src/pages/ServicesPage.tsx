import React from 'react';
import ServicesHeroSection from '../sections/ServicesHeroSection';
import ServicesListSection from '../sections/ServicesListSection';
import useSEO from '../hooks/useSEO';

const ServicesPage: React.FC = () => {
  useSEO({
    title: 'Our Services | Innovate Wave',
    description: 'Discover our comprehensive range of creative services including branding, web design, and digital marketing.',
    keywords: 'creative services, web design, branding agency, digital marketing services',
    ogTitle: 'Our Services | Innovate Wave',
    ogDescription: 'Discover our comprehensive range of creative services including branding, web design, and digital marketing.'
  });

  return (
    <div>
      <ServicesHeroSection />
      <ServicesListSection />
    </div>
  );
};

export default ServicesPage;