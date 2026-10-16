import React, { createContext, useContext, useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => getStorageItem('aheera_cart', []));
  const [promoCode, setPromoCode] = useState(() => getStorageItem('aheera_promo', null));
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    setStorageItem('aheera_cart', cart);
  }, [cart]);

  useEffect(() => {
    setStorageItem('aheera_promo', promoCode);
  }, [promoCode]);

  const showToast = (message, type = 'info') => {
    setToastMessage({ id: Date.now(), text: message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  /**
   * Add a product to the cart with optional color and quantity
   */
  const addToCart = (product, quantity = 1, selectedColor = null) => {
    const color = selectedColor || (product.colors && product.colors[0]?.name) || 'Standard';
    const itemKey = `${product.id}-${color}`;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            itemKey,
            productId: product.id,
            name: product.name,
            slug: product.slug,
            category: product.category,
            price: product.price,
            comparePrice: product.comparePrice,
            image: product.mainImage,
            color,
            quantity
          }
        ];
      }
    });

    showToast(`Added "${product.name}" (${color}) to your shopping bag.`);
  };

  /**
   * Remove item by itemKey
   */
  const removeFromCart = (itemKey) => {
    setCart(prev => prev.filter(item => item.itemKey !== itemKey));
    showToast('Item removed from shopping bag.');
  };

  /**
   * Update item quantity (min 1)
   */
  const updateQuantity = (itemKey, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.itemKey === itemKey ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  /**
   * Clear all items in cart
   */
  const clearCart = () => {
    setCart([]);
    showToast('Your shopping bag has been cleared.');
  };

  /**
   * Demo promo code application (e.g. WELCOME10 for 10% off)
   */
  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'WELCOME10' || clean === 'AHEERA10') {
      setPromoCode({ code: clean, percentage: 10 });
      showToast('Demo promo code "10% OFF" applied successfully!');
      return { success: true, message: '10% discount applied!' };
    } else {
      showToast('Invalid promo code. Try "WELCOME10"', 'error');
      return { success: false, message: 'Invalid code. Use demo code: WELCOME10' };
    }
  };

  const removePromoCode = () => {
    setPromoCode(null);
    showToast('Promo code removed.');
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Free shipping threshold: 500 AED, otherwise 50 AED
  const shippingFee = subtotal > 500 || subtotal === 0 ? 0 : 50;
  
  const discountAmount = promoCode ? Math.round(subtotal * (promoCode.percentage / 100)) : 0;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalItemsCount,
        shippingFee,
        promoCode,
        applyPromoCode,
        removePromoCode,
        discountAmount,
        total,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
