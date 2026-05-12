"use client";

import { useEffect } from "react";
import Icon from "./Icon";

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  if (index == null || !photos?.length) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-stage">
        <span className="lightbox-counter">
          {index + 1} / {photos.length}
        </span>
        <button
          type="button"
          className="lightbox-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <Icon type="close" />
        </button>
        <button
          type="button"
          className="lightbox-nav prev"
          onClick={onPrev}
          aria-label="Anterior"
        >
          <Icon type="left" />
        </button>
        <img key={index} src={photos[index]} alt={`Foto ${index + 1}`} />
        <button
          type="button"
          className="lightbox-nav next"
          onClick={onNext}
          aria-label="Siguiente"
        >
          <Icon type="right" />
        </button>
      </div>
    </div>
  );
}
