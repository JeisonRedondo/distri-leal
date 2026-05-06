
import { Link } from "react-router-dom";
import { useScreenListener } from "../../hooks/useScreenListener";
import "./Header.css"

function Header({ searchedValue, setSearchedValue }) {

  const { visible, setVisible, notMobile } = useScreenListener(760)

  const isVisible = notMobile ? "header_options" :
    visible ? "header_options" : "header_options-hidden";

  return (
    <header className="flex-row header-container ">
      <nav className="header-nav">
        <Link to="">

          <img className="header-img" src="/distri-leal-logo.png" alt=""></img>
        </Link>
      </nav>
      <div>


        <label htmlFor="">
          <input className="header-search-input" type="" placeholder="Escriba su producto aqui" value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
        </label>
      </div>
      <button type="button" className="header-button-opt" onClick={() => setVisible(!visible)}>☰</button>
      <section className={`${isVisible} `}>
        <a className="header_options-opts" href="/brands">Allied Companies</a>
        <a className="header_options-opts" href="/about">About Us</a>
        <a className="header_options-opts" href="/contactus">Contact Us</a>
      </section>
    </header>
  )
}

export default Header;
