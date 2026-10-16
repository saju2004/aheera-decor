import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Heart } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import WishlistItem from '../components/WishlistItem';
import EmptyState from '../components/EmptyState';
import { useWishlist } from '../context/WishlistContext';

export default function WishlistPage() {
  const { wishlist, clearWishlist, totalWishlistCount } = useWishlist();

  useEffect(() => {
    document.title = 'Saved Pieces — Wishlist — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs items={[{ label: 'Saved Wishlist', to: '/wishlist' }]} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.5rem' }}>
            Saved Curations
          </h1>
          <p style={{ color: 'var(--color-charcoal-muted)' }}>
            Your personally saved interior furniture, lighting, and tactile objects.
          </p>
        </div>

        {totalWishlistCount > 0 && (
          <button
            type="button"
            className="btn btn-outline btn-sm"
            onClick={clearWishlist}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <Trash2 size={13} /> Clear All Saved
          </button>
        )}
      </div>

      {totalWishlistCount === 0 ? (
        <EmptyState
          title="Your wishlist is empty"
          description="Save your favorite pieces while browsing our collections by clicking the heart icon on any product."
          actionText="Discover The Collection"
          actionLink="/shop"
        />
      ) : (
        <div className="product-grid">
          {wishlist.map(product => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
