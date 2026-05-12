import { phone, waLink } from "../data/listings";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">Refugio Camba</p>
        <p>Alquileres temporarios cuidados en Corrientes. Estadías cálidas y bien ubicadas.</p>
      </div>
      <div>
        <h4>Contacto</h4>
        <p>
          <a href={waLink("Hola, quiero más información sobre Refugio Camba")} target="_blank" rel="noreferrer">
            WhatsApp directo
          </a>
        </p>
        <p>+{phone.replace(/(\d{2})(\d{2})(\d{3})(\d{7})/, "$1 $2 $3 $4")}</p>
      </div>
      <div>
        <h4>Navegación</h4>
        <p>
          <a href="/">Inicio</a>
          <br />
          <a href="/alquiler-1473#disponibilidad">Disponibles</a>
        </p>
      </div>
      <div className="footer-bottom">
        <span>© Refugio Camba — Corrientes, Argentina</span>
        <span>Hecho con cuidado</span>
      </div>
    </footer>
  );
}
