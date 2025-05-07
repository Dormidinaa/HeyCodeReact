import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import './style.css';

export const UseRefApp = () => {
  const [user, setUser] = useState();
  const refInputNombre = useRef();
  const refInputEmail = useRef();
  const refInputPassword = useRef();
  const refForm = useRef();

  useEffect(() => {
    refInputNombre.current.focus();
  }, []);

  const onSubmit = () => {
    setUser({
      nombre: refInputNombre.current.value,
      email: refInputEmail.current.value,
      password: refInputPassword.current.value,
    });
  };

  const resize = () => {
    refForm.current.style.width = '900px';
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1>UseRefApp</h1>
      <hr />
      <h2>
        Es un hook que nos permite modificar de manera directa el dom sin
        re-renderizacion
      </h2>
      <div>
        <h3>User</h3>
        <hr />
        <p>{user?.nombre}</p>
        <p>{user?.email}</p>
        <p>{user?.password}</p>
      </div>
      <form ref={refForm} className="d-flex flex-column gap-2">
        <h2>Registro</h2>
        <div>
          <label>Nombre</label>
          <input ref={refInputNombre} type="text" />
        </div>
        <div>
          <label>Email</label>
          <input ref={refInputEmail} type="text" />
        </div>
        <div>
          <label>Password</label>
          <input ref={refInputPassword} type="text" />
        </div>
        <Button onClick={onSubmit}>Aceptar</Button>
        <Button onClick={resize}>Cambiar</Button>
      </form>
    </div>
  );
};
