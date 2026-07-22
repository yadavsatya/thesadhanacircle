'use client';

import { motion } from 'motion/react';
import { Lock, Heart, Shield, Globe, Sparkles, Feather, Star } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    { title: '100% Confidential', icon: Lock, desc: 'Your stories and struggles are safe here.' },
    { title: 'Personalized Sessions', icon: Heart, desc: 'Tailored guidance for your unique journey.' },
    { title: 'Judgement-Free Space', icon: Shield, desc: 'Come exactly as you are.' },
    { title: 'Online Across India', icon: Globe, desc: 'Accessible healing from the comfort of home.' },
    { title: 'Authentic Guidance', icon: Star, desc: 'Honest, pure, and grounded wisdom.' },
    { title: 'Premium Experience', icon: Feather, desc: 'Every session feels like a luxury retreat.' },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-accent mb-4">
            Why Choose <span className="italic text-brand-secondary">The Sadhana Circle</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-brand-bg/30 border border-brand-neutral/30 hover:bg-brand-bg/50 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-gold mb-6 shadow-sm">
                <reason.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-brand-accent mb-3">{reason.title}</h3>
              <p className="text-brand-accent/90 font-normal text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
