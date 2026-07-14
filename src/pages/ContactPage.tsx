import React from 'react';
import ContactHeroSection from '../sections/ContactHeroSection';
import ContactFormSection from '../sections/ContactFormSection';
import useSEO from '../hooks/useSEO';

const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact Us | Innovate Wave',
    description: 'Get in touch with Innovate Wave for your next digital project.',
    keywords: 'contact innovate wave, hire creative agency, contact digital agency',
    ogTitle: 'Contact Us | Innovate Wave',
    ogDescription: 'Get in touch with Innovate Wave for your next digital project.'
  });

  return (
    <div>
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;