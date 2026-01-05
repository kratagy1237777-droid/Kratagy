
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

// --- COMPREHENSIVE DATA ---
const TREATMENTS: Treatment[] = [
  { id: 'exam', category: 'General', title: 'Dental Examinations', desc: 'Comprehensive oral health assessments including digital X-rays and cancer screening.', icon: '🔍', price: '£85', features: ['Oral cancer check', 'Digital X-rays', 'Custom plan'] },
  { id: 'hygiene', category: 'General', title: 'Hygiene & Clean', desc: 'Professional scale and polish to remove plaque and staining, preventing gum disease.', icon: '🧼', price: '£75', features: ['Airflow technology', 'Gum health check', 'Fresh breath'] },
  { id: 'fillings', category: 'General', title: 'White Fillings', desc: 'Mercury-free, tooth-colored restorations that blend seamlessly with your natural teeth.', icon: '💎', price: '£150', features: ['Mercury-free', 'Natural aesthetic', 'BPA-free'] },
  { id: 'root-canal', category: 'General', title: 'Root Canal Treatment', desc: 'Expert endodontic care to save infected teeth and provide immediate pain relief.', icon: '⚡', price: '£450', features: ['Pain relief', 'Save natural teeth', 'Specialist tech'] },
  { id: 'whitening', category: 'Cosmetic', title: 'Professional Whitening', desc: 'Enlighten or Boutique systems for guaranteed shade improvements and long-lasting results.', icon: '🌟', price: '£395', features: ['B1 shade guarantee', 'Safe application', 'Home kits'] },
  { id: 'bonding', category: 'Cosmetic', title: 'Composite Bonding', desc: 'Reshape and restore teeth in a single visit with no drilling or injections required.', icon: '✨', price: '£250', features: ['Single visit', 'No drilling', 'Seamless blend'] },
  { id: 'veneers', category: 'Cosmetic', title: 'Porcelain Veneers', desc: 'Custom-crafted shells for a total smile makeover, correcting chips, gaps, and stains.', icon: '🎭', price: '£850', features: ['Bespoke design', 'Stain resistant', 'Highly durable'] },
  { id: 'invisalign', category: 'Orthodontics', title: 'Invisalign®', desc: 'The world’s leading clear aligner system for discreet teeth straightening.', icon: '📏', price: '£2,500', features: ['Removable', 'Virtually invisible', 'Digital planning'] },
  { id: 'braces', category: 'Orthodontics', title: 'Fixed Braces', desc: 'Traditional and ceramic options for complex tooth movements and bite corrections.', icon: '⚓', price: '£1,800', features: ['Reliable results', 'Ceramic options', 'NHS/Private'] },
  { id: 'implants', category: 'Restorative', title: 'Dental Implants', desc: 'The gold standard for tooth replacement. A permanent, titanium-rooted solution.', icon: '🦷', price: '£1,800', features: ['Titanium root', 'Natural feel', 'Bone preservation'] },
  { id: 'crowns', category: 'Restorative', title: 'Crowns & Bridges', desc: 'Premium ceramic restorations to strengthen damaged teeth or replace gaps.', icon: '👑', price: '£750', features: ['Full porcelain', 'Hand-crafted', 'Long lasting'] },
  { id: 'dentures', category: 'Restorative', title: 'Premium Dentures', desc: 'Natural-looking, high-stability dentures designed for comfort and function.', icon: '👄', price: '£650', features: ['Stable fit', 'Natural gum look', 'Chrome options'] },
  { id: 'extractions', category: 'Surgical', title: 'Surgical Extractions', desc: 'Safe removal of failing or wisdom teeth in a comfortable, controlled environment.', icon: '🏥', price: '£180', features: ['Local anesthetic', 'Nervous patient care', 'Aftercare included'] },
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
          <div className="h-14 w-auto flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
            <img src="logo.png" alt="The London Dental Centre Logo" className="h-full w-auto object-contain" />
          </div>
          <div>
            <h1 className={`text-xl font-black leading-none tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>THE LONDON DENTAL</h1>
            <p className="text-[10px] text-brand font-black tracking-[0.2em] uppercase">Centre of Excellence</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          {[PageView.HOME, PageView.TREATMENTS, PageView.ABOUT, PageView.PRICES].map((view) => (
            <button 
              key={view}
              onClick={() => setView(view)}
              className={`text-sm font-bold capitalize transition-colors tracking-wide ${currentView === view ? 'text-brand' : scrolled ? 'text-slate-600 hover:text-brand' : 'text-slate-100 hover:text-white'}`}
            >
              {view}
            </button>
          ))}
          <button 
            onClick={() => setView(PageView.CONTACT)}
            className="bg-brand text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 active:scale-95"
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'Invisalign Transformation'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // WhatsApp redirect to 020 7123 4567 (UK Country Code 44)
    const whatsappNumber = '442071234567';
    const textMessage = `*New Appointment Request - The London Dental Centre*%0A%0A` +
      `*Patient Name:* ${formData.name}%0A` +
      `*Phone Number:* ${formData.phone}%0A` +
      `*Treatment:* ${formData.treatment}%0A%0A` +
      `_Direct Website Lead_`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textMessage}`;

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/10 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Your New Smile <br/> <span className="text-brand font-light italic">Starts Today.</span></h2>
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 text-2xl border border-white/10 text-brand">📞</div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Direct Line</p>
                  <p className="text-2xl font-bold">020 7123 4567</p>
                  <p className="text-sm text-brand mt-1">Available for Emergencies & Bookings</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 text-2xl border border-white/10 text-brand">📍</div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Our Location</p>
                  <p className="text-2xl font-bold">109 Lever Street, London, EC1V 3RQ</p>
                  <p className="text-sm text-slate-400 mt-1">Centre of Clinical Excellence</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mr-6 text-2xl border border-white/10 text-brand">✉️</div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Us</p>
                  <p className="text-lg font-bold">info@thelondondentalcentre.co.uk</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-14 text-slate-900 shadow-2xl">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">Secure Appointment</h3>
                <p className="text-slate-500 text-sm mb-8 italic leading-relaxed">Transmits your request directly to our desk via WhatsApp.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-50 px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all font-medium" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Phone</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-50 px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all font-medium" 
                        placeholder="07xxx xxxxxx" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Treatment Interests</label>
                    <select 
                      value={formData.treatment}
                      onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                      className="w-full bg-slate-50 px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all appearance-none cursor-pointer bg-white font-bold"
                    >
                      <option>Invisalign Transformation</option>
                      <option>Porcelain Veneers</option>
                      <option>Dental Implants</option>
                      <option>General Checkup</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                  <button type="submit" disabled={isLoading} className="w-full bg-brand text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all shadow-xl shadow-brand/10 active:scale-[0.98] flex items-center justify-center">
                    {isLoading ? <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : 'Secure via WhatsApp'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-brand/10 text-brand rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tighter uppercase">Request Sent</h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Your request has been sent to our Lever Street desk.</p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left space-y-3 mb-8 text-sm">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 mb-2">Booking Summary</p>
                   <p><span className="text-slate-500">Name:</span> <span className="font-bold">{formData.name}</span></p>
                   <p><span className="text-slate-500">Service:</span> <span className="font-bold">{formData.treatment}</span></p>
                   <p><span className="text-slate-500">Status:</span> <span className="text-brand font-bold uppercase tracking-widest text-[10px]">Transmitted to HQ</span></p>
                </div>
                <button onClick={() => setIsSubmitted(false)} className="text-brand font-bold text-sm hover:underline transition-all">← Start New Request</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

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
                     <span className="bg-brand text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-brand/20">Official HQ: EC1V</span>
                     <span className="text-slate-400 text-xs font-bold tracking-widest uppercase tracking-[0.2em]">Lever Street Excellence</span>
                  </div>
                  <h1 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter uppercase">
                    Excellence in <br/> <span className="text-brand italic font-light lowercase">Every Smile.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium">
                    The London Dental Centre provides bespoke clinical care in our state-of-the-art facility at 109 Lever Street.
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <button onClick={() => setCurrentView(PageView.CONTACT)} className="bg-white text-slate-950 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-brand-light transition-all shadow-2xl active:scale-95">
                       Book Initial Consult
                    </button>
                    <button onClick={() => setCurrentView(PageView.TREATMENTS)} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all text-center">
                       View Treatments
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK STATS */}
            <section className="bg-white py-16 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">4.9★</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-brand">Google Reviews</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">15+</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-brand">Specialist Team</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">24/7</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-brand">Emergency Care</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 mb-2">0%</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-brand">Interest Finance</p>
                    </div>
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
                 <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">Clinical Mastery.</h2>
                 <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">Select a category below to browse our range of specialist dental care.</p>
                 
                 <div className="flex flex-wrap justify-center gap-3">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand text-white shadow-xl shadow-brand/20' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                      >
                        {cat}
                      </button>
                    ))}
                 </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTreatments.map(t => (
                  <div key={t.id} className="bg-slate-50 p-10 rounded-[3rem] flex flex-col hover:bg-white hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-slate-100">
                    <div className="flex justify-between items-start mb-10">
                       <div className="text-5xl group-hover:scale-110 transition-transform">{t.icon}</div>
                       <div className="bg-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 shadow-sm">{t.category}</div>
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">{t.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{t.desc}</p>
                    <button onClick={() => setCurrentView(PageView.CONTACT)} className="bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold text-xs hover:bg-brand transition-colors uppercase tracking-widest">Book Consultation</button>
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
                 <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase">Investment Guide.</h2>
                 <p className="text-slate-500 font-medium italic">Transparent fees for premium dental outcomes.</p>
              </div>

              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-10 py-8 font-black uppercase tracking-widest text-[10px]">Procedure</th>
                      <th className="px-10 py-8 text-right font-black uppercase tracking-widest text-[10px]">Fee From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {TREATMENTS.map(t => (
                      <tr key={t.id} className="hover:bg-brand/5 transition-colors group">
                        <td className="px-10 py-7 font-bold text-slate-900">{t.title}</td>
                        <td className="px-10 py-7 text-right font-black text-brand-dark text-lg">{t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                     <h2 className="text-6xl font-black text-slate-950 leading-[0.95] tracking-tighter uppercase">Lever Street. <br/> <span className="text-brand font-light italic lowercase">the new standard.</span></h2>
                     <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        Centrally located at 109 Lever Street, London, EC1V 3RQ, our clinic combines clinical mastery with advanced patient technology.
                     </p>
                     <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Main Reception</p>
                        <p className="text-3xl font-black text-slate-900">020 7123 4567</p>
                        <p className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">109 Lever Street, London, EC1V 3RQ</p>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="absolute -inset-4 bg-brand/5 rounded-[4rem] -rotate-3 -z-10"></div>
                     <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" className="w-full h-[600px] object-cover rounded-[3.5rem] shadow-2xl" alt="Clinical Excellence" />
                  </div>
               </div>
            </div>
          </section>
        );
      case PageView.CONTACT:
        return <div className="pt-20"><ContactSection /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-['Open_Sans'] selection:bg-brand selection:text-white">
      <Navigation currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <footer className="bg-slate-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-32">
             <div className="col-span-2 space-y-10">
                <div className="flex items-center">
                  <div className="h-20 w-auto mr-4 flex items-center justify-center bg-white p-2 rounded-2xl">
                    <img src="logo.png" alt="London Dental Centre Logo" className="h-full w-auto object-contain" />
                  </div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase">THE LONDON DENTAL CENTRE</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md italic opacity-80">
                  "Defining the standard for dental care in London at 109 Lever Street, London, EC1V 3RQ."
                </p>
                <div className="flex gap-4">
                   <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                      <p className="text-[10px] font-black uppercase text-brand tracking-widest mb-1">Direct Dial</p>
                      <p className="font-bold">020 7123 4567</p>
                   </div>
                </div>
             </div>
             <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brand">Connect</h4>
                <ul className="space-y-5 text-sm font-bold text-slate-400">
                   <li><button onClick={() => setCurrentView(PageView.TREATMENTS)} className="hover:text-white transition-colors">Treatments</button></li>
                   <li><button onClick={() => setCurrentView(PageView.ABOUT)} className="hover:text-white transition-colors">About Us</button></li>
                   <li><button onClick={() => setCurrentView(PageView.PRICES)} className="hover:text-white transition-colors">Fee Guide</button></li>
                   <li><button onClick={() => setCurrentView(PageView.CONTACT)} className="hover:text-white transition-colors">Emergency</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-brand">Location</h4>
                <div className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-500 leading-relaxed">
                   <p className="text-white text-xs mb-2">109 Lever Street</p>
                   <p>London, EC1V 3RQ</p>
                   <p className="mt-4 border-l-2 border-brand/20 pl-4">GDC Registered Practice</p>
                </div>
             </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500">
             <p>&copy; 2024 The London Dental Centre. 109 Lever Street, London, EC1V 3RQ. All Rights Reserved.</p>
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
