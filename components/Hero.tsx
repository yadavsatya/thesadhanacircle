'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const cards = [
    { title: 'Guidance', icon: Moon, desc: 'Find clarity in life\'s path' },
    { title: 'Healing', icon: Sun, desc: 'Restore your inner peace' },
    { title: 'Transformation', icon: Sparkles, desc: 'Embrace your true self' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/sacred/1920/1080"
          alt="Peaceful background"
          fill
          className="object-cover opacity-30 mix-blend-multiply"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/90 to-brand-bg z-10" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-white/30 backdrop-blur-sm text-brand-gold text-xs uppercase tracking-[0.2em]">
            Guidance • Healing • Transformation
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-accent leading-[1.1] mb-8">
            Discover Clarity,<br />
            <span className="italic text-brand-secondary">Healing & Transformation</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-accent max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
            The Sadhana Circle helps you reconnect with yourself through Tarot Reading, Reiki Healing, Numerology and Crystal Healing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#book"
              className="px-8 py-4 bg-brand-accent text-brand-bg rounded-full uppercase tracking-widest text-sm hover:bg-brand-accent/90 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Book Your Session
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-transparent text-brand-accent border border-brand-accent/30 rounded-full uppercase tracking-widest text-sm hover:bg-white/50 transition-all w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center group hover:bg-white/60 transition-colors"
            >
              <div className="w-12 h-12 mb-6 rounded-full bg-brand-neutral/50 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <card.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-brand-accent mb-2">{card.title}</h3>
              <p className="text-brand-accent/90 font-normal">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
