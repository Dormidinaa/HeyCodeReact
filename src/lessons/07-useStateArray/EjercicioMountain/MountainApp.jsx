import React from 'react';
import './mountain.css';
import { useState } from 'react';
export const MountainApp = () => {
  const [galeria] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
  ]);
  const [galeriaFabricada, setGaleriaFabricada] = useState([]);
  const [showImg, setShowImg] = useState('');

  const addImage = (img) => {
    setGaleriaFabricada([...galeriaFabricada, img]);
  };

  const deleteFirst = () => {
    setGaleriaFabricada(galeriaFabricada.slice(1));
  };
  const deleteLast = () => {
    setGaleriaFabricada(galeriaFabricada.slice(0, -1));
  };

  return (
    <main>
      <h1>Galeria de fotos de montaña</h1>
      <hr />
      <div>
        {galeria.map((elem, index) => {
          return (
            <img
              src={`/images/mountain/${elem}.jpg`}
              key={index}
              alt="montaña"
              className="foto"
              onClick={() => addImage(`/images/mountain/${elem}.jpg`)}
            />
          );
        })}
      </div>
      <h2>Fotos seleccionadas</h2>
      <div>
        {galeriaFabricada.map((img, index) => (
          <img
            src={img}
            key={index}
            alt="seleccionada"
            className="foto"
            onClick={() => setShowImg(`${index}.jpg`)}
          />
        ))}
      </div>
      <div className="botones-galeria">
        <button onClick={deleteFirst}>Eliminar primera</button>
        <button onClick={deleteLast}>Eliminar ultima</button>
      </div>
      <div className="centrar-imagen">
        <img src={`/images/mountain/${showImg}`} className="imagen" alt="" />
      </div>
    </main>
  );
};
