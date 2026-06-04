export default function Topbar() {
  return (
    <header className="topbar">
      <a className="logo-link" href="/" aria-label="Ir al inicio">
        <img src="/assets/logo.png" alt="Refugio Camba" />
      </a>
      <nav className="home-nav" aria-label="Principal">
        <a href="/">Inicio</a>
        <a href="/nosotros">Nosotros</a>
        <a href="/#resenas">Reseñas</a>
        <a className="primary" href="/#alquileres">Alquiler</a>
      </nav>
    </header>
  );
}
