import type {Metadata} from 'next';
import {Cormorant_Garamond, Lato} from 'next/font/google';
import './globals.css'; // Global styles

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'The Sadhana Circle | Tarot Reading, Reiki Healing & Numerology in India',
  description: 'Experience Tarot Reading, Reiki Healing, Numerology and Crystal Healing with The Sadhana Circle. Online consultations across India.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${lato.variable} font-sans bg-brand-bg text-brand-accent antialiased selection:bg-brand-gold selection:text-white`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
