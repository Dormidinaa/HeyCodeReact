import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RoutesApp } from './routes/RoutesApp';
import { useState } from 'react';

export const AuthNormalApp = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
};
