import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import WhatsAppFab from "./components/WhatsAppFab";
import Reveal from "./components/Reveal";
import Icon from "./components/Icon";
import ReviewsContent from "./components/ReviewsContent";
import { listings, upcomingListings } from "./data/listings";

export const metadata = {
  title: "Refugio Camba · Alquileres temporarios en Corrientes",
  description:
    "Alquileres temporarios cuidados en Corrientes. Ambientes cálidos y bien ubicados para estadías en la ciudad.",
};

export default function Home() {
  return (
    <main className="page">
      <section className="shell home-shell" aria-label="Inicio">
        <SiteHeader disponiblesHref="#alquileres" />

        <Reveal as="section" className="home-hero" aria-label="Refugio Camba">
          <div>
            <p className="eyebrow">Refugio Camba · Corrientes</p>
            <h1>
              Tu lugar <em>tranquilo</em> en Corrientes.
            </h1>
            <p>
              Alquileres temporarios cuidados para llegar, instalarte y disfrutar la ciudad.
              Atención cercana, ambientes cálidos y ubicación práctica.
            </p>
          </div>
          <a href="#alquileres">Ver disponibilidad</a>
        </Reveal>

        <Reveal as="section" className="featured-section" id="alquileres" aria-labelledby="featured-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Estadías disponibles</p>
              <h2 id="featured-title">Alquileres listos para vos.</h2>
            </div>
            <a className="section-cta" href="/alquiler-1473#disponibilidad">
              Ver disponibilidad
              <Icon type="arrow" />
            </a>
          </div>

          <div className="listing-grid">
            {listings.map((item) => (
              <a key={item.id} className="listing-card" href={`/${item.slug}`}>
                <div className="card-image">
                  <img src={item.coverImage} alt={item.title} />
                  {item.available && <span className="listing-badge">Disponible</span>}
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <span className="listing-eyebrow">{item.eyebrow}</span>
                    <h2>{item.title}</h2>
                    <p className="listing-location">
                      <Icon type="pin" />
                      {item.location}
                    </p>
                  </div>
                  <p className="card-summary">{item.summary}</p>
                  <div className="card-facts">
                    {item.facts.map((fact) => (
                      <span key={fact}>{fact}</span>
                    ))}
                  </div>
                  <span className="card-cta">
                    Ver departamento
                    <Icon type="arrow" />
                  </span>
                </div>
              </a>
            ))}

            {upcomingListings.map((item, idx) => (
              <article key={`upcoming-${idx}`} className="listing-card upcoming" aria-label="Próxima estadía">
                <div className="card-image upcoming-frame">
                  <span>{item.note}</span>
                </div>
                <div className="card-content">
                  <div className="card-top">
                    <span className="listing-eyebrow">Próximamente</span>
                    <h2>{item.neighborhood}</h2>
                    <p className="listing-location">{item.city}, Argentina</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="values-strip" aria-label="Cómo trabajamos">
          <article className="value-card">
            <span className="value-num">01</span>
            <h3>Calidez</h3>
            <p>Atención cercana antes, durante y después de la estadía. Estamos a un mensaje.</p>
          </article>
          <article className="value-card">
            <span className="value-num">02</span>
            <h3>Orden</h3>
            <p>Ambientes impecables, listos para llegar sin vueltas y descansar tranquilo.</p>
          </article>
          <article className="value-card">
            <span className="value-num">03</span>
            <h3>Ubicación</h3>
            <p>Direcciones bien elegidas para moverse por Corrientes con comodidad.</p>
          </article>
        </Reveal>

        <Reveal>
          <ReviewsContent compact />
        </Reveal>

        <SiteFooter />
      </section>
      <WhatsAppFab />
    </main>
  );
}
