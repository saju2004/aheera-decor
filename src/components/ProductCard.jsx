import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { formatPrice, calculateDiscount } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const discountLabel = calculateDiscount(product.price, product.comparePrice);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {/* Badges */}
        <div className="product-card-badges">
          {discountLabel && <span className="badge badge-sale">{discountLabel}</span>}
          {product.isFeatured && <span className="badge badge-new">Curated</span>}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          className={`product-card-wishlist ${isFavorited ? 'active' : ''}`}
          onClick={handleWishlistToggle}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Save to wishlist'}
        >
          <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
        </button>

        {/* Product Image with Secondary Hover */}
        <Link to={`/product/${product.slug}`} tabIndex={-1}>
          <img
            src={product.mainImage}
            alt={product.name}
            className={`product-img main ${product.secondaryImage ? 'has-secondary' : ''}`}
            loading="lazy"
          />
          {product.secondaryImage && (
            <img
              src={product.secondaryImage}
              alt={`${product.name} alternate view`}
              className="product-img secondary"
              loading="lazy"
            />
          )}
        </Link>

        {/* Quick Add Button */}
        <button
          type="button"
          className="product-card-quick-add"
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to shopping bag`}
        >
          <ShoppingBag size={15} />
          Quick Add
        </button>
      </div>

      {/* Meta Information */}
      <div className="product-card-meta">
        <span className="product-card-category">{product.category}</span>
        <Link to={`/product/${product.slug}`} className="product-card-title">
          {product.name}
        </Link>
        <div className="product-card-price-row">
          <span className="product-price">{formatPrice(product.price)}</span>
          {product.comparePrice && (
            <span className="product-compare-price">{formatPrice(product.comparePrice)}</span>
          )}
        </div>

        {/* Color preview dots */}
        {product.colors && product.colors.length > 1 && (
          <div style={{ display: 'flex', gap: '5px', marginTop: '6px' }} title={`${product.colors.length} color variants`}>
            {product.colors.map((c, i) => (
              <span
                key={i}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: c.hex,
                  border: '1px solid rgba(0,0,0,0.15)',
                  display: 'inline-block'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
