import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import SearchOverlay from './SearchOverlay';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { totalItemsCount } = useCart();
  const { totalWishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="Aheera Decor Home">
            <span className="brand-wordmark">Aheera Decor</span>
            <span className="brand-tagline">Living & Objects</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Shop
            </NavLink>
            <NavLink to="/collections/furniture" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Furniture
            </NavLink>
            <NavLink to="/collections/lighting" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Lighting
            </NavLink>
            <NavLink to="/collections/wall-decor" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Wall Decor
            </NavLink>
            <NavLink to="/collections/vases-objects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Accessories
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
          </nav>

          {/* Actions: Search, Wishlist, Bag, Mobile Toggle */}
          <div className="header-actions">
            <button
              type="button"
              className="action-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search catalog"
            >
              <Search size={20} />
            </button>

            <Link to="/wishlist" className="action-btn" aria-label={`Wishlist with ${totalWishlistCount} items`}>
              <Heart size={20} />
              {totalWishlistCount > 0 && (
                <span className="action-badge">{totalWishlistCount}</span>
              )}
            </Link>

            <Link to="/cart" className="action-btn" aria-label={`Shopping bag with ${totalItemsCount} items`}>
              <ShoppingBag size={20} />
              {totalItemsCount > 0 && (
                <span className="action-badge">{totalItemsCount}</span>
              )}
            </Link>

            <button
              type="button"
              className="action-btn menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
