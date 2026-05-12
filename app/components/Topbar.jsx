"use client";

import DisponiblesLink from "./DisponiblesLink";

export default function Topbar() {
  return (
    <header className="topbar">
      <a className="logo-link" href="/" aria-label="Ir al inicio">
        <img src="/assets/logo.jpeg" alt="Refugio Camba" />
      </a>
      <nav className="home-nav" aria-label="Principal">
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/resenas">Reseñas</a>
        <DisponiblesLink />
      </nav>
    </header>
  );
}
