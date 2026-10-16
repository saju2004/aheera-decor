/**
 * Format a numeric amount into AED currency string
 * e.g. 1850 -> "AED 1,850"
 */
export function formatPrice(amount) {
  if (amount === undefined || amount === null) return 'AED 0';
  const numeric = typeof amount === 'number' ? amount : parseFloat(amount) || 0;
  return `AED ${numeric.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
}

/**
 * Calculate the percentage discount between current price and compare price
 */
export function calculateDiscount(price, comparePrice) {
  if (!comparePrice || comparePrice <= price) return null;
  const discount = Math.round(((comparePrice - price) / comparePrice) * 100);
  return `${discount}% OFF`;
}

/**
 * Convert string to URL-friendly slug
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
