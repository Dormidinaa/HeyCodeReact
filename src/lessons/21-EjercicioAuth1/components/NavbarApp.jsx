import { Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavbarApp = () => {
  const navigate = useNavigate();
  return (
    <nav className="d-flex gap-3 mt-2 mx-5">
      <Button onClick={() => navigate('/')}>Home</Button>
      <Button onClick={() => navigate('/register')}>Register</Button>
      <Button onClick={() => navigate('/login')}>Login</Button>
    </nav>
  );
};
