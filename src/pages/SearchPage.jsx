import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, RotateCcw } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(queryParam);

  useEffect(() => {
    setSearchTerm(queryParam);
    if (queryParam) {
      document.title = `Search: "${queryParam}" — Aheera Decor`;
    } else {
      document.title = 'Search Catalog — Aheera Decor';
    }
    window.scrollTo(0, 0);
  }, [queryParam]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setSearchParams({ q: searchTerm.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchParams({});
  };

  // Case-insensitive matching across name, category, description, material
  const searchResults = useMemo(() => {
    if (!queryParam.trim()) return [];
    const q = queryParam.toLowerCase().trim();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q)
    );
  }, [queryParam]);

  const POPULAR_SUGGESTIONS = ['Travertine', 'Ceramic', 'Linen', 'Table Lamp', 'Floor Mirror', 'Oak'];

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs items={[{ label: 'Search Results', to: '/search' }]} />

      <div style={{ maxWidth: '720px', margin: '1rem auto 3.5rem auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
          Search Our Curations
        </h1>

        {/* Search Bar Form */}
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-charcoal-muted)' }} />
            <input
              type="search"
              className="form-input"
              style={{ paddingLeft: '2.75rem', paddingRight: '2.5rem', fontSize: '1rem', height: '50px' }}
              placeholder="Search by piece, category, stone, or material..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search inquiry input"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-charcoal-muted)' }}
                aria-label="Clear search input"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button type="submit" className="btn btn-primary" style={{ padding: '0 1.75rem' }}>
            Search
          </button>
        </form>

        {/* Popular Tags */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-charcoal-muted)', fontWeight: 600 }}>
            Suggested:
          </span>
          {POPULAR_SUGGESTIONS.map(tag => (
            <button
              key={tag}
              type="button"
              className="search-tag"
              onClick={() => {
                setSearchTerm(tag);
                setSearchParams({ q: tag });
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Query status */}
      {queryParam.trim() ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '1.05rem', color: 'var(--color-charcoal)' }}>
              Results for <strong>"{queryParam}"</strong> ({searchResults.length} {searchResults.length === 1 ? 'item' : 'items'} found)
            </span>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={handleClear}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <RotateCcw size={13} /> Clear Search
            </button>
          </div>

          {searchResults.length > 0 ? (
            <ProductGrid products={searchResults} />
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', maxWidth: '520px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>No matching items discovered</h3>
              <p style={{ color: 'var(--color-charcoal-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                We couldn't locate any interior decor items matching "{queryParam}". Check your spelling or try exploring our category collections.
              </p>
              <Link to="/shop" className="btn btn-primary">
                Explore Full Catalog
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-charcoal-muted)' }}>
          <p>Please enter an inquiry above or select a suggested material tag to discover curated pieces.</p>
        </div>
      )}
    </div>
  );
}
