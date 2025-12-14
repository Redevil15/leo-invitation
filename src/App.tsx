/* ============================================
   APP.TSX - COMPONENTE PRINCIPAL
   ============================================
   React 19: No necesitas importar React para JSX.
   Los tipos se infieren automáticamente.
*/

import Decorations from './components/Decorations';
import InvitationCard from './components/InvitationCard';
import type { InvitationData } from './types';
import './App.css';

// ============================================
// DATOS DE LA INVITACIÓN
// ============================================

const invitationData: InvitationData = {
  birthday: {
    name: 'Leonardo',
    age: 7,
    nickname: 'Leo',
  },

  event: {
    date: 'Sábado 24 de Enero, 2026',
    time: {
      start: '14:00',
      end: '19:30',
    },
    location: {
      name: 'Privada Acapulco 465',
      neighborhood: 'San Jerónimo Chicahualco',
      city: 'Metepec',
      zipCode: '52170',
      mapsUrl: 'https://maps.app.goo.gl/dEBSJLj4uXEPNoYP6?g_st=aw',
    },
  },

  dressCode: {
    requirement: '¡Lleva la playera de tu equipo favorito!',
    icon: '👕',
  },

  contact: {
    phone: '7223984413',
    countryCode: '52',
    message: `¡Hola!  Confirmo asistencia a la fiesta de cumpleaños de Leo #7   

Nombre: 
Número de personas: `,
  },

  theme: {
    team: 'Diablos Rojos',
    teamFull: 'Deportivo Toluca F.C.',
    emoji: '⚽',
  },

  photos: [
    { src: '/src/images/Leo1.jpeg', alt: 'Leonardo 1' },
    { src: '/src/images/Leo2.jpeg', alt: 'Leonardo 2' },
    { src: '/src/images/Leo5.jpeg', alt: 'Leonardo 3' },
  ],
};

// ============================================
// COMPONENTE
// ============================================

export default function App() {
  return (
    <>
      <Decorations />
      <main className="app-container">
        <InvitationCard data={invitationData} />
      </main>
    </>
  );
}
