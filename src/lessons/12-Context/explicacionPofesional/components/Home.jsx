import React from 'react';
import { Formulario } from './Formulario';
import { CardApp } from './CardApp';

export const Home = () => {
  return (
    <div>
      <h1>Bienvenid@s</h1>
      <div className="d-flex justify-content-around">
        <Formulario />
        <CardApp />
      </div>
    </div>
  );
};
