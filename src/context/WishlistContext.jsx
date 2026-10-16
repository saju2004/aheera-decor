import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';
import { useCart } from './CartContext';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => getStorageItem('aheera_wishlist', []));
  const { showToast } = useCart();

  useEffect(() => {
    setStorageItem('aheera_wishlist', wishlist);
  }, [wishlist]);

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from your wishlist.`);
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to your wishlist.`);
        return [...prev, product];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    const item = wishlist.find(i => i.id === productId);
    setWishlist(prev => prev.filter(i => i.id !== productId));
    if (item) {
      showToast(`Removed "${item.name}" from your wishlist.`);
    }
  };

  const clearWishlist = () => {
    setWishlist([]);
    showToast('Wishlist cleared.');
  };

  const totalWishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        clearWishlist,
        totalWishlistCount
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
