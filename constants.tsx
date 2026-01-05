
import React from 'react';
import { Treatment, TeamMember, Review } from './types';

export const COLORS = {
  primary: '#0F4C75',
  secondary: '#3282B8',
  accent: '#BBE1FA',
  background: '#FFFFFF',
  text: '#1B262C',
  success: '#27AE60'
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDesc: 'The gold standard for permanent tooth replacement. Restore your smile and bite with natural-looking results.',
    icon: '🦷',
    category: 'Specialist',
    benefits: ['Permanent solution', 'Bone preservation', 'Natural feel'],
    priceFrom: '£1,800'
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Aligners',
    shortDesc: 'Straighten your teeth discreetly with clear, removable aligners. No wires, no brackets, just results.',
    icon: '✨',
    category: 'Cosmetic',
    benefits: ['Virtually invisible', 'Removable', 'Faster results'],
    priceFrom: '£2,500'
  },
  {
    id: 'whitening',
    title: 'Professional Whitening',
    shortDesc: 'Transform your smile in one visit with our premium whitening treatments for long-lasting brightness.',
    icon: '🌟',
    category: 'Cosmetic',
    benefits: ['Instant results', 'Safe for enamel', 'Custom fit'],
    priceFrom: '£299'
  },
  {
    id: 'general',
    title: 'General Dentistry',
    shortDesc: 'Comprehensive care including checkups, fillings, and hygiene to maintain optimal oral health.',
    icon: '🛡️',
    category: 'General',
    benefits: ['Preventative care', 'NHS options', 'Emergency support'],
    priceFrom: '£45'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Principal Dentist & Implantologist',
    bio: 'With over 15 years of experience, Dr. Mitchell specializes in complex restorative cases and dental implants.',
    image: 'https://picsum.photos/seed/dentist1/400/500',
    specialties: ['Implantology', 'Aesthetics']
  },
  {
    name: 'Dr. James Chen',
    role: 'Cosmetic Dentist',
    bio: 'Dr. Chen is an expert in Invisalign and composite bonding, helping patients achieve their dream smiles.',
    image: 'https://picsum.photos/seed/dentist2/400/500',
    specialties: ['Invisalign', 'Veneers']
  }
];

export const REVIEWS: Review[] = [
  {
    author: 'Mark Thompson',
    rating: 5,
    text: 'Best dental experience in London. The team is professional, and the facility is state-of-the-art.',
    date: '2 weeks ago'
  },
  {
    author: 'Emma Wilson',
    rating: 5,
    text: 'Had my Invisalign treatment here. Truly life-changing results and the care was exceptional.',
    date: '1 month ago'
  }
];

export const SEO_KEYWORDS = [
  'Private Dentist London',
  'Cosmetic Dentistry UK',
  'Dental Implants London',
  'Invisalign UK',
  'Emergency Dentist London',
  'NHS Dentist London'
];
