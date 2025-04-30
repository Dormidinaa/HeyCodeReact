import { useState } from 'react';
import './boolean.css';

const users = {
  user1: {
    name: 'Miriam',
    email: 'Miriam@gmail.com',
  },
  user2: {
    name: 'Alexia',
    email: 'Alexia@terra.es',
  },
};

export const BooleanApp = () => {
  const [bool1, setBool1] = useState(null);
  const [bool2, setBool2] = useState(true);
  const [bool3, setBool3] = useState(true);
  const [bool4, setBool4] = useState(true);
  const [bool5, setBool5] = useState(true);

  const { user1, user2 } = users;

  const [usuario, setUsuario] = useState(user1);

  console.log(usuario);
  console.log(bool5);

  const trulearBool1 = () => setBool1(true);
  const falsearBool1 = () => setBool1(false);
  const cambiarBool2 = () => setBool2(!bool2);

  const cambiarUsuario = () => {
    setBool5(!bool5);
    let boolTemp = !bool5;

    if (boolTemp === true) {
      setUsuario(user1);
    } else {
      setUsuario(user2);
    }
  };

  return (
    <>
      <h1>Uso de UseState con booleanos y renderizado condicional</h1>
      <hr />
      <div className="cont">
        <div className="card">
          <h3>card1</h3>
          <p>Cambiar estado booleano</p>
          <p>valor del booleano: {bool1 ? 'true' : 'false'} </p>
          <p>valor del booleano: {`${bool1}`} </p>
          <div className="btn">
            <button onClick={trulearBool1}>Cambiar a true</button>
            <button onClick={falsearBool1}>Cambiar a false</button>
          </div>
        </div>
        <div className="card">
          <h3>card2</h3>
          <h3>cambiar booleano con un solo boton</h3>
          <h3>valor de bool2: {bool2 ? 'existo' : 'no existo'} </h3>
          <button onClick={cambiarBool2}>cambiar bool2</button>
        </div>
        <div className="card">
          <h3>card3</h3>
          <h4>Nombre: {bool3 ? user1.name : user2.name} </h4>
          <h4>Email: {bool3 ? user1.email : user2.email} </h4>
          <button onClick={() => setBool3(!bool3)}>Cambiar de usuario</button>

          {bool3 ? (
            <>
              <h4>Nombre: {user1.name} </h4>
              <h4>Email: {user1.email} </h4>
            </>
          ) : (
            <>
              <h4>Nombre: {user2.name} </h4>
              <h4>Email: {user2.email} </h4>
            </>
          )}
        </div>
        <div className="card">
          <h3>card4</h3>
          <div className="fotos">
            <img
              src="./images/bart.jpg"
              alt=""
              onClick={() => setBool4(true)}
            />
            <img
              src="./images/lisa.jpg"
              alt=""
              onClick={() => setBool4(false)}
            />
          </div>
          <div className="foto">
            {bool4 === true ? (
              <img src="./images/bart.jpg" alt="" />
            ) : (
              <img src="./images/lisa.jpg" alt="" />
            )}
          </div>
        </div>
        <div className="card">
          <h3>card5</h3>
          <h4>Nombre: {usuario.name}</h4>
          <h4>Email: {usuario.email}</h4>
          <button onClick={cambiarUsuario}>Cambiar usuario</button>
        </div>
      </div>
    </>
  );
};
