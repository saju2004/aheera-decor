import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductGrid from '../components/ProductGrid';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';

export default function CategoryPage() {
  const { category: categorySlug } = useParams();
  const [sortBy, setSortBy] = useState('featured');

  const category = CATEGORIES.find(c => c.slug === categorySlug);

  useEffect(() => {
    if (category) {
      document.title = `${category.name} Collection — Aheera Decor`;
    } else {
      document.title = 'Collection Not Found — Aheera Decor';
    }
    window.scrollTo(0, 0);
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (!category) return [];
    return PRODUCTS.filter(p => p.categorySlug === categorySlug)
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [categorySlug, category, sortBy]);

  if (!category) {
    return (
      <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
        <h2>Collection Not Found</h2>
        <p style={{ margin: '1rem 0 2rem 0', color: 'var(--color-charcoal-muted)' }}>
          The collection you requested does not exist or has been relocated.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Explore All Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Category Hero Banner */}
      <div style={{
        position: 'relative',
        backgroundColor: '#201F1D',
        color: 'var(--color-white)',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <img
          src={category.image}
          alt={category.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(37,37,34,0.85) 0%, rgba(37,37,34,0.4) 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '3.5rem 1rem' }}>
          <span style={{
            fontSize: '0.78rem',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--color-sand)',
            fontWeight: 600,
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            {category.tagline}
          </span>
          <h1 style={{ color: 'var(--color-white)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '0.75rem' }}>
            {category.name}
          </h1>
          <p style={{ color: '#EBE6DE', maxWidth: '620px', fontSize: '1rem', lineHeight: '1.6' }}>
            {category.description}
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem' }}>
        <Breadcrumbs
          items={[
            { label: 'Shop', to: '/shop' },
            { label: category.name, to: `/collections/${category.slug}` }
          ]}
        />

        {/* Sorting bar */}
        <div className="catalog-bar" style={{ marginTop: '0.5rem' }}>
          <span className="catalog-count">
            Showing <strong>{filteredProducts.length}</strong> items in {category.name}
          </span>

          <div className="catalog-controls">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort category products"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Alphabetical: A to Z</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <ProductGrid
          products={filteredProducts}
          emptyMessage={`No products currently available in ${category.name}. Check back soon.`}
        />
      </div>
    </div>
  );
}
