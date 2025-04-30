import React from 'react';
import { Card } from 'react-bootstrap';

export const CardFruit = ({ elem }) => {
  const { name, image, kcal, agua, hc, fibra, grasa, prot } = elem;
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img
        variant="top"
        // ASI SE MUESTRA UNA IMAGEN POR DEFECTO SI NO VIENE IMAGEN
        src={`./images/frutas/${image ? image : 'guitarraimg.jpg'}`}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Kcal:</strong> {kcal} <br />
          <strong>Agua:</strong> {agua} % <br />
          <strong>HC:</strong> {hc} g <br />
          <strong>Fibra:</strong> {fibra} g <br />
          <strong>Grasa:</strong> {grasa} g <br />
          <strong>Proteínas:</strong> {prot} g
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
