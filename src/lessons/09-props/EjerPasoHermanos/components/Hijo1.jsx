import React from 'react';

export const Hijo1 = ({ handleChange, register }) => {
  return (
    <div className="hijo">
      <h3>Formulario 1</h3>
      <label htmlFor="">Nombre:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={register.name}
      />
      <br />
      <label htmlFor="">Email:</label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
        value={register.email}
      />
      <br />
      <label htmlFor="">Password:</label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={register.password}
      />
    </div>
  );
};
