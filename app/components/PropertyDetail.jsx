"use client";

import { useMemo, useRef, useState } from "react";
import Icon from "./Icon";
import Lightbox from "./Lightbox";
import WhatsAppFab from "./WhatsAppFab";
import SiteFooter from "./SiteFooter";
import { mapsLink, waLink } from "../data/listings";

const faqs = [
  {
    q: "¿Cómo confirmo la reserva?",
    a: "Escribinos por WhatsApp con las fechas que te interesan. Te respondemos y te pasamos los pasos para reservar.",
  },
  {
    q: "¿Qué incluye la estadía?",
    a: "Ropa de cama, toallas, desayuno, Wi-Fi, aire acondicionado, cocina equipada y limpieza previa al ingreso. Llegás y te instalás.",
  },
  {
    q: "¿Cuáles son los horarios de check-in y check-out?",
    a: "Check-in desde las 15:00 y check-out hasta las 11:00. Si tu viaje no coincide, lo coordinamos.",
  },
  {
    q: "¿Aceptan mascotas?",
    a: "Consultanos por mensaje contando un poco sobre tu mascota. Vemos caso por caso para que estén todos cómodos.",
  },
];

export default function PropertyDetail({ listing }) {
  const initialSpaceIndex = Math.max(
    listing.spaces.findIndex((space) => space.photos.includes(listing.coverImage)),
    0,
  );
  const initialPhotoIndex = Math.max(
    listing.spaces[initialSpaceIndex].photos.findIndex((src) => src === listing.coverImage),
    0,
  );
  const [spaceIndex, setSpaceIndex] = useState(initialSpaceIndex);
  const [photoIndex, setPhotoIndex] = useState(initialPhotoIndex);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const nearbyTrackRef = useRef(null);

  const tour = useMemo(
    () =>
      listing.spaces.flatMap((space, spaceIdx) =>
        space.photos.map((src, photoIdx) => ({ src, spaceIdx, photoIdx, title: space.title })),
      ),
    [listing.spaces],
  );

  const currentSpace = listing.spaces[spaceIndex];
  const currentPhoto = currentSpace.photos[photoIndex];
  const currentTourIndex = useMemo(
    () => tour.findIndex((t) => t.spaceIdx === spaceIndex && t.photoIdx === photoIndex),
    [spaceIndex, photoIndex, tour],
  );
  const progress = ((currentTourIndex + 1) / tour.length) * 100;

  const goToTour = (offset) => {
    const next = tour[(currentTourIndex + offset + tour.length) % tour.length];
    setSpaceIndex(next.spaceIdx);
    setPhotoIndex(next.photoIdx);
  };

  const goToSpace = (idx) => {
    setSpaceIndex(idx);
    setPhotoIndex(0);
  };

  const allPhotos = tour.map((t) => t.src);
  const openLightbox = () => setLightboxIndex(currentTourIndex);
  const nearbyPlaces = listing.nearbyPlaces ?? [];

  const scrollNearby = (offset) => {
    const track = nearbyTrackRef.current;
    const card = track?.querySelector(".nearby-card");
    if (!track || !card) return;
    const gap = 14;
    track.scrollBy({ left: offset * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  const wa = waLink(listing.waText);
  const map = mapsLink(listing.mapQuery);

  return (
    <main className="page prop-page">
      <div className="shell prop-shell">
        <header className="topbar">
          <a className="logo-link" href="/" aria-label="Ir al inicio">
            <img src="/assets/logo.png" alt="Refugio Camba" />
          </a>
          <nav className="home-nav" aria-label="Principal">
            <a href="/">Inicio</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/#resenas">Reseñas</a>
          </nav>
        </header>

        <div className="prop-header">
          <div>
            <p className="eyebrow">{listing.eyebrow}</p>
            <h1 className="prop-title">{listing.title}</h1>
            <p className="prop-subtitle">{listing.location}</p>
          </div>
          <div className="prop-facts">
            {listing.facts.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
        </div>

        <div className="prop-gallery">
          <div className="gallery-main" onClick={openLightbox}>
            <img key={currentPhoto} src={currentPhoto} alt={currentSpace.title} className="gallery-img" />

            <div className="gallery-nav" onClick={(event) => event.stopPropagation()}>
              <button type="button" onClick={() => goToTour(-1)} aria-label="Foto anterior">
                <Icon type="left" />
              </button>
              <button type="button" onClick={() => goToTour(1)} aria-label="Foto siguiente">
                <Icon type="right" />
              </button>
            </div>

            <button
              type="button"
              className="gallery-zoom"
              onClick={(event) => {
                event.stopPropagation();
                openLightbox();
              }}
              aria-label="Ver en grande"
            >
              <Icon type="zoom" />
              Ampliar
            </button>

            <div className="gallery-caption">
              <span>{currentSpace.title}</span>
              <span className="gallery-counter">{currentTourIndex + 1} / {tour.length}</span>
            </div>

            <div className="gallery-bar">
              <div className="gallery-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="gallery-thumbs" role="list" aria-label="Recorrido de ambientes">
            {listing.spaces.map((space, idx) => (
              <button
                key={space.id}
                type="button"
                role="listitem"
                className={`gallery-thumb${idx === spaceIndex ? " active" : ""}`}
                onClick={() => goToSpace(idx)}
                aria-label={space.title}
                aria-pressed={idx === spaceIndex}
              >
                <img src={space.photos[0]} alt={space.title} />
                <span>{space.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="prop-body">
          <div className="prop-content">
            <section className="prop-section" aria-labelledby="desc-title">
              <h2 id="desc-title">Sobre el departamento</h2>
              <p>{listing.summary}</p>
            </section>

            <section className="prop-section tour-section" aria-labelledby="tour-title">
              <h2 id="tour-title">Recorrido por ambientes</h2>
              <div className="space-rail">
                {listing.spaces.map((space, index) => (
                  <button
                    key={space.id}
                    type="button"
                    className={index === spaceIndex ? "active" : ""}
                    onClick={() => goToSpace(index)}
                  >
                    <Icon type={space.icon} />
                    <span>{space.title}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="prop-section" aria-labelledby="amenities-title">
              <h2 id="amenities-title">Lo que encontrás</h2>
              <div className="amenities-grid">
                {listing.amenities.map((item) => (
                  <div key={item.label} className="amenity">
                    <Icon type={item.icon} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="prop-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-label">Consultanos por WhatsApp</p>
              <p className="sidebar-desc">
                Escribinos con las fechas que te interesan y te respondemos al instante.
              </p>
              {listing.airbnbUrl && (
                <a className="sidebar-cta sidebar-airbnb" href={listing.airbnbUrl} target="_blank" rel="noreferrer">
                  <Icon type="airbnb" />
                  Ver en Airbnb
                </a>
              )}
              <a className="sidebar-cta" href={wa} target="_blank" rel="noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
              <a className="sidebar-map" href={map} target="_blank" rel="noreferrer">
                <Icon type="pin" />
                {listing.location}
              </a>
            </div>
          </aside>
        </div>

        <section className="faq-section" aria-labelledby="faq-title">
          <div>
            <p className="eyebrow">Preguntas frecuentes</p>
            <h2 id="faq-title">Antes de reservar.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {nearbyPlaces.length > 0 && (
          <section className="nearby-section" aria-labelledby="nearby-title">
            <div className="nearby-head">
              <div>
                <p className="eyebrow">Cerca de donde vas a estar</p>
                <h2 id="nearby-title">Imperdibles de Corrientes.</h2>
              </div>
              <div className="nearby-controls" aria-label="Controles del carrusel">
                <button type="button" onClick={() => scrollNearby(-1)} aria-label="Lugar anterior">
                  <Icon type="left" />
                </button>
                <button type="button" onClick={() => scrollNearby(1)} aria-label="Lugar siguiente">
                  <Icon type="right" />
                </button>
              </div>
            </div>

            <div className="nearby-track" ref={nearbyTrackRef} tabIndex={0} aria-label="Lugares cercanos">
              {nearbyPlaces.map((place) => (
                <article className="nearby-card" key={place.title}>
                  <img src={place.image} alt={place.title} loading="lazy" />
                  <div className="nearby-card-body">
                    <span>{place.tag}</span>
                    <h3>{place.title}</h3>
                    <p>{place.description}</p>
                    <a href={mapsLink(place.mapQuery)} target="_blank" rel="noreferrer">
                      Ver en Maps
                      <Icon type="arrow" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <SiteFooter />
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length)}
          onNext={() => setLightboxIndex((i) => (i + 1) % allPhotos.length)}
        />
      )}

      <WhatsAppFab text={listing.waText} label="Consultar" />
    </main>
  );
}
