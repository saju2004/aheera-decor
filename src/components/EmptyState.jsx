import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function EmptyState({
  title = 'Your collection is empty',
  description = 'Explore our curated catalog to discover timeless furniture, ambient lighting, and artisanal objects.',
  actionText = 'Explore The Shop',
  actionLink = '/shop'
}) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '5rem 1.5rem',
      maxWidth: '540px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        backgroundColor: 'var(--color-sand-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        color: 'var(--color-muted-olive)'
      }}>
        <Sparkles size={28} />
      </div>
      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{title}</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--color-charcoal-muted)', lineHeight: '1.6' }}>
        {description}
      </p>
      <Link to={actionLink} className="btn btn-primary btn-lg">
        {actionText}
      </Link>
    </div>
  );
}
