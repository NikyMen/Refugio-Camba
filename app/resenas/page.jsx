import Topbar from "../components/Topbar";
import ReviewsContent from "../components/ReviewsContent";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Reseñas | Refugio Camba",
  description: "Opiniones de huéspedes sobre Refugio Camba y San Luis 1473.",
};

export default function ResenasPage() {
  return (
    <main className="page">
      <section className="shell reviews-page" aria-label="Reseñas">
        <Topbar />
        <ReviewsContent compact />
        <SiteFooter />
      </section>
    </main>
  );
}
