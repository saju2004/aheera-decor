import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Feather, Layers, ShieldCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Our Studio & Ethos — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Editorial Hero */}
      <section style={{
        position: 'relative',
        backgroundColor: '#1E1D1B',
        color: 'var(--color-white)',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <img
          src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1800&q=80"
          alt="Aheera Decor studio interior with natural light and sculpted stonework"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(30,29,27,0.9) 0%, rgba(30,29,27,0.4) 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4.5rem 1rem' }}>
          <span className="section-eyebrow" style={{ color: 'var(--color-sand)' }}>The Philosophy of Aheera</span>
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.4rem, 5vw, 4rem)', maxWidth: '750px', marginBottom: '1.25rem' }}>
            Spaces of Stillness, Warmth, and Enduring Form.
          </h1>
          <p style={{ color: '#EAE5DC', fontSize: '1.1rem', maxWidth: '640px', lineHeight: '1.7' }}>
            Founded on the quiet belief that modern living should be anchored by natural texture, architectural honesty, and timeless craft.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <Breadcrumbs items={[{ label: 'Our Story', to: '/about' }]} />

        {/* Brand Mission & Story */}
        <div style={{ maxWidth: '820px', margin: '2rem auto 5rem auto' }}>
          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Crafting a Sanctuary from Everyday Clutter
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-charcoal-light)', marginBottom: '1.5rem' }}>
            Aheera Decor was conceptualized around an architectural ideal: that objects inhabiting our homes shouldn't compete for attention; they should establish composure. We curate furniture and decorative forms that celebrate the untamed beauty of natural geological materials—porous Roman travertine, heavy cast brass, tactile unglazed stoneware, and organic Belgian flax.
          </p>
          <p style={{ fontSize: '1.02rem', lineHeight: '1.8', color: 'var(--color-charcoal-muted)', marginBottom: '2.5rem' }}>
            Each piece reflects deliberate restraint. In an age of synthetic disposability, we favor durable joinery, unhurried hand craftsmanship, and neutral palettes that age gracefully alongside the rhythms of daily living.
          </p>

          {/* Portfolio Transparency Callout */}
          <div style={{
            backgroundColor: 'var(--color-sand-light)',
            border: '1px dashed var(--color-sand)',
            padding: '2rem',
            borderRadius: 'var(--radius-sm)',
            marginTop: '3rem',
            display: 'flex',
            gap: '1.25rem'
          }}>
            <ShieldCheck size={32} color="var(--color-muted-olive)" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem' }}>
                Portfolio Demonstration Project
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-charcoal-light)', lineHeight: '1.6', margin: 0 }}>
                <strong>Aheera Decor is an original fictional brand</strong> engineered exclusively as a frontend development and e-commerce UI/UX portfolio demonstration. It serves to showcase modern React application architecture, responsive design systems, client-side catalog filtering, shopping cart state persistence, and AI-assisted design aesthetics to prospective employers. No real commercial operations or client affiliations exist.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <section style={{ padding: '4rem 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', marginBottom: '5rem' }}>
          <div className="section-header">
            <span className="section-eyebrow">Our Design Principles</span>
            <h2 className="section-title">The Three Pillars of Our Aesthetic</h2>
          </div>

          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Layers size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Authentic Materiality</h3>
              <p className="trust-text">
                We reject synthetic imitations. We work exclusively with genuine travertine, solid timber, spun brass, and pure sheep wool that develops a rich, lived-in patina over decades.
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Compass size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Sculptural Balance</h3>
              <p className="trust-text">
                Every silhouette is designed with architectural poise. Whether it is an asymmetrical loop ceramic vase or a monolith coffee table, proportions are balanced from every sightline.
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Feather size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Tactile Serenity</h3>
              <p className="trust-text">
                Home decor should be as pleasing to touch as it is to behold. We prioritize stonewashed textures, dry porous clays, and brushed metal finishes that bring sensory calm.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Gallery Preview */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80"
            alt="Hand-crafted ceramics in Aheera studio"
            style={{ borderRadius: 'var(--radius-xs)', width: '100%', height: '380px', objectFit: 'cover' }}
            loading="lazy"
          />
          <div>
            <span className="section-eyebrow">Visit Our Virtual Studio</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Experience the Collection
            </h2>
            <p style={{ color: 'var(--color-charcoal-muted)', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              Explore our complete online catalog featuring over 24 realistic interior pieces with detailed specifications, material transparency, and interactive color variant previews.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Browse The Shop <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
