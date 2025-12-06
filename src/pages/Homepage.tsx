import React from 'react';
import HeroSection from '../sections/HeroSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import FeaturedCreativeContentSection from '../sections/FeaturedCreativeContentSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import WorkflowSection from '../sections/WorkflowSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTABannerSection from '../sections/CTABannerSection';
import useSEO from '../hooks/useSEO';

const Homepage: React.FC = () => {
  useSEO({
    title: 'Innovate Wave - Creative Digital Agency',
    description: 'Transform your brand presence with our premium creative services, branding, and digital marketing solutions.',
    keywords: 'creative agency, branding, digital marketing, creative content',
    ogTitle: 'Innovate Wave - Creative Digital Agency',
    ogDescription: 'Crafting compelling creative experiences for forward-thinking brands worldwide.'
  });
  
  return (
    <div>
      <HeroSection />
      <ServicesOverviewSection />
      <FeaturedCreativeContentSection />
      <WhyChooseUsSection />
      <WorkflowSection />
      <TestimonialsSection />
      <CTABannerSection />
    </div>
  );
};

export default Homepage;