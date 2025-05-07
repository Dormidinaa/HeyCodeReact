import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { NavbarBasico } from './components/NavbarBasico/NavbarBasico';
import { NavbarBoot } from './components/NavbarBoot/NavbarBoot';
import { ErrorPage } from './Pages/ErrorPage/ErrorPage';
import { Products } from './Pages/Products/Products';
import { OneProduct } from './Pages/OneProduct/OneProduct';
import { Portada } from './Pages/Portada/Portada';

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <NavbarBoot />
      {/* <NavbarBasico /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/oneProduct/:id" element={<OneProduct />} />
        <Route path="/portada" element={<Portada />}>
          <Route index element={<h1>Nacional</h1>} />
          <Route path="internacional" element={<h1>Internacional</h1>} />
          <Route path="gastronomia" element={<h1>Gastronomia</h1>} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
