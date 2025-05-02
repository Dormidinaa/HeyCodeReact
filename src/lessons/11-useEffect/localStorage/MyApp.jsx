import React from 'react';
import { useState, useEffect } from 'react';

export const MyApp = () => {
  const [nombre, setNombre] = useState('');
  const [dataFinal, setDataFinal] = useState('');

  useEffect(() => {
    let valor = localStorage.getItem('name');
    //para pasar JSON a un array normal
    let lista = JSON.parse(localStorage.getItem('lista'));
    let listaSinParse = localStorage.getItem('lista');
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    console.log(usuario);

    console.log(listaSinParse);
    console.log(lista);
    setDataFinal(valor);
  }, []);

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const aceptar = () => {
    const array = ['pepe', 'ana'];
    setDataFinal(nombre);
    localStorage.setItem('name', nombre);
    //en el local Storage solo podemos gaurdar string o JSON
    localStorage.setItem('lista', JSON.stringify(array));

    const user = {
      name: 'pepe',
      email: 'p@p',
    };

    localStorage.setItem('usuario', JSON.stringify(user));
    setNombre('');
  };

  console.log(nombre);

  return (
    <div>
      <h1>Mi App</h1>
      <p>Localstorage</p>
      <h3>Nombre: {dataFinal}</h3>
      <input type="text" value={nombre} onChange={handleChange} />
      <button onClick={aceptar}>Aceptar</button>
    </div>
  );
};
