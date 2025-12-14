/* ============================================
   DECORATIONS.TSX - ELEMENTOS DECORATIVOS
   ============================================
   React 19: Componente funcional sin imports de React.
   TypeScript infiere el tipo de retorno automáticamente.
*/

import '../Decoration.css';

// ============================================
// TIPOS LOCALES
// ============================================

interface Ball {
  id: number;
  emoji: string;
  className: string;
}

interface ConfettiPiece {
  id: number;
}

// ============================================
// DATOS ESTÁTICOS
// ============================================

const BALLS: readonly Ball[] = [
  { id: 1, emoji: '⚽', className: 'ball-1' },
  { id: 2, emoji: '⚽', className: 'ball-2' },
  { id: 3, emoji: '⚽', className: 'ball-3' },
  { id: 4, emoji: '⚽', className: 'ball-4' },
  { id: 5, emoji: '⚽', className: 'ball-5' },
];

const CONFETTI_PIECES: readonly ConfettiPiece[] = Array.from(
  { length: 10 },
  (_, index) => ({ id: index + 1 })
);

// ============================================
// COMPONENTE
// ============================================

export default function Decorations() {
  return (
    <>
      {/* Confeti */}
      <div className="confetti-container" aria-hidden="true">
        {CONFETTI_PIECES.map((piece) => (
          <span key={piece.id} className="confetti" />
        ))}
      </div>

      {/* Balones */}
      {BALLS.map((ball) => (
        <div
          key={ball.id}
          className={`ball ${ball.className}`}
          aria-hidden="true"
        >
          {ball.emoji}
        </div>
      ))}
    </>
  );
}
