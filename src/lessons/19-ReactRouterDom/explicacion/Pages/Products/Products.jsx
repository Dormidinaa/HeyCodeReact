import React from 'react';
import { Link } from 'react-router-dom';

export const Products = () => {
  return (
    <div>
      <h2>Productos</h2>
      <div>
        <Link to="/oneProduct/1">
          <h2>Producto 1</h2>
        </Link>
      </div>
      <div>
        <Link to="/oneProduct/2">
          <h2>Producto 2</h2>
        </Link>
      </div>
    </div>
  );
};
