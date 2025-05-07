import axios from 'axios';
import React, { useEffect } from 'react';

export const AuthApp = () => {
  useEffect(() => {
    axios
      .get('http://localhost:4000/')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>AuthApp</div>;
};
