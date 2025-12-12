import React from 'react';
import SectionContainer from '../components/SectionContainer';

const AboutHeroSection: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-r from-cyan-600/80 to-sky-700/80 text-white backdrop-blur-sm">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          <span className="block">About Innovate Wave</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-cyan-100">
          Crafting compelling creative experiences for forward-thinking brands worldwide
        </p>
      </div>
      
      {/* Floating bubbles */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-cyan-400/20 backdrop-blur-sm border border-cyan-300/30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-sky-400/20 backdrop-blur-sm border border-sky-300/30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-teal-400/20 backdrop-blur-sm border border-teal-300/30 animate-blob animation-delay-4000"></div>
    </SectionContainer>
  );
};

export default AboutHeroSection;