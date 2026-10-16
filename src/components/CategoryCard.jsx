import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  return (
    <Link to={`/collections/${category.slug}`} className="category-card" aria-label={`Explore ${category.name} collection`}>
      <div className="category-card-image-wrap">
        <img src={category.image} alt={category.name} className="category-card-img" loading="lazy" />
        <div className="category-card-overlay" />
      </div>
      <div className="category-card-content">
        <span className="category-card-tagline">{category.tagline}</span>
        <h3 className="category-card-title">{category.name}</h3>
        <p className="category-card-desc">{category.description}</p>
        <span className="category-card-cta">
          Explore Collection <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
