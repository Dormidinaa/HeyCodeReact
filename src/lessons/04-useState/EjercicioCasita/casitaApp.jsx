import React from 'react';
import './casitaApp.css';
import { useState } from 'react';

export const CasitaApp = () => {
  const [casita, setCasita] = useState('casa1.png');
  const [cielo, setCielo] = useState('dia.png');
  const [arbol, setArbol] = useState('arbol1.png');
  const [nube, setNube] = useState('nube1.png');
  const [estrella, setEstrella] = useState('sol.png');

  return (
    <main>
      <h1>La casita de heidi</h1>
      <div className="redis">
        <div className="botones">
          <div>
            <h3>Elige tu árbol</h3>
            <div>
              <button onClick={() => setArbol('arbol1.png')}>Arbol 1</button>
              <button onClick={() => setArbol('arbol2.png')}>Arbol 2</button>
              <button onClick={() => setArbol('arbol3.png')}>Arbol 3</button>
            </div>
            <h3>Elige tu casa</h3>
            <div>
              <button onClick={() => setCasita('casa1.png')}>Casa 1</button>
              <button onClick={() => setCasita('casa2.png')}>Casa 2</button>
            </div>
            <h3>Elige tu cielo</h3>
            <div>
              <button onClick={() => setCielo('dia.png')}>Dia</button>
              <button onClick={() => setCielo('noche.png')}>Noche</button>
            </div>
            <h3>Elige tu nube</h3>
            <div>
              <button onClick={() => setNube('nube1.png')}>Nube 1</button>
              <button onClick={() => setNube('nube2.png')}>Nube 2</button>
              <button onClick={() => setNube('nube3.png')}>Nube 3</button>
            </div>
            <h3>Elige sol o luna</h3>
            <div>
              <button onClick={() => setEstrella('sol.png')}>Sol</button>
              <button onClick={() => setEstrella('luna.png')}>Luna</button>
            </div>
          </div>
        </div>
        <div className="casita">
          <img src={`./images/casita/${cielo}`} alt="" className="cielo" />
          <img src="./images/casita/suelo.png" alt="" className="suelo" />
          <img src={`./images/casita/${arbol}`} alt="" className="arbol" />
          <img
            src={`./images/casita/${estrella}`}
            alt=""
            className="estrella"
          />
          <img src={`./images/casita/${nube}`} alt="" className="nube" />
          <img src={`./images/casita/${casita}`} alt="" className="house" />
        </div>
      </div>
    </main>
  );
};
