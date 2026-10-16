import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, ShieldCheck, Truck, RefreshCw, Sparkles, Check } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ImageGallery from '../components/ImageGallery';
import QuantitySelector from '../components/QuantitySelector';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';
import { formatPrice, calculateDiscount } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = PRODUCTS.find(p => p.slug === slug);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  // State
  const [selectedColor, setSelectedColor] = useState(
    product && product.colors && product.colors.length > 0 ? product.colors[0].name : ''
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'specs' | 'shipping'

  // Reset variant and quantity on slug change
  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Aheera Decor`;
      if (product.colors && product.colors.length > 0) {
        setSelectedColor(product.colors[0].name);
      }
      setQuantity(1);
      setActiveTab('details');
    } else {
      document.title = 'Product Not Found — Aheera Decor';
    }
    window.scrollTo(0, 0);
  }, [slug, product]);

  if (!product) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2>Product Not Found</h2>
        <p style={{ margin: '1rem 0 2rem 0', color: 'var(--color-charcoal-muted)' }}>
          The item you are searching for does not exist in our catalog or may have been archived.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const discountLabel = calculateDiscount(product.price, product.comparePrice);

  // Find related products in same category
  const relatedProducts = PRODUCTS
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor);
  };

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs
        items={[
          { label: 'Shop', to: '/shop' },
          { label: product.category, to: `/collections/${product.categorySlug}` },
          { label: product.name, to: `/product/${product.slug}` }
        ]}
      />

      <section className="product-detail-section">
        <div className="product-detail-grid">
          {/* Gallery Column */}
          <div>
            <ImageGallery images={product.images || [product.mainImage]} productName={product.name} />
          </div>

          {/* Product Information Column */}
          <div className="product-info-col">
            <span className="product-info-category">{product.category}</span>
            <h1 className="product-info-title">{product.name}</h1>

            {/* Pricing Row */}
            <div className="product-info-pricing">
              <span className="product-info-price">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="product-info-compare-price">{formatPrice(product.comparePrice)}</span>
              )}
              {discountLabel && (
                <span className="badge badge-sale">{discountLabel}</span>
              )}
              <span className="badge badge-new" style={{ marginLeft: 'auto' }}>
                {product.availabilityStatus}
              </span>
            </div>

            {/* Editorial Description */}
            <p className="product-info-description">
              {product.description}
            </p>

            {/* Color Variant Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="variant-section">
                <div className="variant-label">
                  <span>Color Finish:</span>
                  <strong>{selectedColor}</strong>
                </div>
                <div className="variant-color-options">
                  {product.colors.map((colorObj, idx) => {
                    const isSelected = selectedColor === colorObj.name;
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`color-swatch-btn ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedColor(colorObj.name)}
                        aria-label={`Select color ${colorObj.name}`}
                      >
                        <span
                          className="color-swatch-circle"
                          style={{ backgroundColor: colorObj.hex }}
                        />
                        <span>{colorObj.name}</span>
                        {isSelected && <Check size={12} />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Primary Actions */}
            <div className="product-actions-group">
              <QuantitySelector
                quantity={quantity}
                onChange={setQuantity}
                min={1}
                max={10}
              />

              <button
                type="button"
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={handleAddToCart}
              >
                <ShoppingBag size={18} />
                Add to Shopping Bag
              </button>

              <button
                type="button"
                className={`product-wishlist-action-btn ${isFavorited ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
              </button>
            </div>

            {/* Demo Value Proposition Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              padding: '1.25rem 0',
              borderTop: '1px solid var(--color-border)',
              borderBottom: '1px solid var(--color-border)',
              margin: '1rem 0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--color-charcoal-muted)' }}>
                <Truck size={16} color="var(--color-muted-olive)" />
                <span>Complimentary UAE Courier</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--color-charcoal-muted)' }}>
                <RefreshCw size={16} color="var(--color-muted-olive)" />
                <span>14-Day Demo Returns</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: 'var(--color-charcoal-muted)' }}>
                <ShieldCheck size={16} color="var(--color-muted-olive)" />
                <span>Zero Financial Risk Demo</span>
              </div>
            </div>

            {/* Accordion / Specifications Tabs */}
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                <button
                  type="button"
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: activeTab === 'details' ? 600 : 400,
                    color: activeTab === 'details' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
                    borderBottom: activeTab === 'details' ? '2px solid var(--color-charcoal)' : 'none',
                    paddingBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                  onClick={() => setActiveTab('details')}
                >
                  Key Highlights
                </button>
                <button
                  type="button"
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: activeTab === 'specs' ? 600 : 400,
                    color: activeTab === 'specs' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
                    borderBottom: activeTab === 'specs' ? '2px solid var(--color-charcoal)' : 'none',
                    paddingBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                  onClick={() => setActiveTab('specs')}
                >
                  Materials & Dimensions
                </button>
                <button
                  type="button"
                  style={{
                    fontSize: '0.84rem',
                    fontWeight: activeTab === 'shipping' ? 600 : 400,
                    color: activeTab === 'shipping' ? 'var(--color-charcoal)' : 'var(--color-charcoal-muted)',
                    borderBottom: activeTab === 'shipping' ? '2px solid var(--color-charcoal)' : 'none',
                    paddingBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                  onClick={() => setActiveTab('shipping')}
                >
                  Delivery Policy
                </button>
              </div>

              <div style={{ padding: '1.25rem 0' }}>
                {activeTab === 'details' && (
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                    {product.details?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'specs' && (
                  <div className="specs-container" style={{ marginTop: 0, borderTop: 'none', paddingTop: 0 }}>
                    <div className="spec-row">
                      <span className="spec-key">Material</span>
                      <span className="spec-value">{product.material}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-key">Dimensions</span>
                      <span className="spec-value">{product.dimensions}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-key">Category</span>
                      <span className="spec-value">{product.category}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-key">Origin</span>
                      <span className="spec-value">Artisanal Studio (Simulated Spec)</span>
                    </div>
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="demo-shipping-badge">
                    <strong>Illustrative Shipping Demo:</strong> For this portfolio demonstration, shipping across the United Arab Emirates (Dubai, Abu Dhabi, Sharjah, etc.) is simulated. Standard deliveries are estimated at 2–3 business days. Heavy stone furniture includes illustrative white-glove placement.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="section-eyebrow">Complementary Pieces</span>
            <h2 style={{ fontSize: '1.85rem' }}>Related in {product.category}</h2>
          </div>
          <ProductGrid products={relatedProducts} />
        </section>
      )}
    </div>
  );
}
