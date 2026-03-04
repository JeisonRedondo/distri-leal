import './App.css';
import './styles/globals.css';
import CategoriesSection from "./layouts/CategoriesSection/CategoriesSection"
import FeaturedProducts from "./layouts/FeaturedProducts/FeaturedProducts"
import Header from "./layouts/Header/Header"
import Footer from './layouts/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <FeaturedProducts />
        <CategoriesSection />
      </main>
      <Footer />
    </>
  )
}

export default App
