'use client';

import { motion } from 'motion/react';
import { Calendar, Phone } from 'lucide-react';

export function BookSession() {
  return (
    <section id="book" className="py-24 lg:py-32 bg-brand-bg relative">
      {/* Decorative border */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-neutral to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_10px_40px_rgba(92,58,78,0.05)] border border-brand-neutral/20 text-center relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-bg rounded-full blur-[80px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Calendar className="w-10 h-10 mx-auto text-brand-gold mb-6" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl md:text-5xl text-brand-accent mb-6 leading-tight">
              Begin Your <span className="italic text-brand-secondary">Transformation</span>
            </h2>
            <p className="text-brand-accent/70 font-light mb-12 text-lg">
              Select your preferred service and time. We will send you a secure link for our online session.
            </p>

            <div className="bg-brand-bg/50 border border-brand-neutral/50 rounded-2xl p-12 mb-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center">
                <p className="font-serif text-xl text-brand-accent/50 mb-2">[ Calendar Integration Placeholder ]</p>
                <p className="text-sm text-brand-accent/40 font-light">Calendly / Acuity Scheduling will render here</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <button className="px-8 py-4 bg-brand-accent text-brand-bg rounded-full uppercase tracking-widest text-sm hover:bg-brand-accent/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                Confirm Booking
              </button>
              <button className="px-8 py-4 flex items-center justify-center gap-3 bg-transparent text-brand-accent border border-brand-accent/30 rounded-full uppercase tracking-widest text-sm hover:bg-white/50 transition-all w-full sm:w-auto">
                <Phone size={16} /> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
