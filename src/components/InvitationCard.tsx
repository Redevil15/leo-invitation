/* ============================================
   INVITATIONCARD.TSX - TARJETA DE INVITACIÓN
   ============================================ */

import { useEffect, useState } from 'react';
import type { InvitationCardProps, Photo } from '../types';
import TolucaShield from '../assets/TolucaShield';
import './InvitationCard.css';

export default function InvitationCard({ data }: InvitationCardProps) {
  const { birthday, event, dressCode, contact, theme, photos } = data;

  /*
    Estado para controlar el modal de fotos.
    
    null = modal cerrado
    Photo = foto actualmente mostrada en el modal
    
    useState<Photo | null> indica que el estado puede ser:
    - Un objeto Photo (cuando hay foto seleccionada)
    - null (cuando el modal está cerrado)
  */
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const whatsappUrl = `https://wa.me/${contact.countryCode}${
    contact.phone
  }?text=${encodeURIComponent(contact.message)}`;

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup: restaurar scroll cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedPhoto]);

  const openPhotoModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  /*
    Manejador de teclas para cerrar con Escape.
    Se podría mejorar con useEffect para agregar/remover
    el event listener, pero para simplicidad lo manejamos
    en el onClick del overlay.
  */

  const renderPhotoGallery = () => {
    if (photos.length > 0) {
      return (
        <section className="photo-gallery">
          <h2 className="gallery-title">
            {theme.emoji} El Festejado {theme.emoji}
          </h2>
          <div className="photo-grid">
            {photos.map((photo: Photo, index: number) => (
              <div
                key={photo.src || index}
                className="photo-item"
                onClick={() => openPhotoModal(photo)}
                onKeyDown={(e) => {
                  // Permitir activación con Enter o Space (accesibilidad)
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openPhotoModal(photo);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Ver foto: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                {/* Indicador de que se puede hacer clic */}
                <div className="photo-overlay">
                  <span className="photo-zoom-icon">🔍</span>
                </div>
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
    <>
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
          {/* Secciones de info */}
          <div className="info-sections-container">
            <section className="info-section">
              <div className="icon-box" aria-hidden="true">
                📅
              </div>
              <div className="info-content">
                <span className="info-label">Fecha</span>
                <p className="info-value">{event.date}</p>
              </div>
            </section>

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

      {/* ==========================================
          MODAL DE FOTO
          ==========================================
          Se renderiza condicionalmente cuando hay
          una foto seleccionada.
      */}
      {selectedPhoto && (
        <div
          className="photo-modal-overlay"
          onClick={closePhotoModal}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closePhotoModal();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto: ${selectedPhoto.alt}`}
        >
          {/* Contenedor de la imagen - stopPropagation evita cerrar al hacer clic en la foto */}
          <div
            className="photo-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              className="photo-modal-close"
              onClick={closePhotoModal}
              aria-label="Cerrar foto"
            >
              ✕
            </button>

            {/* Imagen grande */}
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="photo-modal-image"
            />
          </div>

          {/* Instrucción para cerrar */}
          <p className="photo-modal-hint">
            Toca fuera de la imagen para cerrar
          </p>
        </div>
      )}
    </>
  );
}
