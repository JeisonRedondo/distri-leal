import "./Header.css"

function Header() {
  return (
    <header className="flex-row header-container ">
      <nav className="header-nav">
        <figure>Logos</figure>
      </nav>
      <div>
        <section>Search Input</section>
      </div>
      <ul className="flex-row header_options-list">
        <li>Options</li>
        <li>Options</li>
        <li>Options</li>
        <li>Options</li>
      </ul>
    </header>
  )
}

export default Header;
