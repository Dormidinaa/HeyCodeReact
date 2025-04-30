import React from 'react';
import './style.css';
import { useState } from 'react';

export const Lista = () => {
  const [producto, setProducto] = useState('');
  const [productos, setProductos] = useState([]);

  console.log(productos);

  const addProduct = (e) => {
    e.preventDefault();
    //añade el estado producto al array productos
    //NORMA FUNDAMENTAL DEL ESTADO: EL ESTADO ES INMUTABLE!!!!!!!
    //esto sería haciendo copia a mano con for
    // let arr = [];
    // for(let i = 0;i<productos.length;i++){
    //     arr.push(productos[i])
    // }
    // arr.push(producto)

    //spread operator ... SON TUS MEJORES AMIGOS Y HACEN COPIAS DE ARRAYS
    setProductos([...productos, producto]);
    setProducto('');
  };

  const handleChange = (e) => {
    setProducto(e.target.value);
  };

  const borrar = () => {
    //---BORRAR ULTIMO---
    //let newArr = productos.slice(productos.length-1)
    let newArr = productos.slice(0, -1);
    setProductos(newArr);
    // setProductos(productos.slice(0, -1))
    // setProductos(productos.filter((elem, index) => index !== productos.length-1 ))

    //BORRAR EL ULTIMO
    // setProductos(productos.filter((elem, id)=> id !== productos.length-1))
    //borrar el primero
    // setProductos(productos.filter((elem, id)=> id !== 0))
  };

  return (
    <div className="lista-ppal">
      <div className="formulario">
        <form>
          <h2>Introduce un producto</h2>
          <div>
            <input type="text" onChange={handleChange} value={producto} />
            <button onClick={addProduct}>Añadir</button>
          </div>
        </form>
        <button onClick={borrar}>borrar</button>
      </div>
      <div className="lista">
        <ul>
          {/* /EL INDEX AQUI ES LA POSICION DEL ELEMENTO DENTRO DEL ARRAY */}
          {productos.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
