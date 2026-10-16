import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { formatPrice } from '../utils/formatters';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const POPULAR_SEARCHES = ['Travertine', 'Ceramic', 'Linen', 'Table Lamp', 'Wall Mirror', 'Vase'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase().trim();
    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q)
    ).slice(0, 5);
    setResults(matches);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onClose();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleTagClick = (tag) => {
    setQuery(tag);
    onClose();
    navigate(`/search?q=${encodeURIComponent(tag)}`);
  };

  const handleProductClick = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Search Products">
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="search-modal-header">
          <Search size={20} color="var(--color-charcoal-muted)" />
          <input
            ref={inputRef}
            type="search"
            className="search-modal-input"
            placeholder="Search ceramics, lighting, travertine, mirrors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              type="button"
              className="search-modal-close"
              onClick={() => setQuery('')}
              aria-label="Clear search input"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="button"
            className="search-modal-close"
            onClick={onClose}
            aria-label="Close search overlay"
          >
            <X size={22} />
          </button>
        </form>

        <div className="search-modal-body">
          {query.trim().length === 0 ? (
            <div>
              <div className="search-suggestions-title">Popular Inquiries</div>
              <div className="search-tags">
                {POPULAR_SEARCHES.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    className="search-tag"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="search-suggestions-title">
                {results.length > 0 ? `Instant Matches (${results.length})` : 'No matching products'}
              </div>

              {results.length > 0 ? (
                <div className="search-results-list">
                  {results.map(prod => (
                    <div
                      key={prod.id}
                      className="search-result-item"
                      onClick={() => handleProductClick(prod.slug)}
                      role="button"
                      tabIndex={0}
                    >
                      <img src={prod.mainImage} alt={prod.name} className="search-result-img" />
                      <div className="search-result-info">
                        <div className="search-result-name">{prod.name}</div>
                        <div className="search-result-meta">{prod.category} · {formatPrice(prod.price)}</div>
                      </div>
                      <ArrowRight size={16} color="var(--color-muted-olive)" />
                    </div>
                  ))}

                  <button
                    type="button"
                    className="btn btn-outline btn-full btn-sm"
                    style={{ marginTop: '1rem' }}
                    onClick={handleSubmit}
                  >
                    View All Results for "{query}"
                  </button>
                </div>
              ) : (
                <p style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-muted)' }}>
                  We couldn't find any items matching "{query}". Try searching for categories like furniture, lighting, or materials like travertine or linen.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
