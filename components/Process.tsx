'use client';

import { motion } from 'motion/react';

export function Process() {
  const steps = [
    { num: '01', title: 'Book Session', desc: 'Choose a service and find a time that works for you.' },
    { num: '02', title: 'Connect Online', desc: 'Join the secure video call from a quiet space.' },
    { num: '03', title: 'Receive Guidance', desc: 'Experience deep, personalized insight and healing.' },
    { num: '04', title: 'Transform Your Journey', desc: 'Step forward with clarity, peace, and renewed energy.' },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-brand-accent text-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/stars/1920/1080')] opacity-5 mix-blend-screen" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 block">The Process</span>
              <h2 className="font-serif text-4xl lg:text-5xl mb-6">
                Your Path to <br/>
                <span className="italic text-brand-secondary">Clarity</span>
              </h2>
              <p className="text-brand-bg/70 font-light text-lg">
                Four simple steps to begin your journey of self-discovery and holistic healing.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-8 border-l border-brand-secondary/30"
                >
                  <span className="absolute -left-5 top-0 font-serif text-4xl text-brand-gold opacity-30">{step.num}</span>
                  <h3 className="font-serif text-2xl mb-3 mt-1">{step.title}</h3>
                  <p className="text-brand-bg/60 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
