/* ============================================
   TYPES.TS - DEFINICIONES DE TIPOS
   ============================================
   Interfaces centralizadas para toda la aplicación.
   
   React 19 no cambia cómo definimos tipos,
   pero sí cómo los usamos en componentes.
*/

// ============================================
// DATOS DEL FESTEJADO
// ============================================

export interface BirthdayPerson {
  name: string;
  age: number;
  nickname?: string;
}

// ============================================
// DATOS DEL EVENTO
// ============================================

export interface TimeRange {
  start: string;
  end: string;
}

export interface Location {
  name: string;
  neighborhood: string;
  city: string;
  zipCode: string;
  mapsUrl: string;
}

export interface EventDetails {
  date: string;
  time: TimeRange;
  location: Location;
}

// ============================================
// CÓDIGO DE VESTIMENTA
// ============================================

export interface DressCode {
  requirement: string;
  icon?: string;
}

// ============================================
// CONTACTO
// ============================================

export interface ContactInfo {
  phone: string;
  countryCode: string;
  message: string;
}

// ============================================
// TEMA VISUAL
// ============================================

export interface ThemeConfig {
  team: string;
  teamFull?: string;
  emoji: string;
}

// ============================================
// FOTOS
// ============================================

export interface Photo {
  src: string;
  alt: string;
}

// ============================================
// DATOS COMPLETOS DE INVITACIÓN
// ============================================

export interface InvitationData {
  birthday: BirthdayPerson;
  event: EventDetails;
  dressCode: DressCode;
  contact: ContactInfo;
  theme: ThemeConfig;
  photos: Photo[];
}

// ============================================
// PROPS DE COMPONENTES
// ============================================

export interface InvitationCardProps {
  data: InvitationData;
}

export interface ShieldPlaceholderProps {
  className?: string;
}
