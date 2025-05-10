import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { NavbarApp } from '../components/NavbarApp';
import { User } from '../pages/User/User';
import { Admin } from '../pages/Admin/Admin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RoutesApp = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    let tokenLS = localStorage.getItem('token');
    if (tokenLS) {
      const getUser = async () => {
        let res = await axios.get('http://localhost:4000/getUser', {
          headers: { Authorization: `bearer ${tokenLS}` },
        });
        if (res.data.type === 0) {
          navigate('/user');
        }
        if (res.data.type === 1) {
          navigate('/admin');
        }
        setUser(res.data);
        setToken(tokenLS);
      };

      getUser();
    }
  }, []);

  console.log('user global', user);
  console.log('token global', token);

  return (
    <>
      <NavbarApp user={user} setUser={setUser} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && (
          <Route
            path="/login"
            element={<Login setToken={setToken} setUser={setUser} />}
          />
        )}
        {!user && <Route path="/register" element={<Register />} />}
        {user?.type === 0 && <Route path="/user" element={<User />} />}
        {user?.type === 1 && <Route path="/admin" element={<Admin />} />}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};
