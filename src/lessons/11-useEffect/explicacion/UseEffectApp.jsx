import React from 'react';
import { Hijo } from './components/Hijo';
import { useState, useEffect } from 'react';

export const UseEffectApp = () => {
  const [show, setShow] = useState(false);
  const [cont, setCont] = useState(1);
  const [user, setUser] = useState();

  //cuando montes el componente por primera vez haz una llamada base de datos 2 seg y seteame nombre
  // let bdnombre = 'Elisama';
  useEffect(() => {
    // console.log('Llamo de base de datos al usuario ' + cont);
    setUser({ nombre: 'Elisama' });
  }, []);

  // console.log('show', show);
  // console.log('Me renderizo');

  return (
    <div>
      <h1>UseEffectApp</h1>
      <hr />
      <h3>
        hook: funciones que sirven para manejar estado, nos las puede dar React
        o cualquier librería o podemos hacernuestros propios hooks
      </h3>
      <h3>
        Ejemplos de hooks que nos da React: useState, useEffect, useRef,
        useMemo, useId
      </h3>
      <h4>Normas de los hooks</h4>
      <p>1.- Solo se puede usar en functional Components</p>
      <p>2.- Todos empiezan por use</p>
      <p>
        3.- Tienen que ser invocadas dentro de un componente de tipo funcional y
        en el nivel más superior (nunca dentro de if, bucles)
      </p>
      <hr />
      <h2>Ciclo de vida</h2>

      <p>1.- Montaje</p>
      <p>2.- Actualización</p>
      <p>3.- Desmontaje</p>
      <h2>useEffect</h2>
      <p>
        Es un hook que nos ayuda a manejar estado en funcion del momento del
        ciclo de vida de un componente
      </p>

      <button onClick={() => setShow(!show)}>Abrir/Cerrar</button>
      <button onClick={() => setCont(cont + 1)}>+1</button>
      <p>contador: {cont} </p>
      <p>{user && user.nombre}</p>
      {show && <Hijo />}
    </div>
  );
};
