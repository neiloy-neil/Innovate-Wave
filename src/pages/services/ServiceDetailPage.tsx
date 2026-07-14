import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { services } from '../../data/mockData';
import SectionContainer from '../../components/SectionContainer';
import Card from '../../components/Card';
import { motion } from 'framer-motion';

// Import all service images
import webDesignImg from '../../assets/services/web-design.jpg';
import seoImg from '../../assets/services/seo.jpg';
import affiliateMarketingImg from '../../assets/services/affiliate-marketing.jpg';
import brandingImg from '../../assets/services/branding.jpg';
import creativeContentImg from '../../assets/services/creative-content.jpg';
import socialMediaImg from '../../assets/services/social-media.jpg';
import campaignsImg from '../../assets/services/campaigns.jpg';
import videoProductionImg from '../../assets/services/video-production.jpg';
import defaultServiceImg from '../../assets/services/default-service.jpg';

// Create a mapping of service IDs to images
const serviceImages: Record<string, string> = {
  'web-design': webDesignImg,
  'seo': seoImg,
  'affiliate-marketing': affiliateMarketingImg,
  'branding': brandingImg,
  'creative-content': creativeContentImg,
  'social-media': socialMediaImg,
  'campaigns': campaignsImg,
  'video-production': videoProductionImg
};

// Detailed content for each service
const serviceDetails: Record<string, { 
  overview: string; 
  process: string[]; 
  benefits: string[]; 
  technologies: string[];
  caseStudy: { title: string; description: string; results: string };
}> = {
  'web-design': {
    overview: "Our web design services combine cutting-edge technology with creative design principles to create websites that not only look stunning but also drive results. We focus on user experience, responsive design, and performance optimization to ensure your website stands out in the digital landscape. Every project begins with thorough research and strategic planning to align the design with your business objectives.",
    process: [
      "Discovery & Research: Understanding your business goals and target audience",
      "Wireframing & Prototyping: Creating structural blueprints and interactive prototypes",
      "Visual Design: Crafting the aesthetic elements and user interface",
      "Development: Building responsive, accessible websites with clean code",
      "Testing & Quality Assurance: Ensuring cross-browser compatibility and performance",
      "Launch & Support: Deploying your site and providing ongoing maintenance"
    ],
    benefits: [
      "Increased user engagement and conversion rates",
      "Mobile-responsive designs for all devices",
      "Faster loading times and improved SEO rankings",
      "Accessible design compliant with WCAG standards",
      "Scalable architecture for future growth",
      "Ongoing support and maintenance"
    ],
    technologies: [
      "React.js & Next.js for dynamic interfaces",
      "Tailwind CSS & Sass for modern styling",
      "GSAP for smooth animations",
      "Webpack & Vite for optimized builds",
      "Jest & Cypress for testing",
      "Figma & Adobe XD for design"
    ],
    caseStudy: {
      title: "E-commerce Platform Redesign",
      description: "We redesigned a struggling e-commerce platform, focusing on improving user experience and streamlining the purchase journey. The project involved extensive user research, competitive analysis, and iterative prototyping to create an intuitive shopping experience.",
      results: "The redesign resulted in a 45% increase in conversion rates, 60% reduction in bounce rate, and 35% improvement in page load speed. Customer satisfaction scores increased by 70%, and the client reported a 25% increase in average order value."
    }
  },
  'seo': {
    overview: "Our comprehensive SEO services are designed to improve your website's visibility in search engine results, driving organic traffic and increasing your online presence. We employ white-hat techniques and stay updated with the latest algorithm changes to ensure sustainable, long-term results. Our approach combines technical optimization with content strategy to maximize your search engine performance.",
    process: [
      "SEO Audit & Analysis: Comprehensive evaluation of current performance",
      "Keyword Research: Identifying high-value search terms and opportunities",
      "Technical Optimization: Improving site speed, structure, and crawlability",
      "Content Strategy: Developing optimized content that resonates with users",
      "Link Building: Acquiring high-quality backlinks from authoritative sources",
      "Monitoring & Reporting: Tracking progress and adjusting strategies"
    ],
    benefits: [
      "Higher search engine rankings for targeted keywords",
      "Increased organic traffic and qualified leads",
      "Improved website performance and user experience",
      "Enhanced brand visibility and credibility",
      "Better return on investment compared to paid advertising",
      "Long-term sustainable growth"
    ],
    technologies: [
      "Google Analytics & Search Console for insights",
      "SEMrush & Ahrefs for competitive analysis",
      "Yoast SEO & RankMath for WordPress optimization",
      "Screaming Frog & Sitebulb for technical audits",
      "Google PageSpeed Insights for performance",
      "Schema markup for rich snippets"
    ],
    caseStudy: {
      title: "Local Business Ranking Improvement",
      description: "We worked with a local restaurant chain to improve their local search visibility and drive more foot traffic. The project focused on local SEO optimization, Google My Business management, and reputation management to enhance their online presence.",
      results: "Within six months, the client achieved #1 rankings for 15+ local keywords, experienced a 120% increase in organic traffic, and saw a 40% boost in reservations. Their Google My Business profile received 200+ positive reviews, significantly improving their local reputation."
    }
  },
  'affiliate-marketing': {
    overview: "Our affiliate marketing services connect your brand with relevant partners to drive sales and expand your reach. We develop comprehensive strategies that benefit both merchants and affiliates, creating win-win partnerships that generate revenue. Our approach focuses on building sustainable networks that deliver consistent results over time.",
    process: [
      "Program Strategy: Defining goals and commission structures",
      "Partner Recruitment: Identifying and attracting quality affiliates",
      "Network Management: Providing tools and support for affiliates",
      "Performance Tracking: Monitoring and optimizing campaign results",
      "Relationship Building: Maintaining strong affiliate partnerships",
      "Scaling & Growth: Expanding successful partnerships"
    ],
    benefits: [
      "Cost-effective customer acquisition with performance-based pricing",
      "Expanded reach through partner networks",
      "Access to new audiences and markets",
      "Detailed performance tracking and analytics",
      "Flexible commission structures",
      "Reduced marketing risk with proven ROI"
    ],
    technologies: [
      "ShareASale & CJ Affiliate for network management",
      "Impact Radius & Rakuten for enterprise solutions",
      "Google Analytics for tracking conversions",
      "Hotjar & Crazy Egg for user behavior analysis",
      "Mailchimp & Klaviyo for email marketing",
      "WordPress & Shopify for landing pages"
    ],
    caseStudy: {
      title: "E-commerce Affiliate Program Launch",
      description: "We launched a comprehensive affiliate program for a fashion e-commerce brand, focusing on recruiting influencers and niche bloggers in the fashion space. The project involved creating attractive commission structures, developing marketing materials, and building relationships with key partners.",
      results: "The program generated $2.3M in tracked sales within the first year, with over 300 active affiliates. Average order value through affiliate channels was 15% higher than direct traffic, and the client achieved a 300% ROI on their affiliate marketing investment."
    }
  },
  'branding': {
    overview: "Our brand identity design services create cohesive visual systems that communicate your unique value proposition and resonate with your target audience. We develop comprehensive brand guidelines that ensure consistency across all touchpoints, from digital platforms to physical materials. Our approach combines strategic thinking with creative execution to build memorable brands.",
    process: [
      "Brand Discovery: Understanding your mission, values, and audience",
      "Competitive Analysis: Researching market positioning and differentiation",
      "Concept Development: Exploring visual directions and brand personalities",
      "Identity Design: Creating logos, color palettes, and typography systems",
      "Guideline Creation: Documenting usage rules and brand applications",
      "Implementation Support: Applying the identity across various mediums"
    ],
    benefits: [
      "Strong, memorable brand recognition",
      "Consistent messaging across all channels",
      "Increased customer loyalty and trust",
      "Premium pricing potential",
      "Clear differentiation from competitors",
      "Foundation for all marketing efforts"
    ],
    technologies: [
      "Adobe Creative Suite for design execution",
      "Figma & Sketch for collaborative design",
      "Brand.ai & Frontify for brand management",
      "Canva & Crello for template creation",
      "Pantone & Adobe Color for color systems",
      "Google Fonts & Adobe Fonts for typography"
    ],
    caseStudy: {
      title: "Startup Brand Identity Development",
      description: "We developed a complete brand identity for a fintech startup entering a competitive market. The project involved extensive market research, brand positioning workshops, and the creation of a flexible visual system that could evolve with the company.",
      results: "The brand identity helped secure $15M in Series A funding and attracted top talent to the organization. Customer recognition increased by 85% within six months of launch, and the brand was featured in three industry publications for its innovative design approach."
    }
  },
  'creative-content': {
    overview: "Our creative content production services deliver compelling visual stories that engage audiences and strengthen your brand message. We specialize in creating high-quality photography, videography, and graphic content tailored to your specific marketing needs. Our team combines artistic vision with strategic thinking to produce content that drives results.",
    process: [
      "Concept Development: Brainstorming creative ideas aligned with goals",
      "Pre-Production: Planning shoots, casting, and location scouting",
      "Production: Executing photo and video shoots with professional equipment",
      "Post-Production: Editing, color correction, and final retouching",
      "Review & Revisions: Collaborating for perfect results",
      "Delivery & Distribution: Providing assets in all required formats"
    ],
    benefits: [
      "High-quality, professional visual content",
      "Consistent brand messaging and aesthetics",
      "Increased social media engagement",
      "Enhanced marketing campaign effectiveness",
      "Stronger emotional connection with audiences",
      "Versatile assets for multiple platforms"
    ],
    technologies: [
      "Canon EOS R5 & Sony A7R IV for photography",
      "DJI Ronin & DJI Air 3 for aerial shots",
      "Adobe Creative Cloud for post-production",
      "Final Draft & Celtx for scriptwriting",
      "Wistia & Vimeo for video hosting",
      "Canva & Crello for social media templates"
    ],
    caseStudy: {
      title: "Product Launch Campaign Content",
      description: "We created a comprehensive content package for a tech company's new product launch, including product photography, lifestyle imagery, explainer videos, and social media content. The project required coordinating with multiple departments and adhering to strict deadlines.",
      results: "The content contributed to 200% higher engagement rates on social media, 50% increase in website traffic during the launch period, and 35% boost in pre-orders. The client reported that our content was instrumental in achieving their sales targets three weeks ahead of schedule."
    }
  },
  'social-media': {
    overview: "Our social media creative services transform your digital presence into an engaging community hub that drives brand awareness and customer loyalty. We develop platform-specific strategies that leverage each network's unique features while maintaining consistent brand messaging. Our approach focuses on creating authentic connections that convert followers into customers.",
    process: [
      "Audit & Strategy: Evaluating current presence and defining goals",
      "Content Calendar: Planning themes, topics, and posting schedules",
      "Creative Development: Designing engaging visuals and copy",
      "Community Management: Responding to comments and messages",
      "Paid Advertising: Running targeted campaigns for specific objectives",
      "Analytics & Optimization: Measuring performance and refining strategies"
    ],
    benefits: [
      "Increased brand awareness and reach",
      "Higher engagement rates and community growth",
      "Improved customer service and relationship building",
      "Targeted advertising with measurable ROI",
      "Valuable audience insights and market research",
      "Consistent brand presence across platforms"
    ],
    technologies: [
      "Buffer & Hootsuite for scheduling and management",
      "Adobe Creative Suite for content creation",
      "Facebook Ads Manager & Twitter Ads for advertising",
      "Google Analytics & Sprout Social for reporting",
      "Canva & Crello for quick content creation",
      "Later & Iconosquare for Instagram management"
    ],
    caseStudy: {
      title: "Restaurant Social Media Transformation",
      description: "We revitalized a restaurant's social media presence by developing a content strategy focused on behind-the-scenes content, customer testimonials, and mouth-watering food photography. The project involved training staff on content creation and establishing a consistent posting rhythm.",
      results: "Within four months, the restaurant's social following increased by 300%, engagement rates improved by 150%, and social media-driven reservations accounted for 25% of total bookings. The client reported that social media had become their most cost-effective marketing channel."
    }
  },
  'campaigns': {
    overview: "Our campaign strategy services create integrated marketing initiatives that deliver measurable results and drive business growth. We combine creative excellence with data-driven insights to develop campaigns that resonate with your target audience and achieve your specific objectives. Our approach ensures every touchpoint works together to maximize impact and ROI.",
    process: [
      "Objective Setting: Defining clear, measurable campaign goals",
      "Audience Research: Understanding target demographics and behaviors",
      "Creative Development: Crafting compelling messages and visuals",
      "Channel Planning: Selecting optimal mix of marketing channels",
      "Execution & Management: Coordinating all campaign elements",
      "Analysis & Reporting: Measuring success and identifying improvements"
    ],
    benefits: [
      "Coordinated messaging across all marketing channels",
      "Measurable ROI with clear performance metrics",
      "Increased brand awareness and customer acquisition",
      "Data-driven insights for future marketing decisions",
      "Optimized budget allocation across channels",
      "Scalable frameworks for ongoing campaigns"
    ],
    technologies: [
      "Google Ads & Facebook Ads for paid promotion",
      "Mailchimp & HubSpot for email marketing",
      "WordPress & Squarespace for landing pages",
      "Google Analytics & Hotjar for tracking",
      "Unbounce & Instapage for conversion optimization",
      "Canva & Adobe Creative Suite for design"
    ],
    caseStudy: {
      title: "Product Launch Campaign Success",
      description: "We orchestrated a multi-channel launch campaign for a SaaS company's new enterprise product, combining email marketing, paid advertising, content marketing, and PR outreach. The campaign required precise timing coordination and real-time performance monitoring.",
      results: "The campaign generated 15,000 qualified leads, exceeded revenue targets by 180%, and achieved a 4.2% conversion rate from leads to customers. The client's market share in their target segment increased by 12%, and the campaign won two industry awards for marketing excellence."
    }
  },
  'video-production': {
    overview: "Our video production services create compelling visual narratives that captivate audiences and communicate your brand story effectively. From concept to completion, we handle every aspect of video creation, ensuring professional quality that engages viewers and achieves your marketing objectives. Our team combines cinematic techniques with strategic messaging to produce impactful content.",
    process: [
      "Pre-Production: Scriptwriting, storyboarding, and planning",
      "Casting & Location: Selecting talent and perfect shooting locations",
      "Filming: Capturing high-quality footage with professional equipment",
      "Editing: Cutting, color grading, and adding visual effects",
      "Sound Design: Adding music, voiceovers, and sound effects",
      "Delivery: Providing final videos in all required formats"
    ],
    benefits: [
      "Emotional storytelling that connects with audiences",
      "Higher engagement rates than static content",
      "Improved SEO and social media performance",
      "Versatile assets for multiple marketing channels",
      "Professional quality that enhances brand perception",
      "Measurable impact on conversion rates"
    ],
    technologies: [
      "Sony FX6 & Canon C70 for cinematic filming",
      "DJI Ronin & Steadicam for smooth camera movements",
      "Adobe Premiere Pro & Final Cut Pro for editing",
      "DaVinci Resolve for color grading",
      "Pro Tools & Logic Pro for audio post-production",
      "After Effects & Cinema 4D for motion graphics"
    ],
    caseStudy: {
      title: "Corporate Brand Film Production",
      description: "We produced a brand film for a technology company's annual conference, showcasing their company culture, innovation, and future vision. The project involved interviewing executives, filming at multiple locations, and creating a narrative that would inspire both employees and clients.",
      results: "The film received standing ovations at three major conferences and was viewed over 2 million times across platforms. Employee engagement scores increased by 35% following the internal release, and the client reported a 20% increase in qualified inbound inquiries after the campaign."
    }
  }
};

const ServiceDetailPage: React.FC = () => {
  // Get the service ID from the URL params
  const { id } = useParams<{ id: string }>();
  
  // Find the service
  const service = services.find(s => s.id === id);
  
  // Get detailed content for this service
  const details = service ? serviceDetails[service.id] : null;
  
  // Get the image for this service
  const serviceImage = service ? (serviceImages[service.id] || defaultServiceImg) : defaultServiceImg;
  
  // If service not found, show a message
  if (!service || !details) {
    return (
      <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-sky-900 mb-4">Service Not Found</h1>
          <p className="text-sky-700 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services"
            className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
          >
            Back to Services
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
          to="/services"
          className="flex items-center text-sky-700 hover:text-sky-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Services
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden tech-glow water-texture">
          {/* Service image */}
          <div className="h-96 overflow-hidden">
            <motion.img 
              src={serviceImage}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service details */}
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <motion.h1 
                className="text-3xl font-bold text-sky-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {service.title}
              </motion.h1>
            </div>

            <motion.p 
              className="text-sky-700 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.description}
            </motion.p>

            {/* Overview section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Service Overview</h2>
              <p className="text-sky-700 mb-6 leading-relaxed">
                {details.overview}
              </p>
            </motion.div>

            {/* Process section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Our Process</h2>
              <div className="grid grid-cols-1 gap-4">
                {details.process.map((step, index) => (
                  <div key={index} className="bg-sky-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sky-600 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      <p className="text-sky-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="bg-sky-50 p-4 rounded-lg flex items-start">
                    <svg className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sky-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Case Study section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Case Study</h2>
              <div className="bg-sky-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-sky-900 mb-2">{details.caseStudy.title}</h3>
                <p className="text-sky-700 mb-4">{details.caseStudy.description}</p>
                <div className="border-l-4 border-sky-600 pl-4">
                  <p className="text-sky-700 italic">"{details.caseStudy.results}"</p>
                </div>
              </div>
            </motion.div>

            {/* Service features */}
            {service.features && (
              <motion.div 
                className="border-t border-sky-200 pt-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h2 className="text-xl font-bold text-sky-900 mb-4">Service Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-sky-50 p-4 rounded-lg flex items-start">
                      <svg className="h-5 w-5 text-sky-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sky-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Call to action */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <p className="text-sky-700 mb-4">Ready to get started with {service.title}?</p>
              <Link 
                to="/contact"
                className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-lg hover:shadow-sky-500/30 inline-block"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </SectionContainer>
  );
};

export default ServiceDetailPage;