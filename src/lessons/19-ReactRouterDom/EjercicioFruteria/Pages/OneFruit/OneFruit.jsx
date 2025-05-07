import React from 'react';
import Card from 'react-bootstrap/Card';
import { fruits } from '../../data';
import { useParams } from 'react-router-dom';

export const OneFruit = () => {
  const { fruitId } = useParams();
  const fruit = fruits.find((f) => f.id === parseInt(fruitId));
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/images/frutas/${fruit.image}`} />
      <Card.Body>
        <Card.Text>{fruit.name}</Card.Text>
      </Card.Body>
    </Card>
  );
};
