// Utility functions for SEO management
export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const updateMetaTags = (meta: MetaTags) => {
  // Update title
  if (meta.title) {
    document.title = meta.title;
  }
  
  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    (metaDescription as HTMLMetaElement).setAttribute('content', meta.description);
  } else {
    metaDescription = document.createElement('meta');
    (metaDescription as HTMLMetaElement).name = 'description';
    (metaDescription as HTMLMetaElement).content = meta.description;
    document.head.appendChild(metaDescription);
  }
  
  // Update keywords
  if (meta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      (metaKeywords as HTMLMetaElement).setAttribute('content', meta.keywords);
    } else {
      metaKeywords = document.createElement('meta');
      (metaKeywords as HTMLMetaElement).name = 'keywords';
      (metaKeywords as HTMLMetaElement).content = meta.keywords;
      document.head.appendChild(metaKeywords);
    }
  }
  
  // Update Open Graph tags
  updateOgTag('og:title', meta.ogTitle || meta.title);
  updateOgTag('og:description', meta.ogDescription || meta.description);
  if (meta.ogImage) updateOgTag('og:image', meta.ogImage);
  if (meta.ogUrl) updateOgTag('og:url', meta.ogUrl);
};

const updateOgTag = (property: string, content: string) => {
  if (!content) return;
  
  let metaTag = document.querySelector(`meta[property="${property}"]`);
  if (metaTag) {
    (metaTag as HTMLMetaElement).setAttribute('content', content);
  } else {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    (metaTag as HTMLMetaElement).content = content;
    document.head.appendChild(metaTag);
  }
};

// Default SEO metadata for the site
export const defaultSEO = {
  title: 'Innovate Wave - Creative Digital Agency',
  description: 'Crafting compelling creative experiences for forward-thinking brands worldwide. We specialize in branding, creative content, and digital marketing.',
  keywords: 'creative agency, branding, creative content, digital marketing, video production, photography',
  ogTitle: 'Innovate Wave - Creative Digital Agency',
  ogDescription: 'Crafting compelling creative experiences for forward-thinking brands worldwide.',
  ogImage: '/src/assets/portfolio/eco-life.jpg',
  ogUrl: 'https://innovatewave.com'
};