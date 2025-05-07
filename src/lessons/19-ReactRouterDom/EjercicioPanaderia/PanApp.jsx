import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavbarPan } from './components/NavbarPan';
import { Home } from './Pages/Home';
import { Products } from './Pages/Products';
import { Product } from './Pages/Product';
import { Tips } from './Pages/Tips';
import { Conservar } from './components/Conservar';
import { Recetas } from './components/Recetas';
import { Bocadillos } from './components/Bocadillos';

export const PanApp = () => {
  return (
    <BrowserRouter>
      <NavbarPan />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/offers" />
        <Route path="/tips" element={<Tips />}>
          <Route index element={<Conservar />} />
          <Route index path="1" element={<Conservar />} />
          <Route path="2" element={<Recetas />} />
          <Route path="3" element={<Bocadillos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
