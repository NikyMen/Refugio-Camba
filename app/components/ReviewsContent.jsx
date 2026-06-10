"use client";

import { useState } from "react";
import Icon from "./Icon";

const REVIEW_VIDEOS = [
  { src: "/assets/refugio-camba/refugio-camba-video.mp4", label: "Video de Refugio Camba" },
  { src: "/assets/refugio-camba/refugio-camba-bolivar.mp4", label: "Video de Refugio Camba - Bolívar" },
];

export default function ReviewsContent({ compact = false }) {
  const [videoIndex, setVideoIndex] = useState(0);
  const total = REVIEW_VIDEOS.length;
  const goPrev = () => setVideoIndex((i) => (i - 1 + total) % total);
  const goNext = () => setVideoIndex((i) => (i + 1) % total);
  const currentVideo = REVIEW_VIDEOS[videoIndex];

  return (
    <section className={compact ? "reviews-section compact-page" : "reviews-section"} id="resenas" aria-labelledby="reviews-title">
      <div className="reviews-head">
        <div>
          <p className="eyebrow">Reseñas</p>
          <h2 id="reviews-title">Experiencias que hablan por el lugar</h2>
        </div>
      </div>

      <div className="review-meta">
        <a
          href="https://www.airbnb.com.ar/rooms/1674699382362407455/reviews?source_impression_id=p3_1778625466_P3Fx9rUc49MSEd-L"
          target="_blank"
          rel="noreferrer"
        >
          5,0 · 4 evaluaciones
        </a>
        <button type="button" className="review-info-button" popoverTarget="review-info-popover">
          Cómo funcionan las evaluaciones
        </button>
        <a
          href="https://www.airbnb.com.ar/rooms/1674699382362407455/reviews?source_impression_id=p3_1778625466_P3Fx9rUc49MSEd-L"
          target="_blank"
          rel="noreferrer"
        >
          Ver en Airbnb
        </a>
      </div>

      <div className="review-video-wrap">
        {total > 1 && (
          <button
            type="button"
            className="review-video-nav review-video-nav--prev"
            onClick={goPrev}
            aria-label="Video anterior"
          >
            <Icon type="left" />
          </button>
        )}
        <video
          key={currentVideo.src}
          className="review-video"
          controls
          preload="metadata"
          playsInline
          aria-label={currentVideo.label}
        >
          <source src={currentVideo.src} type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
        {total > 1 && (
          <button
            type="button"
            className="review-video-nav review-video-nav--next"
            onClick={goNext}
            aria-label="Video siguiente"
          >
            <Icon type="right" />
          </button>
        )}
        {total > 1 && (
          <div className="review-video-dots" role="tablist" aria-label="Seleccionar video">
            {REVIEW_VIDEOS.map((v, i) => (
              <button
                key={v.src}
                type="button"
                className={i === videoIndex ? "review-video-dot is-active" : "review-video-dot"}
                onClick={() => setVideoIndex(i)}
                aria-label={`Ver video ${i + 1}`}
                aria-selected={i === videoIndex}
                role="tab"
              />
            ))}
          </div>
        )}
      </div>

      <div className="review-grid">
        <article className="review-card compact-review">
          <a
            className="review-profile"
            href="https://www.airbnb.com.ar/users/profile/1490452440163041599"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver perfil de Patricio en Airbnb"
          >
            <img src="/assets/refugio-camba/reviews/patricio.jpg" alt="" />
            <div>
              <h3>Patricio</h3>
              <p>Corrientes, Argentina</p>
            </div>
          </a>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hoy · Estadía de algunas noches</p>
          <p>Impecable, muy recomendable.</p>
        </article>

        <article className="review-card compact-review">
          <a
            className="review-profile"
            href="https://www.airbnb.com.ar/users/profile/1476517532045037489"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver perfil de José Raúl en Airbnb"
          >
            <img src="/assets/refugio-camba/reviews/jose-raul.jpg" alt="" />
            <div>
              <h3>José Raúl</h3>
              <p>Hace 10 años que está en Airbnb</p>
            </div>
          </a>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hace 2 días · Estadía de algunas noches</p>
          <p>El departamento precioso y Cynthia muy atenta con nosotros. Se recomienda.</p>
        </article>

        <article className="review-card featured-review">
          <a
            className="review-profile"
            href="https://www.airbnb.com.ar/users/profile/1489123500227381408"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver perfil de Carlos en Airbnb"
          >
            <img src="/assets/refugio-camba/reviews/carlos.jpg" alt="" />
            <div>
              <h3>Carlos</h3>
              <p>Campeche, México</p>
            </div>
          </a>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hace 6 días · Estadía de algunas noches</p>
          <p>
            Quedamos encantados con este hospedaje y, sobre todo, con la hospitalidad de Cinthia y su esposo. Desde
            antes de nuestra llegada estuvieron muy atentos y siempre disponibles para ayudarnos con cualquier duda o
            necesidad, lo cual hizo que toda la experiencia fuera muy agradable.
          </p>
          <p>
            El lugar superó nuestras expectativas: es incluso más lindo que en las fotos y estaba impecable. La conexión
            a internet es buena, ideal si necesitas trabajar o mantenerte conectado.
          </p>
        </article>

        <article className="review-card compact-review">
          <a
            className="review-profile"
            href="https://www.airbnb.com.ar/users/profile/1490677874548591765"
            target="_blank"
            rel="noreferrer"
            aria-label="Ver perfil de Cecilia en Airbnb"
          >
            <img src="/assets/refugio-camba/reviews/cecilia.jpg" alt="" />
            <div>
              <h3>Cecilia</h3>
              <p>Hace 8 meses que está en Airbnb</p>
            </div>
          </a>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hace 4 días · Estadía de una noche</p>
          <p>
            Hermoso lugar, cálido y una decoración y limpieza que te hacen sentir en un hotel 5 estrellas. Cynthia y su
            marido muy buenos anfitriones. Altamente recomendable.
          </p>
        </article>
      </div>

      <div className="review-modal-card" id="review-info-popover" popover="auto" role="dialog" aria-labelledby="review-modal-title">
        <button
          type="button"
          className="review-modal-close"
          popoverTarget="review-info-popover"
          popoverTargetAction="hide"
          aria-label="Cerrar"
        >
          <Icon type="close" />
        </button>
        <h3 id="review-modal-title">Cómo funcionan las evaluaciones</h3>
        <p>Cada estrella corresponde a una parte de la experiencia:</p>
        <ul>
          <li><strong>1 estrella:</strong> limpieza.</li>
          <li><strong>2 estrellas:</strong> calidad.</li>
          <li><strong>3 estrellas:</strong> ubicación.</li>
          <li><strong>4 estrellas:</strong> comunicación.</li>
          <li><strong>5 estrellas:</strong> experiencia general.</li>
        </ul>
      </div>
    </section>
  );
}
