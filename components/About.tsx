'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-bg rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/sadhana/800/1000"
                alt="Sadhana Yadav"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Accent frame */}
            <div className="absolute -inset-4 border-2 border-brand-gold/30 rounded-tl-[110px] rounded-br-[110px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 block">Meet Your Guide</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-accent mb-8 leading-tight">
              A Safe Space for Your <br/>
              <span className="italic text-brand-secondary">Inner Journey</span>
            </h2>
            
            <div className="space-y-6 text-brand-accent/80 font-light leading-relaxed">
              <p>
                Welcome. I am Sadhana Yadav, founder of The Sadhana Circle. My journey began with a simple calling: to help others find clarity in moments of doubt and healing in times of emotional weight.
              </p>
              <p>
                Through years of practice in Tarot, Reiki, Numerology, and Crystal Healing, I have learned that the answers we seek are often already within us. My role is simply to hold space and guide you back to your own inner wisdom.
              </p>
              <p>
                Whether you are navigating a difficult life transition, seeking career direction, or looking to release heavy energy, our sessions are deeply personalized, confidential, and completely free of judgment.
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-brand-neutral/50">
              <p className="font-serif text-2xl text-brand-accent italic mb-2">
                "Healing is not about becoming someone new, it's about returning to who you truly are."
              </p>
              <p className="text-sm uppercase tracking-widest text-brand-secondary">— Sadhana Yadav</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
