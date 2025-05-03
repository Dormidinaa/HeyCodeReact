import React, { useContext } from 'react';
import AppContext from '../context/ContextProvider';

export const FormLoginApp = ({ setShowForm }) => {
  const { setUser, register, setRegister, initialValue } =
    useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = () => {
    setRegister(initialValue);
    setUser(register);
    setShowForm(false);
    localStorage.setItem('usuario', JSON.stringify(register));
  };

  return (
    <div className="d-flex flex-column w-25 border border-black rounded p-5 justify-content-center align-items-center">
      <h2>Formulario Login</h2>
      <input
        type="text"
        placeholder="usuario"
        name="name"
        onChange={handleChange}
        value={register.name}
      />
      <input
        type="text"
        placeholder="contraseña"
        name="password"
        onChange={handleChange}
        value={register.password}
      />
      <button className="mt-3" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};
