import './App.css';
import './styles/globals.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"

import Header from "./layouts/Header/Header"
import Footer from './layouts/Footer/Footer'
import MainLayout from './layouts/MainLayout/MainLayout';
import { Brands } from './layouts/Options/Brands.jsx';
import { AboutUs } from './layouts/Options/AboutUs.jsx';
import { ContactUs } from './layouts/Options/ContactUs.jsx';

function App() {

  const [searchedValue, setSearchedValue] = useState("")
  return (
    <>

      <BrowserRouter>
        <Header searchedValue={searchedValue} setSearchedValue={setSearchedValue} />
        <Routes>
          <Route path='/' element={<MainLayout searchedValue={searchedValue} />} />
          <Route path='/brands' element={< Brands />} />
          <Route path='/about' element={< AboutUs />} />
          <Route path='/contactus' element={< ContactUs />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
