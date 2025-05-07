import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { panData } from '../data';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pan, setPan] = useState();
  useEffect(() => {
    if (panData) {
      setPan(panData.find((e) => e.id === parseInt(id)));
    }
  }, [id]);

  console.log(pan);

  // let bread = panData.filter((e) => e.id === parseInt(id))[0];

  return (
    <div>
      <h1>Estamos en el Pan {id}</h1>
      <hr />

      <div className="d-flex justify-content-center">
        <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/images/pan/${pan?.image}`} />
            <Card.Body>
              <Card.Title>{pan?.name}</Card.Title>
              <Card.Text>{pan?.price}€</Card.Text>
              <Button variant="primary" onClick={() => navigate(`/products`)}>
                Volver
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
