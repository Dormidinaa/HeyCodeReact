import React from 'react';
import { Button } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';

export const Portada = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h2>mi periódico</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a
      perferendis impedit atque ex, repellendus blanditiis maxime modi laborum
      quam quis repellat quae ad corporis, reprehenderit saepe, nisi in eum sit
      porro ullam ab. Voluptate atque, esse unde quia alias quae placeat
      asperiores consectetur tempora quaerat mollitia quam molestias corrupti!
      <div>
        <Button onClick={() => navigate('/portada')}>Nacional</Button>
        <Button onClick={() => navigate('/portada/internacional')}>
          Internacional
        </Button>
        <Button onClick={() => navigate('/portada/gastronomia')}>
          Gastronomia
        </Button>
      </div>
      <hr />
      <Outlet />
    </section>
  );
};
