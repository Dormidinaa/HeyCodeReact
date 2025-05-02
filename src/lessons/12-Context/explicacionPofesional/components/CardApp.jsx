import React, { useContext } from 'react';
import AppContext from '../context/ContextProvider';

export const CardApp = () => {
  const { user } = useContext(AppContext);
  return (
    <div>
      <h2>Card</h2>
      <p>Nombre: {user?.nombre}</p>
    </div>
  );
};
