import ReviewsContent from "./components/ReviewsContent";
import Icon from "./components/Icon";
import SiteFooter from "./components/SiteFooter";
import Topbar from "./components/Topbar";

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
          <a href="/alquiler-1473">Ver alquiler</a>
        </section>

        <section className="featured-section" id="alquileres" aria-labelledby="alquileres-title">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Alquileres temporales</p>
              <h2 id="alquileres-title">Un refugio listo para disfrutar Corrientes</h2>
            </div>
            <a className="section-cta" href="/alquiler-1473">
              Ver detalle
              <Icon type="arrow" />
            </a>
          </div>
          <div className="section-copy">
            <p>Ambientes cálidos, buena ubicación y todo preparado para llegar sin vueltas.</p>
          </div>
          <div className="listing-grid">
            <a className="listing-card" href="/alquiler-1473">
              <div className="card-image">
                <img src="/assets/refugio-camba/living.jpg" alt="Living de San Luis 1473" />
                <span className="listing-badge">Alquiler temporal</span>
              </div>
              <div className="card-content">
                <div className="card-top">
                  <span className="listing-eyebrow">Refugio Camba</span>
                  <h2>San Luis 1473</h2>
                  <p className="listing-location">
                    <Icon type="pin" />
                    Corrientes Capital
                  </p>
                </div>
                <p className="card-summary">
                  Departamento cálido para dos personas, cerca del centro y preparado para llegar sin vueltas.
                </p>
                <div className="card-facts">
                  <span>2 huéspedes</span>
                  <span>1 dormitorio</span>
                  <span>Balcón</span>
                </div>
                <span className="card-cta">
                  Ver el alquiler
                  <Icon type="arrow" />
                </span>
              </div>
            </a>
          </div>
        </section>

        <ReviewsContent />
        <SiteFooter />
      </section>
    </main>
  );
}
