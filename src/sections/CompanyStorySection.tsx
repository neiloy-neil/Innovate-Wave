import React from 'react';
import SectionContainer from '../components/SectionContainer';

const CompanyStorySection: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50/80 to-cyan-50/80 backdrop-blur-sm">
      <div className="lg:text-center">
        <h2 className="text-3xl font-extrabold text-sky-900 sm:text-4xl">
          Our Story
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-sky-700 lg:mx-auto">
          How we became a leader in creative transformation
        </p>
      </div>
      
      <div className="mt-16">
        <div className="tech-glow water-texture rounded-2xl p-8 bg-white/50 backdrop-blur-sm border border-cyan-200/50">
          <h3 className="text-2xl font-bold text-sky-900">Innovate Wave</h3>
          <p className="mt-4 text-sky-700">
            Established in Bangladesh, Innovate Wave was founded with a mission to bring world-class 
            creative content and branding solutions to the global market. Led by Baseem Wazid, Innovate Wave 
            specializes in visual storytelling and brand identity design.
          </p>
          <p className="mt-4 text-sky-700">
            Our journey began with a small team passionate about creating compelling creative 
            experiences that truly matter. Over the years, we've evolved into a comprehensive creative agency 
            serving clients across various industries worldwide.
          </p>
          <p className="mt-4 text-sky-700">
            Our commitment to excellence and innovation has earned us recognition as a trusted partner for brands 
            seeking creative transformation.
          </p>
        </div>
        
        <div className="mt-16 tech-glow water-texture rounded-2xl p-8 bg-white/50 backdrop-blur-sm border border-cyan-200/50">
          <h3 className="text-2xl font-bold text-sky-900 text-center">Our Mission & Vision</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-4 tech-glow water-texture rounded-r-lg p-6 bg-white/30 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-sky-900">Mission</h4>
              <p className="mt-2 text-sky-700">
                To empower brands with innovative creative solutions that drive engagement, enhance customer experiences, 
                and create lasting competitive advantages.
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 tech-glow water-texture rounded-r-lg p-6 bg-white/30 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-sky-900">Vision</h4>
              <p className="mt-2 text-sky-700">
                To be the most trusted creative partner globally, recognized for our ability to transform brands 
                through creativity, storytelling, and strategic insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CompanyStorySection;