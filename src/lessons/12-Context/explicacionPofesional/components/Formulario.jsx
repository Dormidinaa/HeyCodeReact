import React, { useContext, useState } from 'react';
import AppContext from '../context/ContextProvider';

const initialValue = {
  nombre: '',
  apellidos: '',
  email: '',
};

export const Formulario = () => {
  const [register, setRegister] = useState(initialValue);

  const { setUser } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const onSubmit = () => {
    setRegister(initialValue);
    setUser(register);
  };

  console.log(register);

  return (
    <div>
      <h2>Formulario</h2>
      <div>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          value={register.nombre}
        />
      </div>
      <div>
        <label htmlFor="">Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          onChange={handleChange}
          value={register.apellidos}
        />
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={register.email}
        />
      </div>
      <button onClick={onSubmit}>Aceptar</button>
    </div>
  );
};
