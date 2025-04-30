import React, { useState } from 'react';
import './emoticonosApp.css';

export const EmoticonosApp = () => {
  const [selected, setSelected] = useState(null);
  const [listaEmoticonos, setListaEmoticonos] = useState([]);

  const addEmo = () => {
    if (listaEmoticonos.length < 6) {
      setListaEmoticonos([...listaEmoticonos, selected]);
    }
  };

  const deleteEmo = () => {
    setListaEmoticonos(listaEmoticonos.slice(0, -1));
  };

  return (
    <main>
      <h1>Contador de estado anímico</h1>
      <div className="caja-emoticonos">
        {listaEmoticonos.map((elem, index) => {
          return (
            <span className="emoticono" key={index}>
              {elem === 'happy' ? '😍' : '🥲'}
            </span>
          );
        })}
      </div>
      <div className="botones">
        <button onClick={deleteEmo}>Borrar</button>
        <button onClick={addEmo}>Añadir</button>
      </div>

      <div className="botones">
        <button
          onClick={() => setSelected('happy')}
          className={selected === 'happy' ? 'selected' : ''}
        >
          😍
        </button>
        <button
          onClick={() => setSelected('sad')}
          className={selected === 'sad' ? 'selected' : ''}
        >
          🥲
        </button>
      </div>
    </main>
  );
};
