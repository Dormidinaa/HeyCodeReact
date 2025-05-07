import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate, Outlet } from 'react-router-dom';

export const Tips = () => {
  const navigate = useNavigate();

  return (
    <Container className="vh-100 mt-3">
      <Row>
        <Col
          md={3}
          className="d-flex flex-column align-items-start justify-content-center"
        >
          <Button onClick={() => navigate('1')} className="mb-2">
            Conservar
          </Button>
          <Button onClick={() => navigate('2')} className="mb-2">
            Recetas
          </Button>
          <Button onClick={() => navigate('3')} className="mb-2">
            Bocadillos
          </Button>
        </Col>
        <Col md={9}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
