
import React from 'react';
import { PageView } from '../types.ts';

interface NavigationProps {
  currentView: PageView;
  setView: (view: PageView) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setView(PageView.HOME)}
          >
            <div className="h-12 w-auto mr-3 group-hover:scale-105 transition-transform duration-300">
              <img src="logo.png" alt="London Dental Centre Logo" className="h-full w-auto object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight leading-none uppercase">LONDON DENTAL</h1>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand font-black">Centre of Excellence</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setView(PageView.HOME)}
              className={`text-sm font-bold transition-colors uppercase tracking-widest ${currentView === PageView.HOME ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView(PageView.TREATMENTS)}
              className={`text-sm font-bold transition-colors uppercase tracking-widest ${currentView === PageView.TREATMENTS ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
            >
              Treatments
            </button>
            <button 
              onClick={() => setView(PageView.ABOUT)}
              className={`text-sm font-bold transition-colors uppercase tracking-widest ${currentView === PageView.ABOUT ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
            >
              About
            </button>
            <button 
              onClick={() => setView(PageView.PRICES)}
              className={`text-sm font-bold transition-colors uppercase tracking-widest ${currentView === PageView.PRICES ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
            >
              Prices
            </button>
            <button 
              onClick={() => setView(PageView.CONTACT)}
              className="bg-brand text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 active:scale-95"
            >
              Book Now
            </button>
          </div>
          
          <button className="md:hidden bg-brand text-white p-2 rounded-lg" onClick={() => setView(PageView.CONTACT)}>
            <span className="text-xs font-bold uppercase tracking-widest px-2">Book</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
