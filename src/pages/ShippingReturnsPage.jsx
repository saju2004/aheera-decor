import React, { useEffect } from 'react';
import { Truck, RefreshCw, ShieldCheck, Clock, MapPin } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ShippingReturnsPage() {
  useEffect(() => {
    document.title = 'Shipping & Returns (Demo Terms) — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs items={[{ label: 'Shipping & Returns', to: '/shipping-returns' }]} />

      <div style={{ maxWidth: '820px', margin: '1rem auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1rem' }}>
          Delivery & Return Terms
        </h1>
        <span style={{ fontSize: '0.85rem', color: 'var(--color-muted-olive)', fontWeight: 600, display: 'block', marginBottom: '2.5rem' }}>
          Portfolio Demo Terms · Illustrative E-Commerce Policies
        </span>

        {/* Demo Notification */}
        <div style={{
          backgroundColor: 'var(--color-sand-light)',
          border: '1px solid var(--color-sand)',
          padding: '1.5rem',
          borderRadius: 'var(--radius-xs)',
          marginBottom: '3rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start'
        }}>
          <ShieldCheck size={24} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)', lineHeight: '1.6' }}>
            <strong>Demonstrative Store Policy:</strong> The policies outlined below represent the operational guidelines of a hypothetical international luxury home decor storefront. As Aheera Decor is a portfolio demonstration project, no real shipping dispatches, physical couriers, or product returns take place.
          </div>
        </div>

        {/* Policy Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginBottom: '4rem' }}>
          <div style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-muted-olive)' }}>
              <Truck size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>UAE Courier & Delivery</h2>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: '1.6' }}>
              <li><strong>Complimentary Delivery:</strong> On all orders totaling AED 500 or above across Dubai, Abu Dhabi, Sharjah, and other Emirates.</li>
              <li><strong>Standard Delivery Fee:</strong> Flat rate of AED 50 for orders below AED 500.</li>
              <li><strong>Timeline:</strong> Estimated 2–3 business days for standard in-stock decorative objects, lighting, and textiles.</li>
              <li><strong>Special Handling:</strong> Monolithic stone tables and large floor mirrors include simulated white-glove inside placement and packaging removal.</li>
            </ul>
          </div>

          <div style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--color-muted-olive)' }}>
              <RefreshCw size={24} />
            </div>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>14-Day Return Process</h2>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--color-charcoal-light)', lineHeight: '1.6' }}>
              <li><strong>Trial Period:</strong> 14 days from delivery date to inspect pieces within your living environment.</li>
              <li><strong>Condition:</strong> Items must be returned in their original packaging, uninstalled, and free from surface markings.</li>
              <li><strong>Artisanal Stone & Clay:</strong> Natural pores, veining variations, and kiln marks in travertine and ceramics are celebrated characteristics, not defects.</li>
              <li><strong>Refunds:</strong> Simulated refunds are credited back to the original payment method upon warehouse inspection.</li>
            </ul>
          </div>
        </div>

        {/* Packaging Care Guide */}
        <section style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Artisanal Packaging & Fragile Stone Care</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.8' }}>
            Every piece curated by Aheera Decor is secured in custom double-corrugated recyclable crating with molded biodegradable foam guards to ensure that delicate mouth-blown fluted glass and hand-thrown stoneware arrive safely. For questions regarding large architectural furniture sizing before ordering, our studio concierge remains available at our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
