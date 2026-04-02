import './App.css';
import './styles/globals.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"

import CategoryNavigation from './layouts/CategoryNavigation/CategoryNavigation';
import CategoriesSection from "./layouts/CategoriesSection/CategoriesSection"
import Header from "./layouts/Header/Header"
import Footer from './layouts/Footer/Footer'
import MainLayout from './layouts/MainLayout/MainLayout';


function App() {

  const [searchedValue, setSearchedValue] = useState("")
  return (
    <>

      <BrowserRouter>
        <Header searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
        <Routes>
          <Route path='/' element={<MainLayout searchedValue={searchedValue} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
