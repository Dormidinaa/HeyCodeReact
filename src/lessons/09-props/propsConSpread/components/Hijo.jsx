import React from 'react';
import { Nieto } from './Nieto';

export const Hijo = ({ prop1, prop2, ...restoProps }) => {
  return (
    <div>
      <h2>Hijo</h2>
      <p>{prop1}</p>
      <p>{prop2}</p>
      <hr />
      <Nieto {...restoProps} />
    </div>
  );
};
