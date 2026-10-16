import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistItem({ product }) {
  const { addToCart } = useCart();
  const { removeFromWishlist } = useWishlist();

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="product-card" style={{ backgroundColor: 'var(--color-white)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
      <div className="product-image-wrapper" style={{ marginBottom: '0.75rem' }}>
        <Link to={`/product/${product.slug}`}>
          <img src={product.mainImage} alt={product.name} className="product-img main" loading="lazy" />
        </Link>
      </div>

      <div className="product-card-meta">
        <span className="product-card-category">{product.category}</span>
        <Link to={`/product/${product.slug}`} className="product-card-title">
          {product.name}
        </Link>
        <div className="product-card-price-row">
          <span className="product-price">{formatPrice(product.price)}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', marginTop: '1rem' }}>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={14} /> Add to Bag
          </button>
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={() => removeFromWishlist(product.id)}
            title="Remove item from wishlist"
            aria-label="Remove item"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
