import "./Options.css"

export function AboutUs() {
  return (
    <section className="brands-section">
      <h2 className="brands-title">Acerca de Nosotros</h2>

      <div className="about-content">
        <p className="about-description">
          <strong>Distri-Leal</strong> es una aplicación de catálogo de productos desarrollada como
          parte de mi portafolio profesional para demostrar mis habilidades en desarrollo web.
        </p>

        <div className="about-notice">
          <p>
            ⚠️ <strong>Nota importante:</strong> El contenido de esta aplicación (productos, marcas,
            descripciones e imágenes) está basado en un portafolio real. Sin embargo, el uso de la
            aplicación como tal <strong>no está previsto</strong>. Su propósito es exclusivamente
            demostrar mis habilidades técnicas en React, CSS y desarrollo frontend.
          </p>
        </div>

        <div className="about-info">
          <h3 className="about-subtitle">Tecnologías utilizadas</h3>
          <ul className="about-tech-list">
            <li>React</li>
            <li>React Router</li>
            <li>CSS3</li>
            <li>Vite</li>
          </ul>
        </div>

        <div className="about-info">
          <h3 className="about-subtitle">Desarrollado por</h3>
          <p className="about-author">Jeison Redondo</p>
          <p className="about-contact">contacto@distrileal.com</p>
        </div>
      </div>
    </section>
  )
}
