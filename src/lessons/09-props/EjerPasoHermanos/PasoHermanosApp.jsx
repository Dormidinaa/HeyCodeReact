import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Hijo1 } from './components/hijo1';
import { Hijo2 } from './components/hijo2';
import './pasoHermanos.css';
import { useState } from 'react';

const user = {
  name: '',
  email: '',
  password: '',
};

export const PasoHermanosApp = () => {
  const [register, setRegister] = useState(user);
  const [show, setShow] = useState(true);

  const showData = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const clean = () => {
    setRegister({ name: '', email: '', password: '' });
  };

  return (
    <main>
      <Container className="pt-5">
        <h1>EjerPasoHermanos</h1>
        <hr />
        <Row>
          <Col>
            <Hijo1 handleChange={handleChange} register={register} />
          </Col>
          <Col>
            <Hijo2 register={register} show={show} />
          </Col>
        </Row>
        <p>Estos botones están en el padre</p>
        <button className="mx-3" onClick={showData}>
          Ver/Ocultar datos en la card
        </button>
        <button onClick={clean}>Limpiar Campos</button>
      </Container>
    </main>
  );
};
