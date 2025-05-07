import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const PanCard = ({ elem }) => {
  console.log(elem);

  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`./images/pan/${elem.image}`} />
      <Card.Body>
        <Card.Title>{elem.name}</Card.Title>
        <Card.Text>{elem.price}€</Card.Text>
        <Button
          variant="primary"
          onClick={() => navigate(`/product/${elem.id}`)}
        >
          Más detalles!
        </Button>
      </Card.Body>
    </Card>
  );
};
