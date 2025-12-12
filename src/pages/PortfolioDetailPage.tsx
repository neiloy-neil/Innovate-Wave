import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { portfolioItems } from '../data/mockData';
import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';
import { motion } from 'framer-motion';

// Detailed content for each portfolio item
const portfolioDetails: Record<string, { 
  challenge: string; 
  solution: string; 
  process: string[]; 
  results: string;
}> = {
  '1': {
    challenge: "EcoLife Apparel needed a complete brand identity that would differentiate them in the crowded sustainable fashion market while authentically communicating their environmental values. The biggest challenge was creating a visual identity that balanced luxury appeal with eco-conscious messaging.",
    solution: "Our team developed a nature-inspired brand identity featuring an organic leaf motif integrated with flowing water elements to represent sustainability. We created a color palette using earthy tones of sage green and warm terracotta, complemented by clean typography that conveys both modernity and environmental responsibility. The e-commerce website was designed with a minimalist approach, highlighting product sustainability features and incorporating educational content about eco-friendly practices.",
    results: "The rebrand resulted in a 75% increase in brand recognition within six months. Website conversion rates improved by 40%, and customer engagement on sustainability content increased by 120%. The brand was featured in three major sustainable fashion publications, establishing EcoLife as a leader in conscious consumerism.",
    process: [
      "Research phase: Market analysis and competitor review",
      "Concept development: Nature-inspired visual elements",
      "Brand guidelines: Color palette, typography, and usage rules",
      "E-commerce design: User-friendly shopping experience",
      "Sustainability integration: Educational content placement",
      "Launch strategy: Coordinated marketing rollout"
    ]
  },
  '2': {
    challenge: "WealthTrack Inc. approached us with an outdated financial dashboard that users found confusing and overwhelming. With increasing competition in the personal finance space, they needed a user-centric redesign that would simplify complex financial data while maintaining professional credibility.",
    solution: "Our approach focused on information hierarchy and data visualization. We implemented a clean, card-based layout with customizable widgets, allowing users to prioritize their most important financial metrics. Complex charts were redesigned with intuitive tooltips and simplified color coding. We introduced progressive disclosure patterns to reveal detailed information only when needed, reducing cognitive load for new users.",
    results: "User satisfaction scores increased by 65% after the redesign. Feature adoption for advanced analytics tools rose by 80%, and customer support tickets related to navigation decreased by 55%. The platform gained 50,000 new users in the first quarter following the launch.",
    process: [
      "User research: Interviews and usability testing sessions",
      "Information architecture: Restructuring data presentation",
      "Visual design: Clean, professional interface",
      "Prototyping: Interactive mockups for validation",
      "Development collaboration: Working with engineering teams",
      "Analytics integration: Performance monitoring setup"
    ]
  },
  '3': {
    challenge: "GourmetHub wanted to elevate their brand presence to compete with high-end dining establishments. Their existing visual identity lacked sophistication and failed to communicate the quality of their culinary offerings. They needed a cohesive brand experience across all touchpoints.",
    solution: "We crafted an elegant brand identity centered around artisanal craftsmanship and culinary excellence. The logo features custom typography with subtle gastronomic elements, while the color scheme combines rich burgundy with warm gold accents. We designed a comprehensive menu system with beautiful food photography, and developed a mobile app that streamlines reservations while showcasing daily specials.",
    results: "Fine dining reservation rates increased by 90% within four months. Social media engagement grew by 140%, with user-generated content increasing fivefold. The restaurant received two prestigious culinary awards and was featured in regional dining guides.",
    process: [
      "Brand positioning: Defining luxury dining identity",
      "Visual identity: Sophisticated logo and color scheme",
      "Menu design: Elegant layout with food photography",
      "Digital presence: Website and mobile app integration",
      "Environmental design: Interior branding elements",
      "Launch campaign: Grand reopening marketing"
    ]
  },
  '4': {
    challenge: "VitaWell needed to connect with millennial consumers who were skeptical of traditional health supplement marketing. Their previous campaigns felt generic and failed to build trust with their target demographic. They required an authentic, lifestyle-focused approach that would drive measurable e-commerce growth.",
    solution: "We developed a campaign strategy centered on real customer stories and transparent ingredient sourcing. The creative direction emphasized authenticity through user-generated content and influencer partnerships with genuine wellness advocates. We created a microsite featuring interactive health assessments and personalized supplement recommendations, integrated with targeted social media advertising.",
    results: "Online sales increased by 125% during the campaign period. Email subscriber growth reached 8,000 new contacts, with a 35% open rate. Social media followers increased by 200%, and the campaign generated over 10,000 user-generated content posts with the branded hashtag.",
    process: [
      "Audience analysis: Understanding millennial health motivations",
      "Creative concept: Authentic storytelling approach",
      "Influencer strategy: Partnering with credible wellness advocates",
      "Microsite development: Personalized recommendation engine",
      "Social media: Multi-platform content calendar",
      "Performance tracking: Real-time campaign analytics"
    ]
  },
  '5': {
    challenge: "Wanderlust Stories had a growing readership but struggled with inconsistent visual identity across their blog and social channels. With increasing competition in the travel blogging space, they needed a distinctive visual style that would make their content instantly recognizable and encourage reader loyalty.",
    solution: "We developed a bold, adventurous visual identity featuring hand-drawn map elements and vibrant color overlays for photography. The content system included custom illustration sets for recurring features and a consistent posting template that improved readability. We implemented a reader engagement system with interactive polls and location-based content suggestions.",
    results: "Monthly unique visitors increased by 85% within six months. Reader engagement metrics improved by 150%, with average time on site increasing from 3 to 7 minutes. The blog secured partnerships with three major travel brands and was nominated for a prestigious digital media award.",
    process: [
      "Content audit: Analyzing existing visual assets",
      "Style development: Unique illustration and photography approach",
      "System design: Repeatable content templates",
      "Reader engagement: Interactive content elements",
      "Social strategy: Cross-platform visual consistency",
      "Partnership development: Brand collaboration framework"
    ]
  },
  '6': {
    challenge: "TechNova needed compelling product announcement videos that would generate excitement for their new software releases. Their previous marketing videos were technically focused and failed to connect emotionally with potential customers. They required a series of videos that would showcase product benefits in an engaging narrative format.",
    solution: "We developed a storytelling approach that focused on user transformation rather than feature lists. Each video followed a hero's journey structure, showing real professionals overcoming workplace challenges with TechNova's solutions. We combined cinematic live-action footage with sleek product demonstrations and motion graphics that illustrated abstract concepts.",
    results: "The video series generated over 3 million views across platforms and contributed to a 60% increase in demo requests. Product adoption rates increased by 45% for featured releases, and customer testimonials referencing the videos became a key part of the sales process.",
    process: [
      "Narrative development: User-centric story arcs",
      "Pre-production: Casting and location scouting",
      "Filming: Cinematic production techniques",
      "Post-production: Seamless editing and color grading",
      "Animation: Motion graphics for technical concepts",
      "Distribution: Multi-channel release strategy"
    ]
  },
  '7': {
    challenge: "OceanView Properties needed to establish a premium brand identity that would attract affluent buyers to their coastal real estate developments. Their previous marketing materials looked generic and failed to communicate the exclusivity of their properties. They required a sophisticated brand that would justify premium pricing.",
    solution: "We created a luxury brand identity emphasizing exclusivity and coastal elegance. The visual system featured high-quality architectural photography integrated with subtle ocean motifs and a refined color palette of deep navy and pearl white. We developed marketing materials with premium paper stocks and incorporated virtual tour technology to showcase properties remotely.",
    results: "Average sale prices increased by 30% following the rebrand. Marketing qualified leads improved by 70%, and the development sold out 40% faster than projected. The brand attracted interest from international investors and was featured in luxury lifestyle magazines.",
    process: [
      "Market positioning: Defining luxury real estate identity",
      "Visual identity: Sophisticated logo and color system",
      "Photography: High-end architectural imagery",
      "Virtual integration: 360° tour technology implementation",
      "Material design: Premium print collateral",
      "Launch strategy: Exclusive preview events"
    ]
  },
  '8': {
    challenge: "EduLearn Global needed to modernize their online learning platform to serve a rapidly expanding student base of over 500,000 users. Their existing interface was cluttered and difficult to navigate, leading to high dropout rates among new users. They required a complete UX overhaul that would improve accessibility and engagement.",
    solution: "We redesigned the platform around intuitive learning pathways with personalized dashboards that adapt to each student's progress. Gamification elements were integrated to maintain motivation, including achievement badges and progress visualization. The responsive interface was optimized for mobile learning, ensuring consistent experiences across all devices.",
    results: "Course completion rates increased by 55% after the redesign. Mobile app usage grew by 180%, and customer satisfaction scores improved by 70%. The platform successfully scaled to accommodate 1 million users without performance degradation.",
    process: [
      "User research: Student behavior analysis and feedback",
      "Information architecture: Streamlined navigation structure",
      "Interface design: Clean, distraction-free learning environment",
      "Gamification: Engagement mechanics and reward systems",
      "Mobile optimization: Responsive design implementation",
      "Accessibility: WCAG compliance and inclusive design"
    ]
  },
  '9': {
    challenge: "UrbanFit needed to launch their new fitness app in a saturated market dominated by established players. Their previous marketing efforts had failed to generate significant downloads, and they required a campaign that would drive rapid user acquisition while building a community around their brand.",
    solution: "We developed a hyper-targeted launch campaign focusing on local fitness communities and micro-influencers. The strategy included app store optimization with compelling screenshots and preview videos, social media challenges that encouraged user participation, and strategic partnerships with gyms and fitness studios for cross-promotion.",
    results: "The app achieved 100,000 downloads within the first month, exceeding projections by 200%. Daily active users averaged 45,000, with a 65% retention rate after 30 days. The campaign generated significant earned media coverage and established UrbanFit as a serious contender in the fitness app market.",
    process: [
      "Market analysis: Competitive landscape review",
      "ASO strategy: App store optimization tactics",
      "Community building: Local fitness influencer partnerships",
      "Content marketing: Workout challenges and tutorials",
      "Partnership development: Gym and studio collaborations",
      "Performance tracking: Real-time campaign analytics"
    ]
  }
};

const PortfolioDetailPage: React.FC = () => {
  // Get the portfolio item ID from the URL params
  const { id } = useParams<{ id: string }>();
  
  // Find the portfolio item
  const portfolioItem = portfolioItems.find(item => item.id === id);
  
  // Get detailed content for this item
  const details = portfolioItem ? portfolioDetails[portfolioItem.id] : null;
  
  // If portfolio item not found, show a message
  if (!portfolioItem || !details) {
    return (
      <SectionContainer className="bg-gradient-to-br from-sky-50 to-cyan-50 relative overflow-hidden water-texture min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-sky-900 mb-4">Project Not Found</h1>
          <p className="text-sky-700 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/portfolio"
            className="px-6 py-3 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors"
          >
            Back to Portfolio
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
          to="/portfolio"
          className="flex items-center text-sky-700 hover:text-sky-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Portfolio
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
              src={portfolioItem.imageUrl}
              alt={portfolioItem.title}
              className="w-full h-full object-cover"
              onError={({ currentTarget }) => {
                currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23bae6fd'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='30' fill='%230c4a6e'%3E" + encodeURIComponent(portfolioItem.title) + "%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>

          {/* Project details */}
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sky-100 text-sky-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {portfolioItem.category}
              </motion.span>
              <span className="text-sky-600">{portfolioItem.date}</span>
            </div>

            <motion.h1 
              className="text-3xl font-bold text-sky-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {portfolioItem.title}
            </motion.h1>

            <motion.p 
              className="text-sky-700 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {portfolioItem.description}
            </motion.p>

            {/* Challenge section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">The Challenge</h2>
              <p className="text-sky-700 mb-6 leading-relaxed">
                {details.challenge}
              </p>
            </motion.div>

            {/* Solution section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Our Solution</h2>
              <p className="text-sky-700 mb-6 leading-relaxed">
                {details.solution}
              </p>
            </motion.div>

            {/* Process section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Results section */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-sky-900 mb-4">The Results</h2>
              <p className="text-sky-700 mb-6 leading-relaxed">
                {details.results}
              </p>
            </motion.div>

            {/* Project details */}
            <motion.div 
              className="border-t border-sky-200 pt-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="text-xl font-bold text-sky-900 mb-4">Project Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">Client</h3>
                  <p className="text-sky-700">{portfolioItem.client}</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">Category</h3>
                  <p className="text-sky-700">{portfolioItem.category}</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">Date</h3>
                  <p className="text-sky-700">{portfolioItem.date}</p>
                </div>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-sky-800 mb-2">ID</h3>
                  <p className="text-sky-700">{portfolioItem.id}</p>
                </div>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
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

export default PortfolioDetailPage;