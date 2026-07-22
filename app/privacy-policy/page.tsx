export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl lg:text-5xl text-brand-accent mb-8">Privacy Policy</h1>
        <div className="prose prose-brand text-brand-accent/80 font-light leading-relaxed">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">1. Introduction</h2>
          <p className="mb-6">At The Sadhana Circle, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
          
          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">2. Information We Collect</h2>
          <p className="mb-6">We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
          
          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">3. Confidentiality</h2>
          <p className="mb-6">All sessions, including Tarot Readings, Reiki Healing, and Numerology consultations, are strictly confidential. We do not share your personal stories, challenges, or reading outcomes with any third parties.</p>

          <h2 className="font-serif text-2xl text-brand-accent mt-12 mb-4">4. Contact Us</h2>
          <p className="mb-6">If you have questions or comments about this Privacy Policy, please contact us at: hello@thesadhanacircle.com</p>
        </div>
      </div>
    </main>
  );
}
