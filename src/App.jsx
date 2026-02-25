import CategoriesSection from "./layouts/CategoriesSection/CategoriesSection"
import FeaturedProducts from "./layouts/FeaturedProducts/FeaturedProducts"
import Footer from "./layouts/Footer/Footer"
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
      <Footer />
    </>
  )
}

export default App
