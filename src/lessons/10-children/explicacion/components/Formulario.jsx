import React from 'react';
import './formulario.css';

export const Formulario = ({ title, children }) => {
  console.log(children);

  return (
    <div className="formulario">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        maxime nulla quidem aperiam placeat ipsa neque reprehenderit cumque ad.
        Impedit?
      </p>
      <img src="/images/homer.jpg" alt="" />
      <h2>{title}</h2>
      {children}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolores ut
        velit veniam mollitia corporis.
      </p>
    </div>
  );
};
