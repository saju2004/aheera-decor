import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section" aria-label="Aheera Decor Seasonal Showcase">
      <img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
        alt="Curated contemporary living room with minimalist stone table and natural linen sofa"
        className="hero-background-image"
        loading="eager"
      />
      <div className="hero-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <span className="hero-eyebrow">Autumn / Winter Interior Living</span>
          <h1 className="hero-title">
            Make Room for Beautiful Living.
          </h1>
          <p className="hero-description">
            Thoughtfully selected pieces that bring warmth, character, and timeless elegance into your home. Handcrafted ceramics, monolithic travertine, and natural Belgian flax.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="btn btn-sand btn-lg">
              Explore the Collection <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn btn-white btn-lg">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
