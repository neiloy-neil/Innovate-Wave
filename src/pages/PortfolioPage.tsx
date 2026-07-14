import React from 'react';
import PortfolioHeroSection from '../sections/PortfolioHeroSection';
import PortfolioFilterSection from '../sections/PortfolioFilterSection';
import useSEO from '../hooks/useSEO';

const PortfolioPage: React.FC = () => {
  useSEO({
    title: 'Our Portfolio | Innovate Wave',
    description: 'Explore our portfolio of creative projects and successful campaigns.',
    keywords: 'creative portfolio, design projects, agency work, innovate wave portfolio',
    ogTitle: 'Our Portfolio | Innovate Wave',
    ogDescription: 'Explore our portfolio of creative projects and successful campaigns.'
  });

  return (
    <div>
      <PortfolioHeroSection />
      <PortfolioFilterSection />
    </div>
  );
};

export default PortfolioPage;