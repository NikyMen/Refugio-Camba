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
        <span>5,0 · 4 evaluaciones</span>
        <span>Más recientes</span>
        <a
          href="https://www.airbnb.com.ar/rooms/1674699382362407455/reviews?source_impression_id=p3_1778625466_P3Fx9rUc49MSEd-L"
          target="_blank"
          rel="noreferrer"
        >
          Ver en Airbnb
        </a>
      </div>

      <div className="review-grid">
        <article className="review-card compact-review">
          <div className="review-profile">
            <span>P</span>
            <div>
              <h3>Patricio</h3>
              <p>Corrientes, Argentina</p>
            </div>
          </div>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hoy · Estadía de algunas noches</p>
          <p>Impecable, muy recomendable.</p>
        </article>

        <article className="review-card compact-review">
          <div className="review-profile">
            <span>J</span>
            <div>
              <h3>José Raúl</h3>
              <p>Hace 10 años que está en Airbnb</p>
            </div>
          </div>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hace 2 días · Estadía de algunas noches</p>
          <p>El departamento precioso y Cynthia muy atenta con nosotros. Se recomienda.</p>
        </article>

        <article className="review-card featured-review">
          <div className="review-profile">
            <span>C</span>
            <div>
              <h3>Carlos</h3>
              <p>Campeche, México</p>
            </div>
          </div>
          <div className="rating-row" aria-label="Calificación: 5 estrellas">★★★★★</div>
          <p className="review-date">Hace 6 días · Estadía de algunas noches</p>
          <p>
            Quedamos encantados con este hospedaje y, sobre todo, con la hospitalidad de Cinthia y su esposo. Desde
            antes de nuestra llegada estuvieron muy atentos y siempre disponibles para ayudarnos con cualquier duda o
            necesidad, lo cual hizo que toda la experiencia fuera muy agradable.
          </p>
          <p>
            El lugar superó nuestras expectativas: es incluso más lindo que en las fotos y estaba impecable. La conexión
            a internet es buena, ideal si necesitas trabajar o mantenerte conectado.
          </p>
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
          <p className="review-date">Hace 4 días · Estadía de una noche</p>
          <p>
            Hermoso lugar, cálido y una decoración y limpieza que te hacen sentir en un hotel 5 estrellas. Cynthia y su
            marido muy buenos anfitriones. Altamente recomendable.
          </p>
        </article>
      </div>
    </section>
  );
}
