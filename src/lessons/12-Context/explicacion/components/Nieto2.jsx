import React from 'react';
import DataContext from '../../../../context/dataContext';
import { useContext } from 'react';

//pedir datos al context

export const Nieto2 = () => {
  const { libro } = useContext(DataContext);
  console.log(libro);

  return (
    <div>
      <h3>Nieto2</h3>
      <p>titulo: {libro.titulo}</p>
    </div>
  );
};
