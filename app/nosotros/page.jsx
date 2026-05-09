import DisponiblesLink from "../components/DisponiblesLink";

export const metadata = {
  title: "Nosotros | Refugio Camba",
  description: "Conocé el enfoque de Refugio Camba para estadías simples, cuidadas y bien ubicadas.",
};

export default function Nosotros() {
  return (
    <main className="page">
      <section className="shell about-page" aria-label="Nosotros">
        <header className="topbar">
          <a className="logo-link" href="/" aria-label="Ir al inicio">
            <img src="/assets/logo.jpeg" alt="Refugio Camba" />
          </a>
          <nav className="home-nav" aria-label="Principal">
            <a href="/">Inicio</a>
            <a href="/resenas">Reseñas</a>
            <DisponiblesLink />
          </nav>
        </header>

        <section className="about-hero" aria-labelledby="about-title">
          <div>
            <p className="eyebrow">Nosotros</p>
            <h1 id="about-title">Hospedar bien también es cuidar los detalles simples.</h1>
          </div>
          <p>
            Refugio Camba nace para ofrecer estadías claras, cómodas y cercanas. Queremos que cada huésped llegue con
            información precisa, encuentre un espacio impecable y tenga contacto directo cuando lo necesite.
          </p>
        </section>

        <section className="about-values" aria-label="Valores">
          <article>
            <span>01</span>
            <h2>Calidez</h2>
            <p>Atención cercana antes, durante y después de la estadía.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Orden</h2>
            <p>Ambientes cuidados, limpios y preparados para llegar sin vueltas.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Ubicación</h2>
            <p>San Luis 1473, una dirección práctica para moverte por Corrientes.</p>
          </article>
        </section>
      </section>
    </main>
  );
}
