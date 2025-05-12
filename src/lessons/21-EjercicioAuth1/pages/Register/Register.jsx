import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
      <h1>Formulario de registro y sus paranoias</h1>
      <p>
        Ya estás registrado? <Link to="/login">Login aquí!</Link>
      </p>
    </div>
  );
};
