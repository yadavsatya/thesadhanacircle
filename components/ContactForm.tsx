'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Auto reset for demo purposes
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 space-y-4">
        <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-4">
          <Check size={32} strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-3xl text-brand-accent">Thank You</h3>
        <p className="text-brand-accent/70 font-light max-w-sm">
          We have received your details. Our team will connect with you shortly to assist with your journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-serif text-2xl text-brand-accent mb-8">Request a Connection</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">Name</label>
          <input required type="text" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="Your full name" />
        </div>
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">Contact Number</label>
          <input required type="tel" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="+91" />
        </div>
      </div>
      
      <div>
        <label className="block text-sm text-brand-accent/70 mb-2">Email <span className="text-brand-accent/40 italic">(Optional)</span></label>
        <input type="email" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="your@email.com" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">City</label>
          <input required type="text" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="City name" />
        </div>
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">State</label>
          <input required type="text" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors" placeholder="State" />
        </div>
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">Country</label>
          <input type="text" readOnly value="India" className="w-full bg-brand-bg border border-brand-neutral/30 text-brand-accent/50 rounded-xl px-4 py-3 cursor-not-allowed font-light" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">Service of Interest</label>
          <select required defaultValue="" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none">
            <option value="" disabled>Select a service</option>
            <option value="tarot">Tarot Reading</option>
            <option value="reiki">Reiki Healing</option>
            <option value="numerology">Numerology</option>
            <option value="crystal">Crystal Healing</option>
            <option value="general">General Guidance</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-brand-accent/70 mb-2">Best time to connect</label>
          <select required defaultValue="" className="w-full bg-brand-bg/50 border border-brand-neutral/50 rounded-xl px-4 py-3 text-brand-accent font-light focus:outline-none focus:border-brand-gold/50 transition-colors appearance-none">
            <option value="" disabled>Select a time</option>
            <option value="morning">Morning (10 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 7 PM)</option>
          </select>
        </div>
      </div>

      <button type="submit" className="w-full mt-4 px-8 py-4 bg-brand-accent text-brand-bg rounded-xl uppercase tracking-widest text-sm hover:bg-brand-accent/90 transition-all shadow-md hover:shadow-lg">
        Submit Details
      </button>
    </form>
  );
}
