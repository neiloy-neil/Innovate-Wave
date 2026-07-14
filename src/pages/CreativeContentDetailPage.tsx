import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { creativeContent } from '../data/mockData';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const CreativeContentDetailPage: React.FC = () => {
  // Get the item ID from the URL params
  const { id } = useParams<{ id: string }>();
  
  // Find the item
  const item = creativeContent.find(c => c.id === id);
  
  useSEO({
    title: item ? `${item.title} | Innovate Wave` : 'Project Not Found | Innovate Wave',
    description: item?.description || 'The project you are looking for does not exist.',
  });

  // If item not found, show a message
  if (!item) {
    return (
      <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-sky-900 mb-4">Content Not Found</h1>
          <p className="text-sky-700 mb-8">The content you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/"
            className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture py-20">
      {/* Back button */}
      <div className="mb-8">
        <Link 
          to="/"
          className="flex items-center text-sky-700 hover:text-sky-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden tech-glow water-texture">
          {/* Project image */}
          <div className="h-96 overflow-hidden">
            <motion.img 
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={({ currentTarget }) => {
                const svgStr = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="#bae6fd"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="30" fill="#0c4a6e">${item.title}</text></svg>`;
                currentTarget.src = `data:image/svg+xml,${encodeURIComponent(svgStr)}`;
              }}
            />
          </div>

          {/* Project details */}
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800 uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.type}
              </motion.span>
              <span className="text-sky-600">{item.date}</span>
            </div>

            <motion.h1 
              className="text-3xl font-bold text-sky-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {item.title}
            </motion.h1>

            <motion.p 
              className="text-sky-700 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {item.description}
            </motion.p>

            {/* Project details block */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-xl font-bold text-sky-900 mb-4">Content Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">Creator</h3>
                  <p className="text-sky-700">{item.createdBy}</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">Category</h3>
                  <p className="text-sky-700 capitalize">{item.type}</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">Date</h3>
                  <p className="text-sky-700">{item.date}</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">ID</h3>
                  <p className="text-sky-700">{item.id}</p>
                </div>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-sky-700 mb-4">Interested in a similar project?</p>
              <Link 
                to="/contact"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-lg hover:shadow-sky-500/30 inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </SectionContainer>
  );
};

export default CreativeContentDetailPage;
