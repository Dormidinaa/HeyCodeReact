import React from 'react';
import { fruits } from '../../data';
import { FruitsCard } from '../../components/FruitsCard/FruitsCard';
import { Container, Row, Col } from 'react-bootstrap';

export const FruitList = () => {
  return (
    <div>
      <h2>Lista de Frutas</h2>
      <Container>
        <Row>
          {fruits.map((elem) => {
            return (
              <FruitsCard
                key={elem.id}
                id={elem.id}
                image={elem.image}
                name={elem.name}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
