
import React from 'react';
import { PageView } from '../types.ts';

interface FooterProps {
  setView: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 col-span-1 md:col-span-1">
            <div className="flex items-center">
              <div className="h-16 w-auto bg-white p-2 rounded-2xl flex items-center justify-center mr-4">
                <img src="logo.png" alt="London Dental Centre Footer" className="h-full w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm leading-relaxed font-medium italic opacity-80">
              "Providing elite specialist and general dental care at 109 Lever Street, London, EC1V 3RQ."
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] text-brand">Treatments</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Invisalign®</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Dental Implants</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Teeth Whitening</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] text-brand">Location</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li className="text-slate-300">109 Lever Street, London, EC1V 3RQ</li>
              <li className="text-white">020 7123 4567</li>
              <li className="text-slate-500 lowercase text-xs">info@thelondondentalcentre.co.uk</li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800">
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em] text-brand">Secure Portal</h4>
            <div className="space-y-4 text-sm">
              <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">Priority Appointment Slip</p>
              <button 
                onClick={() => setView(PageView.CONTACT)}
                className="w-full bg-brand text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-brand/10"
              >
                Secure Booking
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40">
          <p>&copy; 2024 The London Dental Centre. 109 Lever Street, London, EC1V 3RQ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
