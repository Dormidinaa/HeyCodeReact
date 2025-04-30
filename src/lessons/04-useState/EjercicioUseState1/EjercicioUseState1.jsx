import { useState } from 'react';
import './EjercicioUseState1.css';
export const EjercicioUseState1 = () => {
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('claro');
  const [divBG, setDivBG] = useState('red');

  const claro = () => {
    setTheme('claro');
  };
  const oscuro = () => {
    setTheme('oscuro');
  };
  const mostrar = () => {
    setText('Hola que tal');
  };
  const ocultar = () => {
    setText('');
  };
  const rojo = () => {
    setDivBG('red');
  };
  const verde = () => {
    setDivBG('green');
  };

  return (
    <>
      <main className={`tema-${theme} main-vh`}>
        <div>
          <h1>EjercicioUseState1</h1>
          <hr />
          <h2>Texto: {text} </h2>
          <hr />
          <h2>Theme: {theme} </h2>
          <div>
            <button onClick={mostrar}>Mostrar</button>
            <button onClick={ocultar}>Ocultar</button>
            <button onClick={claro}>Claro</button>
            <button onClick={oscuro}>Oscuro</button>
          </div>
        </div>
        <hr />
        <hr />
        <div className={`tema-${divBG} div-cuadrado`}>
          <button onClick={rojo}>Rojo</button>
          <button onClick={verde}>Verde</button>
        </div>
      </main>
    </>
  );
};
