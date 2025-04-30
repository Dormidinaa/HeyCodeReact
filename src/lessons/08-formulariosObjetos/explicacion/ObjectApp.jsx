import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const initialValue = {
  nombre: '',
  apellidos: '',
  email: '',
  password: '',
};

export const ObjectApp = () => {
  const [register, setRegister] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });

    // COMO ES EL ESTADO??? INMUTABLE
    // Copia del register
    // Manejo dinámico de las propiedades de un objeto
  };

  const onSubmit = () => {
    console.log('Envio los datos al back', register);
  };

  return (
    <Row>
      <Col className="pt-5 d-flex justify-content-center align-items-center">
        <Form className="w-50">
          <h3>Formulario de Registro</h3>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="NameInput">Nombre</Form.Label>
            <Form.Control
              id="nameInput"
              placeholder="Nombre"
              value={register.nombre}
              onChange={handleChange}
              name="nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="lastNameInput">Apellidos</Form.Label>
            <Form.Control
              id="lastNameInput"
              placeholder="Apellidos"
              value={register.apellidos}
              onChange={handleChange}
              name="apellidos"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="EmailInput">Email</Form.Label>
            <Form.Control
              id="EmailInput"
              placeholder="Email"
              value={register.email}
              onChange={handleChange}
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="passwordInput">Password</Form.Label>
            <Form.Control
              id="passwordInput"
              placeholder="Email"
              type="password"
              value={register.password}
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Button variant="danger" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </Col>
      <Col>
        <h1>Adios</h1>
      </Col>
    </Row>
  );
};
