import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-nav" style={{ padding: '1.25rem 0', fontSize: '0.82rem', color: 'var(--color-charcoal-muted)' }}>
      <ol style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem' }}>
        <li>
          <Link to="/" style={{ color: 'var(--color-charcoal-muted)', transition: 'color 0.2s' }}>
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ChevronRight size={13} color="#9E9A90" />
              {isLast ? (
                <span aria-current="page" style={{ color: 'var(--color-charcoal)', fontWeight: 500 }}>
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} style={{ color: 'var(--color-charcoal-muted)' }}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
