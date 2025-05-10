import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const initialValue = {
  email: '',
  password: '',
};

export const Login = ({ setToken, setUser }) => {
  const [loginData, setLoginData] = useState(initialValue);
  const [msg, setMsg] = useState('');

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

      if (userBack.type === 0) {
        navigate('/user');
      }
      if (userBack.type === 1) {
        navigate('/admin');
      }
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.message);
    }
  };

  // console.log(loginData);

  return (
    <div>
      <form>
        <h2>Formulario Login</h2>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <Button onClick={onSubmit}>Login</Button>
        <p style={{ color: 'red' }}>{msg}</p>
        <p>
          No estás registrado?<Link to="/register">Regístrate aquí</Link>
        </p>
      </form>
    </div>
  );
};
