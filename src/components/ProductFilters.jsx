import React from 'react';
import { X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  inStockOnly,
  onInStockChange,
  onResetFilters,
  isMobileOpen,
  onCloseMobile
}) {
  return (
    <aside className={`filters-sidebar ${isMobileOpen ? 'mobile-open' : ''}`} aria-label="Product Catalog Filters">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SlidersHorizontal size={16} /> Filters
        </h3>
        {isMobileOpen && (
          <button
            type="button"
            className="action-btn"
            onClick={onCloseMobile}
            aria-label="Close filters"
            style={{ width: '32px', height: '32px' }}
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="filter-group">
        <div className="filter-title">Category</div>
        <div className="filter-category-list">
          <label className="filter-radio-label">
            <span>
              <input
                type="radio"
                name="categoryFilter"
                checked={selectedCategory === 'all'}
                onChange={() => onCategoryChange('all')}
              />
              All Categories
            </span>
          </label>
          {CATEGORIES.map(cat => (
            <label key={cat.id} className="filter-radio-label">
              <span>
                <input
                  type="radio"
                  name="categoryFilter"
                  checked={selectedCategory === cat.slug}
                  onChange={() => onCategoryChange(cat.slug)}
                />
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <div className="filter-title">Price Range (AED)</div>
        <div className="price-inputs-row">
          <input
            type="number"
            className="price-input"
            placeholder="Min"
            min="0"
            max="10000"
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            aria-label="Minimum price in AED"
          />
          <span style={{ color: 'var(--color-charcoal-muted)' }}>–</span>
          <input
            type="number"
            className="price-input"
            placeholder="Max"
            min="0"
            max="10000"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            aria-label="Maximum price in AED"
          />
        </div>
        <div style={{ fontSize: '0.74rem', color: 'var(--color-charcoal-muted)', marginTop: '0.4rem' }}>
          Catalog ranges from AED 195 to AED 3,450
        </div>
      </div>

      {/* Availability Filter */}
      <div className="filter-group">
        <div className="filter-title">Availability</div>
        <label className="filter-radio-label">
          <span>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockChange(e.target.checked)}
            />
            In Stock Only
          </span>
        </label>
      </div>

      {/* Reset Action */}
      <button
        type="button"
        className="btn btn-outline btn-full btn-sm"
        onClick={onResetFilters}
        style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
      >
        <RotateCcw size={14} /> Clear All Filters
      </button>
    </aside>
  );
}
