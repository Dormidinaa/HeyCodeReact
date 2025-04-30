import React from 'react';
import './Hijo.css';
import { useState } from 'react';
import { Nieto } from './Nieto';
export const Hijo = (props) => {
  const { cont, restar, sumar, reset, setCont } = props;
  const [mostrarNieto, setMostrarNieto] = useState(false);
  return (
    <div className="hijo">
      <p>Hijo</p>
      <button onClick={() => setMostrarNieto(!mostrarNieto)}>
        Mostrar/Ocultar
      </button>
      <hr />
      {mostrarNieto && (
        <Nieto
          cont={cont}
          restar={restar}
          sumar={sumar}
          reset={reset}
          setCont={setCont}
        />
      )}
    </div>
  );
};
