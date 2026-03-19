import './App.css';
import './styles/globals.css';
import CategoriesSection from "./layouts/CategoriesSection/CategoriesSection"
import FeaturedProducts from "./layouts/FeaturedProducts/FeaturedProducts"
import Header from "./layouts/Header/Header"
import Footer from './layouts/Footer/Footer'
import MainLayout from './layouts/MainLayout/MainLayout';
import { useState } from 'react';

function App() {

  const [searchedValue, setSearchedValue] = useState("")
  return (
    <>
      <Header searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
      <MainLayout>
        {/*<FeaturedProducts /> */}
        <CategoriesSection searchedValue={searchedValue} />
      </MainLayout>
      <Footer />
    </>
  )
}

export default App
