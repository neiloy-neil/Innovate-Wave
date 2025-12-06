import React from 'react';
import PortfolioHeroSection from '../sections/PortfolioHeroSection';
import PortfolioFilterSection from '../sections/PortfolioFilterSection';

const PortfolioPage: React.FC = () => {
  return (
    <div>
      <PortfolioHeroSection />
      <PortfolioFilterSection />
    </div>
  );
};

export default PortfolioPage;