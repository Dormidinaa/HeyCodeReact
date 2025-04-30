import React from 'react';
import { useState } from 'react';
import { Hijo1 } from './components/Hijo1';

export const PropsApp = () => {
  const [show, setShow] = useState(false);
  let nombre = 'Elisama';
  return (
    <div className="ppal">
      <h1>PropsApp</h1>
      <button>Abrir/Cerrar</button>

      <Hijo1 userName={nombre} />
    </div>
  );
};
