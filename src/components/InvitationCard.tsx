/* ============================================
   INVITATIONCARD.TSX - TARJETA DE INVITACIÓN
   ============================================ */

import type { InvitationCardProps, Photo } from '../types';
import TolucaShield from '../assets/TolucaShield';
import './InvitationCard.css';

export default function InvitationCard({ data }: InvitationCardProps) {
  const { birthday, event, dressCode, contact, theme, photos } = data;

  const whatsappUrl = `https://wa.me/${contact.countryCode}${
    contact.phone
  }?text=${encodeURIComponent(contact.message)}`;

  const renderPhotoGallery = () => {
    if (photos.length > 0) {
      return (
        <section className="photo-gallery">
          <h2 className="gallery-title">
            {theme.emoji} El Festejado {theme.emoji}
          </h2>
          <div className="photo-grid">
            {photos.map((photo: Photo, index: number) => (
              <div key={photo.src || index} className="photo-item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      );
    }

    return (
      <section className="photo-gallery">
        <h2 className="gallery-title">
          {theme.emoji} El Festejado {theme.emoji}
        </h2>
        <div className="photo-grid">
          {[1, 2, 3].map((num) => (
            <div key={num} className="photo-item photo-placeholder">
              <span className="placeholder-icon">📸</span>
              <span className="placeholder-text">Foto {num}</span>
            </div>
          ))}
        </div>
        <p className="photo-instructions">
          💡 Agrega fotos en <code>App.tsx</code> → <code>photos[]</code>
        </p>
      </section>
    );
  };

  return (
    <article className="invitation-card">
      {/* HEADER */}
      <header className="card-header">
        <div className="shield-container">
          <TolucaShield className="team-shield" />
        </div>

        <span className="team-badge">
          {theme.emoji} {theme.team} {theme.emoji}
        </span>

        <h1 className="invitation-title">
          <span className="title-name">{birthday.name}</span>
          <span className="title-text">Te invita a su fiesta</span>
        </h1>

        <div className="age-display">
          <span className="age-number">{birthday.age}</span>
          <span className="age-label">Años</span>
        </div>
      </header>

      {/* CONTENIDO */}
      <div className="card-content">
        {/* ==========================================
            SECCIONES DE INFO - NUEVO DISEÑO
            ========================================== */}
        <div className="info-sections-container">
          {/* Fecha */}
          <section className="info-section">
            <div className="icon-box" aria-hidden="true">
              📅
            </div>
            <div className="info-content">
              <span className="info-label">Fecha</span>
              <p className="info-value">{event.date}</p>
            </div>
          </section>

          {/* Horario */}
          <section className="info-section">
            <div className="icon-box" aria-hidden="true">
              🕐
            </div>
            <div className="info-content">
              <span className="info-label">Horario</span>
              <p className="info-value">
                {event.time.start} a {event.time.end} hrs
              </p>
            </div>
          </section>

          {/* Ubicación */}
          <section className="info-section">
            <div className="icon-box" aria-hidden="true">
              📍
            </div>
            <div className="info-content">
              <span className="info-label">Lugar</span>
              <address className="info-value location-address">
                {event.location.name}, {event.location.neighborhood},{' '}
                {event.location.city}, C.P. {event.location.zipCode}
              </address>
            </div>
          </section>
        </div>

        {/* Código de vestimenta */}
        <section className="dress-code">
          <h2 className="dress-code-title">🏆 Requisito Especial 🏆</h2>
          <p className="dress-code-text">{dressCode.requirement}</p>
        </section>

        {/* Galería */}
        {renderPhotoGallery()}

        {/* Botones */}
        <nav className="actions" aria-label="Acciones de confirmación">
          <a
            href={whatsappUrl}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon" aria-hidden="true">
              💬
            </span>
            <span>Confirmar Asistencia</span>
          </a>

          <a
            href={event.location.mapsUrl}
            className="btn btn-maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon" aria-hidden="true">
              🗺️
            </span>
            <span>Ver Ubicación</span>
          </a>
        </nav>
      </div>

      {/* FOOTER */}
      <footer className="card-footer">
        <p className="footer-text">
          <span className="footer-emoji" aria-hidden="true">
            ⚽
          </span>
          ¡Te esperamos para celebrar juntos!
          <span className="footer-emoji" aria-hidden="true">
            🎉
          </span>
        </p>
      </footer>
    </article>
  );
}
