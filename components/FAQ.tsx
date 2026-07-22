'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: 'How do I prepare for a Tarot reading?',
      a: 'Simply come with an open mind and a few areas of focus or specific questions you’d like guidance on. Ensure you are in a quiet space where you will not be disturbed.'
    },
    {
      q: 'Does distance Reiki actually work?',
      a: 'Yes. Reiki energy transcends time and space. Many clients report feeling the same warmth, tingling, and deep relaxation during a distance session as they do in person.'
    },
    {
      q: 'Is my information kept confidential?',
      a: 'Absolutely. The Sadhana Circle operates on a strict code of ethics. Everything discussed in your session is completely private and confidential.'
    },
    {
      q: 'Can I book multiple services together?',
      a: 'Yes, many clients combine Tarot and Crystal Healing, or Numerology and Reiki. Reach out to us, and we can tailor a holistic session for your needs.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-accent mb-4">
            Frequently Asked <span className="italic text-brand-secondary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-b border-brand-neutral/40 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-serif text-xl text-brand-accent">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-brand-gold" size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-brand-accent/70 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
