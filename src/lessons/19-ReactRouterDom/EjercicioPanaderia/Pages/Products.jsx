import React, { useState, useEffect } from 'react';
import { panData } from '../data';
import { Container, Row, Col } from 'react-bootstrap';
import { PanCard } from '../components/PanCard';
export const Products = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(panData);
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Products</h1>
      <hr />
      <Container>
        <Row className="gap-3">
          {data?.map((elem) => {
            return (
              <Col key={elem.id}>
                <PanCard elem={elem} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
