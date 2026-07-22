import { BookSession } from '@/components/BookSession';
import { ContactForm } from '@/components/ContactForm';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
          <h1 className="font-serif text-4xl lg:text-5xl text-brand-accent mb-6">
            Connect With <span className="italic text-brand-secondary">Us</span>
          </h1>
          <p className="text-brand-accent/70 max-w-2xl mx-auto font-light text-lg">
            We are here to answer any questions you may have and help you begin your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-24">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            <div className="bg-white p-8 rounded-3xl border border-brand-neutral/30 flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gold mb-6">
                <Phone size={20} />
              </div>
              <h3 className="font-serif text-xl text-brand-accent mb-2">WhatsApp</h3>
              <p className="text-brand-accent/70 font-light">+91 98765 43210</p>
              <p className="text-brand-accent/40 font-light text-sm mt-2">Mon-Sat, 10 AM to 7 PM</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-brand-neutral/30 flex flex-col items-center text-center h-full justify-center">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gold mb-6">
                <Mail size={20} />
              </div>
              <h3 className="font-serif text-xl text-brand-accent mb-2">Email</h3>
              <a href="mailto:hello@thesadhanacircle.com" className="text-brand-accent/70 font-light hover:text-brand-gold transition-colors">hello@thesadhanacircle.com</a>
              <p className="text-brand-accent/40 font-light text-sm mt-2">We typically reply within 24 hours</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-brand-neutral/30 shadow-sm">
            <ContactForm />
          </div>

        </div>
      </div>
      
      <BookSession />
    </main>
  );
}
