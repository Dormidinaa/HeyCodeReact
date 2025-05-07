import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarPan = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Productos
          </Nav.Link>
          <Nav.Link as={Link} to="/offers">
            Ofertas
          </Nav.Link>
          <Nav.Link as={Link} to="/tips">
            Consejos
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
