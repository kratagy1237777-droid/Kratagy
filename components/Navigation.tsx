
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
            <div className="w-10 h-10 bg-sky-900 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 tracking-tight leading-none">LONDON DENTAL</h1>
              <span className="text-xs uppercase tracking-[0.2em] text-sky-600 font-semibold">Excellence & Care</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setView(PageView.HOME)}
              className={`text-sm font-semibold transition-colors ${currentView === PageView.HOME ? 'text-sky-700' : 'text-slate-600 hover:text-sky-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setView(PageView.TREATMENTS)}
              className={`text-sm font-semibold transition-colors ${currentView === PageView.TREATMENTS ? 'text-sky-700' : 'text-slate-600 hover:text-sky-600'}`}
            >
              Treatments
            </button>
            <button 
              onClick={() => setView(PageView.ABOUT)}
              className={`text-sm font-semibold transition-colors ${currentView === PageView.ABOUT ? 'text-sky-700' : 'text-slate-600 hover:text-sky-600'}`}
            >
              About
            </button>
            <button 
              onClick={() => setView(PageView.PRICES)}
              className={`text-sm font-semibold transition-colors ${currentView === PageView.PRICES ? 'text-sky-700' : 'text-slate-600 hover:text-sky-600'}`}
            >
              Prices
            </button>
            <button 
              onClick={() => setView(PageView.CONTACT)}
              className="bg-sky-700 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-sky-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Online
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
               onClick={() => setView(PageView.BLUEPRINT)}
               className="text-sky-700 text-sm font-bold border border-sky-700 px-3 py-1 rounded"
            >
              Specs
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
