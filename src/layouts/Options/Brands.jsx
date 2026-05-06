import "./Options.css"

export function Brands() {
  return (
    <section className="brands-section">
      <h2 className="brands-title">Nuestras Marcas</h2>

      <div className="brands-grid">

        <div className="brand-card">
          <img src="https://seeklogo.com/images/C/california-logo-0D9AFA6E2B-seeklogo.com.png"
            className="brand-logo" alt="California" />
          <h3 className="brand-name">California</h3>
        </div>

        <div className="brand-card">
          <img src="https://krumerchips.com/wp-content/uploads/2023/08/logo-krumer.png"
            className="brand-logo" alt="Krumer" />
          <h3 className="brand-name">Krumer</h3>
        </div>

        <div className="brand-card">
          <img src="https://www.chirros.com/img/logo.png"
            className="brand-logo" alt="Chirros" />
          <h3 className="brand-name">Chirros</h3>
        </div>

        <div className="brand-card">
          <img src="https://seeklogo.com/images/B/bianchi-logo-8C1C9C7C4A-seeklogo.com.png"
            className="brand-logo" alt="Bianchi" />
          <h3 className="brand-name">Bianchi</h3>
        </div>

        <div className="brand-card">
          <img src="https://www.arthurscookiesfactory.com/wp-content/uploads/2021/07/logo.png"
            className="brand-logo" alt="Arthur's" />
          <h3 className="brand-name">Arthur's</h3>
        </div>

        <div className="brand-card">
          <img src="https://distipicosalonso.com/wp-content/uploads/2023/08/logo.png"
            className="brand-logo" alt="Distípicos" />
          <h3 className="brand-name">Distípicos</h3>
        </div>

      </div>
    </section>
  )
}