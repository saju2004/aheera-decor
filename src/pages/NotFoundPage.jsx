import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Compass } from 'lucide-react';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 — Page Not Found — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{
      textAlign: 'center',
      padding: '7rem 1.5rem',
      maxWidth: '640px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <span className="section-eyebrow">Error 404</span>
      <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', marginBottom: '1rem', fontWeight: 500 }}>
        Page Not Located
      </h1>
      <p style={{ color: 'var(--color-charcoal-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
        The space or item you are seeking may have moved, been renamed, or does not exist in our studio catalog. Let us guide you back to our curated collections.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn btn-primary btn-lg">
          <Home size={16} /> Return to Home
        </Link>
        <Link to="/shop" className="btn btn-outline btn-lg">
          <Compass size={16} /> Explore All Products
        </Link>
      </div>
    </div>
  );
}
