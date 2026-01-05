
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'Invisalign Transformation',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Construct the WhatsApp Message
    const whatsappNumber = '8237362112';
    const textMessage = `*New Appointment Request - London Dental Centre*%0A%0A` +
      `*Patient Name:* ${formData.name}%0A` +
      `*Phone Number:* ${formData.phone}%0A` +
      `*Treatment:* ${formData.treatment}%0A%0A` +
      `_Submitted via Website Booking Portal_`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${textMessage}`;

    // Simulate API transmission and trigger WhatsApp redirect
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop ?? 0, behavior: 'smooth' });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 px-4 bg-white overflow-hidden scroll-mt-20" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Direct Info & Trust */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                Secure Booking Portal
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Your Smile Transformation <br/> <span className="text-brand italic font-light">Starts Right Here.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Complete the secure form to request your priority consultation. Your details will be sent directly to our specialists via secure WhatsApp link.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                <h4 className="font-bold text-slate-900 mb-1">Clinic Desk</h4>
                <p className="text-brand font-black text-lg">020 7123 4567</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Available 24/7</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📍</div>
                <h4 className="font-bold text-slate-900 mb-1">Harley Street</h4>
                <p className="text-slate-700 font-bold">123 Harley Street</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">London, W1G 6AF</p>
              </div>
            </div>

            <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white flex items-center justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <p className="font-black text-lg mb-1 uppercase tracking-tighter">Dental Emergency?</p>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">Immediate same-day care</p>
              </div>
              <a href="tel:02071234567" className="bg-brand text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all relative z-10">
                Call Now
              </a>
            </div>
          </div>

          {/* Right Column: High-Conversion Form / Result Slip */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] -z-10 blur-2xl"></div>
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 min-h-[500px] flex flex-col justify-center">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Secure Appointment</h3>
                    <p className="text-slate-500 text-sm font-medium italic">Clicking secure will direct your request to our WhatsApp team.</p>
                  </div>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-slate-300 font-medium" 
                          placeholder="e.g. John Smith" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all placeholder:text-slate-300 font-medium" 
                          placeholder="07xxx xxxxxx" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Interest</label>
                      <select 
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer font-bold text-slate-700"
                      >
                        <option>General Check-up</option>
                        <option>Invisalign Transformation</option>
                        <option>Dental Implants</option>
                        <option>Teeth Whitening</option>
                        <option>Emergency Care</option>
                      </select>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-brand text-white py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 active:scale-[0.98] flex items-center justify-center space-x-3"
                    >
                      {isLoading ? (
                        <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <span>Secure Appointment</span>
                          <span className="text-xl">✨</span>
                        </>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center space-x-3 text-[10px] font-black text-slate-400 uppercase tracking-widest pt-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>GDPR Secure WhatsApp Transmission</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-brand/10 text-brand rounded-full flex items-center justify-center text-4xl mx-auto mb-8 border border-brand/20">✅</div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">WhatsApp Sent!</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium">Thank you, <span className="text-brand font-black">{formData.name}</span>. Your request has been sent to our desk via WhatsApp.</p>
                  
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-left space-y-4 mb-10 shadow-sm relative overflow-hidden">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-3 mb-4">Official Appointment Summary</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[11px] font-black text-slate-400 uppercase">Patient:</span>
                      <span className="font-bold text-slate-900">{formData.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[11px] font-black text-slate-400 uppercase">Treatment:</span>
                      <span className="font-bold text-brand">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-200">
                      <span className="text-[11px] font-black text-slate-400 uppercase">Status:</span>
                      <span className="font-black text-green-600 text-[11px] uppercase tracking-widest">Sent to WhatsApp</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] hover:text-brand transition-all"
                  >
                    ← Start New Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
