import DisponiblesLink from "../components/DisponiblesLink";
import ReviewsContent from "../components/ReviewsContent";

export const metadata = {
  title: "Reseñas | Refugio Camba",
  description: "Opiniones de huéspedes sobre Refugio Camba y San Luis 1473.",
};

export default function ResenasPage() {
  return (
    <main className="page">
      <section className="shell reviews-page" aria-label="Reseñas">
        <header className="topbar">
          <a className="logo-link" href="/" aria-label="Ir al inicio">
            <img src="/assets/logo.jpeg" alt="Refugio Camba" />
          </a>
          <nav className="home-nav" aria-label="Principal">
            <a href="/">Inicio</a>
            <a href="/nosotros">Nosotros</a>
            <DisponiblesLink />
          </nav>
        </header>
        <ReviewsContent compact />
      </section>
    </main>
  );
}
