import React from 'react';
import { ServiceItem, PortfolioItem, Testimonial, TeamMember, CreativeContentItem } from './interfaces';

// Import portfolio images
import ecoLifeImg from '../assets/portfolio/eco-life.jpg';
import fintechDashboardImg from '../assets/portfolio/fintech-dashboard.jpg';
import restaurantBookingImg from '../assets/portfolio/restaurant-booking.jpg';
import healthBrandingImg from '../assets/portfolio/health-branding.jpg';
import travelBlogImg from '../assets/portfolio/travel-blog.jpg';
import corporateVideoImg from '../assets/portfolio/corporate-video.jpg';
import realEstateImg from '../assets/portfolio/real-estate.jpg';
import educationPlatformImg from '../assets/portfolio/education-platform.jpg';
import fitnessAppImg from '../assets/portfolio/fitness-app.jpg';

// Import team images
import baseemImg from '../assets/team/baseem.jpg';
import farhadImg from '../assets/team/farhad.jpg';

// Import creative content images
import summerCampaignImg from '../assets/creative/summer-campaign.jpg';
import technovaReelImg from '../assets/creative/technova-reel.jpg';
import wanderlustIdentityImg from '../assets/creative/wanderlust-identity.jpg';
import vitawellPackagingImg from '../assets/creative/vitawell-packaging.jpg';

// Import testimonial avatars
const avatar1 = '/assets/avatar-1.png';
const avatar2 = '/assets/avatar-2.png';
const avatar3 = '/assets/avatar-3.png';
const avatar4 = '/assets/avatar-4.png';

// Mock services data - focused on creative services
export const services: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Modern, responsive websites designed to captivate audiences and drive engagement with seamless user experiences.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ),
    features: [
      'Custom Website Design',
      'Responsive Development',
      'User Experience (UX) Design',
      'Performance Optimization'
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Strategic SEO services to improve your online visibility and drive organic traffic to your website.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' })
    ),
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO',
      'Performance Monitoring'
    ]
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    description: 'Performance-based marketing programs that connect your brand with relevant partners to drive sales.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' })
    ),
    features: [
      'Program Strategy',
      'Partner Recruitment',
      'Commission Management',
      'Performance Analytics'
    ]
  },
  {
    id: 'branding',
    title: 'Brand Identity Design',
    description: 'Complete visual identity systems including logos, color palettes, typography, and brand guidelines.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
    ),
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Color Palette',
      'Typography Selection'
    ]
  },
  {
    id: 'creative-content',
    title: 'Creative Content Production',
    description: 'Compelling visual content for marketing, branding, and storytelling.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' })
    ),
    features: [
      'Concept Development',
      'Photography & Videography',
      'Art Direction',
      'Post-Production'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Creative',
    description: 'Engaging content designed for social media platforms and digital advertising.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' })
    ),
    features: [
      'Content Calendars',
      'Short-form Videos',
      'Interactive Posts',
      'Platform Optimization'
    ]
  },
  {
    id: 'campaigns',
    title: 'Campaign Strategy',
    description: 'Integrated marketing campaigns that combine creative excellence with data-driven performance metrics.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z' }),
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z' })
    ),
    features: [
      'Campaign Planning',
      'Creative Direction',
      'Performance Tracking',
      'ROI Optimization'
    ]
  },
  {
    id: 'video-production',
    title: 'Video Production',
    description: 'Professional video content for branding, marketing and storytelling.',
    icon: React.createElement('svg', { className: 'h-6 w-6 text-cyan-700', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z' })
    ),
    features: [
      'Concept Development',
      'Production & Editing',
      'Motion Graphics',
      'Brand Films'
    ]
  }
];

// Mock portfolio data with more detailed and diverse projects
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'EcoLife Sustainable Fashion Brand',
    description: 'Complete brand identity and e-commerce website for a sustainable fashion brand. The project included logo design, brand guidelines, packaging design, and a fully responsive online store with integrated sustainability tracking.',
    category: 'Branding',
    imageUrl: ecoLifeImg,
    client: 'EcoLife Apparel',
    date: '2023',
    link: '/portfolio/1'
  },
  {
    id: '2',
    title: 'WealthTrack FinTech Dashboard',
    description: 'User-centric dashboard design for a financial technology platform. We focused on complex data visualization, intuitive navigation, and a clean interface that makes personal finance management accessible to everyone.',
    category: 'Web Design',
    imageUrl: fintechDashboardImg,
    client: 'WealthTrack Inc.',
    date: '2023',
    link: '/portfolio/2'
  },
  {
    id: '3',
    title: 'GourmetHub Restaurant Experience',
    description: 'Complete visual identity and digital presence for a premium restaurant chain. The project encompassed logo design, menu layout, website, mobile app, and social media templates that capture the essence of fine dining.',
    category: 'Branding',
    imageUrl: restaurantBookingImg,
    client: 'GourmetHub',
    date: '2022',
    link: '/portfolio/3'
  },
  {
    id: '4',
    title: 'VitaWell Health & Wellness Campaign',
    description: 'Integrated marketing campaign for a health supplement company targeting millennials. The campaign included social media content, influencer partnerships, email marketing, and a microsite that drove a 45% increase in online sales.',
    category: 'Campaign',
    imageUrl: healthBrandingImg,
    client: 'VitaWell',
    date: '2022',
    link: '/portfolio/4'
  },
  {
    id: '5',
    title: 'Wanderlust Travel Blog Visual Identity',
    description: 'Visual content and brand identity for a travel blog with over 500K monthly readers. We created a distinctive visual style, custom illustrations, and a content system that increased reader engagement by 60%.',
    category: 'Content',
    imageUrl: travelBlogImg,
    client: 'Wanderlust Stories',
    date: '2023',
    link: '/portfolio/5'
  },
  {
    id: '6',
    title: 'TechNova Corporate Video Series',
    description: 'Series of promotional videos for a tech company\'s product launches. The project included concept development, storyboarding, filming, and post-production for three product announcement videos that generated over 2M views.',
    category: 'Video',
    imageUrl: corporateVideoImg,
    client: 'TechNova',
    date: '2023',
    link: '/portfolio/6'
  },
  {
    id: '7',
    title: 'OceanView Real Estate Branding',
    description: 'Luxury real estate branding for a coastal property developer. The project included logo design, marketing materials, virtual tour integration, and a responsive website that showcases properties with immersive 360° photography.',
    category: 'Branding',
    imageUrl: realEstateImg,
    client: 'OceanView Properties',
    date: '2023',
    link: '/portfolio/7'
  },
  {
    id: '8',
    title: 'EduLearn Online Learning Platform',
    description: 'User experience design for an online education platform serving 500K+ students. We focused on creating an intuitive learning path, gamification elements, and a responsive interface that works seamlessly across devices.',
    category: 'Web Design',
    imageUrl: educationPlatformImg,
    client: 'EduLearn Global',
    date: '2022',
    link: '/portfolio/8'
  },
  {
    id: '9',
    title: 'UrbanFit Fitness App Campaign',
    description: 'Mobile app marketing campaign for a fitness startup. The campaign included app store optimization, social media content, influencer partnerships, and targeted ads that achieved 100K downloads in the first month.',
    category: 'Campaign',
    imageUrl: fitnessAppImg,
    client: 'UrbanFit',
    date: '2023',
    link: '/portfolio/9'
  }
];

// Mock testimonials data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'EcoLife Apparel',
    content: 'Innovate Wave transformed our brand identity. Their creative approach helped us connect with our target audience in ways we never imagined.',
    rating: 5,
    avatarUrl: avatar1
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'WealthTrack Inc.',
    content: 'The campaign strategy developed by Innovate Wave delivered exceptional results. Our brand recognition increased by 150% in just three months.',
    rating: 5,
    avatarUrl: avatar2
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'GourmetHub',
    content: 'Working with Innovate Wave was a game-changer for our restaurant. Their branding elevated our entire customer experience.',
    rating: 4,
    avatarUrl: avatar3
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Brand Manager',
    company: 'VitaWell',
    content: 'The creative content produced by Innovate Wave consistently exceeds our expectations. They understand our brand vision perfectly.',
    rating: 5,
    avatarUrl: avatar4
  }
];

// Mock team members data - focused on Innovate Wave
export const teamMembers: TeamMember[] = [
  {
    id: 'baseem',
    name: 'Baseem Wazid',
    role: 'Creative Director',
    bio: 'Baseem drives our creative vision and strategic marketing efforts. His expertise in visual storytelling has helped numerous brands establish strong market positions.',
    imageUrl: baseemImg
  },
  {
    id: 'creative-team',
    name: 'Creative Team',
    role: 'Design & Production',
    bio: 'Our talented team of designers, photographers, and content creators work together to bring your creative visions to life.',
    imageUrl: farhadImg
  }
];

// Mock creative content data
export const creativeContent: CreativeContentItem[] = [
  {
    id: '1',
    title: 'Summer Campaign 2023',
    description: 'Vibrant campaign visuals for EcoLife Apparel\'s summer collection',
    type: 'campaign',
    imageUrl: summerCampaignImg,
    createdBy: 'Baseem Wazid',
    date: '2023-06-15'
  },
  {
    id: '2',
    title: 'TechNova Product Reel',
    description: 'Dynamic product showcase video for TechNova\'s latest release',
    type: 'video',
    imageUrl: technovaReelImg,
    createdBy: 'Baseem Wazid',
    date: '2023-04-22'
  },
  {
    id: '3',
    title: 'Wanderlust Stories Brand Identity',
    description: 'Complete visual identity for the travel blog brand',
    type: 'design',
    imageUrl: wanderlustIdentityImg,
    createdBy: 'Baseem Wazid',
    date: '2023-03-10'
  },
  {
    id: '4',
    title: 'VitaWell Packaging Design',
    description: 'Sustainable packaging concept for health supplements',
    type: 'design',
    imageUrl: vitawellPackagingImg,
    createdBy: 'Baseem Wazid',
    date: '2023-01-18'
  }
];