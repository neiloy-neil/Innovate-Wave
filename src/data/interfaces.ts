import React from 'react';

// Service item interface
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
}

// Portfolio item interface
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  client?: string;
  date?: string;
  link?: string;
}

// Testimonial interface
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl?: string;
  rating?: number;
}

// Team member interface
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

// Creative content item interface
export interface CreativeContentItem {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'image' | 'design' | 'campaign';
  imageUrl: string;
  createdBy: string;
  date: string;
}