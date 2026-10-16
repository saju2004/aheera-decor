import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import QuantitySelector from './QuantitySelector';
import { useCart } from '../context/CartContext';

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart();

  const lineTotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      {/* Thumbnail */}
      <Link to={`/product/${item.slug}`} className="cart-item-image">
        <img src={item.image} alt={item.name} loading="lazy" />
      </Link>

      {/* Info */}
      <div className="cart-item-info">
        <span className="cart-item-category">{item.category}</span>
        <Link to={`/product/${item.slug}`} className="cart-item-name">
          {item.name}
        </Link>
        <div className="cart-item-variant">
          Variant: <strong>{item.color}</strong>
        </div>
        <div className="cart-item-price-unit">
          Unit Price: {formatPrice(item.price)}
        </div>
      </div>

      {/* Quantity & Total */}
      <div className="cart-item-actions">
        <div className="cart-item-total">{formatPrice(lineTotal)}</div>
        <QuantitySelector
          quantity={item.quantity}
          onChange={(newQty) => updateQuantity(item.itemKey, newQty)}
        />
        <button
          type="button"
          className="cart-item-remove-btn"
          onClick={() => removeFromCart(item.itemKey)}
          aria-label={`Remove ${item.name} from cart`}
        >
          <Trash2 size={14} /> Remove
        </button>
      </div>
    </div>
  );
}
