import React from 'react';
import { useState } from 'react';
export const InputExplicApp = () => {
  const [nombre, setNombre] = useState('');

  console.log('estado nombre', nombre);

  const handleChange = (event) => {
    console.log(event.target);
    setNombre(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log('Mando los datos al back de', nombre);
  };

  return (
    <div>
      <h1>InputExplicApp</h1>
      <hr />
      <h2>Input controlados</h2>
      <p>
        Se trata de asociar una variable de estadoa un input de manera que si
        cambia el input, cambia el estado y si cambia el estado, cambia el input
      </p>
      <form action="">
        <label htmlFor="">Nombre</label>
        <input
          onChange={handleChange}
          type="text"
          name="nombre"
          value={nombre}
        />
        <button onClick={handleSubmit}>Aceptar</button>
      </form>
      <button onClick={() => setNombre('Pepito')}>Cambiar valor</button>
    </div>
  );
};
