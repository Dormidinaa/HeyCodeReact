import React, { useState } from 'react';
import { NavbarComponent } from './components/NavbarComponent';
import { ModalComponent } from './components/ModalComponent';
import { Table } from 'react-bootstrap';

const initialValue = {
  name: '',
  lastname: '',
  email: '',
  password: '',
};

export const ModalApp = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(initialValue);
  const [arrayUser, setArrayUser] = useState([]);

  console.log(arrayUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleClose = () => {
    setUser(initialValue);
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const addUserList = () => {
    setArrayUser([...arrayUser, user]);
    handleClose();
  };
  return (
    <>
      <NavbarComponent handleOpen={handleOpen} />
      <h1 className="text-center mt-5">Formulario en Modal</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {arrayUser.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.lastname}</td>
                <td>{elem.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <h2 className="text-center mt-5">Filtrados</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>

      <ModalComponent
        handleClose={handleClose}
        show={show}
        handleChange={handleChange}
        user={user}
        addUserList={addUserList}
      />
    </>
  );
};
