import React, { useRef, useState } from 'react';

let cont = 16;

export const EjerClaseUseRef = () => {
  const [texts, setTexts] = useState();
  const refTexto1 = useRef();
  const refTexto2 = useRef();
  const refSize = useRef();
  const color = useRef();

  const onSubmit = () => {
    setTexts({
      text1: refTexto1.current.value,
      text2: refTexto2.current.value,
    });
  };
  const fontSizeMax = () => {
    cont += 1;
    refSize.current.style.fontSize = `${cont}px`;
  };
  const fontSizeMin = () => {
    cont -= 1;
    refSize.current.style.fontSize = `${cont}px`;
  };
  const darkTheme = () => {
    color.current.style.backgroundColor = 'black';
    color.current.style.color = 'white';
  };
  const lightTheme = () => {
    color.current.style.backgroundColor = 'white';
    color.current.style.color = 'black';
  };

  return (
    <div>
      <h1>EjerClaseUseRef</h1>
      <hr />

      <div ref={color} className="w-50">
        <input type="text" ref={refTexto1} />
        <input type="text" ref={refTexto2} />
        <p ref={refSize}>Texto: {texts?.text1}</p>
        <p>Texto2: {texts?.text2}</p>
        <button onClick={onSubmit}>Aceptar</button>
        <button onClick={fontSizeMax}>Aumentar</button>
        <button onClick={fontSizeMin}>Disminuir</button>
        <button onClick={darkTheme}>Oscuro</button>
        <button onClick={lightTheme}>Claro</button>
      </div>
    </div>
  );
};
