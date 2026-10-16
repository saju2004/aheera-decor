import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, emptyMessage = 'No products found matching your criteria.' }) {
  if (!products || products.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-muted)' }}>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
