import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavbarBoot } from './components/NavbarBoot/NavbarBoot';
import { Cargando } from './components/NavbarBoot/Cargando';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

export const LazyLoadApp = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarBoot />
        <Suspense fallback={<Cargando />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};
