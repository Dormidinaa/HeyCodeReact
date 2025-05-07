import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FruitsCard = ({ image, name, id }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`./images/frutas/${image}`} />
      <Card.Body>
        <Link to={`/fruitList/${id}`} style={{ textDecoration: 'none' }}>
          <Button variant="primary">{name}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
