import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export const OneProduct = () => {
  const [num, setNum] = useState(0);
  const { id } = useParams();
  let navigate = useNavigate();

  const sumar = () => {
    setNum(num + 1);
    let numTemp = num + 1;
    if (numTemp === 3) {
      navigate('/products');
    }
  };
  return (
    <div>
      <h2>Info de un producto cuyo id es: {id}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis
        vitae quas illo fugit, saepe iusto explicabo voluptatum exercitationem
        optio quidem quos maiores cum nihil facere eveniet! Dignissimos, nam
        optio similique natus odit earum, cum voluptatibus quasi beatae
        cupiditate magni consequuntur vero perspiciatis assumenda ad officia,
        sunt aut excepturi ducimus?
      </p>
      <p>Aqui usamos navegación programática</p>
      <Button onClick={sumar}>Volver despues de tres</Button>
      <Button onClick={() => navigate('/products', { replace: true })}>
        Volver
      </Button>
    </div>
  );
};
