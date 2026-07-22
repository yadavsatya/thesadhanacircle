import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { FAQ } from '@/components/FAQ';
import { BookSession } from '@/components/BookSession';
import { Footer } from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'The Sadhana Circle',
    image: 'https://picsum.photos/seed/sadhana/800/1000',
    description: 'The Sadhana Circle helps you reconnect with yourself through Tarot Reading, Reiki Healing, Numerology and Crystal Healing.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vadodara',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Sadhana Yadav',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tarot Reading',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reiki Healing',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Numerology',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Crystal Healing',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Blog />
      <FAQ />
      <BookSession />
      <Footer />
    </main>
  );
}
