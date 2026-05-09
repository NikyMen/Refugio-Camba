export default function ReviewsContent({ compact = false }) {
  return (
    <section className={compact ? "reviews-section compact-page" : "reviews-section"} id="resenas" aria-labelledby="reviews-title">
      <div className="reviews-head">
        <div>
          <p className="eyebrow">Reseñas</p>
          <h2 id="reviews-title">Experiencias que hablan por el lugar</h2>
        </div>
      </div>

      <div className="review-meta">
        <span>Cómo funcionan las evaluaciones</span>
        <span>Más relevantes</span>
        <a
          href="https://www.airbnb.com.ar/rooms/1674699382362407455/reviews?source_impression_id=p3_1778210916_P3-o7PPaG3po_jQk&scroll_to_review=1679861791552029259"
          target="_blank"
          rel="noreferrer"
        >
          Ver en Airbnb
        </a>
      </div>

      <div className="review-grid">
        <article className="review-card featured-review">
          <div className="review-profile">
            <span>C</span>
            <div>
              <h3>Carlos</h3>
              <p>Campeche, México</p>
            </div>
          </div>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hace 2 días · Estadía de algunas noches</p>
          <p>
            Quedamos encantados con este hospedaje y, sobre todo, con la hospitalidad de Cinthia y su esposo. Desde
            antes de nuestra llegada estuvieron muy atentos y siempre disponibles para ayudarnos con cualquier duda o
            necesidad, lo cual hizo que toda la experiencia fuera muy agradable.
          </p>
          <p>
            El lugar superó nuestras expectativas: es incluso más lindo que en las fotos y estaba impecable. La conexión
            a internet es buena, ideal si necesitas trabajar o mantenerte conectado.
          </p>
          <div className="host-reply">
            <strong>Respuesta de Cynthia</strong>
            <span>Gracias por tu excelente calificación, Carlos. Fue un placer ser tu anfitrión.</span>
          </div>
        </article>

        <article className="review-card compact-review">
          <div className="review-profile">
            <span>C</span>
            <div>
              <h3>Cecilia</h3>
              <p>Hace 8 meses que está en Airbnb</p>
            </div>
          </div>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hoy · Estadía de una noche</p>
          <p>
            Hermoso lugar, cálido y una decoración y limpieza que te hacen sentir en un hotel 5 estrellas. Cynthia y su
            marido muy buenos anfitriones. Altamente recomendable.
          </p>
        </article>
      </div>
    </section>
  );
}
