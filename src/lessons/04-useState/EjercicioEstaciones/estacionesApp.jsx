import React from 'react';
import './estacionesApp.css';
import { useState } from 'react';

export const EstacionesApp = () => {
  const [imagen, setimagen] = useState('/spring.jpg');

  return (
    <main>
      <h1>EJERCICIO ESTACIONES PRIMAVERA</h1>
      <div className="btns">
        <button onClick={() => setimagen('/spring.jpg')}>PRIMAVERA</button>
        <button onClick={() => setimagen('/summer.jpg')}>VERANO</button>
        <button onClick={() => setimagen('/autumn.jpg')}>OTOÑO</button>
        <button onClick={() => setimagen('/winter.jpg')}>INVIERNO</button>
      </div>
      <div className="div-img">
        <img src={`./images/${imagen}`} alt="" />
      </div>
    </main>
  );
};
