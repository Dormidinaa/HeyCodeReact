import { useState } from 'react';
import { Teoria } from './components/teoria';
import './useState.css';

export const ExplicUseStateApp = () => {
  const [num, setNum] = useState(0);
  const [nombre, setNombre] = useState('');

  const restar = () => {
    setNum(num - 1);
  };
  const reset = () => {
    setNum(0);
  };
  const sumar = () => {
    setNum(num + 1);
  };

  const santi = () => {
    setNombre('Santi');
  };
  const eli = () => {
    setNombre('Eli');
  };
  const arturo = () => {
    setNombre('Arturo');
  };

  return (
    <>
      <Teoria />
      <h1>Contador</h1>
      <h2>Número: {num} </h2>
      <div className="botones">
        <button onClick={restar}>-</button>
        <button onClick={reset}>reset</button>
        <button onClick={sumar}>+</button>
      </div>
      <h2>Nombre: {nombre} </h2>
      <div className="botones">
        <button onClick={santi}>Santi</button>
        <button onClick={eli}>Eli</button>
        <button onClick={arturo}>Arturo</button>
      </div>
    </>
  );
};
