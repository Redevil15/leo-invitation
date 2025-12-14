/* ============================================
   TOLUCASHIELDPLACEHOLDER.TSX
   ============================================
   React 19: Props tipadas directamente en el parámetro.
   Valor por defecto en destructuring.
*/

import type { ShieldPlaceholderProps } from '../types';

// ============================================
// COMPONENTE
// ============================================

export default function TolucaShieldPlaceholder({
  className = '',
}: ShieldPlaceholderProps) {
  return (
    <div
      className={`shield-placeholder ${className}`}
      role="img"
      aria-label="Escudo del Deportivo Toluca"
    >
      <svg
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="placeholder-svg"
      >
        {/* Forma de escudo */}
        <path
          d="M50 5 L95 20 L95 70 Q95 100 50 115 Q5 100 5 70 L5 20 Z"
          fill="var(--toluca-red)"
          stroke="var(--white)"
          strokeWidth="3"
        />

        {/* Círculo interior */}
        <circle cx="50" cy="60" r="25" fill="var(--white)" opacity="0.9" />

        {/* Emoji placeholder */}
        <text x="50" y="68" textAnchor="middle" fontSize="30">
          ⚽
        </text>
      </svg>

      <span className="placeholder-label">Escudo SVG aquí</span>
    </div>
  );
}
