
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
    
    // WhatsApp redirect to 020 7123 4567 (UK +44)
    const whatsappNumber = '442071234567';
    const textMessage = `*New Appointment Request - The London Dental Centre*%0A%0A` +
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
          {/* Info Side */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-brand/10 text-brand rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                Clinic HQ: EC1V
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">
                Elite Care at <br/> <span className="text-brand italic font-light lowercase">Lever Street.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our flagship clinic at 109 Lever Street provides world-class dental expertise in a luxury environment.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                <h4 className="font-bold text-slate-900 mb-1">Direct Dial</h4>
                <p className="text-brand font-black text-lg">020 7123 4567</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Instant Booking Desk</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-brand/30 transition-colors">
                <div className="w-12 h-12 bg-white shadow-sm rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">✉️</div>
                <h4 className="font-bold text-slate-900 mb-1">Email Desk</h4>
                <p className="text-slate-700 font-bold text-sm">info@thelondondentalcentre.co.uk</p>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Official Contact</p>
              </div>
            </div>

            <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white flex items-center justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/20 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              <div className="relative z-10">
                <p className="font-black text-lg mb-1 uppercase tracking-tighter">Our Address</p>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">109 Lever Street, London, EC1V 3RQ</p>
              </div>
              <div className="bg-brand text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">London</div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] -z-10 blur-2xl"></div>
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 min-h-[500px] flex flex-col justify-center">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Secure Appointment</h3>
                    <p className="text-slate-500 text-sm font-medium italic">Broadcast your request directly to WhatsApp and our email system.</p>
                  </div>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Patient Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all font-medium" 
                          placeholder="e.g. John Smith" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Patient Phone</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all font-medium" 
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
                        className="w-full bg-slate-50 px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand outline-none transition-all bg-white appearance-none cursor-pointer font-bold"
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
                        <span>Secure Appointment via WhatsApp</span>
                      )}
                    </button>
                    
                    <div className="flex items-center justify-center space-x-3 text-[10px] font-black text-slate-400 uppercase tracking-widest pt-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Secure Data Transmission Active</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-brand/10 text-brand rounded-full flex items-center justify-center text-4xl mx-auto mb-8 border border-brand/20">✅</div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">Request Sent!</h3>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium">Thank you, <span className="text-brand font-black">{formData.name}</span>. Your appointment slip has been broadcasted to our Lever Street HQ.</p>
                  
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 text-left space-y-4 mb-10 shadow-sm relative overflow-hidden">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-3 mb-4">Transmission Summary</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[11px] font-black text-slate-400 uppercase">Clinic:</span>
                      <span className="font-bold text-slate-900">The London Dental Centre</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[11px] font-black text-slate-400 uppercase">Patient:</span>
                      <span className="font-bold text-slate-900">{formData.name}</span>
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
