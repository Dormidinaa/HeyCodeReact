import React from 'react';
import { Button } from 'react-bootstrap';
export const User = ({ setShowUser, user }) => {
  return (
    <div className="completar-perfil d-flex justify-content-center pt-5 flex-column text-center align-items-center">
      <h4>INFO</h4>
      <div className="d-flex justify-content-center flex-column">
        <p>Nombre: {user.name}</p>
        <p>Apellido: {user.lastname}</p>
        <p>Direccion: {user.address}</p>
        <p>City: {user.city}</p>
        <Button onClick={() => setShowUser(false)}>Cerrar</Button>
      </div>
    </div>
  );
};
