import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';
import Button from '../components/Button';
import useSEO from '../hooks/useSEO';

const NotFoundPage: React.FC = () => {
  useSEO({
    title: '404 - Page Not Found | Innovate Wave',
    description: 'The page you are looking for does not exist.',
  });

  return (
    <SectionContainer className="flex items-center justify-center min-h-[60vh] text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-600">
          404
        </h1>
        <h2 className="mt-8 text-3xl font-bold text-sky-900 md:text-4xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-sky-700">
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
        </p>
        <div className="mt-10 flex justify-center">
          <Button variant="primary" size="large" href="/" className="tech-glow">
            Return Home
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default NotFoundPage;
