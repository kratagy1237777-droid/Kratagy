
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- TYPES ---
enum PageView {
  HOME = 'home',
  TREATMENTS = 'treatments',
  ABOUT = 'about',
  PRICES = 'prices',
  CONTACT = 'contact'
}

interface Treatment {
  id: string;
  title: string;
  desc: string;
  icon: string;
  price: string;
  benefits: string[];
}

// --- CONSTANTS ---
const TREATMENTS: Treatment[] = [
  {
    id: 'invisalign',
    title: 'Invisalign®',
    desc: 'The world’s most advanced clear aligner system. Straighter teeth without the wires.',
    icon: '✨',
    price: '£2,500',
    benefits: ['Virtually invisible', 'Removable', 'Comfortable']
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking replacement for missing teeth using titanium technology.',
    icon: '🦷',
    price: '£1,800',
    benefits: ['Lasts a lifetime', 'Prevents bone loss', 'Natural look']
  },
  {
    id: 'whitening',
    title: 'Enlighten Whitening',
    desc: 'Guaranteed B1 shade results with our professional whitening treatment systems.',
    icon: '🌟',
    price: '£399',
    benefits: ['Safe for enamel', 'Instant results', 'Long lasting']
  },
  {
    id: 'general',
    title: 'General Care',
    desc: 'Comprehensive check-ups, hygiene visits, and preventative care for your family.',
    icon: '🛡️',
    price: '£45',
    benefits: ['Preventative care', 'GDC expert team', 'Family friendly']
  }
];

// --- COMPONENTS ---

const Navigation = ({ currentView, setView }: { currentView: PageView, setView: (v: PageView) => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200 transition-all duration-300">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center cursor-pointer group" onClick={() => setView(PageView.HOME)}>
        <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-sky-700 transition-colors">
          <span className="text-white font-bold text-xl">L</span>
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-none tracking-tight">LONDON DENTAL</h1>
          <p className="text-[10px] text-sky-600 font-bold tracking-[0.2em] uppercase">Excellence & Innovation</p>
        </div>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {[PageView.HOME, PageView.TREATMENTS, PageView.ABOUT, PageView.PRICES].map((view) => (
          <button 
            key={view}
            onClick={() => setView(view)}
            className={`text-sm font-semibold capitalize transition-colors ${currentView === view ? 'text-sky-600' : 'text-slate-600 hover:text-sky-600'}`}
          >
            {view}
          </button>
        ))}
        <button 
          onClick={() => setView(PageView.CONTACT)}
          className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
        >
          Book Consult
        </button>
      </div>
      
      <button className="md:hidden text-slate-900" onClick={() => setView(PageView.CONTACT)}>
        <span className="text-sm font-bold border border-slate-200 px-3 py-1 rounded">Book</span>
      </button>
    </div>
  </nav>
);

const Hero = ({ onCta }: { onCta: () => void }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 navy-gradient overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Clinic Interior" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent"></div>
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="max-w-3xl">
        <div className="inline-flex items-center bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 animate-pulse"></span>
          <span className="text-sky-300 text-xs font-bold uppercase tracking-widest">GDC Registered Specialists</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.05]">
          A World-Class <span className="text-sky-400">Smile</span> Starts Here.
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
          Experience bespoke dentistry in the heart of London. We combine advanced digital technology with luxury care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onCta}
            className="bg-sky-500 text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20 text-center"
          >
            New Patient Offer £85
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all text-center">
            View Results
          </button>
        </div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="bg-white py-12 border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="text-xl font-black tracking-tighter text-slate-900">GDC REGULATED</div>
        <div className="text-xl font-black tracking-tighter text-slate-900">CQC COMPLIANT</div>
        <div className="text-xl font-black tracking-tighter text-slate-900">NHS PARTNER</div>
        <div className="text-xl font-black tracking-tighter text-slate-900">BUPA ACCREDITED</div>
        <div className="text-xl font-black tracking-tighter text-slate-900">GOOGLE 4.9★</div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">Contact Us</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Ready for a transformation? <br/>
              <span className="text-slate-400 italic font-light">Let's talk.</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-sky-50 transition-colors">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Call Clinic</p>
                <p className="text-xl font-bold text-slate-900">020 7123 4567</p>
              </div>
            </div>
            
            <div className="flex items-center group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-sky-50 transition-colors">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">Location</p>
                <p className="text-xl font-bold text-slate-900">123 Harley Street, W1G 6AF</p>
              </div>
            </div>

            <div className="p-8 bg-sky-950 rounded-[2rem] text-white">
               <h4 className="font-bold mb-4">Emergency Slots Available</h4>
               <p className="text-sky-200 text-sm leading-relaxed mb-6">If you are in pain, we offer same-day emergency appointments for £95 (excluding treatment).</p>
               <button className="w-full bg-sky-500 py-3 rounded-xl font-bold hover:bg-sky-400 transition-colors">Call Emergency Line</button>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] shadow-sm border border-slate-100">
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">First Name</label>
                   <input type="text" className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Last Name</label>
                   <input type="text" className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="Doe" />
                 </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Treatment Interests</label>
                <select className="w-full px-5 py-4 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none bg-white">
                  <option>Invisalign</option>
                  <option>Dental Implants</option>
                  <option>Cosmetic Bonding</option>
                  <option>Check-up / Hygiene</option>
                </select>
              </div>
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                Submit Request
              </button>
              <p className="text-[11px] text-center text-slate-400">Average response time: 2 hours. GDPR Compliant.</p>
           </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ({ setView }: { setView: (v: PageView) => void }) => (
  <footer className="bg-slate-950 text-slate-500 py-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 space-y-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-sky-600 rounded flex items-center justify-center mr-3">
              <span className="text-white font-bold">L</span>
            </div>
            <h3 className="text-white font-bold tracking-tight">LONDON DENTAL EXCELLENCE</h3>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Defining the future of luxury dentistry in London. Our clinical team is led by award-winning specialists dedicated to your smile.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Treatments</h4>
          <ul className="space-y-4 text-sm">
             <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Invisalign</button></li>
             <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Veneers</button></li>
             <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Implants</button></li>
             <li><button onClick={() => setView(PageView.TREATMENTS)} className="hover:text-sky-400 transition-colors">Hygiene</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
          <ul className="space-y-4 text-sm">
             <li className="text-white font-bold">020 7123 4567</li>
             <li>Instagram</li>
             <li>Facebook</li>
             <li>Google Reviews</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold">
        <p>&copy; 2024 London Dental Excellence. GDC Regulated Practice.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">GDPR</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---
const App = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderContent = () => {
    switch(currentView) {
      case PageView.HOME:
        return (
          <>
            <Hero onCta={() => setCurrentView(PageView.CONTACT)} />
            <TrustBar />
            
            {/* Treatments Preview */}
            <section className="py-24 bg-slate-50">
               <div className="max-w-7xl mx-auto px-4">
                  <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Signature Services</h2>
                     <p className="text-lg text-slate-500 max-w-2xl mx-auto">Expertise you can trust. Technology you can see. Care you can feel.</p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     {TREATMENTS.map(t => (
                       <div key={t.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-sky-500/5 transition-all group cursor-pointer" onClick={() => setCurrentView(PageView.TREATMENTS)}>
                          <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{t.icon}</div>
                          <h4 className="text-xl font-bold mb-4">{t.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed mb-6">{t.desc}</p>
                          <div className="text-sky-600 font-bold text-sm">Prices from {t.price}</div>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            {/* Why Us Section */}
            <section className="py-24 bg-white overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-2xl" alt="Dental Care" />
                    <div className="absolute -bottom-8 -right-8 bg-sky-600 p-8 rounded-[2rem] text-white shadow-2xl hidden md:block">
                        <p className="text-5xl font-bold mb-1">15k+</p>
                        <p className="text-xs uppercase font-bold tracking-widest opacity-80">Satisfied Smiles</p>
                    </div>
                  </div>
                  <div className="space-y-8">
                     <h2 className="text-4xl font-bold leading-tight">Patient-Centric Dentistry <br/> <span className="text-slate-400">Redefined for London.</span></h2>
                     <ul className="space-y-6">
                        {[
                          'Digital Smile Design technology for every patient',
                          'Pain-free anesthesia systems as standard',
                          'Harley Street based Specialist Dentists',
                          '0% Interest-free financing for all treatments'
                        ].map((item, i) => (
                          <li key={i} className="flex items-center font-semibold text-slate-700">
                             <span className="w-6 h-6 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-4 text-[10px]">✓</span>
                             {item}
                          </li>
                        ))}
                     </ul>
                     <button onClick={() => setCurrentView(PageView.ABOUT)} className="inline-block text-sky-600 font-bold border-b-2 border-sky-600 pb-1 hover:text-sky-700 hover:border-sky-700 transition-all">About Our Practice →</button>
                  </div>
               </div>
            </section>

            <ContactSection />
          </>
        );
      case PageView.TREATMENTS:
        return (
          <section className="pt-40 pb-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold mb-8 text-center">Treatments</h2>
              <div className="space-y-12">
                {TREATMENTS.map(t => (
                  <div key={t.id} className="flex flex-col md:flex-row gap-12 p-8 bg-slate-50 rounded-[3rem] items-center">
                    <div className="text-6xl">{t.icon}</div>
                    <div className="flex-1">
                       <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
                       <p className="text-slate-600 mb-6">{t.desc}</p>
                       <div className="flex flex-wrap gap-4">
                          {t.benefits.map(b => (
                            <span key={b} className="px-4 py-1.5 bg-white rounded-full text-xs font-bold text-slate-500 shadow-sm">{b}</span>
                          ))}
                       </div>
                    </div>
                    <div className="text-right">
                       <div className="text-2xl font-bold text-sky-600 mb-4 tracking-tighter">{t.price}</div>
                       <button onClick={() => setCurrentView(PageView.CONTACT)} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">Enquire</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case PageView.PRICES:
        return (
          <section className="pt-40 pb-24 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold mb-12 text-center tracking-tight">Investment Guide</h2>
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100">
                 <table className="w-full text-left">
                    <thead className="bg-slate-900 text-white">
                       <tr>
                         <th className="px-8 py-6 font-bold uppercase tracking-widest text-xs">Treatment</th>
                         <th className="px-8 py-6 text-right font-bold uppercase tracking-widest text-xs">From</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {TREATMENTS.map(t => (
                         <tr key={t.id} className="hover:bg-sky-50 transition-colors">
                            <td className="px-8 py-6 font-bold text-slate-700">{t.title}</td>
                            <td className="px-8 py-6 text-right font-black text-sky-600">{t.price}</td>
                         </tr>
                       ))}
                       <tr className="hover:bg-sky-50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-700">Initial Consultation</td>
                          <td className="px-8 py-6 text-right font-black text-sky-600">£85</td>
                       </tr>
                       <tr className="hover:bg-sky-50 transition-colors">
                          <td className="px-8 py-6 font-bold text-slate-700">Emergency Relief</td>
                          <td className="px-8 py-6 text-right font-black text-sky-600">£95</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <div className="mt-12 bg-sky-600 p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between shadow-xl">
                 <div className="mb-6 md:mb-0">
                    <h4 className="text-2xl font-bold mb-2">Finance Your Smile</h4>
                    <p className="text-sky-100">0% Interest-free options for up to 12 months.</p>
                 </div>
                 <button className="bg-white text-sky-600 px-10 py-4 rounded-2xl font-bold hover:bg-sky-50 transition-all shadow-lg">Check Eligibility</button>
              </div>
            </div>
          </section>
        );
      case PageView.ABOUT:
        return (
          <section className="pt-40 pb-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
               <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
                  <div className="flex-1 space-y-8">
                     <h2 className="text-5xl font-bold leading-tight">Decades of Expertise. <br/> <span className="text-sky-500">A Lifetime of Smiles.</span></h2>
                     <p className="text-lg text-slate-600 leading-relaxed">
                        Founded on Harley Street, London Dental Excellence has grown into the capital's premier destination for restorative and cosmetic dentistry. 
                     </p>
                     <div className="grid grid-cols-2 gap-8 pt-4">
                        <div>
                          <p className="text-4xl font-bold text-slate-900 mb-1">20+</p>
                          <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Awards Won</p>
                        </div>
                        <div>
                          <p className="text-4xl font-bold text-slate-900 mb-1">30yr</p>
                          <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Combined Experience</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1 w-full h-[500px] bg-slate-100 rounded-[3rem] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Dentist Team" />
                  </div>
               </div>
            </div>
          </section>
        );
      case PageView.CONTACT:
        return (
          <div className="pt-20">
            <ContactSection />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer setView={setCurrentView} />
    </div>
  );
};

// --- INITIALIZATION ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
