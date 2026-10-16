import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an email address.');
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Success simulation
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="newsletter-box">
      {status === 'success' ? (
        <div style={{
          backgroundColor: 'var(--color-sand-light)',
          padding: '1.25rem',
          borderRadius: 'var(--radius-xs)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          color: 'var(--color-charcoal)'
        }}>
          <Check size={20} color="var(--color-muted-olive)" />
          <div style={{ fontSize: '0.88rem' }}>
            <strong>Demo Subscription Recorded:</strong> Thank you for previewing our newsletter subscription! (This is a portfolio demo; no promotional emails are actually dispatched).
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              className={`form-input ${status === 'error' ? 'error' : ''}`}
              style={{ flex: '1 1 240px', minWidth: '220px' }}
              placeholder="Enter your email for private studio previews..."
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>
              Subscribe <ArrowRight size={15} />
            </button>
          </div>
          {status === 'error' && (
            <span className="form-error">{errorMessage}</span>
          )}
          <span style={{ fontSize: '0.75rem', color: 'var(--color-charcoal-muted)' }}>
            * Demonstrative subscription only. Your email is never shared or stored externally.
          </span>
        </form>
      )}
    </div>
  );
}
