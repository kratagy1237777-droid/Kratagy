
import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';

// --- TYPES ---
enum PageView {
  HOME = 'home',
  TREATMENTS = 'treatments',
  ABOUT = 'about',
  PRICES = 'prices',
  CONTACT = 'contact'
}

type Category = 'General' | 'Cosmetic' | 'Orthodontics' | 'Restorative' | 'Surgical' | 'Facial';

interface Treatment {
  id: string;
  category: Category;
  title: string;
  desc: string;
  icon: string;
  price: string;
  features: string[];
}

// --- COMPREHENSIVE DATA (Sourced from reference link) ---
const TREATMENTS: Treatment[] = [
  // General
  { id: 'exam', category: 'General', title: 'Dental Examinations', desc: 'Comprehensive oral health assessments including digital X-rays and cancer screening.', icon: '🔍', price: '£85', features: ['Oral cancer check', 'Digital X-rays', 'Custom plan'] },
  { id: 'hygiene', category: 'General', title: 'Hygiene & Clean', desc: 'Professional scale and polish to remove plaque and staining, preventing gum disease.', icon: '🧼', price: '£75', features: ['Airflow technology', 'Gum health check', 'Fresh breath'] },
  { id: 'fillings', category: 'General', title: 'White Fillings', desc: 'Mercury-free, tooth-colored restorations that blend seamlessly with your natural teeth.', icon: '💎', price: '£150', features: ['Mercury-free', 'Natural aesthetic', 'BPA-free'] },
  { id: 'root-canal', category: 'General', title: 'Root Canal Treatment', desc: 'Expert endodontic care to save infected teeth and provide immediate pain relief.', icon: '⚡', price: '£450', features: ['Pain relief', 'Save natural teeth', 'Specialist tech'] },
  
  // Cosmetic
  { id: 'whitening', category: 'Cosmetic', title: 'Professional Whitening', desc: 'Enlighten or Boutique systems for guaranteed shade improvements and long-lasting results.', icon: '🌟', price: '£395', features: ['B1 shade guarantee', 'Safe application', 'Home kits'] },
  { id: 'bonding', category: 'Cosmetic', title: 'Composite Bonding', desc: 'Reshape and restore teeth in a single visit with no drilling or injections required.', icon: '✨', price: '£250', features: ['Single visit', 'No drilling', 'Seamless blend'] },
  { id: 'veneers', category: 'Cosmetic', title: 'Porcelain Veneers', desc: 'Custom-crafted shells for a total smile makeover, correcting chips, gaps, and stains.', icon: '🎭', price: '£850', features: ['Bespoke design', 'Stain resistant', 'Highly durable'] },
  
  // Orthodontics
  { id: 'invisalign', category: 'Orthodontics', title: 'Invisalign®', desc: 'The world’s leading clear aligner system for discreet teeth straightening.', icon: '📏', price: '£2,500', features: ['Removable', 'Virtually invisible', 'Digital planning'] },
  { id: 'braces', category: 'Orthodontics', title: 'Fixed Braces', desc: 'Traditional and ceramic options for complex tooth movements and bite corrections.', icon: '⚓', price: '£1,800', features: ['Reliable results', 'Ceramic options', 'NHS/Private'] },
  
  // Restorative
  { id: 'implants', category: 'Restorative', title: 'Dental Implants', desc: 'The gold standard for tooth replacement. A permanent, titanium-rooted solution.', icon: '🦷', price: '£1,800', features: ['Titanium root', 'Natural feel', 'Bone preservation'] },
  { id: 'crowns', category: 'Restorative', title: 'Crowns & Bridges', desc: 'Premium ceramic restorations to strengthen damaged teeth or replace gaps.', icon: '👑', price: '£750', features: ['Full porcelain', 'Hand-crafted', 'Long lasting'] },
  { id: 'dentures', category: 'Restorative', title: 'Premium Dentures', desc: 'Natural-looking, high-stability dentures designed for comfort and function.', icon: '👄', price: '£650', features: ['Stable fit', 'Natural gum look', 'Chrome options'] },

  // Surgical
  { id: 'extractions', category: 'Surgical', title: 'Surgical Extractions', desc: 'Safe removal of failing or wisdom teeth in a comfortable, controlled environment.', icon: '🏥', price: '£180', features: ['Local anesthetic', 'Nervous patient care', 'Aftercare included'] },
  
  // Facial
  { id: 'facial', category: 'Facial', title: 'Facial Aesthetics', desc: 'Anti-wrinkle treatments and dermal fillers administered by clinical experts.', icon: '💆', price: '£195', features: ['Clinical safety', 'Subtle results', 'Medical grade'] }
];

// --- COMPONENTS ---

const Navigation = ({ currentView, setView }: { currentView: PageView, setView: (v: PageView) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center cursor-pointer group" onClick={() => setView(PageView.HOME)}>
          <div className="w-10 h-10 bg-sky-700 rounded-lg flex items-center justify-center mr-3 group-hover:bg-sky-800 transition-colors shadow-lg">
            <span className="text-white font-bold text-xl tracking-tighter">LDC</span>
          </div>
          <div>
            <h1 className={`text-lg font-bold leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>LONDON DENTAL</h1>
            <p className="text-[10px] text-sky-500 font-bold tracking-[0.2em] uppercase">Centre of Excellence</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          {[PageView.HOME, PageView.TREATMENTS, PageView.ABOUT, PageView.PRICES].map((view) => (
            <button 
              key={view}
              onClick={() => setView(view)}
              className={`text-sm font-bold capitalize transition-colors tracking-wide ${currentView === view ? 'text-sky-500' : scrolled ? 'text-slate-600 hover:text-sky-500' : 'text-slate-100 hover:text-white'}`}
            >
              {view}
            </button>
          ))}
          <button 
            onClick={() => setView(PageView.CONTACT)}
            className="bg-sky-600 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-sky-700 transition-all shadow-lg active:scale-95"
          >
            Book Appointment
          </button>
        </div>
        
        <button className="lg:hidden" onClick={() => setView(PageView.CONTACT)}>
          <span className={`text-sm font-bold border px-4 py-2 rounded-full ${scrolled ? 'border-slate-200 text-slate-900' : 'border-white/30 text-white'}`}>Book Online</span>
        </button>
      </div>
    </nav>
  );
};

const ContactSection = () => (
  <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-600/10 blur-[120px] rounded-full translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Your New Smile <br/> <span className="text-sky-500 font-light italic">Starts Today.</span></h2>
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 text-2xl border border-white/10">📞</div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Direct Line</p>
                <p className="text-2xl font-bold">020 7123 4567</p>
                <p className="text-sm text-sky-400 mt-1">Available 24/7 for Emergencies</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 text-2xl border border-white/10">📍</div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Our Location</p>
                <p className="text-2xl font-bold">123 Harley Street, London</p>
                <p className="text-sm text-slate-400 mt-1">Tube: Regents Park / Great Portland Street</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <p className="font-bold text-sm mb-2">Monday - Friday</p>
                <p className="text-slate-400 text-sm">08:00 — 19:00</p>
              </div>
              <div>
                <p className="font-bold text-sm mb-2">Saturday</p>
                <p className="text-slate-400 text-sm">09:00 — 16:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-14 text-slate-900 shadow-2xl">
           <h3 className="text-2xl font-bold mb-2">Request Callback</h3>
           <p className="text-slate-500 text-sm mb-8 italic leading-relaxed">Most requests are answered within 15 minutes during working hours.</p>
           
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Full Name</label>
                   <input type="text" className="w-full bg-slate-50 px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="Enter name" />
                 </div>
                 <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Phone</label>
                   <input type="tel" className="w-full bg-slate-50 px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" placeholder="07xxx xxxxxx" />
                 </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Treatment Interests</label>
                <select className="w-full bg-slate-50 px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all appearance-none cursor-pointer bg-white">
                  <option>Invisalign Transformation</option>
                  <option>Porcelain Veneers</option>
                  <option>Dental Implants</option>
                  <option>General Checkup</option>
                  <option>Emergency - Immediate Pain Relief</option>
                </select>
              </div>
              <button className="w-full bg-sky-700 text-white py-5 rounded-2xl font-bold text-lg hover:bg-sky-800 transition-all shadow-xl shadow-sky-100 active:scale-[0.98]">
                Secure Appointment
              </button>
              <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span>System Online - Secured Connection</span>
              </div>
           </form>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'All') return TREATMENTS;
    return TREATMENTS.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  const categories: (Category | 'All')[] = ['All', 'General', 'Cosmetic', 'Orthodontics', 'Restorative', 'Surgical', 'Facial'];

  const renderContent = () => {
    switch(currentView) {
      case PageView.HOME:
        return (
          <>
            {/* HERO */}
            <section className="relative h-screen min-h-[700px] flex items-center navy-gradient">
              <div className="absolute inset-0 overflow-hidden opacity-30">
                <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Modern Dentistry" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              </div>
              <div className="relative max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-4xl">
                  <div className="flex items-center space-x-3 mb-8">
                     <span className="bg-sky-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-sky-500/20">Official Partner</span>
                     <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">Harley Street Excellence</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter">
                    Defining the Future of <span className="text-sky-500 italic font-light">Your Smile.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
                    The London Dental Centre provides bespoke clinical care in a luxury Harley Street environment.
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <button onClick={() => setCurrentView(PageView.CONTACT)} className="bg-white text-slate-950 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-sky-50 transition-all shadow-2xl active:scale-95">
                       Book Initial Consult
                    </button>
                    <button onClick={() => setCurrentView(PageView.TREATMENTS)} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all text-center">
                       View Treatments
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                 <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full"></div>
                 </div>
              </div>
            </section>

            {/* QUICK STATS */}
            <section className="bg-white py-16 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">4.9★</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Google Reviews</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">15+</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Specialist Team</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">24/7</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Emergency Care</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">0%</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Interest Finance</p>
                    </div>
                 </div>
              </div>
            </section>

            {/* FEATURED TREATMENTS */}
            <section className="py-32 bg-slate-50">
               <div className="max-w-7xl mx-auto px-4">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                     <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 leading-tight">Expertise for Every Smile.</h2>
                        <p className="text-lg text-slate-500 leading-relaxed font-medium italic">From routine maintenance to complex surgical transformations, our clinical team delivers unmatched precision.</p>
                     </div>
                     <button onClick={() => setCurrentView(PageView.TREATMENTS)} className="text-sky-600 font-black border-b-4 border-sky-100 pb-2 hover:border-sky-600 transition-all uppercase tracking-widest text-xs">Explore All 25+ Treatments</button>
                  </div>
                  <div className="grid md:grid-cols-3 gap-10">
                     {[
                       { title: 'Invisalign®', desc: 'Discreet teeth straightening with 3D digital simulation.', icon: '📏', color: 'bg-sky-50' },
                       { title: 'Dental Implants', desc: 'The permanent solution for missing teeth. Restore function.', icon: '🦷', color: 'bg-indigo-50' },
                       { title: 'Smile Makeovers', desc: 'Custom combination of veneers, bonding, and whitening.', icon: '✨', color: 'bg-rose-50' }
                     ].map((item, i) => (
                       <div key={i} className="group relative bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden" onClick={() => setCurrentView(PageView.TREATMENTS)}>
                          <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                          <h4 className="text-2xl font-black mb-4 text-slate-900">{item.title}</h4>
                          <p className="text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                          <span className="text-sky-600 font-bold text-sm tracking-widest uppercase inline-flex items-center">
                            Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                          </span>
                       </div>
                     ))}
                  </div>
               </div>
            </section>

            <ContactSection />
          </>
        );
      case PageView.TREATMENTS:
        return (
          <section className="pt-40 pb-32 px-4 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Clinical Excellence.</h2>
                 <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">Select a category below to browse our comprehensive range of private and specialist dental care.</p>
                 
                 <div className="flex flex-wrap justify-center gap-3">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-sky-700 text-white shadow-xl shadow-sky-500/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                      >
                        {cat}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTreatments.map(t => (
                  <div key={t.id} className="bg-slate-50 p-10 rounded-[3rem] flex flex-col hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                    <div className="flex justify-between items-start mb-10">
                       <div className="text-5xl group-hover:scale-110 transition-transform">{t.icon}</div>
                       <div className="bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 shadow-sm">{t.category}</div>
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-slate-900">{t.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{t.desc}</p>
                    
                    <div className="space-y-3 mb-8">
                       {t.features.map((f, i) => (
                         <div key={i} className="flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                           <span className="w-1 h-1 bg-sky-500 rounded-full mr-3"></span>
                           {f}
                         </div>
                       ))}
                    </div>

                    <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
                       <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fees From</p>
                          <p className="text-xl font-black text-sky-700">{t.price}</p>
                       </div>
                       <button onClick={() => setCurrentView(PageView.CONTACT)} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-sky-600 transition-colors">Book Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case PageView.PRICES:
        return (
          <section className="pt-40 pb-32 px-4 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-5xl font-black mb-6 tracking-tighter">Treatment Fees.</h2>
                 <p className="text-slate-500 font-medium">Transparent pricing and flexible financing options for all patients.</p>
              </div>

              <div className="bg-white rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-10 py-8 font-black uppercase tracking-widest text-[10px]">Procedure</th>
                      <th className="px-10 py-8 text-right font-black uppercase tracking-widest text-[10px]">Private Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {TREATMENTS.map(t => (
                      <tr key={t.id} className="hover:bg-sky-50 transition-colors group">
                        <td className="px-10 py-7">
                           <p className="font-bold text-slate-900">{t.title}</p>
                           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-sky-600">{t.category}</p>
                        </td>
                        <td className="px-10 py-7 text-right">
                           <p className="font-black text-sky-700 text-lg">{t.price}</p>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-slate-50">
                       <td className="px-10 py-8 font-black text-slate-400 italic">Financial Assistance</td>
                       <td className="px-10 py-8 text-right">
                          <span className="bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">0% Finance Available</span>
                       </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-16 grid md:grid-cols-2 gap-8">
                 <div className="bg-sky-950 p-12 rounded-[3.5rem] text-white">
                    <h4 className="text-2xl font-black mb-4">Patient Finance</h4>
                    <p className="text-sky-200 mb-8 leading-relaxed">Spread the cost of your dental treatment over 6, 10, or 12 months with interest-free financing options.</p>
                    <button className="w-full bg-white text-sky-950 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-sky-50 transition-all">Calculate Payments</button>
                 </div>
                 <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
                    <h4 className="text-2xl font-black mb-4 text-slate-900">Health Insurance</h4>
                    <p className="text-slate-500 mb-8 leading-relaxed">We accept all major health insurance providers including Bupa, AXA, and Vitality Health.</p>
                    <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">Submit A Claim</button>
                 </div>
              </div>
            </div>
          </section>
        );
      case PageView.ABOUT:
        return (
          <section className="pt-40 pb-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
               <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
                  <div className="space-y-10">
                     <h2 className="text-6xl font-black text-slate-950 leading-[0.95] tracking-tighter">Clinical Heritage. <br/> <span className="text-sky-500 font-light italic">Digital Innovation.</span></h2>
                     <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        The London Dental Centre was established with a singular mission: to merge the clinical excellence of Harley Street with the cutting-edge technology of the 21st century.
                     </p>
                     <p className="text-slate-500 leading-relaxed">
                        Our state-of-the-art clinic features intra-oral scanners, 3D CBCT imaging, and a dedicated surgical suite, allowing us to perform complex transformations under one roof. 
                     </p>
                     <div className="flex gap-10">
                        <div>
                           <p className="text-5xl font-black text-slate-950">25+</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Specialists</p>
                        </div>
                        <div>
                           <p className="text-5xl font-black text-slate-950">10k</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Annual Patients</p>
                        </div>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute -inset-4 bg-sky-100 rounded-[4rem] -rotate-3 -z-10"></div>
                     <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" className="w-full h-[600px] object-cover rounded-[3.5rem] shadow-2xl" alt="Clinical Excellence" />
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
    <div className="min-h-screen flex flex-col font-['Open_Sans'] selection:bg-sky-500 selection:text-white">
      <Navigation currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <footer className="bg-slate-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-32">
             <div className="col-span-2 space-y-10">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-sky-700 rounded-xl flex items-center justify-center mr-4 shadow-xl">
                    <span className="font-black text-2xl">L</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter">LONDON DENTAL CENTRE</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md italic">
                  "Defining the standard for dental care in London. Where clinical precision meets patient comfort."
                </p>
                <div className="flex space-x-6">
                   {['Instagram', 'LinkedIn', 'Google'].map(s => (
                     <a key={s} href="#" className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-sky-500 transition-colors">{s}</a>
                   ))}
                </div>
             </div>
             <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-sky-500">Quick Links</h4>
                <ul className="space-y-5 text-sm font-bold text-slate-400">
                   <li><button onClick={() => setCurrentView(PageView.TREATMENTS)} className="hover:text-white transition-colors">Treatments</button></li>
                   <li><button onClick={() => setCurrentView(PageView.ABOUT)} className="hover:text-white transition-colors">Our Practice</button></li>
                   <li><button onClick={() => setCurrentView(PageView.PRICES)} className="hover:text-white transition-colors">Fees Guide</button></li>
                   <li><button onClick={() => setCurrentView(PageView.CONTACT)} className="hover:text-white transition-colors">Emergency Line</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-sky-500">Accreditation</h4>
                <div className="space-y-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-500">
                   <p className="border-l-2 border-sky-900 pl-4">GDC Registered Practice</p>
                   <p className="border-l-2 border-sky-900 pl-4">CQC Inspected: Outstanding</p>
                   <p className="border-l-2 border-sky-900 pl-4">NHS England Provider</p>
                </div>
             </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
             <p>&copy; 2024 London Dental Centre. Harley Street Clinic. All Rights Reserved.</p>
             <div className="flex space-x-10 mt-6 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Care</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- INITIALIZATION ---
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
