import React from 'react';
//importemos el array de frutas
import { fruits } from './data';
import { CardFruit } from './components/CardFruit';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export const FrutasApp = () => {
  const [frutas, setFrutas] = useState(fruits);

  return (
    <main>
      <h2 className="text-center my-5">LA FRUTERIA DE ELI</h2>
      <Row className="d-flex justify-content-center">
        {frutas.map((elem) => {
          return (
            <Col className="d-flex justify-content-center">
              <CardFruit key={elem.id} elem={elem} />
            </Col>
          );
        })}
      </Row>
    </main>
  );
};
