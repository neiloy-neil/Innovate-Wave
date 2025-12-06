import React from 'react';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { services } from '../data/mockData';

const ServicesListSection: React.FC = () => {
  return (
    <SectionContainer className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-[#0c4a6e] sm:text-4xl">
          Navigating Your Success
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-[#0284c7] lg:mx-auto">
          End-to-end digital solutions designed to elevate your brand through the digital seas
        </p>
      </div>
      
      <div className="mt-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="h-full flex flex-col tech-glow water-texture"
              id={service.id}
            >
              <div className="p-6 flex-grow">
                <div className="bg-[#bae6fd] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0c4a6e]">{service.title}</h3>
                <p className="mt-2 text-[#0284c7]">{service.description}</p>
                {service.features && (
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-[#0ea5e9] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#0284c7]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesListSection;