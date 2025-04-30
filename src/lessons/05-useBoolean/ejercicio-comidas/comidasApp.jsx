import { useState } from 'react';
import './comidasApp.css';
import { GaleriaComponent } from './galeria';

export const ComidaApp = () => {
  const [estadoTema, setEstadoTema] = useState(true);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const mostrarOcultar = () => {
    setMostrarComponente(!mostrarComponente);
  };

  const cambiarTema = () => {
    setEstadoTema(!estadoTema);
  };

  return (
    <>
      <div
        className={estadoTema ? 'tema-claro formato' : 'tema-oscuro formato'}
      >
        <div className="navbar">
          <div className="center-title">
            <h1>PHOTO GALLERY</h1>
            <button onClick={mostrarOcultar}>
              {mostrarComponente ? 'Ocultar Galería' : 'Mostrar Galería'}
            </button>
          </div>
          <img
            src={estadoTema ? './images/sol.png' : './images/luna.png'}
            alt=""
            onClick={cambiarTema}
          />
        </div>
        {mostrarComponente ? <GaleriaComponent /> : null}
      </div>
    </>
  );
};
