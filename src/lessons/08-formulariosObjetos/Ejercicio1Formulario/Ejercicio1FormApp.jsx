import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const initialValue = {
  nombre: '',
  especie: '',
  raza: '',
  esterelizado: false,
  agresivo: false,
  sexo: 'macho',
};

export const Ejercicio1FormApp = () => {
  const [registro, setRegistro] = useState(initialValue);
  const [resultado, setResultado] = useState(false);
  console.log(registro);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'text' || type === 'radio') {
      setRegistro({ ...registro, [name]: value });
    } else if (type === 'checkbox') {
      setRegistro({ ...registro, [name]: e.target.checked });
    }
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Form className="w-25 mt-5">
        <h1>Registro Perros</h1>

        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese nombre"
            value={registro.nombre}
            onChange={handleChange}
            name="nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="especie">
          <Form.Label>Especie</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese especie"
            value={registro.especie}
            onChange={handleChange}
            name="especie"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="raza">
          <Form.Label>Raza</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese raza"
            value={registro.raza}
            onChange={handleChange}
            name="raza"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="esterelizado">
          <Form.Check
            type="checkbox"
            label="Esterelizado"
            checked={registro.esterelizado}
            onChange={handleChange}
            name="esterelizado"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="agresivo">
          <Form.Check
            type="checkbox"
            label="Agresivo"
            checked={registro.agresivo}
            onChange={handleChange}
            name="agresivo"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Macho"
              name="sexo"
              value="macho"
              checked={registro.sexo === 'macho'}
              onChange={handleChange}
            />
            <Form.Check
              inline
              type="radio"
              label="Hembra"
              name="sexo"
              value="hembra"
              checked={registro.sexo === 'hembra'}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Button variant="primary" onClick={() => setResultado(true)}>
          Submit
        </Button>
      </Form>
      {resultado === true && (
        <div className="d-flex flex-column align-items-center mt-5 text">
          <h3>Nombre: {registro.nombre}</h3>
          <h3>Especie: {registro.especie}</h3>
          <h3>Raza: {registro.raza}</h3>
          <h3>Esterelizado: {registro.esterelizado ? 'Si' : 'No'}</h3>
          <h3>Agresivo: {registro.agresivo ? 'Si' : 'No'}</h3>
          <h3>Sexo: {registro.sexo}</h3>
        </div>
      )}
    </Row>
  );
};
