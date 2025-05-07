import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="https://www.google.com">Ir a google</Link>
      <Link to="/about">Ir a About</Link>
    </div>
  );
};
