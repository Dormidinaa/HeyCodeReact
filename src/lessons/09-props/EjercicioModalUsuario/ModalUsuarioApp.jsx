import React from 'react';
import { Navbar, Container, Button, Row } from 'react-bootstrap';
import './modalUsuario.css';
import { CompletaPerfil1 } from './components/CompletaPerfil1';
import { CompletarPerfil2 } from './components/CompletarPerfil2';
import { User } from './components/user';
import { useState } from 'react';

const user = {
  name: '',
  lastname: '',
  address: '',
  city: '',
};

export const ModalUsuarioApp = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showRegister2, setShowRegister2] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [register, setRegister] = useState(user);
  const [button, setButton] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  console.log(register);

  return (
    <main className="vh-100">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Button>Imagen usuario</Button>
          <Button onClick={() => setShowRegister(!showRegister)}>
            {button ? 'Completa Perfil' : 'Editar Perfil'}
          </Button>
          <Button onClick={() => setShowUser(!showUser)}>User</Button>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-center margin-row">
          <div className="w-50 bg-success p-5 text-center">
            <h1 className="h1-main">
              Las siete vidas de un gato y como las vive
            </h1>
          </div>
        </Row>
      </Container>
      {showRegister && (
        <div className="d-flex justify-content-center align-items-center vh-100 fondo1 superpuesto">
          <CompletaPerfil1
            setShowRegister={setShowRegister}
            setShowRegister2={setShowRegister2}
            user={register}
            handleChange={handleChange}
            setButton={setButton}
          />
        </div>
      )}

      {showRegister2 && (
        <div className="d-flex justify-content-center align-items-center vh-100 fondo1 superpuesto">
          <CompletarPerfil2
            setShowRegister={setShowRegister}
            setShowRegister2={setShowRegister2}
            user={register}
            handleChange={handleChange}
            setButton={setButton}
          />
        </div>
      )}

      {showUser && (
        <div className="d-flex justify-content-center align-items-center vh-100 fondo1 superpuesto">
          <User setShowUser={setShowUser} user={register} />
        </div>
      )}
    </main>
  );
};
