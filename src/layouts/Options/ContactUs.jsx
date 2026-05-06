import "./Options.css"

export function ContactUs() {
  return (
    <section className="brands-section">
      <h2 className="brands-title">Contáctanos</h2>

      <div className="about-content">
        <p className="about-description">
          ¿Tienes preguntas sobre nuestros productos o necesitas información sobre pedidos?
          Estamos aquí para ayudarte.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3 className="about-subtitle">Email</h3>
            <p className="contact-link">contacto@distrileal.com</p>
          </div>

          <div className="contact-item">
            <h3 className="about-subtitle">Ubicación</h3>
            <p className="contact-text">Bogotá, Colombia</p>
          </div>

          <div className="contact-item">
            <h3 className="about-subtitle">GitHub</h3>
            <a href="https://github.com/JeisonRedondo" className="contact-link" target="_blank" rel="noopener noreferrer">
              Jeison Redondo
            </a>
          </div>
        </div>

        <div className="about-notice">
          <p>
            ⚠️ <strong>Nota:</strong> Esta es una aplicación de portafolio. Los datos de contacto
            proporcionados son con fines de demostración y no representan un negocio real en funcionamiento.
          </p>
        </div>
      </div>
    </section>
  )
}