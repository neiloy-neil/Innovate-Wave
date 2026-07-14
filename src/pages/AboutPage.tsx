import React from 'react';
import AboutHeroSection from '../sections/AboutHeroSection';
import CompanyStorySection from '../sections/CompanyStorySection';
import LeadershipTeamSection from '../sections/LeadershipTeamSection';
import useSEO from '../hooks/useSEO';

const AboutPage: React.FC = () => {
  useSEO({
    title: 'About Us | Innovate Wave',
    description: 'Learn about Innovate Wave, our story, and the leadership team driving creative excellence.',
    keywords: 'about innovate wave, creative agency team, leadership, company story',
    ogTitle: 'About Us | Innovate Wave',
    ogDescription: 'Learn about Innovate Wave, our story, and the leadership team driving creative excellence.'
  });

  return (
    <div>
      <AboutHeroSection />
      <CompanyStorySection />
      <LeadershipTeamSection />
    </div>
  );
};

export default AboutPage;