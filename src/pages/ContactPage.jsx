import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, CheckCircle2, Send } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact & Design Concierge — Aheera Decor';
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please select or provide a subject';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      <Breadcrumbs items={[{ label: 'Contact & Concierge', to: '/contact' }]} />

      <div style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
        <span className="section-eyebrow">Client Concierge</span>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', marginBottom: '1rem' }}>
          Connect With Our Studio
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.7' }}>
          Have an interior styling question or curious about our custom stone dimensions? Our design advisors are pleased to assist you with inquiries.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem', alignItems: 'flex-start' }}>
        {/* Contact Form */}
        <div style={{ backgroundColor: 'var(--color-white)', padding: '2.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h2>

          {isSubmitted ? (
            <div style={{
              backgroundColor: 'var(--color-sand-light)',
              border: '1px solid var(--color-sand)',
              padding: '2rem',
              borderRadius: 'var(--radius-xs)',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={40} color="var(--color-muted-olive)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Demo Message Sent Successfully</h3>
              <p style={{ color: 'var(--color-charcoal-light)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Thank you for testing our contact submission! As this is an interactive portfolio demonstration, your simulated message has been validated and handled locally. No external email server has been messaged.
              </p>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Demo Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
                <input
                  id="contact-name"
                  type="text"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="e.g. Layla Mansoor"
                  value={formData.name}
                  onChange={e => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: null });
                  }}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  type="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="layla@example.com"
                  value={formData.email}
                  onChange={e => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: null });
                  }}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Inquiry Subject *</label>
                <select
                  id="contact-subject"
                  className={`form-select ${errors.subject ? 'error' : ''}`}
                  value={formData.subject}
                  onChange={e => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: null });
                  }}
                >
                  <option value="">Select a subject...</option>
                  <option value="Product Specifications & Sizing">Product Specifications & Sizing</option>
                  <option value="Interior Design Trade Concierge">Interior Design Trade Concierge</option>
                  <option value="Delivery & White-Glove Installation">Delivery & White-Glove Installation</option>
                  <option value="Portfolio Demonstration Inquiry">Portfolio Demonstration Inquiry</option>
                  <option value="General Brand Inquiry">General Brand Inquiry</option>
                </select>
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us how we can assist with your home space..."
                  value={formData.message}
                  onChange={e => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: null });
                  }}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Transmitting...' : 'Send Message'} <Send size={15} />
              </button>
            </form>
          )}
        </div>

        {/* Demo Studio Details */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ backgroundColor: 'var(--color-ivory)', border: '1px solid var(--color-border)', padding: '2rem', borderRadius: 'var(--radius-sm)' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Studio Location</h3>

            <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <MapPin size={20} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                <strong>Aheera Design Studio</strong><br />
                Warehouse 42, Alserkal Avenue<br />
                Al Quoz 1, Dubai, UAE<br />
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-olive)' }}>(Illustrative Demo Location)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <Mail size={20} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                <strong>Direct Correspondence</strong><br />
                concierge@aheera-demo.com<br />
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-olive)' }}>(Portfolio Demo Inbox)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <Phone size={20} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                <strong>Client Service Telephone</strong><br />
                +971 4 000 0000<br />
                <span style={{ fontSize: '0.78rem', color: 'var(--color-muted-olive)' }}>(Demonstration Number)</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <Clock size={20} color="var(--color-muted-olive)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.9rem', color: 'var(--color-charcoal-light)' }}>
                <strong>Consultation Hours</strong><br />
                Monday – Saturday: 10:00 AM – 8:00 PM<br />
                Sunday: Private Appointments
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: '#F7F4EE',
            border: '1px dashed var(--color-sand)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-xs)',
            fontSize: '0.82rem',
            color: 'var(--color-charcoal-light)',
            lineHeight: '1.6'
          }}>
            <strong>Demonstration Notice:</strong> Aheera Decor is a portfolio project designed to demonstrate front-end development capabilities. The contact form validates input locally and simulates a successful submission. No actual email is transmitted to an external service.
          </div>
        </aside>
      </div>
    </div>
  );
}
