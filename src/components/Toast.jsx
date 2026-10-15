import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="toast-notice">
      <CheckCircle size={18} color="#06b6d4" />
      <span>{message}</span>
    </div>
  );
}
