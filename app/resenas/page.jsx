import ReviewsContent from "../components/ReviewsContent";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import WhatsAppFab from "../components/WhatsAppFab";

export const metadata = {
  title: "Reseñas | Refugio Camba",
  description: "Opiniones de huéspedes sobre Refugio Camba y San Luis 1473.",
};

export default function ResenasPage() {
  return (
    <main className="page">
      <section className="shell reviews-page" aria-label="Reseñas">
        <SiteHeader variant="inner" />
        <ReviewsContent compact />
        <SiteFooter />
      </section>
      <WhatsAppFab />
    </main>
  );
}
