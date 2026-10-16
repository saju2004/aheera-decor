import React, { useEffect } from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Demo Privacy Policy — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs items={[{ label: 'Privacy Policy', to: '/privacy-policy' }]} />

      <div style={{ maxWidth: '800px', margin: '1rem auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem' }}>
          Demonstration Privacy Policy
        </h1>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-olive)', fontWeight: 600, display: 'block', marginBottom: '2.5rem' }}>
          Last Updated: Portfolio Demo Edition · Client Privacy Assurance
        </span>

        <div style={{
          backgroundColor: 'var(--color-sand-light)',
          border: '1px solid var(--color-sand)',
          padding: '1.5rem',
          borderRadius: 'var(--radius-xs)',
          marginBottom: '2.5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <Info size={24} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)', lineHeight: '1.6' }}>
            <strong>Portfolio Showcase Notice:</strong> This website is an independent frontend engineering demonstration project for <strong>Aheera Decor</strong>. No real personal information, payment card numbers, or contact data is sold, stored on external remote servers, or transferred to third parties.
          </div>
        </div>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', color: 'var(--color-charcoal-light)', lineHeight: '1.8' }}>
          <div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>1. Local Browser Storage (localStorage)</h2>
            <p>
              To provide a functional e-commerce demonstration, Aheera Decor uses your browser's local storage capabilities (HTML5 <code>localStorage</code>) strictly to preserve:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li>Items currently placed in your active demo shopping bag (<code>aheera_cart</code>).</li>
              <li>Products you have chosen to bookmark to your saved wishlist (<code>aheera_wishlist</code>).</li>
              <li>Active simulated promotional discount codes (<code>aheera_promo</code>).</li>
            </ul>
            <p style={{ marginTop: '0.5rem' }}>
              This data resides exclusively on your personal device and can be cleared at any time through the "Clear Bag" button or your browser cache settings.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>2. Form Submissions & Checkout Simulation</h2>
            <p>
              Any information entered into our contact form, newsletter signup input, or demo checkout modal (including names, sample delivery addresses, and phone numbers) is validated entirely on the client side using JavaScript. It is never transmitted to an external back-end API or marketing database.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>3. Third-Party Analytics & Cookies</h2>
            <p>
              This portfolio application does not employ invasive tracking cookies, third-party advertising pixels, or behavioral tracking telemetry. Remote font assets are loaded from Google Fonts for typographic rendering.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>4. Portfolio Demonstration Context</h2>
            <p>
              This application has been developed to demonstrate modern React web application architecture, component design, responsive styling, accessibility, and UI performance for potential employers and recruiters.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
