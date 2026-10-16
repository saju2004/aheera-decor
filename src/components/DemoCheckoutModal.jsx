import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { formatPrice } from '../utils/formatters';

export default function DemoCheckoutModal({ isOpen, onClose, cart, subtotal, shippingFee, discountAmount, total, onOrderComplete }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Dubai',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact telephone is required';
    if (!formData.address.trim()) newErrors.address = 'Street address is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate brief order processing
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedOrderNumber = `AHD-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderSummary = {
        orderNumber: generatedOrderNumber,
        customer: { ...formData },
        items: [...cart],
        subtotal,
        shippingFee,
        discountAmount,
        total,
        createdAt: new Date().toLocaleDateString('en-AE', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        estimatedDelivery: '2–3 Business Days (Complimentary White-Glove)'
      };
      onOrderComplete(orderSummary);
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Demo Checkout">
      <div className="checkout-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '2px' }}>Demo Storefront Checkout</h3>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-olive)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Portfolio Simulation · Zero Financial Risk
            </span>
          </div>
          <button type="button" className="action-btn" onClick={onClose} aria-label="Close checkout modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Portfolio Guarantee Disclaimer */}
          <div style={{
            backgroundColor: '#F7F4EE',
            border: '1px solid var(--color-sand)',
            padding: '1rem',
            borderRadius: 'var(--radius-xs)',
            marginBottom: '1.75rem',
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start'
          }}>
            <ShieldCheck size={22} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.82rem', color: 'var(--color-charcoal)' }}>
              <strong>Interactive Demo Notice:</strong> No credit card numbers or real payments are ever requested. This checkout simulates customer order flow, calculates order totals in AED, and generates an illustrative order confirmation receipt for demonstration purposes.
            </div>
          </div>

          <form id="checkout-form" onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  className={`form-input ${errors.firstName ? 'error' : ''}`}
                  placeholder="e.g. Mariam"
                  value={formData.firstName}
                  onChange={e => {
                    setFormData({ ...formData, firstName: e.target.value });
                    if (errors.firstName) setErrors({ ...errors, firstName: null });
                  }}
                />
                {errors.firstName && <div className="form-error">{errors.firstName}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  className={`form-input ${errors.lastName ? 'error' : ''}`}
                  placeholder="e.g. Al Hashemi"
                  value={formData.lastName}
                  onChange={e => {
                    setFormData({ ...formData, lastName: e.target.value });
                    if (errors.lastName) setErrors({ ...errors, lastName: null });
                  }}
                />
                {errors.lastName && <div className="form-error">{errors.lastName}</div>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="mariam@example.com"
                  value={formData.email}
                  onChange={e => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={e => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: null });
                  }}
                />
                {errors.phone && <div className="form-error">{errors.phone}</div>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="address">Delivery Address (Street & Villa/Apt) *</label>
              <input
                id="address"
                type="text"
                className={`form-input ${errors.address ? 'error' : ''}`}
                placeholder="Villa 14, Street 9B, Jumeirah 1"
                value={formData.address}
                onChange={e => {
                  setFormData({ ...formData, address: e.target.value });
                  if (errors.address) setErrors({ ...errors, address: null });
                }}
              />
              {errors.address && <div className="form-error">{errors.address}</div>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label" htmlFor="city">Emirate *</label>
                <select
                  id="city"
                  className="form-select"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                >
                  <option value="Dubai">Dubai</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Sharjah">Sharjah</option>
                  <option value="Ajman">Ajman</option>
                  <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                  <option value="Fujairah">Fujairah</option>
                  <option value="Umm Al Quwain">Umm Al Quwain</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="notes">Delivery Instructions (Optional)</label>
                <input
                  id="notes"
                  type="text"
                  className="form-input"
                  placeholder="Gate code or leave at reception"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>

            {/* Line Items Review */}
            <div style={{ marginTop: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
                Order Summary ({cart.length} item{cart.length > 1 ? 's' : ''})
              </div>
              <div style={{ maxHeight: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                {cart.map(item => (
                  <div key={item.itemKey} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                    <span>{item.name} × {item.quantity} ({item.color})</span>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: 600, borderTop: '1px dashed var(--color-border)', paddingTop: '0.75rem' }}>
                <span>Total Due (Demo Simulation)</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-outline btn-sm" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </button>
          <button
            type="submit"
            form="checkout-form"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Simulating Order...' : `Confirm Demo Order (${formatPrice(total)})`}
          </button>
        </div>
      </div>
    </div>
  );
}
