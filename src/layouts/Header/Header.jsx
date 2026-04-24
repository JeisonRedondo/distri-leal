
import { useScreenListener } from "../../hooks/useScreenListener";
import "./Header.css"

function Header({ searchedValue, setSearchedValue }) {

  //Necesito hacer de este componente un custom hook 
  //  const [notMobile, setNotMobile] = useState(screen.width >= 760)
  //  const [visible, setVisible] = useState(false);
  //
  //  useEffect(function createScreenListener() {
  //    const handleResize = () => {
  //      const isNotMobile = window.innerWidth >= 760;
  //      setNotMobile(isNotMobile)
  //      if (isNotMobile) setVisible(false)
  //    }
  //
  //    window.addEventListener("resize", handleResize);
  //    return () => window.removeEventListener("resize", handleResize);
  //  }, [])
  const { visible, setVisible, notMobile } = useScreenListener(760)

  const isVisible = notMobile ? "header_options" :
    visible ? "header_options" : "header_options-hidden";

  return (
    <header className="flex-row header-container ">
      <nav className="header-nav">
        <img className="header-img" src="/distri-leal-logo.png" alt=""></img>
      </nav>
      <div>


        <label htmlFor="">
          <input className="header-search-input" type="" placeholder="Escriba su producto aqui" value={searchedValue} onChange={e => setSearchedValue(e.target.value)} />
        </label>
      </div>
      <button type="button" className="header-button-opt" onClick={() => setVisible(!visible)}>☰</button>
      <section className={`${isVisible} `}>
        <a className="header_options-opts" href="Our Products">Our Products</a>
        <a className="header_options-opts" href="Allied Companies">Allied Companies</a>
        <a className="header_options-opts" href="/about">About Us</a>
        <a className="header_options-opts" href="/contact">Contact Us</a>
      </section>
    </header>
  )
}

export default Header;
