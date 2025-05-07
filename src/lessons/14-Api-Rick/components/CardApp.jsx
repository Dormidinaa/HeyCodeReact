import React from 'react';
import './cardApp.css';
export const CardApp = ({ data, changeCharacter }) => {
  return (
    <div className="card-app">
      <p>{data.name}</p>
      <img src={data.image} alt="" onClick={() => changeCharacter(data)} />
    </div>
  );
};
