import { useState } from 'react';
import './ejercicioBingo.css';

export const BingoApp = () => {
  const [numero, setNumero] = useState(null);
  const [numeroAleatorio, setNumeroAleatorio] = useState('');
  const [contador, setContador] = useState(0);
  const [coincidencia, setCoincidencia] = useState('');
  const [fin, setFin] = useState(false);

  const reset = () => {
    setNumero('');
    setNumeroAleatorio('');
    setContador(0);
    setCoincidencia('');
    setFin(false);
  };

  const randomNumber = () => {
    const obtenerNumeroAleatorio = (min, max) => {
      return parseInt(Math.random() * (max + 1 - min) + min);
    };

    let number = obtenerNumeroAleatorio(0, 9);
    setNumeroAleatorio(number);
    setContador(contador + 1);

    if (number == numero) {
      setCoincidencia('LOS NUMEROS COINCIDEN! GANADOOOOOOOOOOOOR!!');
      setFin(true);
    } else {
      setCoincidencia('LOS NUMEROS NO COINCIDEN! PERDEDOOOOOOOOOOOOO!!');
    }
  };

  const numero0 = () => {
    setNumero(0);
  };
  const numero1 = () => {
    setNumero(1);
  };
  const numero2 = () => {
    setNumero(2);
  };
  const numero3 = () => {
    setNumero(3);
  };
  const numero4 = () => {
    setNumero(4);
  };
  const numero5 = () => {
    setNumero(5);
  };
  const numero6 = () => {
    setNumero(6);
  };
  const numero7 = () => {
    setNumero(7);
  };
  const numero8 = () => {
    setNumero(8);
  };
  const numero9 = () => {
    setNumero(9);
  };

  return (
    <>
      <div className="blue">
        <h1>UseState: coincidencia del número elegido</h1>
        <hr />
        <div className="formato-botones-textos">
          <div>
            <div>
              <button onClick={numero0} disabled={fin}>
                0
              </button>
              <button onClick={numero1} disabled={fin}>
                1
              </button>
              <button onClick={numero2} disabled={fin}>
                2
              </button>
              <button onClick={numero3} disabled={fin}>
                3
              </button>
              <button onClick={numero4} disabled={fin}>
                4
              </button>
            </div>
            <div>
              <button onClick={numero5} disabled={fin}>
                5
              </button>
              <button onClick={numero6} disabled={fin}>
                6
              </button>
              <button onClick={numero7} disabled={fin}>
                7
              </button>
              <button onClick={numero8} disabled={fin}>
                8
              </button>
              <button onClick={numero9} disabled={fin}>
                9
              </button>
            </div>
          </div>
          <div className="textos-tiradas">
            <p>Numero seleccionado: {numero}</p>
            <p>Numero de tiradas:</p>
            <p>{contador}</p>
          </div>
        </div>
        <div className="formato-generar">
          <button
            className="boton-generar"
            onClick={randomNumber}
            disabled={fin}
          >
            Generar número
          </button>
          <h1>Numero aletaorio generado: {numeroAleatorio} </h1>
          <h2>{coincidencia}</h2>
          {fin ? <button onClick={reset}>Otra partida?</button> : null}
        </div>
      </div>
    </>
  );
};
