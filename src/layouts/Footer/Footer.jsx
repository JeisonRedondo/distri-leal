import "./Footer.css"
function Footer() {
  return (
    <footer className="Footer-section">
      <div><img className="footer-logo-img" src="../../../public/distri-leal-logo.png" alt=""></img></div>
      <div className="footer-links">
        <a href="">Products</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a></div>
      <div className="footer-contact">
        <p>contacto@distrileal.com</p>
        <p>Medellín, Colombia</p>
      </div>
      <div className="footer-github"><a href="">GitHub <span>Jeison Redondo</span></a></div>
      <div className="footer-copyright">
        <p>© 2026 Distri-Leal</p>
      </div>
    </footer>
  )
}

export default Footer;
