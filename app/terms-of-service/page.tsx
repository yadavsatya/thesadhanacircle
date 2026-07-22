export default function TermsOfServicePage() {
  return (
    <main className="pt-32 pb-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl lg:text-5xl text-brand-accent mb-8">Terms of Service</h1>
        <div className="prose prose-brand text-brand-accent font-normal leading-relaxed">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">By accessing and using The Sadhana Circle website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          
          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">2. Service Disclaimer</h2>
          <p className="mb-6">Our services (Tarot Reading, Reiki Healing, Numerology, Crystal Healing) are for spiritual and emotional guidance. They are not a substitute for professional medical, legal, or financial advice.</p>
          
          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">3. Booking and Cancellations</h2>
          <p className="mb-6">All bookings must be paid in advance. Cancellations must be made at least 24 hours before the scheduled session to be eligible for a refund or reschedule.</p>

          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">4. Modifications</h2>
          <p className="mb-6">We reserve the right to modify these terms at any time. We will always post the most current version on our website.</p>
        </div>
      </div>
    </main>
  );
}
