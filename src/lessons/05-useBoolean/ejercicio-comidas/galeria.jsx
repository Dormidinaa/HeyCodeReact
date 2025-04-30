import { useState } from 'react';

export const GaleriaComponent = () => {
  const [imagen, setImagen] = useState('./images/ensalada.jpg');

  const cambiarEnsalada = () => {
    setImagen('./images/ensalada.jpg');
  };
  const cambiarSopa = () => {
    setImagen('./images/sopa.jpg');
  };
  const cambiarTostaHuevo = () => {
    setImagen('./images/tostahuevo.jpg');
  };
  const cambiarWok = () => {
    setImagen('./images/wok.jpg');
  };

  return (
    <>
      <div className="galeria-interactiva">
        <div className="miniaturas">
          <img
            src="./images/ensalada.jpg"
            alt="Mini 1"
            onClick={cambiarEnsalada}
          />
          <img src="./images/sopa.jpg" alt="Mini 2" onClick={cambiarSopa} />
          <img
            src="./images/tostahuevo.jpg"
            alt="Mini 3"
            onClick={cambiarTostaHuevo}
          />
          <img src="./images/wok.jpg" alt="Mini 4" onClick={cambiarWok} />
        </div>

        <div className="imagen-grande">
          <img src={imagen} alt="Principal" />
        </div>
      </div>
    </>
  );
};
