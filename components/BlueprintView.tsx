
import React from 'react';
import { COLORS, SEO_KEYWORDS } from '../constants.tsx';

const BlueprintView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      <header className="border-b border-slate-200 pb-8">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Website Blueprint & Specifications</h2>
        <p className="text-slate-500 text-lg">Detailed guide for Google Studio / Google Sites Implementation.</p>
      </header>

      {/* Design System Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-sky-900 flex items-center">
          <span className="bg-sky-100 text-sky-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">01</span>
          Design System (Visual Branding)
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Color Palette</h4>
            <div className="space-y-3">
              {Object.entries(COLORS).map(([name, hex]) => (
                <div key={name} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded border border-slate-200 mr-3" style={{ backgroundColor: hex }}></div>
                    <span className="font-semibold text-slate-700 capitalize">{name}</span>
                  </div>
                  <code className="text-sky-600 font-mono text-sm">{hex}</code>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-slate-400">Typography (Google Fonts)</h4>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-sky-600 bg-sky-50">
                <p className="text-xs text-sky-600 font-bold mb-1">Headlines: Montserrat</p>
                <p className="text-2xl font-bold text-slate-900">Bold & Professional</p>
              </div>
              <div className="p-4 border-l-4 border-slate-300 bg-slate-50">
                <p className="text-xs text-slate-500 font-bold mb-1">Body Copy: Open Sans</p>
                <p className="text-base text-slate-700">Clean, readable, and patient-friendly for long-form content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Architecture Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-sky-900 flex items-center">
          <span className="bg-sky-100 text-sky-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">02</span>
          Content Architecture & SEO
        </h3>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-8">
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Key Meta Tags</h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-slate-50 rounded-xl">
                <span className="font-bold block mb-1">Primary H1:</span>
                "Premium Private & NHS Dentist in [Location] | [Clinic Name]"
              </div>
              <div className="p-4 bg-slate-50 rounded-xl">
                <span className="font-bold block mb-1">Meta Description:</span>
                "Transform your smile at [Clinic Name]. Expert cosmetic dentistry, Invisalign, and implants in [Location]. Book your consultation today."
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase text-xs tracking-widest text-slate-400">Target Keywords (UK Specific)</h4>
            <div className="flex flex-wrap gap-2">
              {SEO_KEYWORDS.map(kw => (
                <span key={kw} className="px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-sm font-medium border border-sky-100">{kw}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-sky-900 flex items-center">
          <span className="bg-sky-100 text-sky-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">03</span>
          Conversion Strategy
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
            <h4 className="font-bold text-green-800 mb-2">Social Proof</h4>
            <p className="text-sm text-green-700">Display Google Review count & GDC logos prominently in every footer and above-the-fold.</p>
          </div>
          <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100">
            <h4 className="font-bold text-sky-800 mb-2">Urgency Elements</h4>
            <p className="text-sm text-sky-700">"Only 3 emergency slots left for today" - Real-time availability banners increase booking velocity.</p>
          </div>
          <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Accessibility</h4>
            <p className="text-sm text-slate-700">Click-to-call buttons for mobile users. Clear pricing tables to build instant trust.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlueprintView;
