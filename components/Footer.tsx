import Link from 'next/link';
import { Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-accent text-brand-bg pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl tracking-wide font-semibold text-brand-gold mb-6">The Sadhana Circle</h3>
            <p className="text-brand-bg/70 font-light text-sm leading-relaxed pr-4">
              Guidance, healing, and transformation for your soul's journey. Find peace and clarity within.
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.15em] text-xs font-semibold text-brand-gold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Sadhana', 'Services', 'Journal', 'FAQ'].map(item => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().split(' ')[0]}`} className="text-brand-bg/70 hover:text-brand-gold transition-colors text-sm font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.15em] text-xs font-semibold text-brand-gold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Tarot Reading', 'Reiki Healing', 'Numerology', 'Crystal Healing'].map(item => (
                <li key={item}>
                  <Link href="#services" className="text-brand-bg/70 hover:text-brand-gold transition-colors text-sm font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.15em] text-xs font-semibold text-brand-gold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-light text-brand-bg/70">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-gold" />
                Vadodara, India (Online Worldwide)
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-gold" />
                <a href="mailto:hello@thesadhanacircle.com" className="hover:text-brand-gold transition-colors">hello@thesadhanacircle.com</a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" className="w-10 h-10 rounded-full border border-brand-bg/20 flex items-center justify-center hover:bg-brand-gold/10 hover:border-brand-gold transition-all text-brand-gold">
                  <Instagram size={18} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-brand-bg/50">
          <p>© {new Date().getFullYear()} The Sadhana Circle. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
