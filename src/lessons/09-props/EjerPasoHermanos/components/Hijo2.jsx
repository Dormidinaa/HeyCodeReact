import React from 'react';

export const Hijo2 = ({ register, show }) => {
  return (
    <div className="hijo">
      <h3>Formulario 2</h3>
      <label htmlFor="">Nombre: {show && <> {register.name}</>}</label>

      <br />
      <label htmlFor="">Email: {show && <> {register.email}</>}</label>

      <br />
      <label htmlFor="">Password: {show && <> {register.password}</>}</label>
    </div>
  );
};
