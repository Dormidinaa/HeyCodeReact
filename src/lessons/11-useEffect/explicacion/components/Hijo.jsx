import React from 'react';
import { useEffect, useState } from 'react';

export const Hijo = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const currentWidth = () => {
      const widthPantalla = document.body.clientWidth;
      console.log(widthPantalla);
      setWidth(widthPantalla);
    };
    window.addEventListener('resize', currentWidth);
    return () => {
      window.removeEventListener('resize', currentWidth);
    };
  }, []);

  return (
    <div>
      <p>Hijo</p>
      <h1>Pantalla: {width}</h1>
    </div>
  );
};
