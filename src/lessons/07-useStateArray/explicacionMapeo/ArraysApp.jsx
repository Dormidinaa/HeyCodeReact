import React from 'react';
import './style.css';
export const ArraysApp = () => {
  const nombres = ['Javier', 'Alexia', 'Edgar', 'Adrian', 'Maria'];

  return (
    <main>
      <h1>ArraysApp</h1>
      <hr />
      {nombres.map((elem) => {
        return (
          <div className="div-nombre">
            <h2>Nombre:</h2>
            <h3>{elem}</h3>
          </div>
        );
      })}
    </main>
  );
};
