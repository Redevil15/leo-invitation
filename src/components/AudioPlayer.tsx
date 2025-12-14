/* ============================================
   AUDIOPLAYER.TSX - MÚSICA DE FONDO
   ============================================ */

import { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

interface AudioPlayerProps {
  src: string; // Ruta del archivo de audio
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  /*
    Controla play/pause cuando cambia isPlaying.
    useRef nos da acceso directo al elemento <audio>.
  */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((error) => {
        // Si el navegador bloquea, revertimos el estado
        console.log('Autoplay bloqueado:', error);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Elemento de audio oculto */}
      <audio
        ref={audioRef}
        src={src}
        loop // Reproducir en bucle
        preload="auto"
      />

      {/* Botón flotante */}
      <button
        className={`audio-button ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? (
          // Icono de pausa
          <span className="audio-icon">⏸️</span>
        ) : (
          // Icono de play con indicador de música
          <span className="audio-icon">🎵</span>
        )}
      </button>
    </>
  );
}
