import React from 'react';
import { Button } from 'react-bootstrap';

export const CompletaPerfil1 = ({
  setShowRegister,
  setShowRegister2,
  user,
  handleChange,
  setButton,
}) => {
  const nextShowRegister = () => {
    setShowRegister(false);
    setShowRegister2(true);
  };

  const cancelarFirstForm = () => {
    user.name = '';
    user.lastname = '';
    user.address = '';
    user.city = '';
    setShowRegister(false);
    setButton(true);
  };

  return (
    <div className="completar-perfil d-flex justify-content-center pt-5 flex-column text-center align-items-center">
      <h4>Completa perfil</h4>
      <h4>1 de 2</h4>
      <form>
        <div className="d-flex justify-content-center flex-column">
          <input
            className="my-3"
            type="text"
            placeholder="Nombre"
            onChange={handleChange}
            name="name"
            value={user.name}
          />
          <input
            type="text"
            placeholder="Apellido"
            onChange={handleChange}
            name="lastname"
            value={user.lastname}
          />
          <Button className="my-3" onClick={nextShowRegister}>
            Siguiente
          </Button>
          <Button onClick={cancelarFirstForm}>Cancelar</Button>
        </div>
      </form>
    </div>
  );
};
