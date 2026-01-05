
import React, { useState } from 'react';
import { PageView } from './types.ts';
import { TREATMENTS, TEAM, REVIEWS } from './constants.tsx';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import BlueprintView from './components/BlueprintView.tsx';
import Footer from './components/Footer.tsx';
import ContactSection from './components/ContactSection.tsx';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<PageView>(PageView.HOME);

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
                  {TREATMENTS.map((t) => (
                    <div key={t.id} className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-2xl hover:shadow-sky-500/10 transition-all group">
                      <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{t.icon}</div>
                      <h4 className="text-xl font-bold mb-4 text-slate-900">{t.title}</h4>
                      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        {t.shortDesc}
                      </p>
                      <button 
                        onClick={() => setCurrentView(PageView.TREATMENTS)}
                        className="text-sky-600 font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform"
                      >
                        Explore Treatment <span className="ml-2">→</span>
                      </button>
                    </div>
                  ))}
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
          <section className="py-24 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-center">Comprehensive Dental Treatments</h2>
              <p className="text-slate-500 text-center mb-16 text-lg">World-class dental technology tailored to your unique smile goals.</p>
              
              <div className="space-y-24">
                {TREATMENTS.map((t, i) => (
                  <div key={t.id} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <div className="bg-sky-50 text-sky-700 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-widest">{t.category}</div>
                      <h3 className="text-3xl font-bold mb-6 text-slate-900">{t.title}</h3>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">{t.shortDesc}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {t.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-center text-sm font-medium text-slate-700">
                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mr-2"></span>
                            {b}
                          </div>
                        ))}
                      </div>

                      <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                         <div>
                            <p className="text-xs text-slate-400 font-bold uppercase">Prices From</p>
                            <p className="text-2xl font-bold text-slate-900">{t.priceFrom}</p>
                         </div>
                         <button 
                            onClick={() => setCurrentView(PageView.CONTACT)}
                            className="bg-sky-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-sky-800"
                          >
                           Book Consult
                         </button>
                      </div>
                    </div>
                    <div className="flex-1 w-full h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl">
                      <img 
                        src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&sig=${t.id}`} 
                        alt={t.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case PageView.ABOUT:
        return (
          <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
               <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4">Meet the Experts</h2>
                 <p className="text-slate-500 max-w-2xl mx-auto">Our clinical team is comprised of highly qualified specialists dedicated to providing the highest standard of oral care.</p>
               </div>
               <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                 {TEAM.map((member, i) => (
                   <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg group">
                      <div className="h-96 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8">
                        <h4 className="text-2xl font-bold mb-2">{member.name}</h4>
                        <p className="text-sky-600 font-bold text-sm mb-4">{member.role}</p>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">{member.bio}</p>
                        <div className="flex flex-wrap gap-2">
                           {member.specialties.map(s => (
                             <span key={s} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full font-bold">{s}</span>
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
          <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Investment in Your Smile</h2>
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-sky-900 text-white">
                      <th className="px-8 py-6 text-left font-bold uppercase tracking-wider text-sm">Treatment</th>
                      <th className="px-8 py-6 text-right font-bold uppercase tracking-wider text-sm">Fees From</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: 'Initial Consultation & X-Rays', price: '£85' },
                      { name: 'Routine Hygiene Appointment', price: '£75' },
                      { name: 'Invisalign Full (Dual Arch)', price: '£3,500' },
                      { name: 'Single Tooth Implant', price: '£2,100' },
                      { name: 'Composite Bonding (Per Tooth)', price: '£250' },
                      { name: 'Professional Teeth Whitening', price: '£395' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-sky-50 transition-colors">
                        <td className="px-8 py-6 text-slate-700 font-medium">{row.name}</td>
                        <td className="px-8 py-6 text-right font-bold text-sky-700">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-12 p-8 bg-sky-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
                 <div className="mb-6 md:mb-0">
                    <h4 className="text-xl font-bold mb-2">Finance Your Treatment</h4>
                    <p className="text-sky-200 text-sm">Spread the cost with 0% interest for up to 12 months.</p>
                 </div>
                 <button className="bg-white text-sky-900 px-8 py-3 rounded-full font-bold hover:bg-sky-50 transition-all">Check Eligibility</button>
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
