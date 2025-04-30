import React from 'react';
import './Nieto.css';

export const Nieto = (props) => {
  const { cont, restar, sumar, reset, setCont } = props;
  return (
    <div className="nieto">
      <h2>Contador: {cont}</h2>
      {/* SETEAR UN ESTADO CONSIGO MISMO USANDO SU VALOR PREVIO */}
      <h3>Usando su valor previo</h3>
      <button onClick={() => setCont((prev) => prev - 1)}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setCont((prev) => prev + 1)}>+</button>
      {/* SETEAR UN ESTADO CONSIGO MISMO USANDO SU VALOR PREVIO */}

      <br />
      <h3>Como debería ser "Correcto"</h3>
      <button onClick={restar}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={sumar}>+</button>
    </div>
  );
};
