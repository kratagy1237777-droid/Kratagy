
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: 'General Check-up',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 px-4 bg-white overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Direct Info & Trust */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Experience World-Class <span className="text-sky-600 underline decoration-sky-200 decoration-4 underline-offset-8">Dental Care</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're looking for a routine check-up or a complete smile transformation, our Harley Street team is here to guide you every step of the way.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-sky-200 transition-colors">
                <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                <h4 className="font-bold text-slate-900 mb-1">Phone & WhatsApp</h4>
                <p className="text-sky-700 font-bold text-lg">020 7123 4567</p>
                <p className="text-sm text-slate-500">Available Mon-Sat</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-sky-200 transition-colors">
                <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">📍</div>
                <h4 className="font-bold text-slate-900 mb-1">Clinic Address</h4>
                <p className="text-slate-700 font-medium">123 Harley Street</p>
                <p className="text-sm text-slate-500">London, W1G 6AF</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 flex items-center">
                <span className="mr-2">🕒</span> Opening Hours
              </h4>
              <div className="grid grid-cols-2 gap-y-2 text-sm border-t border-slate-100 pt-4">
                <span className="text-slate-500">Monday - Friday</span>
                <span className="text-slate-900 font-semibold text-right">08:00 - 19:00</span>
                <span className="text-slate-500">Saturday</span>
                <span className="text-slate-900 font-semibold text-right">09:00 - 16:00</span>
                <span className="text-slate-500">Sunday</span>
                <span className="text-sky-600 font-bold text-right italic text-xs uppercase">Emergency Appointments Only</span>
              </div>
            </div>

            <div className="p-6 bg-sky-900 rounded-3xl text-white flex items-center justify-between">
              <div>
                <p className="font-bold text-lg mb-1">Dental Emergency?</p>
                <p className="text-sm text-sky-200">Call us now for same-day relief.</p>
              </div>
              <button className="bg-white text-sky-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-sky-50 transition-colors">
                Call Clinic
              </button>
            </div>
          </div>

          {/* Right Column: Form or Success Information */}
          <div className="relative">
            <div className="absolute -inset-4 bg-sky-600/5 rounded-[3rem] -z-10 blur-2xl"></div>
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Consultation</h3>
                  <p className="text-slate-500 text-sm mb-8">Start your journey to a healthier, brighter smile today.</p>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
                          placeholder="e.g. James Bond" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
                          placeholder="07xxx xxxxxx" 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300" 
                        placeholder="name@email.com" 
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">How can we help?</label>
                      <select 
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all bg-white appearance-none cursor-pointer"
                      >
                        <option>General Check-up</option>
                        <option>Invisalign Transformation</option>
                        <option>Dental Implants</option>
                        <option>Teeth Whitening</option>
                        <option>Emergency Care</option>
                        <option>Porcelain Veneers</option>
                        <option>Facial Aesthetics</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Your Message (Optional)</label>
                      <textarea 
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 px-4 py-3.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300"
                        placeholder="Tell us about your goals or concerns..."
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 py-2">
                      <input type="checkbox" required className="mt-1 accent-sky-600 rounded" id="consent" />
                      <label htmlFor="consent" className="text-xs text-slate-500 leading-normal">
                        I agree to the storage and handling of my data in accordance with the Privacy Policy (GDPR Compliant).
                      </label>
                    </div>

                    <button type="submit" className="w-full bg-sky-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-200 active:scale-[0.98] flex items-center justify-center space-x-2">
                      <span>Confirm Request</span>
                      <span className="text-xl">✨</span>
                    </button>
                    
                    <p className="text-center text-xs font-medium text-slate-400">
                      ⚡️ Average response time: <span className="text-sky-600">24 Minutes</span>
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✅</div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
                  <p className="text-slate-600 mb-8">Thank you, <span className="font-bold">{formData.name}</span>. We have your information and a treatment specialist will contact you shortly.</p>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-left space-y-3 mb-8">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2">Your Submission Details</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-slate-900">{formData.treatment}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Phone:</span>
                      <span className="font-bold text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Email:</span>
                      <span className="font-bold text-slate-900">{formData.email}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sky-600 font-bold text-sm hover:underline"
                  >
                    ← Edit Information
                  </button>
                  
                  <div className="mt-12 flex items-center justify-center space-x-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span>System Online - Lead Secured</span>
                  </div>
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
