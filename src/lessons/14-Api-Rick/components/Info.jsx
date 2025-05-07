import React from 'react';
import './info.css';

export const Info = ({ dataInfo }) => {
  return (
    <div className="info">
      <p>Nombre: {dataInfo?.name}</p>
      <p>Género: {dataInfo?.gender}</p>
      <img src={dataInfo?.image} alt="" />
    </div>
  );
};
