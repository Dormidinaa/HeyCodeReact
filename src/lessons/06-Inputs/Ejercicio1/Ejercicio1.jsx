import React, { useState } from 'react';
import './Ejercicio1.css';

export const Ejercicio1 = () => {
  const [inputValue, setInputValue] = useState('');
  const [textoMostrado, setTextoMostrado] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [color, setColor] = useState('rojo');
  const [setshowMessage, setSetshowMessage] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChangeColor = (e) => {
    setInputColor(e.target.value);
  };

  const handleEscribir = (event) => {
    event.preventDefault();
    setTextoMostrado(inputValue);
  };

  const handleLimpiar = (event) => {
    event.preventDefault();
    setInputValue('');
    setTextoMostrado('');
  };

  const cambiarColor = (e) => {
    e.preventDefault();
    setSetshowMessage(false);
    let colorMinuscula = inputColor.toLowerCase();

    switch (colorMinuscula) {
      case 'rojo':
        setColor(colorMinuscula);
        break;
      case 'verde':
        setColor(colorMinuscula);
        break;
      case 'azul':
        setColor(colorMinuscula);
        break;
      case 'amarillo':
        setColor(colorMinuscula);
        break;
      default:
        setSetshowMessage(true);
    }
  };

  return (
    <main>
      <form className="form1">
        <label htmlFor="">MOSTRAR TEXTO</label>
        <br />
        <input
          type="text"
          placeholder="Introducir texto"
          value={inputValue}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleEscribir}>Escribir</button>
        <button onClick={handleLimpiar}>Limpiar</button>
      </form>
      <div className="resultado-escrito">
        <h2>{textoMostrado}</h2>
      </div>
      <div className={`ppal ${color}`}>
        <h2>Cambio de color</h2>
        <form action="">
          <input type="text" onChange={handleChangeColor} value={inputColor} />
          <button onClick={cambiarColor}>Cambiar</button>
        </form>
        {setshowMessage && <h3 className="mensaje">TEXTO NO VALIDO</h3>}
      </div>
    </main>
  );
};
