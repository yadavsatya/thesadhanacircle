'use client';

import { motion } from 'motion/react';
import { Sparkles, Sun, Moon, Diamond } from 'lucide-react';
import Link from 'next/link';

export function Services() {
  const services = [
    {
      id: 'tarot',
      title: 'Tarot Reading',
      icon: Moon,
      desc: 'Gain profound clarity on love, career, marriage, finances, and life decisions through intuitive card readings.',
      benefits: ['Life Guidance', 'Decision Making', 'Relationship Insights'],
      duration: '45 mins',
      mode: 'Online Video Call',
      price: '₹2,500',
    },
    {
      id: 'reiki',
      title: 'Reiki Healing',
      icon: Sun,
      desc: 'Distance energy healing to relieve stress, balance your chakras, and remove emotional blockages.',
      benefits: ['Energy Balancing', 'Stress Relief', 'Chakra Alignment'],
      duration: '60 mins',
      mode: 'Distance / Online',
      price: '₹3,000',
    },
    {
      id: 'numerology',
      title: 'Numerology',
      icon: Sparkles,
      desc: 'Understand your life path, career trajectory, and relationship compatibility through the science of numbers.',
      benefits: ['Life Path', 'Name Analysis', 'Business Guidance'],
      duration: '45 mins',
      mode: 'Online Video Call',
      price: '₹2,800',
    },
    {
      id: 'crystal',
      title: 'Crystal Healing',
      icon: Diamond,
      desc: 'Personalized crystal recommendations and energy cleansing to support your emotional and spiritual goals.',
      benefits: ['Personal Guidance', 'Energy Cleansing', 'Aura Protection'],
      duration: '30 mins',
      mode: 'Online Video Call',
      price: '₹1,500',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 block">Our Offerings</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-brand-accent mb-6">
              Transformative <span className="italic text-brand-secondary">Services</span>
            </h2>
            <p className="text-brand-accent/70 max-w-2xl mx-auto font-light text-lg">
              Carefully curated sessions designed to bring you peace, clarity, and deep emotional healing.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-brand-neutral/20 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              {/* Subtle hover background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-bg rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-brand-bg flex items-center justify-center text-brand-gold mb-8">
                  <service.icon size={26} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-serif text-3xl text-brand-accent mb-4">{service.title}</h3>
                <p className="text-brand-accent/80 font-light mb-8 leading-relaxed min-h-[4rem]">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.benefits.map(benefit => (
                    <span key={benefit} className="px-4 py-1.5 rounded-full bg-brand-bg/50 text-brand-accent/70 text-sm font-light border border-brand-neutral/30">
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-neutral/40">
                  <div className="text-sm text-brand-accent/60 space-y-1">
                    <p>{service.duration} • {service.mode}</p>
                    <p className="font-serif text-xl text-brand-accent">{service.price}</p>
                  </div>
                  <Link
                    href="#book"
                    className="px-8 py-3 bg-brand-accent text-brand-bg rounded-full uppercase tracking-widest text-xs hover:bg-brand-accent/90 transition-all w-full sm:w-auto text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
