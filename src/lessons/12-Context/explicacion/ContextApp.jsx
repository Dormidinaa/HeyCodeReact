import React from 'react';
import { Hijo1 } from './components/Hijo1';
import { Hijo2 } from './components/Hijo2';
import DataContext from '../../../context/dataContext';
import { useState } from 'react';

const libro1 = {
  titulo: 'Programacion, como amargarte la vida',
  autor: 'Santiago el pelma',
  numPaginas: 435,
};

const libro2 = {
  titulo: 'React, que bello es vivir',
  autor: 'Santiago el pelma',
  numPaginas: 300,
};

export const ContextApp = () => {
  const [libro, setLibro] = useState(libro1);
  return (
    <div>
      <h1>ContextApp</h1>
      <hr />
      <p>Para crear un context debemos: </p>
      <p>1.- Crear el context</p>
      <p>2.- Proveer datos al context</p>
      <p>
        3.- Pedir datos al context donde queramos usarlos mediante el hook:
        useContext
      </p>
      <button onClick={() => setLibro(libro1)}>select libro1</button>
      <button onClick={() => setLibro(libro2)}>select libro2</button>
      <div className="d-flex justify-content-around">
        <DataContext.Provider value={{ libro: libro }}>
          <Hijo1 />
          <Hijo2 />
        </DataContext.Provider>
      </div>
    </div>
  );
};
