'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "I was feeling incredibly lost in my career. Sadhana's tarot reading brought me exactly the clarity I needed. I left the session feeling light and directed.",
      author: "Priya S.",
      role: "Entrepreneur"
    },
    {
      text: "The distance Reiki healing session was surprisingly powerful. I felt a wave of calm wash over me, and my chronic anxiety has significantly lessened since.",
      author: "Rahul M.",
      role: "Software Engineer"
    },
    {
      text: "Her numerology insights were spot on. It felt like she was reading a book about my life. Highly recommend The Sadhana Circle to anyone seeking deep answers.",
      author: "Anjali K.",
      role: "Designer"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={{
             hidden: {},
             visible: {
               transition: { staggerChildren: 0.15 }
             }
           }}
           className="relative overflow-hidden px-4 md:px-12 py-8"
        >
          <div className="relative overflow-hidden px-4 py-12">
            <motion.div 
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                    }
                  }}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-brand-bg/30 border border-brand-neutral/30 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center">
                    <Quote className="w-8 h-8 text-brand-gold/30 mb-6" />
                    <p className="font-serif text-xl md:text-3xl text-brand-accent italic mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="uppercase tracking-widest text-sm text-brand-accent font-medium">{testimonial.author}</p>
                      <p className="text-brand-secondary text-sm font-light mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button 
            onClick={prev} 
            disabled={currentIndex === 0}
            className="p-3 rounded-full border border-brand-neutral/50 text-brand-accent hover:bg-brand-bg transition-colors disabled:opacity-30 disabled:cursor-not-allowed" 
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next} 
            disabled={currentIndex >= testimonials.length - 1}
            className="p-3 rounded-full border border-brand-neutral/50 text-brand-accent hover:bg-brand-bg transition-colors disabled:opacity-30 disabled:cursor-not-allowed" 
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
