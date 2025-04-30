import React from 'react';
import './UsuariosApp.css';
import { TablaUsuarios } from './TablaUsuarios';
import { useState } from 'react';

export const UsuariosApp = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  return (
    <main>
      <h1>UsuariosApp</h1>
      <hr />
      <button onClick={() => setMostrarTabla(!mostrarTabla)}>
        {mostrarTabla === true ? 'Ocultar' : 'Abrir'}
      </button>
      {mostrarTabla === true && <TablaUsuarios />}
    </main>
  );
};
