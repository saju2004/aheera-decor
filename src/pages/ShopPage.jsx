import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, RotateCcw } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import { PRODUCTS } from '../data/products';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // State
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = 'Complete Catalog — Aheera Decor Home Collection';
    window.scrollTo(0, 0);
  }, []);

  // Sync category param if URL changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setMinPrice('');
    setMaxPrice('');
    setInStockOnly(false);
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      // Category match
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false;
      }
      // Min Price match
      if (minPrice && product.price < parseFloat(minPrice)) {
        return false;
      }
      // Max Price match
      if (maxPrice && product.price > parseFloat(maxPrice)) {
        return false;
      }
      // In Stock match
      if (inStockOnly && product.availabilityStatus !== 'In Stock') {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesMat = product.material.toLowerCase().includes(q);
        if (!matchesName && !matchesCategory && !matchesDesc && !matchesMat) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default 'featured'
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [selectedCategory, minPrice, maxPrice, inStockOnly, sortBy, searchQuery]);

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs items={[{ label: 'Catalog', to: '/shop' }]} />

      <header className="catalog-header">
        <h1 className="catalog-title">The Complete Collection</h1>
        <p className="catalog-desc">
          Thoughtfully crafted objects, ambient lighting, monolithic travertine tables, and natural linen essentials. All sample items are priced in AED for portfolio review.
        </p>
      </header>

      {/* Control Bar: Product Count, Mobile Filter Button, Sort Dropdown */}
      <div className="catalog-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            type="button"
            className="mobile-filter-btn"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            aria-label="Toggle filter drawer"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>
          <span className="catalog-count">
            Showing <strong>{filteredProducts.length}</strong> of {PRODUCTS.length} curated products
          </span>
        </div>

        <div className="catalog-controls">
          {/* Quick Search within Catalog */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Search size={16} style={{ position: 'absolute', left: '10px', color: 'var(--color-charcoal-muted)' }} />
            <input
              type="text"
              className="form-input"
              style={{ padding: '0.5rem 1rem 0.5rem 2.2rem', fontSize: '0.84rem', width: '200px' }}
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search items in catalog"
            />
          </div>

          {/* Sort By Select */}
          <label htmlFor="sort-dropdown" className="sr-only">Sort products</label>
          <select
            id="sort-dropdown"
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Sort by: Curated Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Alphabetical: A to Z</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Main Catalog Layout */}
      <div className="catalog-layout">
        <ProductFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          inStockOnly={inStockOnly}
          onInStockChange={setInStockOnly}
          onResetFilters={handleResetFilters}
          isMobileOpen={isMobileFiltersOpen}
          onCloseMobile={() => setIsMobileFiltersOpen(false)}
        />

        <main id="catalog-results" style={{ width: '100%' }}>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 1.5rem',
              backgroundColor: 'var(--color-white)',
              border: '1px dashed var(--color-border)',
              borderRadius: 'var(--radius-sm)'
            }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>No products match your filters</h3>
              <p style={{ color: 'var(--color-charcoal-muted)', marginBottom: '1.5rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Try relaxing your price range or clearing category filters to view our full collection of home decor pieces.
              </p>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={handleResetFilters}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <RotateCcw size={14} /> Clear All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
