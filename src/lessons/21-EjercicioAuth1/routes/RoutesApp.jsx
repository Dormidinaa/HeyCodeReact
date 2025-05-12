import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavbarApp } from '../components/NavbarApp';
import { Home } from '../pages/Home/Home';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';

export const RoutesApp = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  console.log('USER GLOBAL', user);
  console.log('TOKEN GLOBAL', token);

  return (
    <>
      <NavbarApp user={user} setUser={setUser} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} setToken={setToken} />}
        />
      </Routes>
    </>
  );
};
