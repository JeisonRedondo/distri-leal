import './App.css';
import './styles/globals.css';
import CategoriesSection from "./layouts/CategoriesSection/CategoriesSection"
import FeaturedProducts from "./layouts/FeaturedProducts/FeaturedProducts"
import Header from "./layouts/Header/Header"
import Footer from './layouts/Footer/Footer'
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <FeaturedProducts />
        <CategoriesSection />
      </MainLayout>
      <Footer />
    </>
  )
}

export default App
