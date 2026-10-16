import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo-title">Aheera Decor</div>
            <span className="footer-tagline">Artisanal Living & Architecture</span>
            <p>
              Thoughtfully curated homeware, architectural lighting, sculptural stoneware, and tactile textiles designed for spaces that celebrate quiet elegance and timeless natural warmth.
            </p>
            <div className="footer-social-links">
              <a href="#instagram" className="footer-social-link" aria-label="Aheera Decor on Instagram" onClick={e => e.preventDefault()}>
                <Instagram size={18} />
              </a>
              <a href="#facebook" className="footer-social-link" aria-label="Aheera Decor on Facebook" onClick={e => e.preventDefault()}>
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Shop Collections */}
          <div>
            <h4 className="footer-heading">Collections</h4>
            <ul className="footer-links">
              <li><Link to="/shop">View All Products</Link></li>
              <li><Link to="/collections/furniture">Furniture & Tables</Link></li>
              <li><Link to="/collections/lighting">Architectural Lighting</Link></li>
              <li><Link to="/collections/wall-decor">Wall Decor & Art</Link></li>
              <li><Link to="/collections/vases-objects">Vases & Sculptures</Link></li>
              <li><Link to="/collections/textiles">Linen & Rugs</Link></li>
              <li><Link to="/collections/mirrors">Accent Mirrors</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="footer-heading">Client Services</h4>
            <ul className="footer-links">
              <li><Link to="/about">Our Story & Philosophy</Link></li>
              <li><Link to="/contact">Design Studio & Inquiries</Link></li>
              <li><Link to="/shipping-returns">Shipping & Return Policies</Link></li>
              <li><Link to="/privacy-policy">Privacy & Cookie Policy</Link></li>
              <li><Link to="/cart">Review Shopping Bag</Link></li>
              <li><Link to="/wishlist">Saved Wishlist</Link></li>
            </ul>
          </div>

          {/* Studio Contact (Clearly marked as demo details) */}
          <div>
            <h4 className="footer-heading">Design Studio</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <div>
                Alserkal Avenue, Creative Zone<br />
                Al Quoz 1, Dubai, United Arab Emirates<br />
                <span style={{ fontSize: '0.74rem', color: 'var(--color-sand)' }}>(Sample Portfolio Location)</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <div>
                concierge@aheera-demo.com<br />
                <span style={{ fontSize: '0.74rem', color: 'var(--color-sand)' }}>(Demo Contact Address)</span>
              </div>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <div>
                +971 4 000 0000<br />
                <span style={{ fontSize: '0.74rem', color: 'var(--color-sand)' }}>(Demonstration Line)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Demo Notice Box */}
        <div className="footer-disclaimer-card">
          <Info size={24} color="var(--color-sand)" style={{ flexShrink: 0 }} />
          <p>
            <strong>Portfolio Demonstration Notice:</strong> Aheera Decor is a fictional brand created exclusively for portfolio demonstration to showcase frontend engineering, e-commerce UI/UX, responsive state management, and design systems. No actual commercial transactions, credit card charges, or physical shipments take place.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Aheera Decor. Portfolio Demo — Fictional Brand — No real purchases are processed.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/shipping-returns">Shipping Terms</Link>
            <Link to="/about">About Demo</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
