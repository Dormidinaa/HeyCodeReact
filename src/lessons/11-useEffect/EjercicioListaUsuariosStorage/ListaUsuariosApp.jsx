import React, { useState, useEffect } from 'react';

const initialValue = {
  name: '',
  lastname: '',
  email: '',
};

export const ListaUsuariosApp = () => {
  const [userArray, setUserArray] = useState([]);
  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    const listaUsuarios = localStorage.getItem('userArray');
    setUserArray(JSON.parse(listaUsuarios));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitUser = () => {
    localStorage.setItem('userArray', JSON.stringify([...userArray, user]));
    setUserArray([...userArray, user]);
    setUser(initialValue);
  };

  console.log(userArray);

  return (
    <div>
      <h1>Lista de usuarios en Storage</h1>
      <hr />
      <div className="d-flex flex-column w-25">
        <p>Localstorage</p>
        <label htmlFor="">Nombre:</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={user.name}
        />
        <label htmlFor="">Apellidos:</label>
        <input
          type="text"
          onChange={handleChange}
          name="lastname"
          value={user.lastname}
        />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          onChange={handleChange}
          name="email"
          value={user.email}
        />
        <button className="mt-2" onClick={submitUser}>
          Aceptar
        </button>
      </div>

      <h2>Usuarios</h2>
      <ul>
        {/* {userArray.map((elem, index) => {
          return (
            <li key={index}>
              {elem.name} {elem.lastname} {elem.email}
            </li>
          );
        })} */}
      </ul>
    </div>
  );
};
