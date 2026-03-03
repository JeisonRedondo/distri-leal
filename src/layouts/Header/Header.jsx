import "./Header.css"

function Header() {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <figure>Logos</figure>
      </nav>
      <div>
        <section>Search Input</section>
      </div>
      <ul className="header_options-list">
        <li>Options</li>
        <li>Options</li>
        <li>Options</li>
        <li>Options</li>
      </ul>
    </header>
  )
}

export default Header;
