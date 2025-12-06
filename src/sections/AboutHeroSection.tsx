import React from 'react';
import SectionContainer from '../components/SectionContainer';

const AboutHeroSection: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          <span className="block">About Innovate Wave</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-[#bae6fd]">
          Crafting compelling creative experiences for forward-thinking brands worldwide
        </p>
      </div>
    </SectionContainer>
  );
};

export default AboutHeroSection;