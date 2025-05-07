import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbarBasico.css';

export const NavbarBasico = () => {
  return (
    <nav className="d-flex justify-content-around gap-5 p-3 bg-info">
      <Link to="/" className="option">
        LogoEmpresa
      </Link>
      <NavLink
        to="/"
        className={`${({ isActive }) => (isActive ? 'active' : null)} option`}
      >
        Home
      </NavLink>
      <NavLink to="/About" className="option">
        About
      </NavLink>
    </nav>
  );
};
