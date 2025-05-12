import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const initialValue = {
  email: '',
  password: '',
};

export const Login = ({ setUser, setToken }) => {
  const [msg, setMsg] = useState('');
  const [loginData, setLoginData] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:4000/login',
        loginData
      );
      const tokenBack = response.data.token;

      const responseGetUser = await axios.get('http://localhost:4000/getUser', {
        headers: { Authorization: `bearer ${tokenBack}` },
      });

      let userBack = responseGetUser.data;

      localStorage.setItem('token', tokenBack);
      setToken(tokenBack);
      setUser(userBack);

      if (userBack.type === 0) navigate('/user');
      if (userBack.type === 1) navigate('/admin');
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <form>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={loginData.email}
            />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input
              type="text"
              name="password"
              onChange={handleChange}
              value={loginData.password}
            />
          </div>
          <p>
            No estás registrado? <Link to={'/register'}>Regístrate aquí!</Link>
          </p>
          <Button onClick={onSubmit}>Login</Button>
          <p style={{ color: 'red' }}>{msg}</p>
        </form>
      </div>
    </div>
  );
};
