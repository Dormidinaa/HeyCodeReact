import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = ({
  handleOpen,
  handleSearchChange,
  handleFilterChange,
  handleFilterClick, // nuevo
}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Check
              type="radio"
              label="Name"
              name="radioGroup"
              id="radio1"
              className="me-3"
              value="name"
              onChange={handleFilterChange}
              defaultChecked
            />
            <Form.Check
              type="radio"
              label="Surname"
              name="radioGroup"
              id="radio2"
              className="me-3"
              value="lastname"
              onChange={handleFilterChange}
            />
            <Form.Check
              type="radio"
              label="Email"
              name="radioGroup"
              id="radio3"
              className="me-3"
              value="email"
              onChange={handleFilterChange}
            />
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" onClick={handleFilterClick}>
              Filtrar
            </Button>
            <Button variant="outline-success" onClick={handleOpen}>
              Registrar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
