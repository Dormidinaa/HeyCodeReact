import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavbarRoot } from './components/NavbarRoot/NavbarRoot';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/about/about';
import { FruitList } from './Pages/FruitList/FruitList';
import { OneFruit } from './Pages/OneFruit/OneFruit';

export const Fruteria = () => {
  return (
    <BrowserRouter>
      <NavbarRoot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fruitList" element={<FruitList />} />
        <Route path="/fruitList/:fruitId" element={<OneFruit />} />
      </Routes>
    </BrowserRouter>
  );
};
