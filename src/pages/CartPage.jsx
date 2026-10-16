import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trash2, ShieldCheck, Tag, ShoppingBag } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import CartItem from '../components/CartItem';
import EmptyState from '../components/EmptyState';
import DemoCheckoutModal from '../components/DemoCheckoutModal';
import OrderConfirmationModal from '../components/OrderConfirmationModal';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';

export default function CartPage() {
  const {
    cart,
    clearCart,
    subtotal,
    shippingFee,
    promoCode,
    applyPromoCode,
    removePromoCode,
    discountAmount,
    total,
    totalItemsCount
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    document.title = 'Shopping Bag — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    setPromoMessage(res.message);
  };

  const handleOrderCompleted = (orderSummary) => {
    setIsCheckoutOpen(false);
    clearCart();
    setCompletedOrder(orderSummary);
  };

  return (
    <div className="container cart-section">
      <Breadcrumbs items={[{ label: 'Shopping Bag', to: '/cart' }]} />

      <div style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '0.5rem' }}>
          Your Shopping Bag
        </h1>
        <p style={{ color: 'var(--color-charcoal-muted)' }}>
          Review your selected artisanal furniture, lighting, and interior objects.
        </p>
      </div>

      {cart.length === 0 ? (
        <EmptyState
          title="Your shopping bag is currently empty"
          description="You haven't added any living pieces to your bag yet. Explore our handcrafted furniture, sculptural ceramics, and ambient lighting."
          actionText="Explore All Collections"
          actionLink="/shop"
        />
      ) : (
        <div className="cart-layout">
          {/* Items Container */}
          <div className="cart-items-container">
            <div className="cart-header-row">
              <span style={{ fontSize: '0.88rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Items ({totalItemsCount})
              </span>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setShowClearConfirm(true)}
                style={{ fontSize: '0.78rem', padding: '0.4rem 0.8rem' }}
              >
                <Trash2 size={13} /> Clear Bag
              </button>
            </div>

            {/* Clear Bag Confirmation Prompt */}
            {showClearConfirm && (
              <div style={{
                backgroundColor: 'var(--color-badge-sale-bg)',
                border: '1px solid var(--color-badge-sale)',
                padding: '1rem',
                borderRadius: 'var(--radius-xs)',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-badge-sale)' }}>
                  Are you sure you want to remove all items from your bag?
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    className="btn btn-sm"
                    style={{ backgroundColor: 'var(--color-badge-sale)', color: '#fff' }}
                    onClick={() => {
                      clearCart();
                      setShowClearConfirm(false);
                    }}
                  >
                    Yes, Clear All
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setShowClearConfirm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Line Items List */}
            <div className="cart-items-list">
              {cart.map(item => (
                <CartItem key={item.itemKey} item={item} />
              ))}
            </div>

            {/* Back link */}
            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/shop" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Continue Shopping Catalog
              </Link>
            </div>
          </div>

          {/* Order Summary Column */}
          <aside className="order-summary-card">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-row">
              <span>Items Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>

            {/* Promo Code Form */}
            {promoCode ? (
              <div className="promo-tag-applied">
                <span>
                  <Tag size={14} style={{ display: 'inline', marginRight: '6px' }} />
                  Code: <strong>{promoCode.code}</strong> (10% OFF applied)
                </span>
                <button
                  type="button"
                  onClick={removePromoCode}
                  style={{ color: 'inherit', fontWeight: 600, fontSize: '0.78rem' }}
                  aria-label="Remove applied promo code"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyPromo} className="promo-form">
                <input
                  type="text"
                  placeholder="Promo code (Try: WELCOME10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  aria-label="Enter promotional discount code"
                />
                <button type="submit" className="btn btn-outline btn-sm">
                  Apply
                </button>
              </form>
            )}

            {promoMessage && !promoCode && (
              <div style={{ fontSize: '0.78rem', color: 'var(--color-badge-sale)', marginBottom: '0.75rem' }}>
                {promoMessage}
              </div>
            )}

            {discountAmount > 0 && (
              <div className="summary-row" style={{ color: 'var(--color-badge-sale)' }}>
                <span>Demo Discount Savings</span>
                <span>-{formatPrice(discountAmount)}</span>
              </div>
            )}

            <div className="summary-row">
              <div>
                <span>UAE Standard Shipping</span>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-charcoal-muted)' }}>
                  {subtotal > 500 ? 'Complimentary on orders > AED 500' : 'AED 50 standard fee'}
                </div>
              </div>
              <span>{shippingFee === 0 ? 'Complimentary' : formatPrice(shippingFee)}</span>
            </div>

            <div className="summary-row total-row">
              <span>Estimated Total (AED)</span>
              <span>{formatPrice(total)}</span>
            </div>

            {/* Demo Checkout Trigger */}
            <button
              type="button"
              className="btn btn-primary btn-full btn-lg"
              style={{ marginTop: '1.5rem' }}
              onClick={() => setIsCheckoutOpen(true)}
            >
              Proceed to Demo Checkout <ArrowRight size={16} />
            </button>

            {/* Simulation Clarification */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem',
              marginTop: '1.5rem',
              padding: '0.75rem',
              backgroundColor: 'var(--color-ivory)',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.75rem',
              color: 'var(--color-charcoal-muted)'
            }}>
              <ShieldCheck size={18} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Portfolio Checkout Simulation:</strong> Real payments are not supported. Clicking checkout allows you to test form validations and receive a simulated order confirmation number.
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Demo Checkout Modal */}
      <DemoCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        subtotal={subtotal}
        shippingFee={shippingFee}
        discountAmount={discountAmount}
        total={total}
        onOrderComplete={handleOrderCompleted}
      />

      {/* Order Confirmation Receipt Modal */}
      <OrderConfirmationModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />
    </div>
  );
}
