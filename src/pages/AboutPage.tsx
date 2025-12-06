import React from 'react';
import AboutHeroSection from '../sections/AboutHeroSection';
import CompanyStorySection from '../sections/CompanyStorySection';
import LeadershipTeamSection from '../sections/LeadershipTeamSection';

const AboutPage: React.FC = () => {
  return (
    <div>
      <AboutHeroSection />
      <CompanyStorySection />
      <LeadershipTeamSection />
    </div>
  );
};

export default AboutPage;