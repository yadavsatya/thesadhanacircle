'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  const articles = [
    { title: 'How Tarot Reading Can Bring Clarity', category: 'Guidance', image: 'https://picsum.photos/seed/tarot1/600/400' },
    { title: 'What Happens During Reiki Healing?', category: 'Healing', image: 'https://picsum.photos/seed/reiki1/600/400' },
    { title: 'Understanding Your Life Path Number', category: 'Numerology', image: 'https://picsum.photos/seed/numero1/600/400' },
  ];

  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 block">Journal</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-brand-accent">
              Words of <span className="italic text-brand-secondary">Wisdom</span>
            </h2>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <Link href="#" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-brand-accent hover:text-brand-secondary transition-colors">
              Read all articles <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-brand-gold text-xs uppercase tracking-widest mb-3 block">{article.category}</span>
              <h3 className="font-serif text-2xl text-brand-accent group-hover:text-brand-secondary transition-colors leading-snug">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
