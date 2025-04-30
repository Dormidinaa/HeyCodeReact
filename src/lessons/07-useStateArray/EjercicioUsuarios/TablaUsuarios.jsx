import React from 'react';
import './UsuariosApp.css';
import { useState } from 'react';

export const TablaUsuarios = () => {
  const [usuariosApp, setUsuariosApp] = useState([]);
  const [user, setUser] = useState('');

  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const addUser = () => {
    setUsuariosApp([...usuariosApp, user]);
  };
  const deleteUser = (index) => {
    setUsuariosApp(usuariosApp.filter((elem, id) => id !== index));
    //https://www.alextomas.com/blog/cinco-formas-eliminar-elementos-array-javascript/
  };

  return (
    <>
      <h2>Tabla de clientes</h2>
      <hr />
      <div className="tabla">
        <input type="text" onChange={handleChange} value={user} />
        <button onClick={addUser}>Añadir</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>BORRAR</th>
            </tr>
          </thead>
          <tbody>
            {usuariosApp.map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem}</td>
                  <td>
                    <button onClick={() => deleteUser(index)}>Eliminar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
