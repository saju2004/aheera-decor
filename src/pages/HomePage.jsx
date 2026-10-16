import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Clock, Compass } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import NewsletterForm from '../components/NewsletterForm';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Aheera Decor — Thoughtfully Curated Home Decor & Interior Living';
    window.scrollTo(0, 0);
  }, []);

  // Filter 8 featured products
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 8);

  // Filter 8 bestsellers (distinct from the first ones)
  const bestsellerProducts = PRODUCTS.filter(p => p.isBestseller).slice(0, 8);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Shop by Category */}
      <section className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Curated Collections</span>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Explore timeless silhouettes, architectural illumination, and handcrafted textural accents shaped by master artisans.
            </p>
          </div>

          <div className="category-grid">
            {CATEGORIES.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Collection Grid */}
      <section className="section" style={{ padding: '5rem 0', backgroundColor: 'var(--color-ivory-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Selected Works</span>
              <h2 className="section-title" style={{ margin: 0 }}>Featured Living Pieces</h2>
            </div>
            <Link to="/shop" className="btn btn-outline btn-sm">
              View Complete Catalog <ArrowRight size={14} />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* 4. Brand Story Split Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-split">
            <div className="story-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural living space featuring monolithic stone and natural linen textures"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="story-content">
              <span className="section-eyebrow">Our Design Ethos</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '1.25rem' }}>
                Designed for the Way You Live.
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-charcoal-light)', marginBottom: '1.5rem' }}>
                At Aheera Decor, we believe a beautiful home is built through thoughtful details, natural textures, and pieces that feel personal. We look beyond fleeting interior trends to celebrate enduring materiality: honed Roman travertine, hand-thrown stoneware, and tactile Belgian flax.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--color-charcoal-muted)', marginBottom: '2.25rem' }}>
                Every object in our collection is curated to bring stillness, warmth, and understated luxury to contemporary spaces.
              </p>
              <Link to="/about" className="btn btn-primary">
                Discover Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Editorial Lifestyle Section */}
      <section className="editorial-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Curator's Journal</span>
            <h2 className="section-title">Small Details. Lasting Impressions.</h2>
            <p className="section-subtitle">
              Inspirational styling perspectives, tactile material studies, and the philosophy of quiet living.
            </p>
          </div>

          <div className="editorial-grid">
            <div className="editorial-card">
              <div className="editorial-card-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
                  alt="Belgian washed linen cushions and wool throws layered on sofa"
                  className="editorial-card-img"
                  loading="lazy"
                />
              </div>
              <div className="editorial-card-body">
                <span className="editorial-card-tag">Materiality</span>
                <h3 className="editorial-card-title">Layering Natural Textures</h3>
                <p className="editorial-card-desc">
                  How pairing raw un-dyed wool rugs with stonewashed Belgian linen creates depth, comfort, and tactile intimacy in neutral living rooms.
                </p>
                <Link to="/collections/textiles" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                  Explore Textiles <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
                  alt="Ceramic table lamp casting warm ambient glow"
                  className="editorial-card-img"
                  loading="lazy"
                />
              </div>
              <div className="editorial-card-body">
                <span className="editorial-card-tag">Illumination</span>
                <h3 className="editorial-card-title">The Art of Ambient Lighting</h3>
                <p className="editorial-card-desc">
                  Moving beyond overhead fixtures. Discover how low-level ceramic table lamps and brushed brass wall sconces shape serene evening moods.
                </p>
                <Link to="/collections/lighting" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                  Explore Lighting <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="editorial-card">
              <div className="editorial-card-img-wrap">
                <img
                  src="https://images.unsplash.com/photo-1533779283484-8da497b1736c?auto=format&fit=crop&w=800&q=80"
                  alt="Honed travertine stone table styled with sculptural stoneware"
                  className="editorial-card-img"
                  loading="lazy"
                />
              </div>
              <div className="editorial-card-body">
                <span className="editorial-card-tag">Styling</span>
                <h3 className="editorial-card-title">Styling a Thoughtful Living Space</h3>
                <p className="editorial-card-desc">
                  Curating focal points with monolithic travertine pedestals, organic asymmetrical mirrors, and hand-coiled stoneware ceramics.
                </p>
                <Link to="/collections/furniture" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                  Explore Furniture <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Best Sellers Section */}
      <section className="section" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Most Adored</span>
              <h2 className="section-title" style={{ margin: 0 }}>Client Favorites & Best Sellers</h2>
            </div>
            <Link to="/shop" className="btn btn-outline btn-sm">
              View All Best Sellers <ArrowRight size={14} />
            </Link>
          </div>

          <ProductGrid products={bestsellerProducts} />
        </div>
      </section>

      {/* 7. Trust Pillars Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon-box">
                <Sparkles size={26} />
              </div>
              <h4 className="trust-title">Thoughtfully Curated Designs</h4>
              <p className="trust-text">
                Every piece is individually vetted for artisanal craftsmanship, natural stone authenticity, and enduring architectural poise.
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h4 className="trust-title">Secure Checkout Demo</h4>
              <p className="trust-text">
                Zero financial risk. Experience seamless end-to-end cart calculations, AED currency conversions, and simulated order receipts.
              </p>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Compass size={26} />
              </div>
              <h4 className="trust-title">Responsive Customer Support</h4>
              <p className="trust-text">
                Dedicated client concierge interface ready to assist with interior styling advice and demonstration catalog inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <span className="section-eyebrow">Private Previews</span>
            <h2 className="section-title">Join The Aheera Inner Circle</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Receive exclusive editorial styling guides, early notifications for limited seasonal collections, and interior design inspiration directly to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
