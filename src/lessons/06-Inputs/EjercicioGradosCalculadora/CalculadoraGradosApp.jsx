import React from 'react';
import { useState } from 'react';
import './CalculadoraGradosApp.css';

export const CalculadoraGradosApp = () => {
  // CALCULADORA
  const [operador1, setOperador1] = useState('');
  const [operador2, setOperador2] = useState('');
  const [symbol, setSymbol] = useState('+');
  const [calcular, setCalcular] = useState('');

  //CONVERSOR
  const [conversion, setConversion] = useState('ºC a ºF');
  const [numero, setNumero] = useState('');
  const [calcularConversor, setCalcularConversor] = useState('');

  //CALCULADORA
  const limpiar = (e) => {
    e.preventDefault();
    setOperador1('');
    setOperador2('');
    setSymbol('+');
    setCalcular('');
  };

  const resultado = (e) => {
    e.preventDefault();
    const num1 = parseFloat(operador1);
    const num2 = parseFloat(operador2);
    let res = 0;

    switch (symbol) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case '*':
        res = num1 * num2;
        break;
      case '/':
        res = num1 / num2;
        break;
    }

    setCalcular(res);
  };

  const handleChange1 = (e) => {
    setOperador1(e.target.value);
  };

  const handleChange2 = (e) => {
    setOperador2(e.target.value);
  };

  const changeTo1 = (e) => {
    e.preventDefault();
    setSymbol('+');
  };
  const changeTo2 = (e) => {
    e.preventDefault();
    setSymbol('-');
  };
  const changeTo3 = (e) => {
    e.preventDefault();
    setSymbol('*');
  };
  const changeTo4 = (e) => {
    e.preventDefault();
    setSymbol('/');
  };

  //CONVERSOR

  const calculoConversor = (e) => {
    e.preventDefault();
    let num = parseFloat(numero);
    let res = 0;

    switch (conversion) {
      case 'ºC a ºF':
        res = (num * 9) / 5 + 32;
        break;
      case 'ºC a ºK':
        res = num + 273.15;
        break;
      case 'ºF a ºC':
        res = ((num - 32) * 5) / 9;
        break;
      case 'ºF a ºK':
        res = ((num - 32) * 5) / 9 + 273.15;
        break;
      case 'ºK a ºC':
        res = num - 273.15;
        break;
      case 'ºK a ºF':
        res = ((num - 273.15) * 9) / 5 + 32;
        break;
    }
    setCalcularConversor(res);
  };

  const limpiarConversor = (e) => {
    e.preventDefault();
    setConversion('ºC a ºF');
    setNumero('');
    setCalcularConversor('');
  };

  const changeToCF = (e) => {
    e.preventDefault();
    setConversion('ºC a ºF');
  };
  const changeToCK = (e) => {
    e.preventDefault();
    setConversion('ºC a ºK');
  };
  const changeToFC = (e) => {
    e.preventDefault();
    setConversion('ºF a ºC');
  };
  const changeToFK = (e) => {
    e.preventDefault();
    setConversion('ºF a ºK');
  };
  const changeToKC = (e) => {
    e.preventDefault();
    setConversion('ºK a ºC');
  };
  const changeToKF = (e) => {
    e.preventDefault();
    setConversion('ºK a ºF');
  };
  const handleChangeConversor = (e) => {
    e.preventDefault();
    setNumero(e.target.value);
  };

  return (
    <main>
      <div className="calculadora-frame">
        <h1>Calculadora</h1>
        <hr />
        <form>
          <div className="zona-operaciones">
            <input type="number" onChange={handleChange1} value={operador1} />
            <p>{symbol}</p>
            <input type="number" onChange={handleChange2} value={operador2} />
          </div>
          <hr />
          <div className="operadores">
            <button onClick={changeTo1}>+</button>
            <button onClick={changeTo2}>-</button>
            <button onClick={changeTo3}>*</button>
            <button onClick={changeTo4}>/</button>
          </div>
          <div className="operadores">
            <button onClick={resultado}>Calcular</button>
            <button onClick={limpiar}>C</button>
          </div>
        </form>
        <hr />
        <br />
        <br />
        <h2>Resultado: {calcular}</h2>
      </div>
      <div className="conversor-frame">
        <h1>Conversor</h1>
        <hr />
        <form>
          <div className="ubicar-input">
            <label htmlFor="">{conversion}</label>
            <input
              type="number"
              onChange={handleChangeConversor}
              value={numero}
            />
          </div>
          <div className="conversor-botones">
            <button onClick={changeToCF}>ºC a ºF</button>
            <button onClick={changeToCK}>ºC a ºK</button>
            <button onClick={changeToFC}>ºF a ºC</button>
            <button onClick={changeToFK}>ºF a ºK</button>
            <button onClick={changeToKC}>ºK a ºC</button>
            <button onClick={changeToKF}>ºK a ºF</button>
          </div>
          <br />
          <div>
            <button onClick={calculoConversor}>Calcular</button>
            <button onClick={limpiarConversor}>Limpiar</button>
          </div>
          <br />
          <p>Resultado conversión: {calcularConversor}</p>
        </form>
      </div>
    </main>
  );
};
