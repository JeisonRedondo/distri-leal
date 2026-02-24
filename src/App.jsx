import CategoriesSection from "./layouts/CategoriesSection/CategoriesSection"
import FeaturedProducts from "./layouts/FeaturedProducts/FeaturedProducts"
import Header from "./layouts/Header/Header"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <FeaturedProducts />
        <CategoriesSection />
      </main>
      <footer>
        This is the footer
      </footer>
    </>
  )
}

export default App
