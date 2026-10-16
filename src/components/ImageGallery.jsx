import React, { useState, useEffect } from 'react';

export default function ImageGallery({ images, productName }) {
  const [activeImage, setActiveImage] = useState(images[0] || '');

  // Reset active image if images array changes
  useEffect(() => {
    if (images && images.length > 0) {
      setActiveImage(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="gallery-container">
      <div className="gallery-main-image">
        <img
          src={activeImage}
          alt={productName}
          loading="eager"
        />
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails" role="tablist" aria-label="Product thumbnail gallery">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              className={`gallery-thumb-btn ${activeImage === img ? 'active' : ''}`}
              onClick={() => setActiveImage(img)}
              aria-label={`View photo ${idx + 1} of ${productName}`}
            >
              <img src={img} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
