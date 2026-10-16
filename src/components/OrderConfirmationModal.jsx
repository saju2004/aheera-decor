import React from 'react';
import { CheckCircle2, PackageCheck, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export default function OrderConfirmationModal({ order, onClose }) {
  if (!order) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Order Confirmation">
      <div className="checkout-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <div style={{
          backgroundColor: 'var(--color-charcoal)',
          color: 'var(--color-white)',
          padding: '2.5rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-muted-olive)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <CheckCircle2 size={32} color="#FFFFFF" />
          </div>
          <h2 style={{ color: 'var(--color-white)', fontSize: '1.75rem', marginBottom: '0.4rem' }}>
            Demo Order Placed Successfully
          </h2>
          <p style={{ color: '#D6CFC4', fontSize: '0.88rem' }}>
            Thank you, {order.customer.firstName}. Your demo order reference is <strong>{order.orderNumber}</strong>.
          </p>
        </div>

        <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {/* Key Order Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem', backgroundColor: 'var(--color-ivory)', padding: '1rem', borderRadius: 'var(--radius-xs)' }}>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted-olive)', fontWeight: 600 }}>
                Order Date
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                {order.createdAt}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted-olive)', fontWeight: 600 }}>
                Estimated Delivery
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--color-charcoal)' }}>
                {order.estimatedDelivery}
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-muted-olive)', fontWeight: 600 }}>
                Destination (Demo Address)
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--color-charcoal)' }}>
                {order.customer.address}, {order.customer.city}, UAE
              </div>
            </div>
          </div>

          {/* Purchased Items List */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.92rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Items Summary
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {order.items.map(item => (
                <div key={item.itemKey} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.86rem', borderBottom: '1px solid var(--color-border-subtle)', paddingBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={item.image} alt={item.name} style={{ width: '38px', height: '44px', objectFit: 'cover', borderRadius: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 500 }}>{item.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)' }}>
                        Qty: {item.quantity} · {item.color}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontWeight: 600 }}>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Breakdown */}
          <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-charcoal-muted)' }}>Subtotal:</span>
              <span>{formatPrice(order.subtotal)}</span>
            </div>
            {order.discountAmount > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-badge-sale)' }}>
                <span>Demo Discount:</span>
                <span>-{formatPrice(order.discountAmount)}</span>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--color-charcoal-muted)' }}>UAE Shipping:</span>
              <span>{order.shippingFee === 0 ? 'Complimentary' : formatPrice(order.shippingFee)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.5rem', borderTop: '1px dashed var(--color-border)', paddingTop: '0.5rem' }}>
              <span>Total:</span>
              <span>{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>

        <div className="modal-footer" style={{ justifyContent: 'center' }}>
          <button type="button" className="btn btn-primary btn-full" onClick={onClose}>
            Continue Exploring Collection <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
