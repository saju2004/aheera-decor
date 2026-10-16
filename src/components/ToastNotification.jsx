import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ToastNotification() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  const isError = toastMessage.type === 'error';

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className={`toast ${isError ? 'toast-error' : ''}`}>
        {isError ? (
          <AlertCircle size={20} color="#FF6B6B" style={{ flexShrink: 0 }} />
        ) : (
          <CheckCircle2 size={20} color="var(--color-sand)" style={{ flexShrink: 0 }} />
        )}
        <span>{toastMessage.text}</span>
      </div>
    </div>
  );
}
