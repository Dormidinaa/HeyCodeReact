import React, { useContext, useEffect } from 'react';
import AppContext from '../context/ContextProvider';

export const EditForm = ({ setShowEditForm }) => {
  const { user, setUser, register, setRegister } = useContext(AppContext);

  useEffect(() => {
    setRegister(user);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onUpdate = () => {
    setUser(register);
    setShowEditForm(false);
    localStorage.setItem('usuario', JSON.stringify(register));
  };

  return (
    <div className="d-flex flex-column w-25 border border-black rounded p-5 justify-content-center align-items-center">
      <h2>Edit Login</h2>
      <input
        type="text"
        placeholder="usuario"
        name="name"
        value={register.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="contraseña"
        name="password"
        value={register.password}
        onChange={handleChange}
      />
      <button className="mt-3" onClick={onUpdate}>
        Actualizar
      </button>
      <button onClick={() => setShowEditForm(false)}>Cancelar</button>
    </div>
  );
};
