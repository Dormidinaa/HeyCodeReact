import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FormLoginApp } from './FormLoginApp';
import AppContext from '../context/ContextProvider';
import { EditForm } from './EditForm';

export const Home = () => {
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    setUser(usuario);
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const { user, setUser, initialValue, setRegister } = useContext(AppContext);

  const open = () => {
    setShowForm(true);
  };

  const close = () => {
    setUser();
    setRegister(initialValue);
    localStorage.removeItem('usuario');
  };
  return (
    <div>
      <nav className="py-3 bg-body-secondary d-flex justify-content-between">
        <div className="d-flex flex-column">
          <p>{user?.name}</p>
          <p>{user?.password}</p>
        </div>
        {user && (
          <button onClick={() => setShowEditForm(!showEditForm)}>
            Editar Perfil
          </button>
        )}

        {user ? (
          <button onClick={close}>Logout</button>
        ) : (
          <button onClick={open}>Login</button>
        )}
      </nav>
      <h1 className="text-center mt-5">EjercicioCasaContext</h1>
      {showForm && (
        <div className="d-flex justify-content-center pt-5">
          <FormLoginApp setShowForm={setShowForm} />
        </div>
      )}

      {showEditForm && (
        <div className="d-flex justify-content-center pt-5">
          <EditForm setShowEditForm={setShowEditForm} />
        </div>
      )}
    </div>
  );
};
