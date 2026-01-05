
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
              "Defining the standard for dental care in London. Where clinical precision meets patient comfort."
            </p>
            <div className="flex space-x-6">
              {['FB', 'IG', 'LI'].map(social => (
                <div key={social} className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center font-black text-xs hover:border-brand hover:text-brand transition-all cursor-pointer">
                  {social}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] text-brand">Treatments</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Invisalign®</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Dental Implants</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Teeth Whitening</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-brand transition-colors">Veneers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 text-xs uppercase tracking-[0.2em] text-brand">Patients</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><button onClick={() => setView(PageView.ABOUT)} className="hover:text-brand transition-colors">Our Team</button></li>
              <li><button onClick={() => setView(PageView.PRICES)} className="hover:text-brand transition-colors">Fees & Finance</button></li>
              <li><button onClick={() => setView(PageView.CONTACT)} className="hover:text-brand transition-colors">Emergency Line</button></li>
            </ul>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800">
            <h4 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em] text-brand">Visit Us</h4>
            <div className="space-y-4 text-sm">
              <p className="font-medium text-slate-300">123 Harley Street,<br />London, W1G 6AF</p>
              <p className="text-white font-black text-lg">020 7123 4567</p>
              <button 
                onClick={() => setView(PageView.CONTACT)}
                className="w-full bg-brand text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-brand/10"
              >
                Secure Online Booking
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-black uppercase tracking-widest opacity-40">
          <p>&copy; 2024 London Dental Excellence. GDC Registered. CQC Outstanding.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand transition-colors">GDPR</a>
            <a href="#" className="hover:text-brand transition-colors">NHS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
