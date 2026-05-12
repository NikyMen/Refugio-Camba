import DisponiblesLink from "./DisponiblesLink";

export default function SiteHeader({ disponiblesHref }) {
  return (
    <header className="topbar">
      <a className="logo-link" href="/" aria-label="Ir al inicio">
        <img src="/assets/logo.png" alt="Refugio Camba" />
      </a>
      <nav className="home-nav" aria-label="Principal">
        <a href="/">Inicio</a>
        <DisponiblesLink href={disponiblesHref} />
      </nav>
    </header>
  );
}
