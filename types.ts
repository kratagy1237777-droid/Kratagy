
export interface Treatment {
  id: string;
  title: string;
  shortDesc: string;
  icon: string;
  category: 'Cosmetic' | 'General' | 'Specialist';
  benefits: string[];
  priceFrom: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export enum PageView {
  HOME = 'home',
  TREATMENTS = 'treatments',
  ABOUT = 'about',
  PRICES = 'prices',
  CONTACT = 'contact',
  BLUEPRINT = 'blueprint'
}
