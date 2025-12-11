import { ServiceItem, PortfolioItem, Testimonial, TeamMember, CreativeContentItem } from './interfaces';

// Mock services data - focused on creative services
export const services: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Modern, responsive websites designed to captivate audiences and drive engagement with seamless user experiences.',
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
    imageUrl: '/src/assets/portfolio/eco-life.jpg',
    client: 'EcoLife Apparel',
    date: '2023',
    link: '/portfolio/1'
  },
  {
    id: '2',
    title: 'WealthTrack FinTech Dashboard',
    description: 'User-centric dashboard design for a financial technology platform. We focused on complex data visualization, intuitive navigation, and a clean interface that makes personal finance management accessible to everyone.',
    category: 'Web Design',
    imageUrl: '/src/assets/portfolio/fintech-dashboard.jpg',
    client: 'WealthTrack Inc.',
    date: '2023',
    link: '/portfolio/2'
  },
  {
    id: '3',
    title: 'GourmetHub Restaurant Experience',
    description: 'Complete visual identity and digital presence for a premium restaurant chain. The project encompassed logo design, menu layout, website, mobile app, and social media templates that capture the essence of fine dining.',
    category: 'Branding',
    imageUrl: '/src/assets/portfolio/restaurant-booking.jpg',
    client: 'GourmetHub',
    date: '2022',
    link: '/portfolio/3'
  },
  {
    id: '4',
    title: 'VitaWell Health & Wellness Campaign',
    description: 'Integrated marketing campaign for a health supplement company targeting millennials. The campaign included social media content, influencer partnerships, email marketing, and a microsite that drove a 45% increase in online sales.',
    category: 'Campaign',
    imageUrl: '/src/assets/portfolio/health-branding.jpg',
    client: 'VitaWell',
    date: '2022',
    link: '/portfolio/4'
  },
  {
    id: '5',
    title: 'Wanderlust Travel Blog Visual Identity',
    description: 'Visual content and brand identity for a travel blog with over 500K monthly readers. We created a distinctive visual style, custom illustrations, and a content system that increased reader engagement by 60%.',
    category: 'Content',
    imageUrl: '/src/assets/portfolio/travel-blog.jpg',
    client: 'Wanderlust Stories',
    date: '2023',
    link: '/portfolio/5'
  },
  {
    id: '6',
    title: 'TechNova Corporate Video Series',
    description: 'Series of promotional videos for a tech company\'s product launches. The project included concept development, storyboarding, filming, and post-production for three product announcement videos that generated over 2M views.',
    category: 'Video',
    imageUrl: '/src/assets/portfolio/corporate-video.jpg',
    client: 'TechNova',
    date: '2023',
    link: '/portfolio/6'
  },
  {
    id: '7',
    title: 'OceanView Real Estate Branding',
    description: 'Luxury real estate branding for a coastal property developer. The project included logo design, marketing materials, virtual tour integration, and a responsive website that showcases properties with immersive 360° photography.',
    category: 'Branding',
    imageUrl: '/src/assets/portfolio/real-estate.jpg',
    client: 'OceanView Properties',
    date: '2023',
    link: '/portfolio/7'
  },
  {
    id: '8',
    title: 'EduLearn Online Learning Platform',
    description: 'User experience design for an online education platform serving 500K+ students. We focused on creating an intuitive learning path, gamification elements, and a responsive interface that works seamlessly across devices.',
    category: 'Web Design',
    imageUrl: '/src/assets/portfolio/education-platform.jpg',
    client: 'EduLearn Global',
    date: '2022',
    link: '/portfolio/8'
  },
  {
    id: '9',
    title: 'UrbanFit Fitness App Campaign',
    description: 'Mobile app marketing campaign for a fitness startup. The campaign included app store optimization, social media content, influencer partnerships, and targeted ads that achieved 100K downloads in the first month.',
    category: 'Campaign',
    imageUrl: '/src/assets/portfolio/fitness-app.jpg',
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
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'WealthTrack Inc.',
    content: 'The campaign strategy developed by Innovate Wave delivered exceptional results. Our brand recognition increased by 150% in just three months.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Founder',
    company: 'GourmetHub',
    content: 'Working with Innovate Wave was a game-changer for our restaurant. Their branding elevated our entire customer experience.',
    rating: 4
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Brand Manager',
    company: 'VitaWell',
    content: 'The creative content produced by Innovate Wave consistently exceeds our expectations. They understand our brand vision perfectly.',
    rating: 5
  }
];

// Mock team members data - focused on Innovate Wave
export const teamMembers: TeamMember[] = [
  {
    id: 'baseem',
    name: 'Baseem Wazid',
    role: 'Creative Director',
    bio: 'Baseem drives our creative vision and strategic marketing efforts. His expertise in visual storytelling has helped numerous brands establish strong market positions.',
    imageUrl: '/src/assets/team/baseem.jpg'
  },
  {
    id: 'creative-team',
    name: 'Creative Team',
    role: 'Design & Production',
    bio: 'Our talented team of designers, photographers, and content creators work together to bring your creative visions to life.',
    imageUrl: '/src/assets/team/farhad.jpg'
  }
];

// Mock creative content data
export const creativeContent: CreativeContentItem[] = [
  {
    id: '1',
    title: 'Summer Campaign 2023',
    description: 'Vibrant campaign visuals for EcoLife Apparel\'s summer collection',
    type: 'campaign',
    imageUrl: '/src/assets/creative/summer-campaign.jpg',
    createdBy: 'Baseem Wazid',
    date: '2023-06-15'
  },
  {
    id: '2',
    title: 'TechNova Product Reel',
    description: 'Dynamic product showcase video for TechNova\'s latest release',
    type: 'video',
    imageUrl: '/src/assets/creative/technova-reel.jpg',
    createdBy: 'Baseem Wazid',
    date: '2023-04-22'
  },
  {
    id: '3',
    title: 'Wanderlust Stories Brand Identity',
    description: 'Complete visual identity for the travel blog brand',
    type: 'design',
    imageUrl: '/src/assets/creative/wanderlust-identity.jpg',
    createdBy: 'Baseem Wazid',
    date: '2023-03-10'
  },
  {
    id: '4',
    title: 'VitaWell Packaging Design',
    description: 'Sustainable packaging concept for health supplements',
    type: 'design',
    imageUrl: '/src/assets/creative/vitawell-packaging.jpg',
    createdBy: 'Baseem Wazid',
    date: '2023-01-18'
  }
];