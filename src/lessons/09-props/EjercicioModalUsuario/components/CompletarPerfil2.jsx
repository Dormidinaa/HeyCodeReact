import React from 'react';
import { Button } from 'react-bootstrap';

export const CompletarPerfil2 = ({
  setShowRegister,
  setShowRegister2,
  user,
  handleChange,
  setButton,
}) => {
  const volverACompletaPerfil1 = () => {
    setShowRegister2(false);
    setShowRegister(true);
  };

  const cancelarSegundoForm = () => {
    user.name = '';
    user.lastname = '';
    user.address = '';
    user.city = '';
    setShowRegister2(false);
    setButton(true);
  };

  const aceptarFormulario = () => {
    console.log('Usuario registrado:', user);
    setShowRegister2(false);
    setButton(false);
  };

  return (
    <div className="completar-perfil d-flex justify-content-center pt-5 flex-column text-center align-items-center">
      <h4>Completa perfil</h4>
      <h4>2 de 2</h4>
      <form>
        <div className="d-flex justify-content-center flex-column">
          <input
            className="my-3"
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            value={user.city}
            onChange={handleChange}
          />
          <Button className="my-3" onClick={volverACompletaPerfil1}>
            Anterior
          </Button>
          <Button className="mb-3" onClick={aceptarFormulario}>
            Aceptar
          </Button>
          <Button onClick={cancelarSegundoForm}>Cancelar</Button>
        </div>
      </form>
    </div>
  );
};
