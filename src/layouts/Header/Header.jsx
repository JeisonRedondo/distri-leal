import "./Header.css"

function Header() {
  return (
    <header className="flex-row header-container ">
      <nav className="header-nav">
        <img className="header-img" src="../../../public/distri-leal-logo.png" alt=""></img>
      </nav>
      <div>
        <label htmlFor="">
          <input className="header-search-input" type="" placeholder="Escriba su producto aqui" />
        </label>
      </div>
      <section className="flex-row header_options">
        <a className="header_options-opts" href="Our Products">Our Products</a>
        <a className="header_options-opts" href="Allied Companies">Allied Companies</a>
        <a className="header_options-opts" href="/about">About Us</a>
        <a className="header_options-opts" href="/contact">Contact Us</a>
      </section>
    </header>
  )
}

export default Header;
