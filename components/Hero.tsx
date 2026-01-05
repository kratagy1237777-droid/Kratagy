
import React, { useState, useEffect } from 'react';
import { PageView } from '../types.ts';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const headlines = [
    "Expert Dental Care for a Life-Changing Smile",
    "Painless Cosmetic Dentistry in the Heart of London",
    "Trusted NHS & Private Care for the Whole Family"
  ];
  
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1 mb-6">
            <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">GDC Registered Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] transition-opacity duration-500">
            {headlines[headlineIndex]}
          </h1>
          
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
            Experience premium dental treatments combining advanced technology with compassionate care. From Invisalign to routine checkups, we prioritize your comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onCtaClick}
              className="bg-sky-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-sky-700 transition-all shadow-xl hover:shadow-sky-500/20 active:scale-95 text-center"
            >
              Book New Patient Exam
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all text-center">
              View Treatments
            </button>
          </div>
          
          <div className="mt-12 flex items-center space-x-6 text-slate-400 text-sm font-medium">
             <div className="flex items-center">
                <span className="text-sky-400 mr-2 text-lg">★</span>
                <span>4.9/5 Google Rating</span>
             </div>
             <div className="flex items-center">
                <span className="text-sky-400 mr-2">✓</span>
                <span>Emergency Slots Available</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
