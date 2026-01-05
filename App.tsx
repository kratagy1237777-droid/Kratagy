
import React, { useState, useMemo } from 'react';
import { PageView } from './types.ts';
import { TREATMENTS, TEAM, REVIEWS } from './constants.tsx';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import BlueprintView from './components/BlueprintView.tsx';
import Footer from './components/Footer.tsx';
import ContactSection from './components/ContactSection.tsx';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Cosmetic', 'Orthodontics', 'Restorative', 'Surgical', 'Facial'];

  const filteredTreatments = useMemo(() => {
    if (activeCategory === 'All') return TREATMENTS;
    return TREATMENTS.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  const renderContent = () => {
    switch (currentView) {
      case PageView.HOME:
        return (
          <>
            <Hero onCtaClick={() => setCurrentView(PageView.CONTACT)} />
            
            {/* Trust Bar */}
            <section className="bg-white py-12 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all text-xs font-bold tracking-[0.2em] text-slate-400">
                <div>GDC REGULATED</div>
                <div>CQC COMPLIANT</div>
                <div>NHS PARTNER</div>
                <div>BUPA ACCREDITED</div>
              </div>
            </section>

            {/* Core Treatments Section */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
                  <h3 className="text-4xl font-bold text-slate-900 mb-6">Transformative Care, Exceptional Results</h3>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    We offer a full spectrum of dental services using the latest digital technology for precision and comfort.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {TREATMENTS.slice(0, 4).map((t) => (
                    <div key={t.id} className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-sky-500/10 transition-all group cursor-pointer" onClick={() => { setCurrentView(PageView.TREATMENTS); setActiveCategory(t.category); }}>
                      <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{t.icon}</div>
                      <h4 className="text-xl font-bold mb-4 text-slate-900">{t.title}</h4>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        {t.shortDesc}
                      </p>
                      <button 
                        className="text-sky-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform"
                      >
                        Explore Treatment <span className="ml-2">→</span>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-12 text-center">
                   <button onClick={() => setCurrentView(PageView.TREATMENTS)} className="bg-sky-700 text-white px-8 py-3 rounded-full font-bold hover:bg-sky-800 transition-all">View All 25+ Treatments</button>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white overflow-hidden">
               <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                      alt="Happy Patient" 
                      className="rounded-[2rem] shadow-2xl"
                    />
                    <div className="absolute -bottom-8 -right-8 bg-sky-900 p-8 rounded-3xl text-white shadow-xl hidden md:block">
                        <p className="text-4xl font-bold mb-1">99%</p>
                        <p className="text-sm opacity-80">Patient Satisfaction</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-8 text-slate-900">Why Patients Trust London Dental Excellence</h2>
                    <ul className="space-y-6">
                      {[
                        { title: 'Award-Winning Team', desc: 'Our dentists are industry leaders in UK dental innovation.' },
                        { title: 'State-of-the-Art Tech', desc: 'Digital scanners and 3D imaging for faster, painless results.' },
                        { title: 'Nervous Patient Care', desc: 'Dedicated sedation services and a calm, spa-like environment.' },
                        { title: 'Flexible Financing', desc: '0% Interest payment plans available for all private treatments.' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-6 h-6 bg-sky-100 rounded-full flex items-center justify-center mr-4 mt-1">
                            <span className="text-sky-600 text-sm">✓</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-900 text-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                  <h3 className="text-3xl font-bold mb-4">Patient Stories</h3>
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-yellow-400 text-2xl mx-0.5">★</span>)}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="bg-slate-800 p-10 rounded-3xl border border-slate-700 relative">
                       <p className="text-lg italic mb-8 leading-relaxed">"{r.text}"</p>
                       <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center font-bold mr-4">
                            {r.author[0]}
                          </div>
                          <div>
                             <p className="font-bold">{r.author}</p>
                             <p className="text-xs text-slate-400">{r.date} • Google Review</p>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Home Page Contact Call-to-Action */}
            <ContactSection />
          </>
        );
      case PageView.TREATMENTS:
        return (
          <section className="py-24 px-4 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Clinical Excellence</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-12">World-class dental technology and expertise tailored to your unique smile goals.</p>
                
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-16">
                   {categories.map(cat => (
                     <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-sky-700 text-white shadow-lg' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                      >
                        {cat}
                     </button>
                   ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTreatments.map((t) => (
                  <div key={t.id} className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col hover:bg-white hover:shadow-2xl transition-all group">
                    <div className="flex justify-between items-start mb-8">
                      <div className="text-5xl group-hover:scale-110 transition-transform">{t.icon}</div>
                      <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest border border-slate-100 shadow-sm">{t.category}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{t.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{t.shortDesc}</p>
                    
                    <div className="space-y-3 mb-8">
                      {t.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                          <span className="w-1 h-1 bg-sky-500 rounded-full mr-3"></span>
                          {b}
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
                       <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Fees From</p>
                          <p className="text-xl font-bold text-sky-700">{t.priceFrom}</p>
                       </div>
                       <button 
                          onClick={() => setCurrentView(PageView.CONTACT)}
                          className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-sky-700 transition-colors"
                        >
                         Book Now
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case PageView.ABOUT:
        return (
          <section className="py-24 px-4 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4">Meet the Experts</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto">Our clinical team is comprised of highly qualified specialists dedicated to providing the highest standard of oral care.</p>
               </div>
               <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                 {TEAM.map((member, i) => (
                   <div key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-lg group hover:shadow-2xl transition-all">
                      <div className="h-[450px] overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-10">
                        <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                        <p className="text-sky-600 font-bold text-sm mb-4">{member.role}</p>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                        <div className="flex flex-wrap gap-2">
                           {member.specialties.map(s => (
                             <span key={s} className="px-3 py-1 bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-widest rounded-full">{s}</span>
                           ))}
                        </div>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </section>
        );
      case PageView.CONTACT:
        return <ContactSection />;
      case PageView.PRICES:
        return (
          <section className="py-24 px-4 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Investment in Your Smile</h2>
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-10 py-8 font-black uppercase tracking-widest text-[10px]">Procedure</th>
                      <th className="px-10 py-8 text-right font-black uppercase tracking-widest text-[10px]">Fees From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {TREATMENTS.map((t, i) => (
                      <tr key={i} className="hover:bg-sky-50 transition-colors">
                        <td className="px-10 py-7">
                           <p className="font-bold text-slate-900">{t.title}</p>
                           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t.category}</p>
                        </td>
                        <td className="px-10 py-7 text-right font-bold text-sky-700 text-lg">{t.priceFrom}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 p-10 bg-sky-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
                 <div className="mb-6 md:mb-0">
                    <h4 className="text-2xl font-bold mb-2">Finance Your Treatment</h4>
                    <p className="text-sky-200 text-sm">Spread the cost with 0% interest for up to 12 months.</p>
                 </div>
                 <button className="bg-white text-sky-900 px-10 py-4 rounded-2xl font-bold hover:bg-sky-50 transition-all shadow-lg uppercase tracking-widest text-xs">Check Eligibility</button>
              </div>
            </div>
          </section>
        );
      case PageView.BLUEPRINT:
        return <BlueprintView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-['Open_Sans']">
      <Navigation currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {/* Floating Blueprint Toggle for Developers */}
      <button 
        onClick={() => setCurrentView(PageView.BLUEPRINT)}
        className="fixed bottom-8 right-8 bg-slate-900 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
        title="View Technical Specs"
      >
        <span className="text-xl">📋</span>
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Technical Specs</span>
      </button>

      <Footer setView={setCurrentView} />
    </div>
  );
};

export default App;
