import React from 'react';
import { Hijo } from './components/Hijo';
import { useState } from 'react';
export const ContadorDistanciaApp = () => {
  const [cont, setCont] = useState(0);

  const restar = () => {
    setCont(cont - 1);
  };
  const sumar = () => {
    setCont(cont + 1);
  };
  const reset = () => {
    setCont(0);
  };

  return (
    <main>
      <h1>Contador a distancia</h1>
      <hr />
      <p>Contador: {cont}</p>
      <Hijo
        cont={cont}
        restar={restar}
        sumar={sumar}
        reset={reset}
        setCont={setCont}
      />
    </main>
  );
};
