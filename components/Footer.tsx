
import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  setView: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-sky-600 rounded flex items-center justify-center mr-2">
                <span className="text-white font-bold">L</span>
              </div>
              <h3 className="text-white font-bold tracking-tight">LONDON DENTAL</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Providing world-class dentistry in the heart of London. Our practice is dedicated to excellence, innovation, and patient-centered care.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 transition-colors cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-sky-600 transition-colors cursor-pointer"></div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Treatments</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Invisalign</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Dental Implants</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Teeth Whitening</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Veneers</button></li>
              <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Dental Hygiene</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Patients</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => setView(PageView.ABOUT)} className="hover:text-sky-400 transition-colors">Our Team</button></li>
              <li><button onClick={() => setView(PageView.PRICES)} className="hover:text-sky-400 transition-colors">Fees & Finance</button></li>
              <li><button onClick={() => setView(PageView.HOME)} className="hover:text-sky-400 transition-colors">Case Studies</button></li>
              <li><button onClick={() => setView(PageView.CONTACT)} className="hover:text-sky-400 transition-colors">Emergency Dentist</button></li>
              <li><button onClick={() => setView(PageView.HOME)} className="hover:text-sky-400 transition-colors">FAQs</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Find Us</h4>
            <div className="space-y-4 text-sm">
              <p>123 Harley Street,<br />London, W1G 6AF</p>
              <p className="text-white font-bold">020 7123 4567</p>
              <p>Mon - Fri: 8am - 7pm<br />Sat: 9am - 4pm</p>
              <button 
                onClick={() => setView(PageView.CONTACT)}
                className="w-full bg-sky-600 text-white py-3 rounded font-bold hover:bg-sky-700 transition-all"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>&copy; 2024 London Dental Excellence. GDC Registered. Care Quality Commission Regulated.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">GDPR Compliance</a>
            <a href="#" className="hover:text-white">NHS Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
