import { displayPhone, listings, waLink } from "../data/listings";
import Icon from "./Icon";

export default function SiteFooter() {
  const airbnbUrl = listings[0]?.airbnbUrl;
  const whatsappUrl = waLink("Hola, quiero mas informacion sobre Refugio Camba");

  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">Refugio Camba</p>
        <p>Alquileres temporarios cuidados en Corrientes. Estadías cálidas y bien ubicadas.</p>
      </div>
      <div>
        <h4>Contacto</h4>
        <div className="footer-contact-list">
          {airbnbUrl && (
            <a className="footer-contact-link" href={airbnbUrl} target="_blank" rel="noreferrer">
              <span className="footer-contact-icon">
                <Icon type="airbnb" />
              </span>
              <span className="footer-contact-text">
                <strong>Airbnb</strong>
                <span>Ver disponibilidad</span>
              </span>
            </a>
          )}
          <a className="footer-contact-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="footer-contact-icon">
              <Icon type="wa" />
            </span>
            <span className="footer-contact-text">
              <strong>WhatsApp directo</strong>
              <span>Respuesta rápida</span>
            </span>
          </a>
          <a className="footer-contact-link" href={whatsappUrl} target="_blank" rel="noreferrer">
            <span className="footer-contact-icon">
              <Icon type="phone" />
            </span>
            <span className="footer-contact-text">
              <strong>{displayPhone}</strong>
              <span>Consultas y reservas</span>
            </span>
          </a>
        </div>
      </div>
      <div>
        <h4>Navegación</h4>
        <p>
          <a href="/">Inicio</a>
          <br />
          <a href="/alquiler-1473">Alquiler</a>
        </p>
      </div>
      <div className="footer-bottom">
        <span>© Refugio Camba — Corrientes, Argentina</span>
        <span>Hecho con cuidado</span>
      </div>
    </footer>
  );
}
