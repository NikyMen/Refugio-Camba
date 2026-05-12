"use client";

import { useMemo, useState } from "react";
import DisponiblesLink from "./components/DisponiblesLink";
import ReviewsContent from "./components/ReviewsContent";
import Topbar from "./components/Topbar";

const spaces = [
  {
    id: "living",
    title: "Living",
    icon: "living",
    point: [17, 62],
    photos: ["/assets/refugio-camba/living.jpg"],
  },
  {
    id: "comedor",
    title: "Comedor",
    icon: "dining",
    point: [34, 49],
    photos: [
      "/assets/refugio-camba/comedor-1.jpg",
      "/assets/refugio-camba/comedor-2.jpg",
      "/assets/refugio-camba/adicional-2.jpg",
      "/assets/refugio-camba/adicional-3.jpg",
    ],
  },
  {
    id: "cocina",
    title: "Cocina",
    icon: "kitchen",
    point: [54, 35],
    photos: [
      "/assets/refugio-camba/cocina-1.jpg",
      "/assets/refugio-camba/cocina-2.jpg",
    ],
  },
  {
    id: "dormitorio",
    title: "Dormitorio",
    icon: "bed",
    point: [73, 45],
    photos: [
      "/assets/refugio-camba/dormitorio-1.jpg",
      "/assets/refugio-camba/dormitorio-2.jpg",
      "/assets/refugio-camba/dormitorio-3.jpg",
      "/assets/refugio-camba/dormitorio-4.jpg",
    ],
  },
  {
    id: "bano",
    title: "Baño",
    icon: "bath",
    point: [84, 64],
    photos: [
      "/assets/refugio-camba/bano-1.jpg",
      "/assets/refugio-camba/bano-2.jpg",
    ],
  },
  {
    id: "balcon",
    title: "Balcon",
    icon: "balcony",
    point: [22, 29],
    photos: ["/assets/refugio-camba/balcon.jpg"],
  },
  {
    id: "lavadero",
    title: "Lavadero",
    icon: "laundry",
    point: [58, 73],
    photos: ["/assets/refugio-camba/lavadero.jpg"],
  },
  {
    id: "edificio",
    title: "Edificio",
    icon: "building",
    point: [86, 22],
    photos: ["/assets/refugio-camba/edificio.jpg"],
  },
];

const tour = spaces.flatMap((space, spaceIndex) =>
  space.photos.map((src, photoIndex) => ({ src, spaceIndex, photoIndex })),
);

function RoomIcon({ type }) {
  const icons = {
    living: (
      <>
        <path d="M5 12h14a2 2 0 0 1 2 2v4H3v-4a2 2 0 0 1 2-2Z" />
        <path d="M6 12V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
        <path d="M6 18v2M18 18v2" />
      </>
    ),
    dining: (
      <>
        <path d="M7 3v8M4 3v8M10 3v8M4 7h6" />
        <path d="M7 11v10" />
        <path d="M16 3v18" />
        <path d="M16 3c3 2 4 5 4 8h-4" />
      </>
    ),
    kitchen: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8M8 13h8M9 17h.01M15 17h.01" />
      </>
    ),
    bed: (
      <>
        <path d="M4 11V6h6a3 3 0 0 1 3 3v2" />
        <path d="M4 11h16a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2Z" />
        <path d="M2 18v2M22 18v2" />
      </>
    ),
    bath: (
      <>
        <path d="M5 11h15v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1Z" />
        <path d="M7 11V6a3 3 0 0 1 6 0" />
        <path d="M12 6h3M8 19l-1 2M17 19l1 2" />
      </>
    ),
    balcony: (
      <>
        <path d="M5 5h14v16H5z" />
        <path d="M5 13h14M9 13v8M15 13v8" />
      </>
    ),
    laundry: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 7h.01M13 7h2" />
        <circle cx="12" cy="14" r="4" />
      </>
    ),
    building: (
      <>
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
        <path d="M3 21h18" />
      </>
    ),
    left: <path d="M15 18 9 12l6-6" />,
    right: <path d="m9 18 6-6-6-6" />,
    phone: (
      <path d="M7 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2A17 17 0 0 1 5 6c0-1 1-2 2-2Z" />
    ),
    pin: (
      <>
        <path d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page">
      <section className="shell home-shell" aria-label="Inicio">
        <Topbar />

        <section className="home-hero" aria-label="Refugio Camba">
          <div>
            <p className="eyebrow">Refugio Camba</p>
            <h1>Tu lugar tranquilo en Corrientes</h1>
            <p>Una estadía simple, cálida y bien ubicada para moverte fácil por la ciudad.</p>
          </div>
          <a href="#alquileres">Ver alquileres</a>
        </section>

        <section className="featured-section" id="alquileres" aria-labelledby="alquileres-title">
          <div className="section-head">
            <p className="eyebrow">Alquileres temporales disponibles</p>
            <h2 id="alquileres-title">Un refugio listo para disfrutar Corrientes</h2>
            <p>Ambientes cálidos, buena ubicación y todo preparado para llegar sin vueltas.</p>
          </div>
          <div className="listing-grid">
            <a className="listing-card" href="/alquiler-1473">
              <img src="/assets/refugio-camba/living.jpg" alt="San Luis 1473" />
              <span>Alquiler temporal</span>
              <h2>San Luis 1473</h2>
              <p>Corrientes Capital</p>
            </a>
          </div>
        </section>

        <ReviewsContent />
      </section>
    </main>
  );
}

export function PropertyDetail() {
  const [spaceIndex, setSpaceIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const currentSpace = spaces[spaceIndex];
  const currentPhoto = currentSpace.photos[photoIndex];
  const waLink = "https://wa.me/5493790000000?text=Hola%2C%20quiero%20consultar%20disponibilidad%20por%20San%20Luis%201473";
  const mapLink = "https://www.google.com/maps/search/?api=1&query=San%20Luis%201473%20Corrientes%20Argentina";

  const currentTourIndex = useMemo(
    () => tour.findIndex((item) => item.spaceIndex === spaceIndex && item.photoIndex === photoIndex),
    [spaceIndex, photoIndex],
  );
  const counter = `${currentTourIndex + 1}/${tour.length}`;
  const progress = ((currentTourIndex + 1) / tour.length) * 100;

  const goToTour = (offset) => {
    const nextIndex = (currentTourIndex + offset + tour.length) % tour.length;
    const nextItem = tour[nextIndex];
    setSpaceIndex(nextItem.spaceIndex);
    setPhotoIndex(nextItem.photoIndex);
  };

  const goToSpace = (nextSpaceIndex) => {
    setSpaceIndex(nextSpaceIndex);
    setPhotoIndex(0);
  };

  return (
    <main className="page">
      <section className="shell" aria-label="Refugio Camba">
        <header className="topbar">
          <a className="logo-link" href="/" aria-label="Ir al inicio">
            <img src="/assets/logo.png" alt="Refugio Camba" />
          </a>
          <nav className="home-nav" aria-label="Principal">
            <a href="/">Inicio</a>
            <a href="/nosotros">Nosotros</a>
            <a href="/#resenas">Reseñas</a>
            <DisponiblesLink />
          </nav>
          <a href={waLink} target="_blank" rel="noreferrer">
            <RoomIcon type="phone" />
            <span>Consultar</span>
          </a>
        </header>

        <article className="property-card">
          <div className="photo-panel">
            <img key={currentPhoto} className="main-photo" src={currentPhoto} alt={currentSpace.title} />

            <div className="photo-actions">
              <button type="button" onClick={() => goToTour(-1)} aria-label="Foto anterior">
                <RoomIcon type="left" />
              </button>
              <button type="button" onClick={() => goToTour(1)} aria-label="Foto siguiente">
                <RoomIcon type="right" />
              </button>
            </div>

            <div className="caption" aria-live="polite">
              <span>{currentSpace.title}</span>
              <strong>{counter}</strong>
              <i className="photo-progress">
                <b style={{ width: `${progress}%` }} />
              </i>
            </div>
          </div>

          <div className="info-panel">
            <div className="title-block">
              <h1>San Luis 1473</h1>
              <p className="summary">Alquiler temporal para 2 huéspedes en San Luis 1473.</p>
            </div>

            <div className="facts" aria-label="Datos del departamento">
              <span>2 huéspedes</span>
              <span>1 dormitorio</span>
              <span>1 baño</span>
              <span>Balcon</span>
            </div>

            <div className="tour-board" aria-label="Recorrido del departamento">
              <div className="tour-head">
                <span>Recorrido</span>
                <strong>{currentSpace.title}</strong>
              </div>

              <div className="space-rail">
                {spaces.map((space, index) => (
                  <button
                    key={space.id}
                    type="button"
                    className={index === spaceIndex ? "active" : ""}
                    onClick={() => goToSpace(index)}
                  >
                    <RoomIcon type={space.icon} />
                    <span>{space.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              className="map-card"
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir mapa"
            >
              <RoomIcon type="pin" />
              <span>San Luis 1473, Corrientes</span>
            </a>

            <a className="cta" href={waLink} target="_blank" rel="noreferrer">
              <RoomIcon type="phone" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
