import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div>
      <h2>Formulario de registro</h2>
      <p>
        Ya estás registrado?<Link to="/login">Login Aqui</Link>
      </p>
    </div>
  );
};
