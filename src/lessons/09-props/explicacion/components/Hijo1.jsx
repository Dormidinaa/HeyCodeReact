import React from 'react';
import { Nieto } from './Nieto';

export const Hijo1 = (props) => {
  console.log(props);
  return (
    <div>
      <h2>Hijo</h2>
      <h3>Nombre: {props.userName}</h3>
      <Nieto userName={props.userName} />
    </div>
  );
};
