/* ============================================
   MAIN.TSX - ENTRY POINT
   ============================================
   React 19: createRoot sigue siendo la API estándar.
   StrictMode sigue funcionando igual.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
