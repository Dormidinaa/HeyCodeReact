import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const NavbarApp = ({ user, setUser, setToken }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    // localStorage.removeItem("token");
    setUser();
    setToken();
    navigate('/');
  };
  return (
    <nav className="d-flex gap-3">
      <Button onClick={() => navigate('/')}>Home</Button>
      {user?.type === 0 && (
        <Button onClick={() => navigate('/user')}>Muro</Button>
      )}
      {user?.type === 1 && (
        <Button onClick={() => navigate('/admin')}>Panel de Control</Button>
      )}
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <div>
          <Button onClick={() => navigate('/register')}>Register</Button>
          <Button onClick={() => navigate('/login')}>Login</Button>
        </div>
      )}
    </nav>
  );
};
