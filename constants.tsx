
import React from 'react';
import { Treatment, TeamMember, Review } from './types.ts';

export const COLORS = {
  primary: '#0F4C75',
  secondary: '#3282B8',
  accent: '#BBE1FA',
  background: '#FFFFFF',
  text: '#1B262C',
  success: '#27AE60'
};

export const TREATMENTS: Treatment[] = [
  // General Dentistry
  {
    id: 'exam',
    title: 'Dental Examinations',
    shortDesc: 'Comprehensive check-ups including oral cancer screening and digital X-rays.',
    icon: '🔍',
    category: 'General',
    benefits: ['X-rays included', 'Cancer screening', 'Bespoke plans'],
    priceFrom: '£85'
  },
  {
    id: 'hygiene',
    title: 'Dental Hygiene',
    shortDesc: 'Professional scale and polish using advanced Airflow technology for a brighter smile.',
    icon: '🧼',
    category: 'General',
    benefits: ['Stain removal', 'Gum health', 'Fresh breath'],
    priceFrom: '£75'
  },
  {
    id: 'fillings',
    title: 'White Fillings',
    shortDesc: 'Natural-looking composite fillings to restore damaged teeth discreetly.',
    icon: '💎',
    category: 'General',
    benefits: ['Mercury-free', 'Tooth-colored', 'Durable'],
    priceFrom: '£150'
  },
  // Cosmetic Dentistry
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Professional Boutique or Enlighten whitening for guaranteed shade improvement.',
    icon: '🌟',
    category: 'Cosmetic',
    benefits: ['B1 shade result', 'Safe for enamel', 'Custom trays'],
    priceFrom: '£395'
  },
  {
    id: 'bonding',
    title: 'Composite Bonding',
    shortDesc: 'Correct chips and gaps in a single visit with artistic tooth-colored resin.',
    icon: '✨',
    category: 'Cosmetic',
    benefits: ['No drilling', 'Single visit', 'Instant result'],
    priceFrom: '£250'
  },
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    shortDesc: 'Custom-crafted ceramic shells for a total smile transformation.',
    icon: '🎭',
    category: 'Cosmetic',
    benefits: ['Stain resistant', 'Perfect symmetry', 'Long-lasting'],
    priceFrom: '£850'
  },
  // Orthodontics
  {
    id: 'invisalign',
    title: 'Invisalign®',
    shortDesc: 'Discreet, clear aligners to straighten your teeth without fixed brackets.',
    icon: '📏',
    category: 'Orthodontics',
    benefits: ['Removable', 'Virtually invisible', 'Digital planning'],
    priceFrom: '£2,500'
  },
  {
    id: 'braces',
    title: 'Six Month Smiles',
    shortDesc: 'Short-term orthodontic solution focusing on the teeth that show when you smile.',
    icon: '⚓',
    category: 'Orthodontics',
    benefits: ['Faster results', 'Discreet wires', 'Bite correction'],
    priceFrom: '£1,800'
  },
  // Restorative
  {
    id: 'implants',
    title: 'Dental Implants',
    shortDesc: 'Titanium tooth roots that provide a permanent base for replacement teeth.',
    icon: '🦷',
    category: 'Restorative',
    benefits: ['Life-long fix', 'Eat normally', 'Prevents bone loss'],
    priceFrom: '£2,100'
  },
  {
    id: 'crowns',
    title: 'Crowns & Bridges',
    shortDesc: 'Premium ceramic restorations to replace missing teeth or strengthen weak ones.',
    icon: '👑',
    category: 'Restorative',
    benefits: ['Bespoke fit', 'Natural look', 'High strength'],
    priceFrom: '£750'
  },
  // Surgical & Facial
  {
    id: 'wisdom',
    title: 'Wisdom Teeth Removal',
    shortDesc: 'Specialist surgical extraction of impacted or painful wisdom teeth.',
    icon: '🏥',
    category: 'Surgical',
    benefits: ['Local anesthetic', 'Specialist care', 'Emergency slots'],
    priceFrom: '£250'
  },
  {
    id: 'facial',
    title: 'Facial Aesthetics',
    shortDesc: 'Anti-wrinkle injections and fillers to enhance your natural beauty.',
    icon: '💆',
    category: 'Facial',
    benefits: ['Clinical safety', 'Subtle results', 'Qualified doctors'],
    priceFrom: '£195'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Principal Dentist & Implantologist',
    bio: 'With over 15 years of experience, Dr. Mitchell specializes in complex restorative cases and dental implants.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    specialties: ['Implantology', 'Aesthetics']
  },
  {
    name: 'Dr. James Chen',
    role: 'Cosmetic Dentist',
    bio: 'Dr. Chen is an expert in Invisalign and composite bonding, helping patients achieve their dream smiles.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
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
