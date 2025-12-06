import React from 'react';
import ContactHeroSection from '../sections/ContactHeroSection';
import ContactFormSection from '../sections/ContactFormSection';

const ContactPage: React.FC = () => {
  return (
    <div>
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;