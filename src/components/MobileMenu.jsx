import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { X, Heart, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function MobileMenu({ isOpen, onClose }) {
  const { totalItemsCount } = useCart();
  const { totalWishlistCount } = useWishlist();

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div className="mobile-drawer-backdrop" onClick={onClose} />
      <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
        <div className="mobile-drawer-header">
          <div>
            <div className="brand-wordmark" style={{ fontSize: '1.35rem' }}>Aheera Decor</div>
            <div className="brand-tagline">Studio & Living</div>
          </div>
          <button
            type="button"
            className="action-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <NavLink to="/" className="mobile-nav-link" onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink to="/shop" className="mobile-nav-link" onClick={handleLinkClick}>
            All Products
          </NavLink>

          <div>
            <span className="mobile-nav-link" style={{ fontSize: '1.15rem', color: 'var(--color-muted-olive)' }}>
              Curated Collections
            </span>
            <div className="mobile-nav-sublinks">
              <Link to="/collections/furniture" className="mobile-nav-sublink" onClick={handleLinkClick}>
                Furniture
              </Link>
              <Link to="/collections/lighting" className="mobile-nav-sublink" onClick={handleLinkClick}>
                Lighting
              </Link>
              <Link to="/collections/wall-decor" className="mobile-nav-sublink" onClick={handleLinkClick}>
                Wall Decor
              </Link>
              <Link to="/collections/vases-objects" className="mobile-nav-sublink" onClick={handleLinkClick}>
                Vases & Objects
              </Link>
              <Link to="/collections/textiles" className="mobile-nav-sublink" onClick={handleLinkClick}>
                Textiles & Rugs
              </Link>
              <Link to="/collections/mirrors" className="mobile-nav-sublink" onClick={handleLinkClick}>
                Mirrors
              </Link>
            </div>
          </div>

          <NavLink to="/about" className="mobile-nav-link" onClick={handleLinkClick}>
            About Our Brand
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>
            Contact & Studio
          </NavLink>
        </nav>

        <div className="mobile-drawer-footer">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
            <Link
              to="/wishlist"
              className="btn btn-outline btn-sm"
              onClick={handleLinkClick}
              style={{ justifyContent: 'center' }}
            >
              <Heart size={16} />
              Wishlist ({totalWishlistCount})
            </Link>
            <Link
              to="/cart"
              className="btn btn-primary btn-sm"
              onClick={handleLinkClick}
              style={{ justifyContent: 'center' }}
            >
              <ShoppingBag size={16} />
              Bag ({totalItemsCount})
            </Link>
          </div>
          <div style={{ fontSize: '0.74rem', color: 'var(--color-charcoal-muted)', textAlign: 'center' }}>
            Portfolio Showcase · Dubai, UAE
          </div>
        </div>
      </div>
    </>
  );
}
